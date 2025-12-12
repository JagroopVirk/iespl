// src/components/modals/PdfViewer.jsx
"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

// ── FA6 Icons ───────────────────────
import {
  FaMagnifyingGlassPlus,
  FaMagnifyingGlassMinus,
  FaArrowsLeftRight, // "Fit width"
  FaExpand,
  FaCompress, // Optional: for exit fullscreen
} from "react-icons/fa6";

export default function PdfViewer({ file = "/pdfFiles/IES-brochure.pdf" }) {
  const containerRef = useRef(null);
  const pdfjsRef = useRef(null);

  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(null);
  const pageRefs = useRef({});
  const [mounted, setMounted] = useState(false); // New: Track client mount

  // ---------------------------------------------------
  // INIT: Load PDF.js + Document
  // ---------------------------------------------------
  useEffect(() => {
    (async () => {
      const pdfjs = await import("pdfjs-dist/build/pdf.mjs");
      pdfjsRef.current = pdfjs;

      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.mjs",
        import.meta.url
      ).toString();

      const loadingTask = pdfjs.getDocument(file);
      const pdf = await loadingTask.promise;

      setPdfDoc(pdf);
      setNumPages(pdf.numPages);

      // Auto-fit scale
      const firstPage = await pdf.getPage(1);
      const viewport = firstPage.getViewport({ scale: 1 });
      const pageWidth = viewport.width;

      // Use clamp logic similar to your .maxwidth
      const maxContainerWidth = Math.min(window.innerWidth * 0.95, 1348);
      const bestScale = maxContainerWidth / pageWidth;

      setScale(bestScale);
    })();
  }, [file]);

  // ---------------------------------------------------
  // RENDER PAGE
  // ---------------------------------------------------
  const renderPage = useCallback(
    async (pageNum) => {
      if (!pdfDoc || !scale) return;

      const canvas = pageRefs.current[pageNum];
      if (!canvas || canvas.dataset.rendered === "true") return;

      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale });
      const ctx = canvas.getContext("2d");
      const ratio = window.devicePixelRatio || 1;

      canvas.width = Math.floor(viewport.width * ratio);
      canvas.height = Math.floor(viewport.height * ratio);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
      canvas.dataset.rendered = "true";

      gsap.fromTo(
        canvas,
        { autoAlpha: 0, y: 25 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }
      );
    },
    [pdfDoc, scale]
  );

  // ---------------------------------------------------
  // LAZY LOADING
  // ---------------------------------------------------
  useEffect(() => {
    if (!numPages) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNum = Number(entry.target.querySelector("canvas")?.dataset.pageNumber);
            if (pageNum) renderPage(pageNum);
          }
        });
      },
      { rootMargin: "600px 0px" }
    );

    // Observe the parent div, not canvas directly (more reliable)
    document.querySelectorAll("[data-page-wrapper]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [numPages, renderPage]);

  // ---------------------------------------------------
  // ZOOM CONTROLS
  // ---------------------------------------------------
  const zoomIn = () => setScale((s) => +(s + 0.2).toFixed(2));
  const zoomOut = () => setScale((s) => Math.max(0.4, +(s - 0.2).toFixed(2)));
  const resetZoom = () => setScale(null); // triggers auto-fit again

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.() ||
        containerRef.current.webkitRequestFullscreen?.();
    } else {
      document.exitFullscreen?.() || document.webkitExitFullscreen?.();
    }
  };

  // Re-render on scale change
  useEffect(() => {
    if (!scale || !numPages) return;

    Object.keys(pageRefs.current).forEach((num) => {
      const canvas = pageRefs.current[num];
      if (canvas) {
        canvas.dataset.rendered = "false";
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      }
    });

    // Trigger re-render of visible pages
    setTimeout(() => {
      document.querySelectorAll("[data-page-wrapper]").forEach((el) => {
        const pageNum = Number(el.querySelector("canvas")?.dataset.pageNumber);
        if (pageNum) renderPage(pageNum);
      });
    }, 100);
  }, [scale, renderPage]);

  // Recalculate scale on window resize (for your clamp behavior)
  useEffect(() => {
    const handleResize = () => {
      if (!pdfDoc || scale !== null) return; // only auto-scale when in "fit" mode

      (async () => {
        const firstPage = await pdfDoc.getPage(1);
        const viewport = firstPage.getViewport({ scale: 1 });
        const pageWidth = viewport.width;
        const maxContainerWidth = Math.min(window.innerWidth * 0.95, 1348);
        const bestScale = maxContainerWidth / pageWidth;
        setScale(bestScale);
      })();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pdfDoc]);

  // NEW: Mount check + Portal toolbar (only creates/renders on client)
  useEffect(() => {
    setMounted(true); // Now safe to access document

    return () => setMounted(false); // Cleanup
  }, []);

  // The portal JSX (only render if mounted)
  const toolbarPortal =
    mounted &&
    createPortal(
      <div className="pointer-events-none fixed inset-0 z-[9999]">
        <div className="pointer-events-auto fixed top-1/2 right-4 flex -translate-y-1/2 flex-col gap-2.5 rounded-2xl border border-gray-300 bg-transparent p-2.5 shadow-2xl backdrop-blur-lg md:right-8 lg:right-12">
          {/* Zoom In */}
          <button
            onClick={zoomIn}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Zoom In"
          >
            <FaMagnifyingGlassPlus className="h-4 w-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={zoomOut}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Zoom Out"
          >
            <FaMagnifyingGlassMinus className="h-4 w-4" />
          </button>

          {/* Fit to Width */}
          <button
            onClick={resetZoom}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Fit to Width"
          >
            <FaArrowsLeftRight className="h-4 w-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Toggle Fullscreen"
          >
            <FaExpand className="h-4 w-4" />
          </button>
        </div>
      </div>,
      document.body
    );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50 py-8">
      {/* This toolbar will ALWAYS be centered on screen, never blocked */}
      {toolbarPortal}

      <div className="mx-auto flex flex-col items-center gap-12 px-4">
        {Array.from({ length: numPages || 8 }, (_, i) => {
          const pageNum = i + 1;
          return (
            <div
              key={pageNum}
              data-page-wrapper // for IntersectionObserver
              className="max-w-clamp-shrink w-full max-w-[1348px]" // your rule
              style={{
                maxWidth: "clamp(280px, 95vw, 1348px)", // Exact match to your .maxwidth
              }}
            >
              <div className="flex justify-center">
                <canvas
                  ref={(el) => (pageRefs.current[pageNum] = el)}
                  data-page-number={pageNum}
                  className="rounded-lg bg-white shadow-2xl ring-1 ring-gray-200"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
