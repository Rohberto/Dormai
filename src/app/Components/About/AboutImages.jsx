'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutImages = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (typeof window !== 'undefined') {
        gsap.from('.about-images img', {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
        });
      }
    }, imageRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="about-images" ref={imageRef}>
      <img src="/dormai/team.jpeg" alt="Team photo" />
    </div>
  );
};

export default AboutImages;