'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLongArrowAltRight } from 'react-icons/fa';
import '../styles/services.css';
import Link from 'next/link';

const Services = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);
  const cardRefs = useRef([]);
  const buttonRef = useRef(null);
  const sliderRef = useRef(null);
    const arrowRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
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

    // Animation for service cards and images
    cardRefs.current.forEach((card, index) => {
      if (card) {
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
              start: 'top 80%',
              once: true
            },
          }
        );

        const image = card.querySelector('.service-image img');
        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0, scale: 1.3, rotation: -5 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                once: true
              },
            }
          );
        }
      }
    });

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
  const services = [
    {
      title: 'Manufacturing',
      description: 'Our state-of-the-art facility crafts premium signs with Indigenous-inspired artistry, blending tradition with innovative techniques.',
      image: '/Images/Services/manufacturing.jpg', // Replace with your image path
    },
    {
      title: 'Installation',
      description: 'Our licensed team delivers expert installation worldwide, using specialized equipment to ensure the highest quality for your signage.',
      image: '/Images/Services/installation.jpg', // Replace with your image path
    },
    {
      title: 'Maintenance',
      description: 'We provide reliable upkeep and support, rooted in our commitment to community and enduring craftsmanship.',
      image: '/Images/Services/maintenance.jpeg', // Replace with your image path
    },
  ];

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="label" ref={labelRef}>Quality Service</div>
      <div className="services-header-section">
        <h3 ref={headerRef}>We Speak Sign Language and Cladding too.</h3>
        <p ref={paraRef}>
          We know the importance of being noticed by the discerning public and our goal and aim is to present your brand in the most effective, efficient and impactful way.
          <br/>
          We have seasoned professionals and state of the art machines to develop, execute and manufacture your signs.
        </p>
      </div>
      <div className="services-collection">
        {services.map((service, index) => (
          <div key={index} className="service-card" ref={(el) => (cardRefs.current[index] = el)}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="button-cont">
      <div className="service-button-container" ref={buttonRef}>
        <div className="button-slider" ref={sliderRef}><span ref={arrowRef}><FaLongArrowAltRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} color="#2F3231" size={36}/></span></div>
        <Link href="/services" className="button-text">View Our Services</Link>
      </div>
      </div>
    </section>
  );
};

export default Services;