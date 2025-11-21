'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import SliderComponent from './SliderComponent';
import '../styles/banner.css';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Banner = () => {
  const slides = [
    { src: '/Images/bg-3.jpeg', label: '' }
  ];

  const branding = [
    { src: '/Images/brand1.jpg', label: 'Branding' },
    { src: '/Images/bg-2.jpeg', label: '' }
  ];

  const stats = [
    { label: 'Complete Projects', value: '150+' },
    { label: 'Team Members', value: '100+' },
    { label: 'Client Reviews', value: '200+' },
    { label: 'Winning Award', value: '30' },
  ];

  const statsRefs = useRef([]);
  const textContentRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (typeof window !== 'undefined') {
        // Animate text content
        gsap.from(textContentRef.current.querySelector('h1'), {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
        });
        gsap.from(textContentRef.current.querySelector('p'), {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power2.out',
          delay: 0.2,
        });

        // Animate buttons
        gsap.from(buttonContainerRef.current.querySelectorAll('.action-button'), {
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.4,
        });

        // Animate stats
        statsRefs.current.forEach((statRef, index) => {
          if (statRef) {
            const targetValue = [150, 100, 200, 30][index];
            const duration = 2;

            gsap.fromTo(
              statRef.querySelector('.home-stat-number'),
              { innerText: 0 },
              {
                innerText: targetValue,
                duration: duration,
                ease: 'power1.out',
                snap: { innerText: 1 },
                onUpdate: () => {
                  const numberEl = statRef.querySelector('.home-stat-number');
                  numberEl.innerText = index < 3 ? `${Math.floor(gsap.utils.interpolate(0, targetValue, gsap.getProperty(numberEl, 'innerText') / targetValue))}+` : Math.floor(gsap.utils.interpolate(0, targetValue, gsap.getProperty(numberEl, 'innerText') / targetValue));
                },
                onComplete: () => {
                  const numberEl = statRef.querySelector('.home-stat-number');
                  numberEl.innerText = index < 3 ? `${targetValue}+` : targetValue;
                },
              }
            );
          }
        });

        // Animate arrow
        if (arrowRef.current) {
          const tl = gsap.timeline({ repeat: -1 });
          tl.to(arrowRef.current, {
            x: 10,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          })
            .set(arrowRef.current, { x: 0, opacity: 1 })
            .to(arrowRef.current, {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: 'power2.in',
            });
        }
      }
    }, [textContentRef, buttonContainerRef]);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="banner-container">
      <div className="section section-right">
        <SliderComponent slides={[...slides, ...branding]} className="background-slider" />
      </div>
      <div className="section section-left">
        <div className="text-content" ref={textContentRef}>
          <h1>
            Dormai Signs: Premium <span>Branding</span> & <span>Signage</span>{' '}
            Solutions.
          </h1>
          <p>
            Crafting exceptional branding and signage, with over 30 years of expertise, We Blend
            Timeless Craftsmanship with Cutting-Edge Innovation to Deliver Bespoke Signage that
            Elevate Brands and Inspire Communities Worldwide.
          </p>
        </div>

        <div className="button-container" ref={buttonContainerRef}>
          <Link href="/work" className="action-button discover-button">
            Check Our Works <span ref={arrowRef}><FaLongArrowAltRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} color="#FFF" /></span>
          </Link>
          <Link href="/services" className="action-button quote-button">
            Discover Our Services
          </Link>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRefs.current[index] = el)}
              className="home-stat-item"
            >
              <h2 className="home-stat-number">{stat.value}</h2>
              <p className="home-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;