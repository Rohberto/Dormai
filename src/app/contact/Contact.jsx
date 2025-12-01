import ContactForm from '../Components/ContactForm';
import './contact.css';

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p className="subtitle">
            Email, call, or complete the form to get in touch with our team.
          </p>

          <div className="contact-details">
            <a href="mailto:hello@yourdomain.com" className="email-link">
              hello@yourdomain.com
            </a>
            <p className="phone">+1 (555) 123-4567</p>
          </div>

          <div className="support-grid">
            <div className="support-item">
              <h3>Customer Support</h3>
              <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div className="support-item">
              <h3>Feedback and Suggestions</h3>
              <p>We value your feedback and are continuously working to improve. Your input is crucial in shaping the future of our product.</p>
            </div>
            <div className="support-item">
              <h3>Media Inquiries</h3>
              <p>For media-related questions or press inquiries, please contact us at <a href="mailto:press@yourdomain.com">press@yourdomain.com</a></p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form-card">
          <div className="form-header">
            <h2>Get in Touch</h2>
            <p>You can reach us anytime</p>
          </div>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}