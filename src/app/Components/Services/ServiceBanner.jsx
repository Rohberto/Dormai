"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/services/ServicesSection.css";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="serviceSection" ref={sectionRef}>
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
