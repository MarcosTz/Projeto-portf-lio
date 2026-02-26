import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="socials">
          <a 
            href="https://github.com/MarcosTz" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/marcos-thomaz-rosa-6362a2248/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} MarcosTz
        </p>

      </div>
    </footer>
  );
};

export default Footer;