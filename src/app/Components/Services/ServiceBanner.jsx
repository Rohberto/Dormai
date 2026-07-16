"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../../styles/services/ServicesSection.css";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background image paths (replace with your images)
  const backgroundImages = [
    "/Images/Services/maintenance.jpeg",
    "/dormai/team-work.jpeg",
   "/dormai/team-work1.jpeg",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      // Animate text
      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    // Auto-slide background images
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 1000); // Change image every 5 seconds

    return () => {
      ctx.revert(); // Cleanup GSAP
      clearInterval(interval); // Cleanup interval
    };
  }, [backgroundImages.length]);

  useEffect(() => {
    if (sliderRef.current) {
      const sectionWidth = sliderRef.current.offsetWidth;
      sliderRef.current.style.transform = `translateX(-${currentSlide * sectionWidth}px)`;
    }
  }, [currentSlide]);

  return (
    <section className="serviceSection" ref={sectionRef}>
      <div className="background-slider" ref={sliderRef}>
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="overlay">
        <div className="content">
          <h1 ref={titleRef}>Our Services</h1>
          <p ref={textRef}>
            Our business is centered around signage design, production,
            installation and maintenance. We also offer brand consultation,
            warehousing and trucking services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;