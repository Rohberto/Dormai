"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/work/workbanner.css";

const WorkBanner = () => {
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
    <section className="workSection" ref={sectionRef}>
      <div className="overlay">
        <div className="content">
          <h1 ref={titleRef}>Our Work</h1>
          <p ref={textRef}>
          At Dormai, we help uphold your brand image through professional, well-designed signage that reflect your business and brand. Below, you will find some completed signage and branding projects handled by team Dormai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkBanner;
