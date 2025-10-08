import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '+2348023093389'; // Replace with your WhatsApp number (include country code, e.g., +234 for Nigeria)
  const message = 'Hello! How can We assist you today?'; // Optional pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FaWhatsapp size={24}/> WhatsApp Us
    </a>
  );
}