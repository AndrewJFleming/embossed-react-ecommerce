import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Slider.css";
import { Carousel, Container } from "react-bootstrap";
import { sliderItems } from "../../data";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const getSliderCats = async () => {
      const res = await axios.get("/categories");
      const isSliderProduct = res.data.filter((x) => !!x.isSlide);
      setSlides(isSliderProduct);
    };
    getSliderCats();
  }, []);

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item>
          <img
            className="d-block 
            w-100 
            carouselImage"
            src={slide.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.desc}</p>
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
