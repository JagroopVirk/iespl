// src\components\modals\PdfViewer.jsx
import { useEffect, useRef } from 'react';

export default function PdfViewer({ pdfUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewerUrl = `/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;

    const iframe = document.createElement('iframe');
    iframe.src = viewerUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    iframe.title = 'PDF Viewer';

    containerRef.current.innerHTML = ''; // clear loading state
    containerRef.current.appendChild(iframe);

    // Optional: fallback message if iframe fails to load
    iframe.onerror = () => {
      containerRef.current.innerHTML = '<p class="p-8 text-red-600">Failed to load PDF viewer.</p>';
    };
  }, [pdfUrl]);

  return <div ref={containerRef} class="h-screen w-full" />;
}
