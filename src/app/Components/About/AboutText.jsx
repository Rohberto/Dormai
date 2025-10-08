"use client";
import { useEffect } from 'react';
import '../../styles/about/aboutText.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  useEffect(() => {
    // Animate history section on scroll
    gsap.from('.history-section', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.history-section',
        start: 'top 80%',
        once: true,
      },
    });

    // Animate clientele section on scroll
    gsap.from('.clientele-section', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.clientele-section',
        start: 'top 80%',
        once: true,
      },
    });

 
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
  ];
  const memberships = [
"/Images/membership/apcon.jpg",
"/Images/membership/ISA.png",
"/Images/membership/iod.webp",
"/Images/membership/NBCC.png",
"/Images/membership/fate.jpeg"
  ];

  return (
    <section className="who-we-are-container">
      <h2 className="who-we-are-title">WHO WE ARE</h2>

    <div className="section history-section">
        <h1 className="section-title">Introduction</h1>
        <p>
    Dormai Signs Limited is an organisation set up
    and run to provide highly professional and
    endearing services in the Branding and Sign
    making sector of the economy. We have a
    combined working experience of over 30 years
    in the sign making industry. Our key watch
    word is meeting and surpassing our clients’
    expectations.
        </p>
        <p>
         We know the importance of being noticed by
        the discerning public and our goal and aim is
        to present your brand in the most effective,
        efficient and impactful way. <br/>
        We have seasoned professionals and state of
the art machines to develop, execute and
manufacture your signs.
        </p>
      </div>

      <div className="section history-section">
        <h1 className="section-title">Our History & Journey</h1>
        <p>
          Dormai Signs Limited was born out of a clear vision in March 2001. Starting out
          with a staff strength of just five dedicated men and women, we have grown to become the
          leading signage, branding and graphics communications company in Nigeria. Dormai now
          boasts of fully equipped technology-driven metal and plastic fabrication factories and
          a staff strength of 100.
        </p>
        <p>
          Through hard work and consistency, we have continued to work with various Nigerian and
          international organizations to bring their brands' creative visions to life. Our primary
          focus is on the primary elements that assist organizations to offer themselves to the
          receiving public. We basically help your clients see you the way you see yourself. Our
          primary services include Signage design, production and installation, Brand Consultancy
          and Warehousing.
        </p>
      </div>
      <div className=" section clientele-section">
        <h1 className="section-title">Our Clientelle</h1>
        <p>
          We have acquired in our client arsenal, a long list of industry performers across all
          major business sectors in the country with a growing list of international clients.
        </p>
        <p>
          In the Oil, Gas and Energy sectors, we are proud that top players like NESTOIL LTD, RAINOIL, T-TIME PETROLEUM, TOTALENGIES, EMADEB ENERGY 
         have entrusted us with their branding, signage design, installation and
          maintenance needs.
        </p>
        <p>
          In the Finance sector, we have been privileged to serve all major commercial banks and
          leading insurance companies in Nigeria such as ACCESS BANK PLC, UBA PLC ,FCMB PLC, FIRST BANK PLC, ACCION MICROFINANCE BANK, TITAN TRUST BANK, LOTUS BANK, NGX, AFRILAND PROPERTIES LTD, CONSOLIDATED HALLMARK INSURANCE PLC, AXAMansard, LEADWAY ASSURANCE PLC and many more.
        </p>
        <p>
          Dormai SIgns Limited remains a key player in the deployment and maintenance
          of signage and branding.
        </p>

        <div className="AboutlogoGrid">
        {
            logos.map((item, i) => (
                 <img className="logo" src={item} key={i} alt="logo" />
            ))
        }
      </div>
      </div>

<div className="section membership-section">
        <h1 className="section-title">Memberships & Accreditations</h1>
        <p>
           At Dormai Signs Limited, our commitment to excellence extends beyond our projects to our active participation in prestigious professional bodies. We are proud members of the Advertising Practitioners Council of Nigeria (APCON), where we contribute to shaping industry standards and promoting ethical advertising practices across the nation. Our affiliation with the International Signs Association (ISA) connects us to a global network, allowing us to stay at the forefront of innovative signage solutions and exchange best practices worldwide. Additionally, our membership in the Institute of Directors (IOD) reflects our dedication to strong corporate governance and leadership development, ensuring our strategic vision aligns with top-tier business principles.
        </p>
        <p>
            We also collaborate with the Nigerian British Chambers of Commerce (NBCC), fostering valuable partnerships between Nigerian and British businesses to enhance trade and economic growth. Our involvement with the Fate Foundation supports entrepreneurial growth by providing mentorship and resources to aspiring business leaders, while our association with the Institute of Attitudinal Change Managers underscores our focus on cultivating a positive and progressive workplace culture. These memberships not only enrich our expertise but also reinforce our position as a trusted leader in signage, branding, and graphics communications in Nigeria.
        </p>
         <div className="AboutlogoGrid">
        {
            memberships.map((item, i) => (
                 <img className="logo" src={item} key={i} alt="logo" />
            ))
        }
      </div>
</div>

<div className="section">
        <h1 className="section-title">Mission & Vision</h1>
     <p>At Dormai Signs Limited, we are driven by a profound commitment to elevate our clients’ presence and impact in their respective markets. Our vision is to establish ourselves as a world-class signage company, renowned for our unwavering dedication to excellence. We aspire to set the gold standard in the industry by delivering innovative, high-quality signage and branding solutions that resonate with global benchmarks, while fostering a culture of continuous improvement and creativity within our team.
<br/>
<br/>
Our mission is to make our clients truly visible, ensuring their brands stand out in a competitive landscape. We achieve this by leveraging over two decades of expertise to craft tailored signage products and branding strategies that reflect each client’s unique identity and vision. With a focus on supreme customer service, cutting-edge technology, and sustainable practices, we are committed to building lasting partnerships that empower our clients to thrive. By integrating passion, precision, and professionalism into every project, we aim to be the top choice for signage and branding solutions across Nigeria and beyond, contributing to the success and recognition of every organization we serve.</p>
</div>
    </section>
  );
}