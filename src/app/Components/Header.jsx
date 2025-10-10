'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const navItemsRef = useRef([]);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Logo animation: fade in and slide from left
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    );

    // Nav links animation: staggered fade-in and slide from right
    gsap.fromTo(
      navItemsRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.3,
      }
    );

    // Contact button animation: scale up and fade in
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.6 }
    );

    // Mobile menu animation when toggled
    if (isMenuOpen) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
      gsap.fromTo(
        navItemsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [isMenuOpen]);

  return (
    <div className="HeaderContainer">
      <div className="logoContainer" ref={logoRef}>
        <img src="/Images/logo.png" alt="logo" />
      </div>

  

      <ul className={`navContainer ${isMenuOpen ? 'active' : ''}`} ref={navRef}>
        <li ref={(el) => (navItemsRef.current[0] = el)}>
          <Link href="/">Home</Link>
        </li>
        <li ref={(el) => (navItemsRef.current[1] = el)}>
          <Link href="/about">About The Company</Link>
        </li>
        <li ref={(el) => (navItemsRef.current[2] = el)}>
          <Link href="/services">Our Services</Link>
        </li>
        <li ref={(el) => (navItemsRef.current[3] = el)}>
          <Link href="/work">Our Work</Link>
        </li>
      </ul>

    <div className='hamburgerContact'>
      <div className="contactContainer" ref={contactRef}>
        <button>Contact Us</button>
      </div>

          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      </div>
    </div>
  );
};

export default Header;