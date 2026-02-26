import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      
      <Link to="/" className="logo-link">
        MarcosTz
      </Link>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
        <Link to="/serviços" onClick={() => setMenuOpen(false)}>Serviços</Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
      </nav>

    </header>
  );
};

export default Header;