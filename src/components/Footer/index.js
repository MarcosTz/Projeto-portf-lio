import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span>MarcosTz</span>
          <p>Sites e apps simples, rápidos e bonitos.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="socials">
          <a
            href="https://github.com/MarcosTz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/marcos-thomaz-rosa-6362a2248/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <button className="back-to-top" onClick={handleTop} type="button">
          <FaArrowUp /> Voltar ao topo
        </button>

        <p className="copyright">
          © {new Date().getFullYear()} MarcosTz. Feito com carinho.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
