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
  FaDownload,
  FaSistrix, // ← Fixed: FaSistrix → FaSearch
  FaXmark,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa6";

import { usePinch, useWheel } from "@use-gesture/react";

export default function PdfViewer({ file = "/pdfFiles/IES-brochure.pdf" }) {
  const containerRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(null);
  const pageRefs = useRef({});
  const textLayerRefs = useRef({}); // ← ADDED
  const pageTextContent = useRef({}); // ← ADDED
  const [mounted, setMounted] = useState(false);

  const baseScale = useRef(1);
  const lastScale = useRef(1);
  const cancelableRenderTasks = useRef({});

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // ——— SEARCH STATE ———
  const [searchText, setSearchText] = useState("");
  const [matches, setMatches] = useState([]); // [{page: 1, rects: [...]}, ...]
  const [currentMatch, setCurrentMatch] = useState(0);

  const totalMatches = matches.reduce((sum, m) => sum + m.rects.length, 0);

  // ——— INIT PDF + TEXT EXTRACTION ———
  useEffect(() => {
    (async () => {
      const pdfjs = await import("pdfjs-dist/build/pdf.mjs");

      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

      const loadingTask = pdfjs.getDocument(file);
      const pdf = await loadingTask.promise;
      setPdfDoc(pdf);
      setNumPages(pdf.numPages);

      const firstPage = await pdf.getPage(1);
      const viewport = firstPage.getViewport({ scale: 1 });
      const maxWidth = Math.min(window.innerWidth * 0.94, 1348);
      const autoScale = maxWidth / viewport.width;

      baseScale.current = autoScale;
      lastScale.current = autoScale;
      setScale(autoScale);

      // Extract text + bounding boxes for search
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const viewport = page.getViewport({ scale: 1 });

        const pageRects = [];
        textContent.items.forEach((item) => {
          const [x1, y1, x2, y2] = item.transform.slice(4); // PDF.js transform matrix
          const height = item.height || Math.abs(y2 - y1);
          pageRects.push({
            str: item.str,
            x: x1,
            y: viewport.height - y1 - height,
            width: item.width,
            height: height,
          });
        });
        pageTextContent.current[i] = pageRects;
      }
    })();
  }, [file]);

  // ——— RENDER PAGE ———
  const renderPage = useCallback(
    async (pageNum) => {
      if (!pdfDoc || !scale) return;
      const canvas = pageRefs.current[pageNum];
      if (!canvas || canvas.dataset.rendered === "true") return;

      if (cancelableRenderTasks.current[pageNum]) {
        cancelableRenderTasks.current[pageNum].cancel();
      }

      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale });
      const ctx = canvas.getContext("2d");
      const ratio = window.devicePixelRatio || 1;

      canvas.width = Math.floor(viewport.width * ratio);
      canvas.height = Math.floor(viewport.height * ratio);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const renderTask = page.render({ canvasContext: ctx, viewport });
      cancelableRenderTasks.current[pageNum] = renderTask;

      try {
        await renderTask.promise;
        canvas.dataset.rendered = "true";
        // ✅ hide loader once first page is ready
        if (pageNum === 1) {
          setIsLoading(false);
          document.getElementById("pdf-loader")?.classList.add("opacity-0", "pointer-events-none");
        }

        gsap.fromTo(canvas, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, duration: 0.45 });
      } catch (err) {
        if (err?.name !== "RenderingCancelledException") console.error(err);
      } finally {
        delete cancelableRenderTasks.current[pageNum];
      }
    },
    [pdfDoc, scale]
  );

  // ——— SEARCH ———
  const performSearch = useCallback(() => {
    if (!searchText.trim()) {
      setMatches([]);
      setCurrentMatch(0);
      return;
    }

    const regex = new RegExp(searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    const results = [];

    Object.entries(pageTextContent.current).forEach(([pageNum, items]) => {
      const pageMatches = [];
      let text = "";
      items.forEach((item) => {
        const match = item.str.match(regex);
        if (match) {
          const start = text.length;
          text += item.str;
          pageMatches.push({
            x: item.x * scale,
            y: item.y * scale,
            width: item.width * scale,
            height: item.height * scale,
          });
        } else {
          text += item.str;
        }
      });
      if (pageMatches.length > 0) {
        results.push({ page: Number(pageNum), rects: pageMatches });
      }
    });

    setMatches(results);
    setCurrentMatch(results.length > 0 ? 1 : 0);
  }, [searchText, scale]);

  useEffect(() => {
    const timer = setTimeout(performSearch, 300);
    return () => clearTimeout(timer);
  }, [performSearch]);

  // ——— NAVIGATE MATCHES ———
  const goToPrevMatch = () => setCurrentMatch((m) => (m > 1 ? m - 1 : totalMatches || 0));
  const goToNextMatch = () => setCurrentMatch((m) => (m >= totalMatches ? 1 : m + 1));

  // ——— ZOOM & GESTURES (unchanged) ———
  const zoomIn = () => setScale((s) => Math.min(4, +(s * 1.25).toFixed(3)));
  const zoomOut = () => setScale((s) => Math.max(0.5, +(s * 0.8).toFixed(3)));
  const resetZoom = () => {
    setScale(baseScale.current);
    lastScale.current = baseScale.current;
  };

  // download file
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const bindPinch = usePinch(
    ({ offset: [s] }) => {
      const newScale = Math.max(0.5, Math.min(4, baseScale.current * s));
      setScale(newScale);
      lastScale.current = newScale;
    },
    { scaleBounds: { min: 0.5, max: 4 }, rubberband: true }
  );

  const bindWheel = useWheel(
    ({ event, wheeling, memo, offset: [, y] }) => {
      if (!event.ctrlKey && !event.metaKey) return memo;
      if (!wheeling) return memo;
      const factor = y - (memo || y) > 0 ? 0.92 : 1.08;
      const newScale = Math.max(0.5, Math.min(4, (scale || baseScale.current) * factor));
      setScale(newScale);
      return y;
    },
    { preventDefault: true }
  );

  const gestureProps = { ...bindPinch(), ...bindWheel() };

  // ——— RE-RENDER ON ZOOM ———
  useEffect(() => {
    if (!scale || !numPages) return;
    Object.values(cancelableRenderTasks.current).forEach((t) => t?.cancel());
    cancelableRenderTasks.current = {};
    Object.values(pageRefs.current).forEach((c) => {
      if (c) {
        c.dataset.rendered = "false";
        c.getContext("2d").clearRect(0, 0, c.width, c.height);
      }
    });
    setTimeout(() => {
      document.querySelectorAll("[data-page-wrapper]").forEach((el) => {
        const pageNum = Number(el.querySelector("canvas")?.dataset.pageNumber);
        if (pageNum) renderPage(pageNum);
      });
    }, 50);
  }, [scale, renderPage]);

  // ——— MOUNT ———
  useEffect(() => setMounted(true), []);

  const toolbarPortal =
    mounted &&
    createPortal(
      <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
        {/* Toolbar */}
        <div className="pointer-events-auto fixed top-1/2 right-4 flex -translate-y-1/2 flex-col gap-2.5 rounded-2xl border border-gray-300 bg-transparent p-2.5 shadow-2xl backdrop-blur-lg md:right-8 lg:right-12">
          <button
            onClick={zoomIn}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Zoom In"
          >
            <FaMagnifyingGlassPlus className="h-5 w-5" />
          </button>
          <button
            onClick={zoomOut}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Zoom Out"
          >
            <FaMagnifyingGlassMinus className="h-5 w-5" />
          </button>
          <button
            onClick={resetZoom}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Fit"
          >
            <FaArrowsLeftRight className="h-5 w-5" />
          </button>
          <button
            onClick={() => containerRef.current?.requestFullscreen?.()}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
          >
            {document.fullscreenElement ? (
              <FaCompress className="h-5 w-5" />
            ) : (
              <FaExpand className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={handleDownload}
            className="group text-primary rounded-xl bg-gray-100 p-3 transition-all hover:bg-gray-200 active:scale-95"
            title="Download"
          >
            <FaDownload className="h-5 w-5" />
          </button>
        </div>

        {/* Search Bar */}
        {/* <div className="pointer-events-auto fixed right-6 bottom-6 w-80 max-w-[90vw]">
          <div className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white/95 p-3 shadow-xl backdrop-blur-lg">
            <FaSistrix className="text-gray-500" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search in PDF..."
              className="flex-1 bg-transparent outline-none"
            />
            {searchText && (
              <button
                onClick={() => {
                  setSearchText("");
                  setMatches([]);
                }}
              >
                <FaXmark className="text-gray-500 hover:text-gray-700" />
              </button>
            )}
            <div className="flex items-center gap-2 border-l pl-2">
              <button
                onClick={goToPrevMatch}
                disabled={totalMatches === 0}
                className="p-1 disabled:opacity-30"
              >
                <FaAngleUp className="h-4 w-4" />
              </button>
              <span className="w-16 text-center text-sm font-medium">
                {totalMatches > 0 ? `${currentMatch} of ${totalMatches}` : "0"}
              </span>
              <button
                onClick={goToNextMatch}
                disabled={totalMatches === 0}
                className="p-1 disabled:opacity-30"
              >
                <FaAngleDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div> */}
      </div>,
      document.body
    );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-50 py-12">
      {toolbarPortal}

      <div {...gestureProps} style={{ touchAction: "pan-y pinch-zoom" }} className="select-none">
        <div className="mx-auto flex flex-col items-center gap-16 px-4">
          {Array.from({ length: numPages || 8 }, (_, i) => {
            const pageNum = i + 1;
            return (
              <div
                key={pageNum}
                data-page-wrapper
                style={{ maxWidth: "clamp(280px, 94vw, 1348px)" }}
                className="relative w-full"
              >
                <div className="flex justify-center">
                  <canvas
                    ref={(el) => (pageRefs.current[pageNum] = el)}
                    data-page-number={pageNum}
                    className="rounded-xl bg-white shadow-2xl ring-1 ring-gray-200"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />

                  {/* HIGHLIGHT OVERLAY */}
                  <div className="pointer-events-none absolute inset-0">
                    {matches
                      .filter((m) => m.page === pageNum)
                      .flatMap((m) => m.rects)
                      .map((rect, idx) => {
                        const globalIdx =
                          matches
                            .slice(
                              0,
                              matches.findIndex((m) => m.page === pageNum)
                            )
                            .reduce((a, m) => a + m.rects.length, 0) +
                          idx +
                          1;
                        const isCurrent = globalIdx === currentMatch;
                        return (
                          <div
                            key={idx}
                            className={`absolute border-2 transition-all ${isCurrent ? "border-amber-600 bg-yellow-400/70 shadow-lg" : "border-amber-500 bg-yellow-300/40"}`}
                            style={{
                              left: `${rect.x}px`,
                              top: `${rect.y}px`,
                              width: `${rect.width}px`,
                              height: `${rect.height}px`,
                            }}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
