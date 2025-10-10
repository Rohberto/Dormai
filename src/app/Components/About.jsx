'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import '../styles/about.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
   const labelRef = useRef(null);
  const cardRefs = useRef([]);
  const numberRefs = useRef([]);
   const paraRef = useRef(null);
     const headerSecondRef = useRef(null);
      const buttonRef = useRef(null);
  const sliderRef = useRef(null);
    const arrowRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  // Animation for label
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
          once: true
        },
      }
    );
    gsap.fromTo(
      [headerSecondRef.current, paraRef.current],
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
  // Animation for header and paragraph
    gsap.fromTo(
      [headerRef.current, paraRef.current],
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

    // Animate cards
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 100%',
            once: true
          },
          delay: 0.2 * index, // Stagger effect
        }
      );
    });

    // Animate numbers with scramble effect
    numberRefs.current.forEach((number, index) => {
      const targetValue = [15, 200, 50][index]; // Target values for each card
      gsap.fromTo(
        number,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: 'none',
          snap: { innerText: 1 },
          onUpdate: () => {
            number.innerText = Math.floor(
              gsap.utils.random(0, targetValue, 1)
            );
          },
          onComplete: () => {
            number.innerText = targetValue + (index < 1 ? '+' : '');
          },
          scrollTrigger: {
            trigger: number,
            start: 'top 100%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

        // Animation for button
     if (buttonRef.current && sliderRef.current) {
    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 768px)": function() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 80%',
            once: true
          },
        });
        tl.fromTo(
          sliderRef.current,
          { left: '-100%' },
          { left: 'calc(100% - 83px)', duration: 0.8, ease: 'power2.out' }
        ).fromTo(
          buttonRef.current.querySelector('.button-text'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
      },
      // Mobile
      "(max-width: 767px)": function() {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 80%',
            once: true
          },
        });
        tl.fromTo(
          sliderRef.current,
          { left: '-100%' },
          { left: 'calc(100% - 60px)', duration: 0.8, ease: 'power2.out' } // Adjust 50px as needed for mobile
        ).fromTo(
           buttonRef.current.querySelector('.button-text'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
      }
    });
  }

  // Cleanup on unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  const aboutData = [
    { title: 'Years of Experience', value: 15, description: 'Crafting signs with Indigenous wisdom for over a decade.' },
    { title: 'Projects Completed', value: 200, description: 'Transforming brands with innovative signage solutions.' },
    { title: 'Team Members', value: 50, description: 'Skilled artisans and innovators dedicated to excellence.' },
  ];

  return (
    <section className="about-section" ref={sectionRef}>
        <div className="label" ref={labelRef}>About Us</div>
      <h2 ref={headerRef}> At <span>Dormai</span>, We are dedicated to making our clients <span>stand out</span> through exceptional <span>signage solutions</span>, driven by our commitment to building a world-class company rooted in excellence.</h2>
        <div className="about-sections">
     <div className="about-section-right">
        <img src='/Images/about.jpg' alt='ceo images'/>
     </div>

     
     <div className='about-section-left'>
      
      
      <div className="about-header-section">
        <h3 ref={headerSecondRef}>Crafting <span>Legacies</span>, One <span>Sign</span> at a Time</h3>
        <p ref={paraRef}>Dormai Signs Limited is an organization set up and run to provide highly professional and endearing services in the Branding and Sign Making sector of the economy.
          <br/>
          We have a combined working experience of over 30 years in the sign making industry.
          Our key watch word is meeting and surpassing our clients expectations.
          <br/>
          <br/>
       Creativity and exclusivity are woven into our DNA. We deliver fully customizable services, crafting designs that are uniquely yours—tailored to your brand's story and journey. Through our collaborative engagement process, we partner closely with you at every stage to transform your vision into reality. No matter the path—signage production and installation, comprehensive branding, or targeted consultations—we're committed to amplifying your brand's visibility with exceptional value.
        </p>
      </div>

     <div className="button-cont">
      <div className="service-button-container" ref={buttonRef}>
        <div className="button-slider" ref={sliderRef}><span ref={arrowRef}><FaLongArrowAltRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} color="#2F3231" size={36}/></span></div>
        <Link href="/about" className="button-text">Learn More About Us</Link>
      </div>
      </div>

      </div>
      </div>
    </section>
  );
};

export default About;