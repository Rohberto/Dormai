import Link from 'next/link';
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="/Images/logo.png" alt="Dormai Signs" className="footer-logo" />
          <p>
           Dormai Signs Limited is the leading signage company in Lagos, Nigeria.
We are uniquely positioned to meet the needs of our clients. With our 30yrs experience, we are the top choice for signage and branding in Nigeria.
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
    <a href="https://instagram.com/dormaisigns" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      {/* Instagram SVG */}
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
    </a>
    <a href="https://facebook.com/dormaisigns" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      {/* Facebook SVG */}
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.595 1.324-1.326V1.326C24 .595 23.405 0 22.675 0"/></svg>
    </a>
    <a href="https://twitter.com/dormaisigns" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      {/* Twitter SVG */}
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.816 4.1 6.884 1.671 3.149c-.423.724-.666 1.562-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/></svg>
    </a>
  </div>
</div>
      </div>
      <div className="footer-bottom">
        <p>DormaiSigns Limited ©2025 - All Rights Reserved</p>
       
      </div>
    </footer>
  );
}