'use client';

import Link from 'next/link';
import '../../styles/work/works.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Works = () => {
  const galleryRef = useRef(null);

const galleryItems = [
  { id: 1, title: "UBA", img: "/Images/works/uba/uba.jpg", images: ["uba.jpg", "uba2.jpeg", "uba3.jpeg", "uba4.jpeg", "uba5.jpeg"] },
  { id: 2, title: "Eterna", img: "/Images/works/eterna/eterna.jpg", images: ["eterna.jpg", "eterna1.jpeg"] },
  { id: 3, title: "Rainoil", img: "/Images/works/rainoil/rainoil.jpg", images: ["rainoil.jpg", "rainoil1.jpeg"] },
  { id: 4, title: "Transcorp", img: "/Images/works/transcorp/transcorp.jpg", images: ["transcorp.jpg", "transcorp2.jpeg", "transcorp3.jpeg", "transcorp4.jpeg"] },
  { id: 5, title: "Parallex Bank", img: "/Images/works/parallex/parallex.jpg", images: ["parallex.jpg", "parallex2.jpeg", "parallex3.jpeg"] },
  { id: 6, title: "Emadeb Energy", img: "/Images/works/emadeb/emadeb.jpg", images: ["emadeb.jpg", "emadeb2.jpeg", "emadeb3.jpg", "emadeb4.jpeg", "emadeb5.jpeg", "emadeb6.jpeg", "emadeb7.jpeg"] },
  { id: 7, title: "Total Energies", img: "/Images/works/Total/total.jpeg", images: ["total.jpeg","total1.jpeg", "total2.jpeg", "total3.jpeg", "total4.jpeg"] },
  { id: 8, title: "Sayo Silver", img: "/Images/works/sayo/sayo.jpeg", images: ["sayo.jpeg", "sayo1.jpeg", "sayo2.jpeg"] },
];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-card', {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="works-section">
      <div className="label">Our Projects</div>
      <h2 className="works-heading">Featured Works</h2>

      <div className="works-gallery" ref={galleryRef}>
        {galleryItems.map((item) => (
          <Link href={`/work/${item.id}`} key={item.id} className="work-card-link">
            <div className="work-card">
              <div className="work-image">
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className="work-title">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Works;