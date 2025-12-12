// src/components/modals/PdfViewer.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

import {
  FaMagnifyingGlassPlus,
  FaMagnifyingGlassMinus,
  FaArrowsLeftRight,
  FaExpand,
  FaCompress,
} from "react-icons/fa6";

import { usePinch, useWheel } from "@use-gesture/react";

export default function PdfViewer({ file = "/pdfFiles/IES-brochure.pdf" }) {
  const containerRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(null);
  const pageRefs = useRef({});
  const [mounted, setMounted] = useState(false);

  const baseScale = useRef(1);
  const lastScale = useRef(1);

  // ———————————————————— INIT PDF + AUTO-FIT ————————————————————
  useEffect(() => {
    (async () => {
      const pdfjs = await import("pdfjs-dist/build/pdf.mjs");
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.mjs",
        import.meta.url
      ).toString();

      const loadingTask = pdfjs.getDocument(file);
      const pdf = await loadingTask.promise;

      setPdfDoc(pdf);
      setNumPages(pdf.numPages);

      const firstPage = await pdf.getPage(1);
      const viewport = firstPage.getViewport({ scale: 1 });
      const pageWidth = viewport.width;

      // FIXED: Use exact clamp like your CSS rule → never overflows
      const maxWidth = Math.min(window.innerWidth * 0.94, 1348); // 94% for padding
      const autoScale = maxWidth / pageWidth;

      baseScale.current = autoScale;
      lastScale.current = autoScale;
      setScale(autoScale);
    })();
  }, [file]);

  // ———————————————————— RENDER PAGE ————————————————————
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
      await page.render({ canvasContext: ctx, viewport }).promise;

      canvas.dataset.rendered = "true";

      gsap.fromTo(
        canvas,
        { autoAlpha: 0, y: 25 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }
      );
    },
    [pdfDoc, scale]
  );

  // ———————————————————— LAZY LOAD ————————————————————
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
      { rootMargin: "600px" }
    );

    document.querySelectorAll("[data-page-wrapper]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [numPages, renderPage]);

  // ———————————————————— ZOOM CONTROLS ————————————————————
  const zoomIn = () => setScale((s) => Math.min(4, +(s * 1.25).toFixed(3)));
  const zoomOut = () => setScale((s) => Math.max(0.5, +(s * 0.8).toFixed(3)));
  const resetZoom = () => {
    setScale(baseScale.current);
    lastScale.current = baseScale.current;
  };

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  // ———————————————————— GESTURES: Pinch + Ctrl+Wheel Only ————————————————————
  const bindPinch = usePinch(
    ({ offset: [s] }) => {
      const newScale = Math.max(0.5, Math.min(4, baseScale.current * s));
      setScale(newScale);
      lastScale.current = newScale;
    },
    { scaleBounds: { min: 0.5, max: 4 }, rubberband: true, pointer: { touch: true } }
  );

  // Only zoom with Ctrl + Wheel (standard behavior)
  const bindWheel = useWheel(
    ({ event, wheeling, memo, offset: [, y] }) => {
      if (!event.ctrlKey && !event.metaKey) return memo; // ← Critical: require Ctrl/Cmd
      if (!wheeling) return memo;

      const delta = y - (memo || y);
      const factor = delta > 0 ? 0.92 : 1.08;
      const newScale = Math.max(0.5, Math.min(4, (scale || baseScale.current) * factor));

      setScale(newScale);
      lastScale.current = newScale;
      return y;
    },
    { preventDefault: true } // Stops page scroll while zooming
  );

  const gestureProps = { ...bindPinch(), ...bindWheel() };

  // ———————————————————— RE-RENDER ON ZOOM ————————————————————
  useEffect(() => {
    if (!scale || !numPages) return;

    Object.values(pageRefs.current).forEach((canvas) => {
      if (canvas) {
        canvas.dataset.rendered = "false";
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      }
    });

    setTimeout(() => {
      document.querySelectorAll("[data-page-wrapper]").forEach((el) => {
        const pageNum = Number(el.querySelector("canvas")?.dataset.pageNumber);
        if (pageNum) renderPage(pageNum);
      });
    }, 50);
  }, [scale, renderPage]);

  // ———————————————————— RESIZE → REFIT ————————————————————
  useEffect(() => {
    const handleResize = () => {
      if (!pdfDoc || scale !== baseScale.current) return;
      (async () => {
        const firstPage = await pdfDoc.getPage(1);
        const viewport = firstPage.getViewport({ scale: 1 });
        const maxWidth = Math.min(window.innerWidth * 0.94, 1348);
        const autoScale = maxWidth / viewport.width;
        baseScale.current = autoScale;
        lastScale.current = autoScale;
        setScale(autoScale);
      })();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pdfDoc, scale]);

  // ———————————————————— MOUNT & PORTAL ————————————————————
  useEffect(() => setMounted(true), []);

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
            {document.fullscreenElement ? (
              <FaCompress className="h-5 w-5" />
            ) : (
              <FaExpand className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>,
      document.body
    );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50 py-12">
      {toolbarPortal}

      <div {...gestureProps} className="touch-none select-none">
        <div className="mx-auto flex flex-col items-center gap-16 px-4">
          {Array.from({ length: numPages || 8 }, (_, i) => {
            const pageNum = i + 1;
            return (
              <div
                key={pageNum}
                data-page-wrapper
                style={{ maxWidth: "clamp(280px, 94vw, 1348px)" }}
                className="w-full"
              >
                <div className="flex justify-center">
                  <canvas
                    ref={(el) => (pageRefs.current[pageNum] = el)}
                    data-page-number={pageNum}
                    className="rounded-xl bg-white shadow-2xl ring-1 ring-gray-200"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
