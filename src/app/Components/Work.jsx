"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from "next/link";
import "../styles/works.css";
gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { title: "TReception", img: "/Images/Services/manufacturing.jpg" },
  { title: "Eterna Fuel Pump", img: "/Images/Services/service-1.jpg" },
  { title: "Rainoil Fuel station", img: "/Images/Services/service-2.jpg" },
  { title: "UBA ATM", img: "/Images/Services/service-3.jpg" },
  { title: "Tank & Timmy Restaurant", img: "/Images/Services/service-4.jpg" },
  { title: "Eterna Fuel Station", img: "/Images/Services/service-5.jpg" },
  { title: "Access Bank", img: "/Images/Services/service-6.jpg" },
  { title: "Abstract Geometric Sign", img: "/Images/Services/service-7.jpg" },
  { title: "Rest Room - Gents.", img: "/Images/Services/service-8.jpg" },
];

const Works = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const buttonRef = useRef(null);
   const sliderRef = useRef(null);
     const arrowRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (newIndex) => {
    if (!trackRef.current) return;
    const slides = trackRef.current.children;
    const slideWidth = slides[0].offsetWidth + 24; // +gap
    trackRef.current.scrollTo({
      left: newIndex * slideWidth,
      behavior: "smooth",
    });
    setIndex(newIndex);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ourwork-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true
        },
      });

      gsap.from(".ourwork-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          once: true
        },
      });
    }, sectionRef)
      if (buttonRef.current && sliderRef.current) {
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
        { left: 'calc(100% - 83px)', duration: 0.8, ease: 'power2.out' } // 40px is approx. width of circle
      ).fromTo(
        buttonRef.current.querySelector('.button-text'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3' // Overlap with slide animation
      );
    }
    return () => ctx.revert();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= galleryItems.length) {
          scrollToIndex(0);
          return 0;
        } else {
          scrollToIndex(next);
          return next;
        }
      });
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ourwork-section" ref={sectionRef}>
      <div className="ourwork-header">
        <div>
          <p className="label">OUR WORKS</p>
          <h2 className="ourwork-heading">
            Eye-catching signs that convey your message and make the best
            first-impression!
          </h2>
        </div>

        <div className="ourwork-arrows">
          <button
            onClick={() => scrollToIndex(Math.max(index - 1, 0))}
            disabled={index === 0}
          >
            &#8592;
          </button>
          <button
            onClick={() =>
              scrollToIndex(Math.min(index + 1, galleryItems.length - 1))
            }
            disabled={index === galleryItems.length - 1}
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="ourwork-slider">
        <div className="ourwork-track" ref={trackRef}>
          {galleryItems.map((item, i) => (
            <div key={i} className="ourwork-card">
              <img src={item.img} alt={item.title} />
              <p className="ourwork-label">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
        <div className="button-cont">
      <div className="service-button-container" ref={buttonRef}>
        <div className="button-slider" ref={sliderRef}><span ref={arrowRef}><FaLongArrowAltRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} color="#fff" size={36}/></span></div>
        <Link href="/work" className="button-text">See More Of Our Works</Link>
      </div>
      </div>
    </section>
  );
};

export default Works;
