"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from "next/link";
import "../styles/works.css";
gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { title: "UBA", img: "/Images/works/uba/uba.jpg", images: ["uba.jpg", "uba2.jpeg", "uba3.jpeg", "uba4.jpeg", "uba5.jpeg"] },
  { title: "Eterna", img: "/Images/works/eterna/eterna.jpg", images: ["eterna.jpg", "eterna1.jpeg"] },
  { title: "Rainoil", img: "/Images/works/rainoil/rainoil.jpg", images: ["rainoil.jpg", "rainoil1.jpeg"] },
  { title: "Transcorp", img: "/Images/works/transcorp/transcorp.jpg", images: ["transcorp.jpg", "transcorp2.jpeg", "transcorp3.jpeg", "transcorp4.jpeg"] },
  { title: "Parallex Bank", img: "/Images/works/parallex/parallex.jpg", images: ["parallex.jpg", "parallex2.jpeg", "parallex3.jpeg"] },
  { title: "Emadeb Energy", img: "/Images/works/emadeb/emadeb.jpg", images: ["emadeb.jpg", "emadeb2.jpeg", "emadeb3.jpg", "emadeb4.jpeg", "emadeb5.jpeg", "emadeb6.jpeg", "emadeb7.jpeg"] },
  { title: "Total Energies", img: "/Images/works/Total/total.jpeg", images: ["total.jpeg","total1.jpeg", "total2.jpeg", "total3.jpeg", "total4.jpeg"] },
  { title: "Sayo Silver", img: "/Images/works/sayo/sayo.jpeg", images: ["sayo.jpeg", "sayo1.jpeg", "sayo2.jpeg"] },
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
