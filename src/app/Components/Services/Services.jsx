"use client";
import React from "react";
import "../../styles/services/services.css";

const SignageDesign = () => {
  const services = [
    {
      id: 1,
      title: "Signage Design",
      description:
        "Crafting impactful and visually stunning signage, we bring Brand Dormai’s identity to life with custom-designed solutions. Our signage services combine innovative design with high-quality materials to create durable, eye-catching signs that enhance your brand’s visibility and leave a lasting impression.",
      image: "/dormai/team-work.jpeg"
    },
    {
      id: 2,
      title: "Branding",
      description:
        "Our business is built on three solid principles; Quality, Relationships and People. We do this by making certain that each signage produced from our factory is built to longevity. A lot of research, planning and reviews are deployed in building or maintaining our clients’ brand. To this effect, meeting our clients’ expectations is often not an effortless task. However, it is a task we have mastered and made part of our brand composition.",
      image: "/Images/Services/service-7.jpg",
    },
    {
      id: 3,
      title: "Consultation & Implementation",
      description:
        "We offer expert consultation to align your vision with strategic branding and signage solutions. Working closely with you, we provide end-to-end implementation, from concept development to flawless execution, ensuring Brand Dormai’s goals are met with precision and excellence.",
      image: "/Images/Services/consultation.jpg",
    },
  ];
  return (
    <section className="signage-section">
      <div className="top-text">
        <p className="label">WHAT WE DO</p>
        <p className="intro">
          We have developed a fail-proof brand re-positioning value-chain that
          encompasses a complete process. Beginning with just an idea,
          developing it to brand conceptualization, <strong>signage manufacture</strong> and
          presentation, and finally, to its installation and maintenance.
        </p>
      </div>

      <div className="signage-content">
        {services.map((service) => (
          <div className="service-block" key={service.id}>
            <div className="text-section">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="image-section">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignageDesign;