import React from "react";
import nature1 from "./assets/pexels-recalmedia-60217.jpg";
import nature2 from "./assets/pexels-pixabay-38238.jpg";
import nature3 from "./assets/pexels-maria-salazar-303506-879010.jpg";
import nature4 from "./assets/pexels-vincent-gerbouin-445991-1167021.jpg";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  return (
    <>
      <div className="container-lg mt-5 pt-5">
        <Carousel fade>
          {[nature1, nature2, nature3, nature4].map((img, idx) => {
            let textcolor = idx === 3 ? "text-dark" : "text-white"; // example
            return (
              <Carousel.Item key={idx} interval={3000}>
                <img
                  className="d-block w-100 h-100"
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  style={{ objectFit: "contain", maxHeight: "75vh" }}
                />
                <Carousel.Caption className={textcolor}>
                  <h3>Stay With Nature</h3>
                  <p>Relax, Refresh, Recharge in the lap of nature.</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
export default Home;
