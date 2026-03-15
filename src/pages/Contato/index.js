import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contato.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    objetivo: "",
    mensagem: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatus("*Preenche nome, e-mail e mensagem.*");
      return;
    }
    setStatus("Mensagem pronta! Pode copiar e mandar no e-mail ou WhatsApp.");
  };

  return (
    <main className="contact-container">
      <section className="contact-hero">
        <div>
          <h1 className="section-title">Entre em contato</h1>
          <p className="section-subtitle">
            Me fala do seu projeto e eu te respondo rapidinho.
          </p>
        </div>
      </section>

      <section className="contact-grid">
        <div className="contact-info card">
          <h2>Contato rápido</h2>

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
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          <h2>Bora começar</h2>

          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome"
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@exemplo.com"
            />
          </label>

          <label>
            Objetivo
            <input
              type="text"
              name="objetivo"
              value={formData.objetivo}
              onChange={handleChange}
              placeholder="Site, app, landing..."
            />
          </label>

          <label>
            Mensagem
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Me conta um pouco do que você precisa"
              rows="4"
            />
          </label>

          <button className="button primary" type="submit">Enviar</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
