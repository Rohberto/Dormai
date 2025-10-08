"use client";
import { useEffect } from 'react';
import "../../styles/about/aboutbanner.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  useEffect(() => {
    // Animate title and text on scroll
    gsap.from('.about-title, .about-text', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top 80%',
        once: true,
      },
    });

    // Animate images on scroll
    gsap.from('.about-images img', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-images',
        start: 'top 80%',
        once: true,
      },
    });

    // Hover animation for WhatsApp button
    gsap.to('.whatsapp-button', {
      scale: 1.1,
      duration: 0.3,
      paused: true,
    }).progress(0);

    document.querySelectorAll('.whatsapp-button').forEach(button => {
      button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.1, duration: 0.3 }));
      button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1, duration: 0.3 }));
    });
  }, []);

  /*
<div className="about-images">
        <img src="/Images/about-1.jpg" alt="Worker cutting metal" />
        <img src="/Images/about-2.jpg" alt="Team photo" />
      </div>
  */
  
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us — <span className='highlight'>Dormai Signs</span> Limited</h1>
        <p className="about-text">
          We remain a leading signage company in Lagos, Nigeria. Dormai Signs Limited is uniquely
          positioned to meet the needs of its customers. With over 30 years of experience providing
          quality signage products and supreme customer service, we are the top choice for signage
          and branding in Nigeria.
        </p>
      </div>
     
    </section>
  );
}