"use client"
import React, {useEffect, useRef} from 'react';
import "../styles/intro.css";
const Intro = ({tl}) => {
      const introRef = useRef(null);

  useEffect(() => {
        // Step 2: Blob morph background
    tl.fromTo(
      ".intro-blob",
      { scale: 0, opacity: 0 },
      { scale: 1.5, opacity: 0.8, duration: 1.2 },
      "-=0.6"
    );
    // Step 1: Logo fade in
    tl.to(".intro-logo", { opacity: 1, scale: 1, duration: 1 });



    // Step 3: Text reveal
    tl.to(".intro-text span", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
    });

    // Step 4: Collapse intro into site
    tl.to(".intro", {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.5,
    });

    // Clean up intro div after animation
    tl.set(".intro", { display: "none" });
  }, []);
  return (
     <div ref={introRef} className="intro">
        <div className="intro-blob"></div>
        <h1 className="intro-logo">Dormai</h1>
        <h2 className="intro-text">
          {"Quality Prints at Your Fingertips".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h2>
      </div>
  )
}

export default Intro