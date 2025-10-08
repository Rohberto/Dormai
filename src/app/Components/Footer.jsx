import Link from 'next/link';
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="/Images/logo.png" alt="Dormai Signs" className="footer-logo" />
          <p>
            We stand as a leading signage company in Nigeria.
             Dormai Signs Limited is uniquely equipped to address the diverse needs of our clients. 
             With over 30 years of experience delivering high-quality signage products and exceptional customer service, we are a top choice for signage and branding solutions in Nigeria.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Dormai</h3>
          <p>
            <span>📍</span> 24 Seriki Abass Crescent,<br />
            Off Osolo way, Ajao Estate, Lagos.
          </p>
          <p>
            <span>📞</span> 08023093389 | 07082228560 | 08183477837
          </p>
          <p>
            <span>✉️</span> <a href="mailto:dormaisigns@gmail.com">dormaisigns@gmail.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About The Company</Link>
        </li>
        <li>
          <Link href="/services">Our Services</Link>
        </li>
        <li>
          <Link href="/work">Our Work</Link>
        </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <span>·</span> <span>·</span> <span>·</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DormaiSigns Limited ©2025 - All Rights Reserved</p>
       
      </div>
    </footer>
  );
}