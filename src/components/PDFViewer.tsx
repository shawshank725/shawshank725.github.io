import { useEffect, useRef, useState } from "react";

import { Document, Page } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import "@/styles/PDFViewer.css";

interface PDFViewerProps {
    pdfPath: string;
    onClose: () => void;
}

const PDFViewer = ({ pdfPath, onClose }: PDFViewerProps) => {
    const pdfContainerRef = useRef<HTMLDivElement>(null);

    const [pdfWidth, setPdfWidth] = useState<number>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        const updatePdfWidth = () => {
            if (!pdfContainerRef.current) return;

            setPdfWidth(pdfContainerRef.current.clientWidth);
        };

        updatePdfWidth();

        const resizeObserver = new ResizeObserver(updatePdfWidth);

        if (pdfContainerRef.current) {
            resizeObserver.observe(pdfContainerRef.current);
        }

        window.addEventListener("resize", updatePdfWidth);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updatePdfWidth);
        };
    }, []);

    const getFileName = (path: string): string => {
        const fileName = path.split("/").pop() || "download";

        return fileName.endsWith(".pdf")
            ? fileName
            : `${fileName}.pdf`;
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(pdfPath);

            if (!response.ok) {
                throw new Error("Failed to download PDF");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;
            link.download = getFileName(pdfPath);

            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("PDF download failed:", error);
        }
    };

    return (
        <div className="pdfViewerContainer">

            <button
                className="pdfViewerDownloadButton"
                onClick={handleDownload}
            >
                ⭳
            </button>

            <button
                className="pdfViewerCloseButton"
                onClick={onClose}
            >
                ×
            </button>

            <div
                ref={pdfContainerRef}
                className="pdfContainer"
            >
                {loading && !error && (
                    <div className="pdfLoading">
                        Loading PDF...
                    </div>
                )}

                {error && (
                    <div className="pdfError">
                        <p>Failed to load PDF.</p>

                        <button onClick={onClose}>
                            Close
                        </button>
                    </div>
                )}

                <Document
                    file={pdfPath}
                    onLoadSuccess={() => {
                        setLoading(false);
                        setError(false);
                    }}
                    onLoadError={(error) => {
                        console.error("PDF loading failed:", error);
                        setLoading(false);
                        setError(true);
                    }}
                >
                    {!error && pdfWidth && (
                        <Page
                            pageNumber={1}
                            width={pdfWidth}
                        />
                    )}
                </Document>
            </div>
        </div>
    );
};

export default PDFViewer;