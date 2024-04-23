import React, { useState, useRef } from "react";

import Button from "./Button";

import "./Carousel.css"; 

const Carousel = ({
  images,
  aniTime = 500,
  scale = 0.8,
  gap, //gap between images
}) => {
  const [current, setCurrent] = useState(Math.floor(images.length / 2)); //set the initial image to the middle image
  const carouselRef = useRef();

  const getTransformScale = (index) => {
    return index === current ? 1 : scale;
  };

  const getZIndex = (index) => {
    return index === current
    ? 3
    : 2 - Math.abs(current - index);
  };

  return (
    <div className="carousel">
      <div className="carousel-container" ref={carouselRef}>
        {images.map((img, index) => (
          <img
            key={img.id}
            src={img.src}
            alt={`Slide ${index}`}
            className="carousel-slide"
            style={{
              transform: `scale(${getTransformScale(index)})`,
              zIndex: getZIndex(index),
              transition: `transform ${aniTime / 1000}s ease-in-out`,
              left: `${index * (330 + gap)}px`,
            }}
          />
        ))}
      </div>
      {current === 0 ? (
        ""
      ) : (
        <div className="carousel-button prev">
          <Button onClick={() => setCurrent(current - 1)} ariaLabel="prev">&lt;</Button>
        </div>
      )}
      {current === images.length - 1 ? (
        ""
      ) : (
        <div className="carousel-button next">
          <Button onClick={() => setCurrent(current + 1)} ariaLabel="next">&gt;</Button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
