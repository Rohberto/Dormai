'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/stats.css';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const statsRefs = useRef([]);

  useEffect(() => {
    statsRefs.current.forEach((statRef, index) => {
      const targetValue = [150, 100, 200, 30][index]; // Target values from the image
      const duration = 2; // Animation duration in seconds

      ScrollTrigger.create({
        trigger: statRef,
        start: 'top 100%', // Trigger when 80% of the element is in view
        onEnter: () => {
          gsap.fromTo(
            statRef.querySelector('.stat-number'),
            {
              innerText: 0,
              // Scramble effect: update text with random numbers
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
              snap: { innerText: 1 }, // Ensure it stops exactly at target
              onUpdate: () => {
                // Add '+' sign for all except the last one (30)
                const numberEl = statRef.querySelector('.stat-number');
                numberEl.innerText = index < 3 ? `${numberEl.innerText}+` : numberEl.innerText;
              },
              onComplete: () => {
                // Ensure final value is set correctly
                const numberEl = statRef.querySelector('.stat-number');
                numberEl.innerText = index < 3 ? `${targetValue}+` : targetValue;
              },
            }
          );
        },
        once: true, // Animation triggers only once
      });
    });
  }, []);

  const stats = [
    { label: 'Complete Projects', value: '150+' },
    { label: 'Team Members', value: '100+' },
    { label: 'Client Reviews', value: '200+' },
    { label: 'Winning Award', value: '30' },
  ];

  return (
    <section className="stats-section">
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
    </section>
  );
};

export default StatsSection;