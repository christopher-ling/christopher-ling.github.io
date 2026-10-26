import { MobileWindowHeader } from "#components";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper"
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const MobileResume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <>
    <MobileWindowHeader target="resume" title="Resume">
        <a href="files/resume.pdf" download title="Download resume">
            <Download className="icon" />
        </a>
    </MobileWindowHeader>

    <Document file="files/resume.pdf" className="resume-pdf">
        <Page
            pageNumber={1}
            width={width}
            renderTextLayer
            renderAnnotationLayer
        />
    </Document>
  </>
  )
}

const MobileResumeWindow = MobileWindowWrapper(MobileResume, "resume");

export default MobileResumeWindow;
