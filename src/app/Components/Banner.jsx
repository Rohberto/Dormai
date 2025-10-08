'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import SliderComponent from './SliderComponent';
import '../styles/banner.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
  const slides = [
    { src: '/Images/sign.jpg', label: 'Signs' },
    { src: '/Images/sign2.jpg', label: 'Signs' },
    { src: '/Images/sign3.webp', label: 'Signs' },
  ];

  const branding = [
    { src: '/Images/brand1.jpg', label: 'Branding' },
    { src: '/Images/brand2.jpg', label: 'Branding' },
  ];

  const stats = [
    { label: 'Complete Projects', value: '150+' },
    { label: 'Team Members', value: '100+' },
    { label: 'Client Reviews', value: '200+' },
    { label: 'Winning Award', value: '30' },
  ];

  const statsRefs = useRef([]);
  const discoverButtonRef = useRef(null);
  const quoteButtonRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Debug: Check if arrowRef is defined
    console.log('arrowRef.current:', arrowRef.current);

    // Existing stats animation
    statsRefs.current.forEach((statRef, index) => {
      if (statRef) {
        const targetValue = [150, 100, 200, 30][index];
        const duration = 2;

        gsap.fromTo(
          statRef.querySelector('.stat-number'),
          {
            innerText: 0,
            onUpdate: () => {
              statRef.querySelector('.stat-number').innerText = Math.floor(
                gsap.utils.random(0, targetValue, 1)
              );
            },
          },
          {
            innerText: targetValue,
            duration: duration,
            ease: 'power1.out',
            snap: { innerText: 1 },
            onUpdate: () => {
              const numberEl = statRef.querySelector('.stat-number');
              numberEl.innerText = index < 3 ? `${numberEl.innerText}+` : numberEl.innerText;
            },
            onComplete: () => {
              const numberEl = statRef.querySelector('.stat-number');
              numberEl.innerText = index < 3 ? `${targetValue}+` : targetValue;
            },
          }
        );
      }
    });

    // Existing text and image animations
    gsap.fromTo(
      '.text-content h1',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.text-content p',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
    );
    gsap.fromTo(
      '.image-content img',
      { scale: 1.3 },
      { scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );
    gsap.fromTo(
      '.slide-image',
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );

    // Button animations
    gsap.fromTo(
      discoverButtonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.6 }
    );
    gsap.fromTo(
      quoteButtonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 }
    );

    // Arrow animation: slide right, fade out, reset, slide back, repeat
    if (arrowRef.current) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(arrowRef.current, {
        x: 10, // Slide right by 10px
        opacity: 0, // Fade out
        duration: 0.5,
        ease: 'power2.out',
      })
        .set(arrowRef.current, { x: 0, opacity: 1 }) // Reset to left and visible
        .to(arrowRef.current, {
          x: 0, // Slide back to original position
          opacity: 1,
          duration: 0.5,
          ease: 'power2.in',
        });
    }
  }, []);

  return (
    <div className="banner-container">
      <div className="section section-left">
        <div className="text-content">
          <h1>
            Dormai Signs: Premium <span>Branding</span> & <span>Signage</span>{' '}
            Solutions.
          </h1>
          <p>
           Crafting exceptional branding and signage solutions, with over 30 years of expertise,  We Blend Timeless Craftsmanship with Cutting-Edge Innovation to Deliver Bespoke Signage Solutions that Elevate Brands and Inspire Communities Worldwide.
          </p>
        </div>

        <div className="button-container">
          <Link href="/portfolio" className="action-button discover-button" ref={discoverButtonRef}>
            Discover Our Craft <span ref={arrowRef}><FaLongArrowAltRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} color="#FFF" /></span>
          </Link>
          <Link href="/contact" className="action-button quote-button" ref={quoteButtonRef}>
            Get a Custom Quote
          </Link>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRefs.current[index] = el)}
              className="stat-item"
            >
              <h2 className="stat-number">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section section-right">
        <div className="image-content">
          <img src="/Images/main.jpg" alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;