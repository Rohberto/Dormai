"use client";
import '../styles/process.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function OurProcess() {
      const sectionRef = useRef(null);
      const headerRef = useRef(null);

      useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

          // Animation for header and paragraph
    gsap.fromTo(
      [headerRef.current],
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true
        },
      }
    );

      gsap.from(".step-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true
        },
      });
      }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="label">OUR PROCESS</div>
      <h1 className="process-heading" ref={headerRef}>
From concept sketches to store displays, discover how Dormai ensures top-notch quality with every project.
      </h1>
      <div className="process-steps">
        <div className="step-card">
          <h3>1. Your Idea</h3>
          <p>
            No two companies are the same. To create a unique brand identity, we need to
            understand your idea. We will get to know you, understand your product offerings and
            your creative vision for your company.
          </p>
        </div>
        <div className="step-card design-card">
          <h3>2. Design Plan</h3>
          <p>
            We map out a customized plan to deliver brand and signage designs that are unique
            to your business. Our strategy-led team of designers and engineers, will work, using
            your ideas to create something truly novel.
          </p>
        </div>
        <div className="step-card">
          <h3>3. Approval & Delivery</h3>
          <p>
            A plan is only as good as its implementation. Upon your approval, your brand new
            signage will be ready for installation and a big reveal to the general public.
          </p>
        </div>
      </div>
    </section>
  );
}