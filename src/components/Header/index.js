import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
        <NavLink to="/" onClick={() => setMenuOpen(false)} end>
          Início
        </NavLink>
        <NavLink to="/sobre" onClick={() => setMenuOpen(false)}>
          Sobre
        </NavLink>
        <NavLink to="/servicos" onClick={() => setMenuOpen(false)}>
          Serviços
        </NavLink>
        <NavLink to="/contato" onClick={() => setMenuOpen(false)}>
          Contato
        </NavLink>
        
      </nav>
    </header>
  );
};

export default Header;
