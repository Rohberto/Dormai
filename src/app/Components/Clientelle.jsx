'use client';
import { useEffect, useRef, useState } from 'react';
import '../styles/client.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

export default function ClientelePage() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headerSecondRef = useRef(null);
  const accordionRefs = useRef({});

  // State to manage accordion open/close, defaulting Banking to true
  const [openSections, setOpenSections] = useState({
    banking: true,
    financial: false,
    oilGas: false,
    hospitality: false,
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animate label
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
              once: true,
            },
          }
        );

        // Animate subtitle
        gsap.fromTo(
          [headerSecondRef.current],
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
              once: true,
            },
          }
        );

        // Animate logos only on initial view
        Object.keys(openSections).forEach((section) => {
          const logos = sectionRef.current.querySelectorAll(`.logoGrid.${section}-grid .client-logo`);
          if (logos.length) {
            ScrollTrigger.create({
              trigger: sectionRef.current.querySelector(`.logoGrid.${section}-grid`),
              start: 'top 80%',
              once: true,
              onEnter: () => {
                gsap.fromTo(
                  logos,
                  { opacity: 0, y: 50 },
                  {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: 'power2.out',
                  }
                );
              },
            });
          }
        });

        // Initial accordion toggle animation (runs once on mount)
        Object.keys(openSections).forEach((section) => {
          const accordion = accordionRefs.current[section];
          if (accordion) {
            gsap.fromTo(
              accordion.querySelector('.logoGrid'),
              { height: 0, opacity: 0 },
              {
                height: openSections[section] ? 'auto' : 0,
                opacity: openSections[section] ? 1 : 0,
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                  if (!openSections[section]) accordion.querySelector('.logoGrid').style.height = '0';
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []); // Empty dependency array to run only on mount

  // Toggle accordion sections with animation, no re-trigger on view
  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const newState = { ...prev, [section]: !prev[section] };
      Object.keys(newState).forEach((s) => {
        const accordion = accordionRefs.current[s];
        if (accordion) {
          gsap.to(accordion.querySelector('.logoGrid'), {
            height: newState[s] ? 'auto' : 0,
            opacity: newState[s] ? 1 : 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => {
              if (!newState[s]) accordion.querySelector('.logoGrid').style.height = '0';
            },
          });
        }
      });
      return newState;
    });
  };

  // Sector logos
  const bankingLogos = [
    "/Images/logos/uba.png",
    "/Images/logos/access.svg",
    "/Images/logos/union.png",
    "/Images/logos/first.png",
    "/Images/logos/parallels.jpeg",
    "/Images/logos/fcmb.png",
    "/Images/logos/accion.png",
    "/Images/logos/lotus.png",
    "/Images/logos/titan.png",
  ];

  const financialLogos = [
    "/Images/logos/heirs-insurance.png",
    "/Images/logos/old-mutual.png",
    "/Images/logos/consolidated.png",
    "/Images/logos/anchor-insurance.png",
    "/Images/logos/african-prudential.jpeg",
    "/Images/logos/NEPC.png",
    "/Images/logos/ngx.png",
  ];

  const oilGasLogos = [
    "/Images/logos/rainoil.png",
    "/Images/logos/emadeb.png",
    "/Images/logos/totall.jpeg",
    "/Images/logos/eterna.png",
    "/Images/logos/a-e.png",
    "/Images/logos/transcorp.png",
    "/Images/logos/nestoil.png",
    "/Images/logos/seplat.png",
  ];

  const hospitalityLogos = [
    "/Images/logos/consolidated.png",
    "/Images/logos/transcorp-hilton.png",
    "/Images/logos/afriland.png",
    "/Images/logos/aedc.jpeg",
    "/Images/logos/tank&tummy.jpeg",
    "/Images/logos/royal.jpeg",
  ];

  return (
    <div className="client-container" ref={sectionRef}>
      <h2 className="label" ref={labelRef}>OUR CLIENTELE</h2>
      <div className="clientelle-content">
        <h1 className="subtitle" ref={headerSecondRef}>
          Hundreds of happy clients across a wide range of industries in
          <span className="highlight"> Nigeria, Africa </span>
          And Europe.
        </h1>

        <div className="accordion-container">
          {/* Banking Sector Accordion */}
          <div className="accordion-section" ref={(el) => (accordionRefs.current.banking = el)}>
            <h3 className="sector-title" onClick={() => toggleSection('banking')}>
              <span>BANKING SECTOR</span> <span>{openSections.banking ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}</span>
            </h3>
            <div className={`logoGrid banking-grid ${openSections.banking ? 'open' : ''}`}>
              {bankingLogos.map((item, i) => (
                <img className="client-logo" src={item} key={`banking-${i}`} alt="logo" />
              ))}
            </div>
          </div>

          {/* Financial Institution Accordion */}
          <div className="accordion-section" ref={(el) => (accordionRefs.current.financial = el)}>
            <h3 className="sector-title" onClick={() => toggleSection('financial')}>
              <span>Financial Institution</span> <span>{openSections.financial ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}</span>
            </h3>
            <div className={`logoGrid financial-grid ${openSections.financial ? 'open' : ''}`}>
              {financialLogos.map((item, i) => (
                <img className="client-logo" src={item} key={`financial-${i}`} alt="logo" />
              ))}
            </div>
          </div>

          {/* Oil & Gas Accordion */}
          <div className="accordion-section" ref={(el) => (accordionRefs.current.oilGas = el)}>
            <h3 className="sector-title" onClick={() => toggleSection('oilGas')}>
              <span>Oil & Gas</span> <span>{openSections.oilGas ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}</span>
            </h3>
            <div className={`logoGrid oil-gas-grid ${openSections.oilGas ? 'open' : ''}`}>
              {oilGasLogos.map((item, i) => (
                <img className="client-logo" src={item} key={`oilgas-${i}`} alt="logo" />
              ))}
            </div>
          </div>

          {/* Hospitality/Others Accordion */}
          <div className="accordion-section" ref={(el) => (accordionRefs.current.hospitality = el)}>
            <h3 className="sector-title" onClick={() => toggleSection('hospitality')}>
              <span>Hospitality/Others</span> <span>{openSections.hospitality ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}</span>
            </h3>
            <div className={`logoGrid hospitality-grid ${openSections.hospitality ? 'open' : ''}`}>
              {hospitalityLogos.map((item, i) => (
                <img className="client-logo" src={item} key={`hospitality-${i}`} alt="logo" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}