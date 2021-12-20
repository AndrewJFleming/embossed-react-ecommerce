import React, { useState } from "react";

import "./Slider.css";
import { Carousel } from "react-bootstrap";
import { sliderItems } from "../../data";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} className="my-5">
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
  );
}
const Slider = () => {
  return <ControlledCarousel />;
};
export default Slider;
