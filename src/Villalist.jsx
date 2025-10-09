import React, { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap-icons/font/bootstrap-icons.css";

function VillaList() {
  const [villas, setVillas] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://localhost:7018/api/VillaAPI");
        if (response.ok) {
          setVillas(await response.json());
        }
      } catch (error) {
        console.error("Error fetching villa data:", error);
      } finally {
        setloading(false);
      }
    };
    fetchdata();
  }, []);

  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current || villas.length === 0) return;

    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth / 3;
    const scrollPosition = index * cardWidth;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(Math.ceil(villas.length / 3) - 1);
    }
  };

  const scrollRight = () => {
    const maxIndex = Math.ceil(villas.length / 3) - 1;
    if (currentIndex < maxIndex) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(0);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeftPos = container.scrollLeft;
      const cardWidth = container.offsetWidth / 3;
      const newIndex = Math.round(scrollLeftPos / cardWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [villas.length]);

  if (loading) {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (villas.length === 0) {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        <h2 className="text-center text-black">No Villas Available</h2>
      </Container>
    );
  }

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 py-4 py-md-5"
    >
      <div className="w-100">
        {/* Mobile & Tablet View (Stacked Layout) */}
        <div className="d-lg-none">
          <Row className="justify-content-center g-3 g-md-4">
            {villas.map((villa) => (
              <Col
                key={villa.id}
                xs={12}
                sm={6}
                md={4}
                className="d-flex align-items-stretch mb-3 mb-md-4"
              >
                <VillaCard villa={villa} />
              </Col>
            ))}
          </Row>
        </div>

        {/* Desktop View (Horizontal Scroll with Controls) */}
        <div className="d-none d-lg-block position-relative">
          {/* Left Scroll Button */}
          <button
            className="btn btn-primary position-absolute start-0 top-50 translate-middle-y z-3 scroll-arrow"
            onClick={scrollLeft}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              left: "20px",
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              border: "3px solid white",
            }}
          >
            <i className="bi bi-chevron-left fs-4 fw-bold text-white"></i>
          </button>

          {/* Right Scroll Button */}
          <button
            className="btn btn-primary position-absolute end-0 top-50 translate-middle-y z-3 scroll-arrow"
            onClick={scrollRight}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              right: "20px",
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              border: "3px solid white",
            }}
          >
            <i className="bi bi-chevron-right fs-4 fw-bold text-white"></i>
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="horizontal-scroll-container mx-auto"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              padding: "3rem 0",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              gap: "2rem",
              width: "90%",
              maxWidth: "1200px",
            }}
          >
            <style>
              {`
                .horizontal-scroll-container::-webkit-scrollbar {
                  display: none;
                }
                .scroll-arrow {
                  transition: all 0.3s ease;
                }
                .scroll-arrow:hover {
                  transform: scale(1.1);
                  box-shadow: 0 6px 20px rgba(0,0,0,0.4) !important;
                }
                .scroll-arrow:active {
                  transform: scale(0.95);
                }
                .villa-card {
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .villa-card:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
                }
              `}
            </style>

            {villas.map((villa) => (
              <div
                key={villa.id}
                className="flex-shrink-0"
                style={{
                  width: `calc(33.333% - 1.5rem)`,
                  minWidth: `calc(33.333% - 1.5rem)`,
                }}
              >
                <VillaCard villa={villa} />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          {villas.length > 3 && (
            <div className="text-center mt-5">
              <div className="d-flex justify-content-center align-items-center gap-2">
                {Array.from({ length: Math.ceil(villas.length / 3) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      className={`btn p-0 ${
                        currentIndex === index ? "text-primary" : "text-muted"
                      }`}
                      onClick={() => scrollToIndex(index)}
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        backgroundColor:
                          currentIndex === index ? "#0d6efd" : "#dee2e6",
                        border: "2px solid white",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span className="visually-hidden">
                        Go to slide {index + 1}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Scroll hint */}
          <div className="text-center mt-1">
            <small className="text-muted">
              • Showing {currentIndex * 3 + 1}-
              {Math.min((currentIndex + 1) * 3, villas.length)} of{" "}
              {villas.length} villas
            </small>
          </div>
        </div>
      </div>
    </Container>
  );
}

// VillaCard component
const VillaCard = ({ villa }) => {
  return (
    <Card className="w-100 shadow-sm h-100 villa-card">
      <Card.Img
        variant="top"
        className="img-fluid villa-image"
        src={villa.imageUrl}
        alt={villa.name}
        style={{
          height: "220px",
          objectFit: "cover",
          width: "100%",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-5 fs-md-6 mb-3">{villa.name}</Card.Title>

        <ListGroup variant="flush" className="small flex-grow-1">
          <ListGroup.Item className="px-0 border-0">
            <span className="fw-semibold">Villa Type:</span>
            <b className="ms-1">{villa.villaType}</b>
          </ListGroup.Item>
          <ListGroup.Item className="px-0 border-0">
            <div className="mb-1 text-muted">Starting From</div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <b className="text-success fs-6">
                <i className="bi bi-currency-rupee"></i>
                {villa.rate}
              </b>
              <span className="fw-bold text-muted small">Rupees</span>
            </div>
            <div className="text-center">
              <span className="text-danger fw-medium small">24:00 Hrs</span>
            </div>
          </ListGroup.Item>
        </ListGroup>

        <div className="mt-auto pt-3">
          <Button variant="primary" className="w-100 btn-sm" size="sm">
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default VillaList;
