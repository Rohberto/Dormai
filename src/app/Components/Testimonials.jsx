import { useEffect, useRef, useState } from "react";
import "../styles/testimonials.css";

const testimonials = [
  {
    name: "NESTOIL",
    title: "HEAD, CORPORATE COMMUNICATIONS",
    rating: 5,
    text: "One of the most recent projects satisfactorily executed by Dormai Signs Limited was the efficient handling of the Nestoil rebranding project which required a total overhaul of all corporate identity materials across all locations. Dormai Signs managed Port Harcourt and Warri locations ahead of schedule. We are particularly impressed by Dormai's attention to detail, impressive design prowess and timely delivery of a high-quality signages.",
    img: "/Images/logos/nestoil.png",
  },
  {
    name: "Consolidated Hallmark Insurance Plc",
    title: "Divisional Director",
    rating: 4,
    text: "DORMAI SIGNS LIMITED is well known to us, having had a subsisting business relationship with our organization for a couple of years now, they have successfully handled the design, production, installation and where necessary the refurbishment of our internal and external signages in our different branch locations nationwide during this period, We have found their services to be satisfactory and we are pleased to recommend them for similar assignments.",
    img: "/Images/logos/consolidated.png",
  },

  {
    name: "Eterna",
    title: "Lead, Brand and Communications",
    rating: 3,
    text: "I am writing to express my utmost satisfaction and provide a strong recommendation for Dormai Signs, who has been an invaluable partner in handling the branding of our retail stations. Dormai Signs has consistently demonstrated a commitment to excellence and a keen attention to detail in all aspects of their work. Their ability to understand and execute our branding requirements has greatly contributed to the overall success of our retail stations.",
    img: "/Images/logos/eterna.png",
  },
  {
    name: "Rainoil Limited",
    title: "Brand and Corporate Communication Manager",
    rating: 4,
    text: "I am writing this letter to express my enthusiastic support for Dormai Sign Limited as a reliable and innovative signage vendor. As the Brand and Corporate Communication Manager for Rainoil Limited, I have had the pleasure of working closely with Dormai Sign Limited on several projects over the past 3 years. During this time, I have been consistently impressed by their exceptional level of service, attention to detail, and commitment to delivering high-quality signage solutions.",
    img: "/Images/logos/rainoil.png",
  }
];

function getCardsPerGroup() {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 760 ? 1 : 3;
  }
  return 3;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerGroup, setCardsPerGroup] = useState(getCardsPerGroup());

  useEffect(() => {
    function handleResize() {
      setCardsPerGroup(getCardsPerGroup());
      setCurrentIndex(0); // Optional: reset to first slide on resize
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalGroups = Math.ceil(testimonials.length / cardsPerGroup);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalGroups]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % totalGroups);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);

  const renderStars = (rating) => {
    const full = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return (
      <span className="stars">
        <span className="filled">{full}</span>
        <span className="empty">{empty}</span>
      </span>
    );
  };

  return (
    <section className="testimonials">
    <div className="label">Testimonials</div>
      <div className="overlay">
        <div className="header-row">
       
            <p className="subheading">
             We are very fortunate to have formed excellent partnerships, relationships and true friendships 
             with many of our clients. Here's a few words from some of our esteemed clients.
            </p>

            <div className="nav-buttons">
            <button onClick={prevSlide} className="arrow">❮</button>
            <button onClick={nextSlide} className="arrow">❯</button>
          </div>
        </div>
       

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalGroups }).map((_, groupIndex) => {
              const start = groupIndex * cardsPerGroup;
              const group = testimonials.slice(start, start + cardsPerGroup);
              return (
                <div className="testimonial-group" key={groupIndex}>
                  {group.map((item, i) => (
                    <div className="testimonial-card" key={i}>
                      {renderStars(item.rating)}
                      <p className="text">"{item.text}"</p>
                      <div className="author">
                        <img src={item.img} alt={item.name} />
                        <div>
                          <h4>{item.name}</h4>
                          <span>{item.title}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="dots">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}