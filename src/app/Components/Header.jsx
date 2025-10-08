'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import '../styles/header.css';

const Header = () => {
  useEffect(() => {
    // Logo animation: fade in and slide from left
    gsap.fromTo(
      '.logoContainer',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    );

    // Nav links animation: staggered fade-in and slide from right
    gsap.fromTo(
      '.navContainer li',
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.3 }
    );

    // Contact button animation: scale up and fade in
    gsap.fromTo(
      '.contactContainer button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.6 }
    );
  }, []);

  return (
    <div className="HeaderContainer">
      <div className="logoContainer">
        <img src='/Images/logo.png' alt='logo'/>
      </div>

      <ul className="navContainer">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About The Company</Link>
        </li>
        <li>
          <Link href="/services">Our Services</Link>
        </li>
        <li>
          <Link href="/work">Our Work</Link>
        </li>
      </ul>

      <div className="contactContainer">
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Header;