import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function VillaList() {
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7018/api/VillaAPI");
        if (response.ok) setVillas(await response.json());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth < 576 ? "vertical" : "horizontal");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <Spinner animation="border" />
      </div>
    );

  if (!villas.length)
    return <h2 className="text-center mt-5 pt-5">No Villas Available</h2>;

  return (
    <div className="container mt-5 pt-5">
      {/* Inline style block for Swiper arrow colors */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color:  #e4063dff;    /* makes arrows black */
          font-size: 1.5rem; /* adjust arrow size */
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #ecd7d7ff;    /* darker on hover */
        }
      `}</style>

      <h2 className="text-center mb-4 text-primary">Available Villas</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={20}
        direction={direction}
        breakpoints={{
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        style={{ height: direction === "vertical" ? "500px" : "auto" }}
      >
        {villas.map((villa) => (
          <SwiperSlide key={villa.id}>
            <Card className="text-center h-100">
              <Card.Img
                variant="top"
                src={villa.imageUrl}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{villa.name}</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <strong>Villa Type:</strong> {villa.villaType}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Starting From <b className="text-success">₹{villa.rate}</b>{" "}
                    / 24 Hrs
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button variant="primary" size="sm">
                  Book Now
                </Button>
              </Card.Footer>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VillaList;
