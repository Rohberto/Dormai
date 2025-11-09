'use client';
import { useEffect, useRef, useState } from 'react';
import '../styles/client.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Accordion from './Accordion';


export default function ClientelePage() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headerSecondRef = useRef(null);


  useEffect(() => {
    let ctx = gsap.context(() => {
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animate label
        gsap.fromTo(
          labelRef.current,
          { opacity: 0, y: 20, skewX: 5 },
          {
            opacity: 1,
            y: 0,
            skewX: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );

        // Animate subtitle
        gsap.fromTo(
          [headerSecondRef.current],
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
              once: true,
            },
          }
        );
      }
    }, sectionRef);

        
    return () => ctx.revert(); // Cleanup on unmount
  }, []); // Empty dependency array to run only on mount

  
  return (
    <div className="client-container" ref={sectionRef}>
      <h2 className="label" ref={labelRef}>OUR CLIENTELE</h2>
      <div className="clientelle-content">
        <h1 className="subtitle" ref={headerSecondRef}>
          Hundreds of happy clients across a wide range of industries in
          <span className="highlight"> Nigeria, Africa </span>
          And Europe.
        </h1>
        <Accordion sectionRef={sectionRef} />
        
      </div>
    </div>
  );
}