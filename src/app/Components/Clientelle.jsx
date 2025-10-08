import { useEffect, useRef } from 'react';
import '../styles/client.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClientelePage() {
         const headerSecondRef = useRef(null);
           const labelRef = useRef(null);
             const sectionRef = useRef(null);
  useEffect(() => {
    gsap.from('.logo', {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.logoGrid',
        start: 'top 80%',
        once: true
      },
    });
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
          once: true
        },
      }
    );
  }, []);

  const logos = [
    "/Images/logos/access.svg",
    "/Images/logos/accion.png",
    "/Images/logos/afriland.png",
    "/Images/logos/consolidated.png",
    "/Images/logos/emadeb.png",
    "/Images/logos/fbn.png",
    "/Images/logos/fcmb.png",
    "/Images/logos/first.png",
     "/Images/logos/lotus.png",
      "/Images/logos/NBCC.png",
       "/Images/logos/NEPC.png",
        "/Images/logos/nestoil.png",
         "/Images/logos/ngx.png",
          "/Images/logos/NIA.png",
           "/Images/logos/rainoil.png",
            "/Images/logos/titan.png",
             "/Images/logos/uba.png"
  ]
  return (
    <div className="client-container" ref={sectionRef}>
      <h2 className="label" ref={labelRef}>OUR CLIENTELE</h2>
      <div className="clientelle-content">
      <h1 className="subtitle" ref={headerSecondRef}>
        Hundreds of happy clients across a wide range of industries in
        <span className="highlight"> Nigeria, Africa </span>
         And Europe.
      </h1>
      <div className="logoGrid">
        {
            logos.map((item, i) => (
                 <img className="logo uba" src={item} key={i} alt="logo" />
            ))
        }
      </div>
      </div>
    </div>
  );
}