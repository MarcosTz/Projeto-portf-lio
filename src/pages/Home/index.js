import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const highlights = [
  { title: "Entrega rápida", text: "Prazos simples e comunicação direta." },
  { title: "Design simples", text: "Layout bonito e fácil de usar." },
  { title: "Código limpo", text: "Organizado e fácil de manter." },
];

const projects = [
  {
    title: "Painel de vendas",
    description: "Painel com números importantes e filtros simples.",
    tags: ["React", "Front-end"],
  },
  
  {
    title: "Plataforma de pet shop",
    description: "plataforma com pets, buscas e informações sobre o pet.",
    tags: ["Aplicação web", "Back-end"],
  },
  {
    title: "Plataforma de Filmes",
    description: "Catálogo com busca e informações sobre os filmes.",
    tags: ["React", "Aplicação web"],
  },
];

const skills = [
  { name: "React", level: 90 },
  { name: "Front-end", level: 85 },
  { name: "Acessibilidade", level: 80 },
  { name: "Performance", level: 78 },
];

const processSteps = [
  { title: "Briefing", text: "A gente conversa e entende o que você precisa." },
  { title: "Protótipo", text: "Monto uma ideia de layout e ajusto com você." },
  { title: "Desenvolvimento", text: "Coloco o site/app no ar." },
  { title: "Entrega", text: "Reviso e faço os ajustes finais." },
];

const faqs = [
  {
    question: "Você trabalha com projetos completos?",
    answer: "Sim. Posso cuidar do design e do código.",
  },
  {
    question: "Qual o prazo médio?",
    answer: "Depende do tamanho. Projetos simples levam de 2 a 4 semanas.",
  },
  {
    question: "Você oferece manutenção?",
    answer: "Sim. Posso continuar cuidando depois da entrega.",
  },
];

const Home = () => {
  const [activeTag, setActiveTag] = useState("Todos");
  const [openFaq, setOpenFaq] = useState(0);

  const allTags = useMemo(() => {
    const tags = new Set(["Todos"]);
    projects.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "Todos") return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy fade-in">
            <span className="tag">Disponível para projetos</span>
            <h1>
              Faço sites e apps simples, rápidos e bonitos.
            </h1>
            <p>
              Transformo sua ideia em um site que funciona bem e é fácil de usar.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/contato">Quero seu contato</Link>
              <Link className="button secondary" to="/servicos">Ver o que faço</Link>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>+15</strong>
                <span>Projetos feitos</span>
              </div>
              <div>
                <strong>3 anos</strong>
                <span>Trabalhando com front-end</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Foco em clareza</span>
              </div>
            </div>
          </div>

          <div className="hero-card fade-in">
            <div className="hero-card-inner">
              <h3>O que você recebe</h3>
              <ul>
                <li>Visual simples e bonito</li>
                <li>Site leve e rápido</li>
                <li>Fácil de atualizar</li>
              </ul>
              <div className="hero-card-badges">
                <span className="tag">Layout limpo</span>
                <span className="tag">Código limpo</span>
                <span className="tag">SEO básico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <h2 className="section-title">Destaques</h2>
            <p className="section-subtitle">
              Resultado rápido com visual bonito.
            </p>
          </div>

          <div className="grid-3">
            {highlights.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div>
            <h2 className="section-title">Projetos em foco</h2>
            <p className="section-subtitle">
              Alguns trabalhos que já fiz.
            </p>
          </div>

          <div className="tag-group">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-button ${activeTag === tag ? "active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid-2">
            {filteredProjects.map((project) => (
              <article className="card project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container grid-2">
          <div>
            <h2 className="section-title">Minhas habilidades</h2>
            <p className="section-subtitle">
              Coisas que eu faço bem no dia a dia.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <h2 className="section-title">Processo simples e eficiente</h2>
            <p className="section-subtitle">
              Passo a passo rápido e sem complicação.
            </p>
          </div>

          <div className="grid-3">
            {processSteps.map((step, index) => (
              <div className="card" key={step.title}>
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div>
            <h2 className="section-title">Perguntas frequentes</h2>
            <p className="section-subtitle">
              Dúvidas comuns de quem quer começar.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <button
                key={item.question}
                type="button"
                className={`faq-item ${openFaq === index ? "open" : ""}`}
                onClick={() => setOpenFaq(index === openFaq ? -1 : index)}
              >
                <div className="faq-question">
                  <span>{item.question}</span>
                  <span>{openFaq === index ? "−" : "+"}</span>
                </div>
                {openFaq === index && <p>{item.answer}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
