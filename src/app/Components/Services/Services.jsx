"use client";
import React from "react";
import "../../styles/services/services.css";

const SignageDesign = () => {
  return (
    <section className="signage-section">
      <div className="top-text">
        <p className="highlight">WHAT WE DO</p>
        <p className="intro">
          We have developed a fail-proof brand re-positioning value-chain that
          encompasses a complete process. Beginning with just an idea,
          developing it to brand conceptualization, <strong>signage manufacture</strong> and
          presentation, and finally, to its installation and maintenance.
        </p>
      </div>

      <div className="signage-content">
        <div className="text-section">
          <h2>Signage Design</h2>
          <p>
            At Goldfire, we uphold your <strong>brand</strong> image through
            professional, well-designed signage that reflects your business
            vision and goals. With 2 decades worth of experience in helping
            small and large businesses grow, we are your top choice for a
            signage and branding company.
          </p>

          <p>
            Creativity and exclusivity are a part of our DNA. We offer fully
            customizable services to provide you with designs that are unique to
            you and your journey. With our client engagement processes, we work
            closely with you at every step of the way to bring your ideas to
            life. Whatever path you decide to take with us, be it signage
            production and installation, branding or simply our consultation
            services, we pledge to add value to the visibility of your brand.
          </p>

          <button className="contact-btn">Contact Goldfire</button>
        </div>

        <div className="image-section">
          <img src="/heirs-signage.jpg" alt="Heirs Insurance Signage" />
        </div>
      </div>
    </section>
  );
};

export default SignageDesign;
