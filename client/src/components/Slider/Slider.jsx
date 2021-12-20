import React, { useState } from "react";

import "./Slider.css";
import { Carousel, Container } from "react-bootstrap";
import { sliderItems } from "../../data";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {sliderItems.map((item) => (
          <Carousel.Item>
            <img
              className="d-block 
            w-100 
            carouselImage"
              src={item.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
const Slider = () => {
  return <ControlledCarousel />;
};
export default Slider;
