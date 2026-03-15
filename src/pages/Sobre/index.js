import React from "react";
import { Link } from "react-router-dom";
import "./sobre.css";

const values = [
  { title: "Clareza", text: "Falo simples e direto." },
  { title: "Capricho", text: "Cuido do visual e dos detalhes." },
  { title: "Evolução", text: "Aprendo e melhoro sempre." },
];

const timeline = [
  { year: "2022", text: "Comecei com projetos pessoais e estudos." },
  { year: "2023", text: "Primeiros clientes e mais prática." },
  { year: "2024", text: "Foquei em melhorar performance." },
  { year: "2025", text: "Mais experiência com sites e apps." },
];

const Sobre = () => {
  return (
    <main className="sobre">
      <section className="sobre-hero">
        <div className="container grid-2">
          <div>
            <span className="tag">Sobre mim</span>
            <h1 className="section-title">Olá, eu sou o Marcos Thomaz.</h1>
            <p className="section-subtitle">
              Sou desenvolvedor full-stack junior e gosto de fazer sites simples, rápidos e fáceis
              de usar. Quero transformar sua ideia em algo que funcione bem.
            </p>
          </div>
          <div className="sobre-card">
            <h3>Resumo</h3>
            <ul>
              <li>Front-end e Back-end na prática</li>
              <li>Comunicação simples</li>
              <li>Site leve e rápido</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">O que eu valorizo</h2>
          <div className="grid-3">
            {values.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <h2 className="section-title">Linha do tempo</h2>
          <div className="timeline-list">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span>{item.year}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
