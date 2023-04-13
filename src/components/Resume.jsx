import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import myResume from "../assets/resume/SL_Resume_PDF.pdf";
import "../assets/styles/Resume.css";
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const onDownload = () => {
    fetch(myResume).then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = myResume;
        alink.click();
      });
    });
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <div className="resumeContainer">
      <h1 className="subText">Resume</h1>
      <Document
        file={myResume}
        onLoadSuccess={onDocumentLoadSuccess}
        className="resumeSize"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <nav className="buttonContainers">
        <p className="toolInfo">
          Page {pageNumber} of {numPages}
        </p>
        <div>
          <button className="pageButton" onClick={goToPrevPage}>
            Prev
          </button>
          <button className="pageButton" onClick={goToNextPage}>
            Next
          </button>
        </div>

        <button className="aboutButton" onClick={onDownload}>Click to Download</button>
      </nav>
    </div>
  );
};

export default Resume;
