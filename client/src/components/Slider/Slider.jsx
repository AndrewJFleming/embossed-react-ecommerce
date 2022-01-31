import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Carousel } from "react-bootstrap";
import "./Slider.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const getSliderCats = async () => {
      const res = await axios.get("/categories");
      const isSliderCat = res.data.filter((x) => !!x.isSlide);
      setSlides(isSliderCat);
    };
    getSliderCats();
  }, []);

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide) => (
        <Carousel.Item key={slide._id}>
          <img
            className="carouselImage"
            src={slide.img}
            alt={`${slide.title}-slide`}
          />
          <Carousel.Caption>
            <div className="caption-wrapper">
              <Link className="slide-title" to={`/product-list/${slide.title}`}>
                <h3>{slide.title}</h3>
              </Link>
              <p className="slide-desc">{slide.desc}</p>
            </div>
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
