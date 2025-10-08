"use client";
import { useEffect } from 'react';
import "../../styles/about/cta.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  useEffect(() => {
    // Animate text on scroll
    gsap.from('.cta-text', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cta-container',
        start: 'top 80%',
        once: true,
      },
    });

    // Animate button on scroll
    gsap.from('.cta-button', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cta-container',
        start: 'top 80%',
        once: true,
      },
    });

    // Hover animation for button
    gsap.to('.cta-button', {
      scale: 1.1,
      duration: 0.3,
      paused: true,
    }).progress(0);

    document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.1, duration: 0.3 }));
      button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1, duration: 0.3 }));
    });
  }, []);

  const phoneNumber = '+2348035018457'; // Replace with your WhatsApp number
  const message = 'Hello! I’d like to get started with SignageMasters.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="cta-container">
      <div className="cta-text">
        We are in the business of <span className="highlight">breathing life into brands</span> and
        <span className="highlight"> repositioning them for success</span>. Talk to Dormai Signs Limited today!
      </div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
        Get Started
      </a>
    </section>
  );
}