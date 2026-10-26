import { MobileWindowHeader } from "#components";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper"
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const MobileResume = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
  <>
    <MobileWindowHeader target="resume" title="Resume">
        <a href="files/resume.pdf" download title="Download resume">
            <Download className="icon" />
        </a>
    </MobileWindowHeader>

    <div ref={containerRef} className="resume-pdf">
        {width > 0 && (
            <Document file="files/resume.pdf">
                <Page
                    pageNumber={1}
                    width={width}
                    renderTextLayer
                    renderAnnotationLayer
                />
            </Document>
        )}
    </div>
  </>
  )
}

const MobileResumeWindow = MobileWindowWrapper(MobileResume, "resume");

export default MobileResumeWindow;
