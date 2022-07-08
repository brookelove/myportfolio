import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../styles/Resume.css";
import Navbar from "./Navbar";
import myResume from "../assets/resume.pdf";
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

export default function Resume() {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPage }) {
    setNumPages(numPage);
    setPageNumber(1);
  }
  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }
  function changePageBack() {
    changePage(-1);
  }
  function changePageNext() {
    changePage(+1);
  }
  return (
    <div id="resume" className="aboutBeigeBackgd">
      <div className="resumeContainer">
        <Navbar />
        <div className="resumeContent">
          <div className="resumeBox">
            <h1 className="projectTitle">Resume</h1>
            <Document
              file={myResume}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              <Page height="700" pageNumber={pageNumber} />
            </Document>
          </div>
          <a className="downloadBtn" href={myResume} download>
            {" "}
            <button>Download</button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
