// src\components\modals\PdfViewer.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedPdfViewer({ pdfUrl = "/pdfFiles/IES-brochure.pdf" }) {
  // Correct syntax – no <> after useRef, and null without quotes
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Start completely hidden
    gsap.set(container, { opacity: 0, y: 100 });

    // Animate in
    gsap.to(container, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.1,
    });

    // Create PDF.js iframe
    const iframe = document.createElement("iframe");
    iframe.src = `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}#zoom=page-width`;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "16px";
    iframe.style.backgroundColor = "#fff";

    container.innerHTML = "";
    container.appendChild(iframe);

    // Subtle entrance when PDF loads
    iframe.onload = () => {
      gsap.fromTo(iframe, { scale: 0.98 }, { scale: 1, duration: 0.8, ease: "power3.out" });
    };
  }, [pdfUrl]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden rounded-2xl bg-gray-50 shadow-2xl"
      style={{ opacity: 0 }}
    />
  );
}
