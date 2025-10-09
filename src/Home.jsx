import React from "react";
import nature1 from "./assets/pexels-recalmedia-60217.jpg";
import nature2 from "./assets/pexels-pixabay-38238.jpg";
import nature3 from "./assets/pexels-maria-salazar-303506-879010.jpg";
import nature4 from "./assets/pexels-vincent-gerbouin-445991-1167021.jpg";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import nature5 from "./assets/swimming-pool-resort.jpg";
function Home() {
  const carouselItems = [
    {
      image: nature1,
      title: "Stay With Nature",
      description: "Relax, Refresh, Recharge in the lap of nature.",
      textColor: "text-white",
    },
    {
      image: nature2,
      title: "Luxury Villas",
      description: "Experience premium comfort amidst natural beauty.",
      textColor: "text-white",
    },
    {
      image: nature3,
      title: "Peaceful Retreat",
      description: "Find your perfect escape from the hustle and bustle.",
      textColor: "text-white",
    },
    {
      image: nature4,
      title: "Unforgettable Memories",
      description: "Create lasting memories in stunning locations.",
      textColor: "text-white",
    },
  ];

  return (
    <>
      {/* Hero Carousel Section */}
      <Container fluid className="px-0 mt-5 pt-5">
        <Carousel
          fade
          controls
          indicators
          touch
          className="carousel-responsive"
        >
          {carouselItems.map((item, idx) => (
            <Carousel.Item key={idx} interval={3000}>
              {/* Image Container with Responsive Height */}
              <div className="carousel-image-wrapper">
                <img
                  className="d-block w-100 img-fluid"
                  src={item.image}
                  alt={`Slide ${idx + 1}`}
                />
                {/* Overlay for better text readability */}
                <div className="carousel-overlay position-absolute top-0 start-0 w-100 h-100" />
              </div>

              <Carousel.Caption className="carousel-caption-responsive">
                <Container>
                  <Row className="justify-content-center text-center">
                    <Col xs={12} md={10} lg={8}>
                      <h3 className="display-5 display-md-4 display-lg-3 fw-bold mb-3 mb-md-4">
                        {item.title}
                      </h3>
                      <p className="lead mb-3 mb-md-4 d-none d-md-block fs-4">
                        {item.description}
                      </p>
                      <p className="mb-3 mb-md-4 d-md-none fs-5">
                        {item.description}
                      </p>
                      <Button
                        variant="primary"
                        size="lg"
                        className="rounded-pill px-4 px-md-5 py-2 py-md-3 fw-semibold"
                      >
                        Book Now
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Features Section */}
      <Container className="my-5 py-4 py-md-5">
        <Row className="justify-content-center text-center mb-4 mb-md-5">
          <Col xs={12} md={10} lg={8}>
            <h2 className="display-6 display-md-5 display-lg-4 fw-bold text-primary mb-3">
              Welcome to Paradise Villas
            </h2>
            <p className="fs-6 fs-md-5 text-muted mb-0">
              Discover our exclusive collection of luxury villas nestled in the
              most breathtaking natural landscapes. Each villa is designed to
              provide unparalleled comfort while keeping you connected with
              nature.
            </p>
          </Col>
        </Row>

        <Row className="g-3 g-md-4 g-lg-5">
          <Col xs={12} sm={6} lg={3} className="d-flex">
            <div className="text-center p-3 w-100">
              <div className="text-primary mb-3">
                <i className="bi bi-house-door display-6"></i>
              </div>
              <h5 className="fw-bold mb-2">Luxury Accommodation</h5>
              <p className="text-muted mb-0">
                Premium villas with modern amenities
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} className="d-flex">
            <div className="text-center p-3 w-100">
              <div className="text-success mb-3">
                <i className="bi bi-tree display-6"></i>
              </div>
              <h5 className="fw-bold mb-2">Natural Surroundings</h5>
              <p className="text-muted mb-0">
                Immersed in pristine natural beauty
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} className="d-flex">
            <div className="text-center p-3 w-100">
              <div className="text-warning mb-3">
                <i className="bi bi-star display-6"></i>
              </div>
              <h5 className="fw-bold mb-2">5-Star Service</h5>
              <p className="text-muted mb-0">
                Exceptional hospitality and care
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3} className="d-flex">
            <div className="text-center p-3 w-100">
              <div className="text-danger mb-3">
                <i className="bi bi-geo-alt display-6"></i>
              </div>
              <h5 className="fw-bold mb-2">Prime Locations</h5>
              <p className="text-muted mb-0">Carefully selected scenic spots</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Additional Info Section */}
      <Container fluid className="bg-light py-4 py-md-5">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <div className="p-3">
                <h3 className="fw-bold text-primary mb-3">
                  Experience Nature Like Never Before
                </h3>
                <p className="text-muted mb-4">
                  Our villas are carefully designed to blend modern luxury with
                  natural surroundings. Wake up to breathtaking views, enjoy
                  premium amenities, and create memories that last a lifetime.
                </p>
                <Row className="g-2">
                  <Col xs={6}>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-wifi text-primary me-2"></i>
                      <span>Free WiFi</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-cup-hot text-primary me-2"></i>
                      <span>Breakfast Included</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-car-front text-primary me-2"></i>
                      <span>Free Parking</span>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-water text-primary me-2"></i>
                      <span>Swimming Pool</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="p-3">
                <img
                  src={nature5}
                  alt="Luxury Villa"
                  className="img-fluid rounded shadow"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Custom Styles using Bootstrap Classes */}
      <style>
        {`
          /* Carousel Image Wrapper */
          .carousel-image-wrapper {
            position: relative;
            width: 100%;
            height: 50vh;
            overflow: hidden;
          }
          
          /* Responsive Carousel Height */
          @media (min-width: 768px) {
            .carousel-image-wrapper {
              height: 60vh;
            }
          }
          
          @media (min-width: 992px) {
            .carousel-image-wrapper {
              height: 70vh;
            }
          }
          
          /* Carousel Image */
          .carousel-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          /* Overlay for better text contrast */
          .carousel-overlay {
            background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
          }
          
          /* Responsive Carousel Caption */
          .carousel-caption-responsive {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            bottom: auto;
          }
          
          /* Carousel Controls Responsive */
          .carousel-control-prev,
          .carousel-control-next {
            width: 5%;
          }
          
          @media (max-width: 768px) {
            .carousel-control-prev,
            .carousel-control-next {
              width: 10%;
            }
          }
        `}
      </style>
    </>
  );
}

export default Home;
