"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../../styles/work/workbanner.css";

const WorkBanner = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background image paths (replace with your images)
  const backgroundImages = [
    "/Images/Services/service-1.jpg",
    "/Images/Services/service-5.jpg",
    "/Images/Services/service-2.jpg",
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
    <section className="workSection" ref={sectionRef}>
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
          <h1 ref={titleRef}>Our Work</h1>
          <p ref={textRef}>
            At Dormai, we help uphold your brand image through professional,
            well-designed signage that reflect your business and brand. Below,
            you will find some completed signage and branding projects handled
            by team Dormai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkBanner;