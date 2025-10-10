'use client';

import Link from 'next/link';
import '../../styles/work/works.css';

const Works = () => {
  const galleryItems = [
    { id: 0, title: "TReception", img: "/Images/Services/manufacturing.jpg", description: "Modern reception signage with sleek design.", location: "Lagos, Nigeria" },
    { id: 1, title: "Eterna Fuel Pump", img: "/Images/Services/service-1.jpg", description: "Custom fuel pump branding with durable materials.", location: "Port Harcourt, Nigeria" },
    { id: 2, title: "Rainoil Fuel Station", img: "/Images/Services/service-2.jpg", description: "Fuel station branding with vibrant signage.", location: "Oghara, Delta State" },
    { id: 3, title: "UBA ATM", img: "/Images/Services/service-3.jpg", description: "ATM signage installation for enhanced visibility.", location: "Abuja, Nigeria" },
    { id: 4, title: "Tank & Timmy Restaurant", img: "/Images/Services/service-4.jpg", description: "Restaurant signage with unique aesthetic.", location: "Ikeja, Lagos" },
    { id: 5, title: "Eterna Fuel Station", img: "/Images/Services/service-5.jpg", description: "Fuel station branding with modern design.", location: "Warri, Delta State" },
    { id: 6, title: "Access Bank", img: "/Images/Services/service-6.jpg", description: "Bank signage for customer accessibility.", location: "Enugu, Nigeria" },
    { id: 7, title: "Abstract Geometric Sign", img: "/Images/Services/service-7.jpg", description: "Artistic geometric signage for creative spaces.", location: "Ibadan, Oyo State" },
    { id: 8, title: "Rest Room - Gents.", img: "/Images/Services/service-8.jpg", description: "Clear restroom signage for public facilities.", location: "Port Harcourt, Nigeria" },
  ];

  return (
    <section className="works-section">
      <div className="label">Our Projects</div>
      <h2 className="works-heading">Featured Works</h2>
      <div className="works-gallery">
        {galleryItems.map((item) => (
          <Link href={`/work/${item.id}`} key={item.id} className="work-card-link">
            <div className="work-card">
              <div className="work-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="work-content">
                <h3>{item.title}</h3>
                <p className="work-description">{item.description}</p>
                <p className="work-location">{item.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Works;