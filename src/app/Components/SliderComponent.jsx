"use client";
import React, { useState, useEffect } from 'react';
import '../styles//SliderComponent.css';
import { gsap } from 'gsap';
const SliderComponent = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.src} alt={slide.label} className="slide-image" />
            <div className="slide-label">{slide.label}</div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default SliderComponent;