import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Syed_Muaz_Ul_Hasan_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
    setPageNumber(1);
  };

  const goToPrevPage = () => {
    setPageNumber((page) => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setPageNumber((page) => Math.min(numPages || page, page + 1));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {numPages > 1 && (
          <div className="resume-pager">
            <Button
              variant="secondary"
              size="sm"
              className="resume-page-btn"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
            >
              ← Previous
            </Button>
            <span className="resume-page-indicator">
              {pageNumber} / {numPages}
            </span>
            <Button
              variant="primary"
              size="sm"
              className="resume-page-btn"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
            >
              Next →
            </Button>
          </div>
        )}

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
