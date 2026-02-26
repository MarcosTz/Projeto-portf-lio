import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contato.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Entre em Contato</h1>

      <div className="contact-info">
        
        <a 
          href="https://wa.me/5511966040512" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp: (11) 96604-0512
        </a>

        <a href="mailto:marcostzrosa@gmail.com">
          <FaEnvelope /> marcostzrosa@gmail.com
        </a>

        <p>
          <FaMapMarkerAlt /> Rua das Palmeiras, 247 - Vila Aurora  
          <br /> São Paulo - SP
        </p>

      </div>

      <div className="map-container">
        <iframe
          title="Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7737591112736!2d-46.54026502509407!3d-23.648271978740237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42c02b2de2b9%3A0x8940ff6dad0d508a!2sR.%20das%20Palmeiras%2C%20247%20-%20Jardim%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009080-160!5e0!3m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;