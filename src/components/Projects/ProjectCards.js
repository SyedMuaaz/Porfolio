import React, { useMemo, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = useMemo(() => {
    const items = [];
    const seen = new Set();
    // Normalize IDs (trim whitespace)
    if (Array.isArray(props.youtubeIds) && props.youtubeIds.length > 0) {
      props.youtubeIds.forEach((raw) => {
        const id = String(raw).trim();
        if (!seen.has(`yt:${id}`)) {
          items.push({ type: "youtube", id });
          seen.add(`yt:${id}`);
        }
      });
    }
    if (props.youtubeId) {
      const id = String(props.youtubeId).trim();
      if (!seen.has(`yt:${id}`)) {
        items.push({ type: "youtube", id });
        seen.add(`yt:${id}`);
      }
    }
    if (props.videoSrc && !seen.has(`vid:${props.videoSrc}`)) {
      items.push({ type: "video", src: props.videoSrc });
      seen.add(`vid:${props.videoSrc}`);
    }
    if (Array.isArray(props.screenshots)) {
      props.screenshots.forEach((rawSrc) => {
        const src = typeof rawSrc === "string" ? rawSrc : rawSrc?.src || rawSrc;
        if (!seen.has(`img:${src}`)) {
          // For Pollen Pop and Word Buzzle, screenshots 02–05 should render at half height
          const title = (props.title || "").toLowerCase();
          const isTargetTitle =
            title.includes("pollen pop") || title.includes("word buzzle");
          const s = String(src);
          const isTargetIndex =
            /(^|[\\/])0[2-5]\./i.test(s) || /(^|[\\/])0[2-5]_/i.test(s);
          const halfHeight = isTargetTitle && isTargetIndex;
          items.push({ type: "image", src, halfHeight });
          seen.add(`img:${src}`);
        }
      });
    }
    return items;
  }, [props.youtubeIds, props.youtubeId, props.videoSrc, props.screenshots]);

  const handleOpen = () => {
    setActiveSlide(0);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);
  const handlePrev = () =>
    setActiveSlide((idx) => (slides.length ? (idx - 1 + slides.length) % slides.length : 0));
  const handleNext = () =>
    setActiveSlide((idx) => (slides.length ? (idx + 1) % slides.length : 0));

  return (
    <>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            width:
              (props.title || "").toLowerCase().includes("pollen pop") ||
              (props.title || "").toLowerCase().includes("word buzzle") ||
              (props.title || "").toLowerCase().includes("murlanpro") ||
              (props.title || "").toLowerCase().includes("murlan pro") ||
              (props.title || "").toLowerCase().includes("psykineticbattlechess") ||
              (props.title || "").toLowerCase().includes("psykinetic battle chess") ||
              (props.title || "").toLowerCase().includes("phoniczoom") ||
              (props.title || "").toLowerCase().includes("phonic zoom") ||
              (props.title || "").toLowerCase().includes("triviamix") ||
              (props.title || "").toLowerCase().includes("trivia mix") ||
              (props.title || "").toLowerCase().includes("escobahd") ||
              (props.title || "").toLowerCase().includes("escoba hd") ||
              (props.title || "").toLowerCase().includes("enableall") ||
              (props.title || "").toLowerCase().includes("enable all") ||
              (props.title || "").toLowerCase().includes("jhguitarapp") ||
              (props.title || "").toLowerCase().includes("jh guitar app")
                ? "75%"
                : "100%",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-summary">
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleOpen}>
          View
        </Button>
      </Card.Body>
    </Card>
      <Modal
        show={showModal}
        onHide={handleClose}
        size="xl"
        centered
        contentClassName="project-modal-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={5} style={{ marginBottom: "16px" }}>
              <h5 style={{ marginBottom: 12 }}>{props.title}</h5>
              <p style={{ textAlign: "justify", marginBottom: 0 }}>{props.description}</p>
            </Col>
            <Col md={7}>
              <div style={{ width: "100%", marginBottom: 12 }}>
                {slides.length > 0 ? (
                  slides[activeSlide].type === "youtube" ? (
                    <Ratio aspectRatio="16x9">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${slides[activeSlide].id}`}
                        title={`${props.title} video`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{ border: 0 }}
                      />
                    </Ratio>
                  ) : slides[activeSlide].type === "video" ? (
                    <video
                      src={slides[activeSlide].src}
                      controls
                      playsInline
                      preload="metadata"
                      style={{ width: "100%", borderRadius: "0.25rem" }}
                    />
                  ) : (
                    <img
                      src={slides[activeSlide].src}
                      alt={`preview-${activeSlide + 1}`}
                      style={{
                        width: "50%",
                        height: "auto",
                        borderRadius: "0.25rem",
                        objectFit: "contain",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  )
                ) : (
                  <div style={{ color: "#bbb", textAlign: "center", padding: "40px 0" }}>
                    No preview available
                  </div>
                )}
              </div>
              {slides.length > 1 && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Button variant="secondary" onClick={handlePrev}>
                    ← Prev
                  </Button>
                  <span style={{ color: "#ccc" }}>{activeSlide + 1} / {slides.length}</span>
                  <Button variant="primary" onClick={handleNext}>
                    Next →
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProjectCards;
