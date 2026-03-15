import React from "react";
import "./servicos.css";

const services = [
  {
    title: "Landing pages",
    description: "Página simples e direta, com visual limpo.",
  },
  {
    title: "Sites institucionais",
    description: "Site com seções básicas e navegação fácil.",
  },
  {
    title: "Aplicações web",
    description: "Tela com rotas e componentes reutilizáveis.",
  },
  {
    title: "Refatoração",
    description: "Melhoria de código e organização do projeto.",
  },
  {
    title: "Inclusão digital",
    description: "Sistema para todos(as) pessoas acessarem.",
  },
];

const Servicos = () => {
  return (
    <main className="servicos">
      <section className="servicos-hero">
        <div className="container">
          <h1 className="section-title">Serviços</h1>
          <p className="section-subtitle">
            Aqui eu mostro o que sei fazer e as áreas que tenho mais prática.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">O que eu faço</h2>
          <div className="grid-2">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servicos;
