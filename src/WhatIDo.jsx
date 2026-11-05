import React, { useState } from 'react';
import CyberSphere3D from './components/CyberSphere3D';
import { ChevronDown, Cpu, Globe, Workflow } from 'lucide-react';

const SERVICES = [
  {
    id: 'ai-dev',
    title: 'AI DEVELOPER',
    subtitle: 'Building intelligent systems & AI solutions',
    description:
      'Developing AI agents, chatbots, and machine-learning models using Python, TensorFlow, and PyTorch. Specializing in LLMs, RAG, NLP, deep learning, and autonomous inference pipelines.',
    icon: <Cpu size={20} />,
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'RAG / Vector DBs', 'Gemini / OpenAI API', 'NLP & LLMs'],
  },
  {
    id: 'full-stack',
    title: 'FULL-STACK',
    subtitle: 'Modern web development & scalable applications',
    description:
      'Building responsive, high-performance web applications with React, Next.js, Node.js, FastAPI, and Django REST. Crafting clean database schemas with PostgreSQL, SQLite, and Redis caching.',
    icon: <Globe size={20} />,
    skills: ['React / Vite', 'FastAPI', 'Django & DRF', 'PostgreSQL / MariaDB', 'Redis', 'REST APIs'],
  },
  {
    id: 'mlops',
    title: 'MLOPS & DEVOPS',
    subtitle: 'Automated model lifecycle & infrastructure',
    description:
      'Automating end-to-end machine learning workflows with Docker containerization, Airflow DAG scheduling, MLflow experiment tracking, and live data drift monitoring.',
    icon: <Workflow size={20} />,
    skills: ['Docker', 'Apache Airflow', 'MLflow', 'Evidently AI', 'CI/CD Pipelines', 'Linux'],
  },
];

export default function WhatIDo() {
  const [expandedId, setExpandedId] = useState('ai-dev');

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="whatido" className="whatido-viewport-section" aria-label="What I Do">
      <div className="whatido-layout-grid">
        {/* Left Column: Big Bold Section Title */}
        <div className="whatido-title-column">
          <h2 className="whatido-giant-heading">
            WHAT<br />I DO
          </h2>
          <div className="hud-accent-line" />
          <p className="whatido-subtitle-note">
            Bridging algorithmic intelligence with production-ready software engineering.
          </p>
        </div>

        {/* Center Column: 3D AI Neural Core */}
        <div className="whatido-desk-column">
          <CyberSphere3D />
          <div className="desk-floor-glow" />
        </div>

        {/* Right Column: HUD Bracketed Cards */}
        <div className="whatido-cards-column">
          {SERVICES.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id} 
                className={`hud-card-bracketed ${isExpanded ? 'active' : ''}`}
              >
                {/* HUD Crosshair Corners */}
                <span className="hud-corner hud-tl" />
                <span className="hud-corner hud-tr" />
                <span className="hud-corner hud-bl" />
                <span className="hud-corner hud-br" />

                <div 
                  className="hud-card-header"
                  onClick={() => toggleExpand(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                >
                  <div className="hud-header-text">
                    <h3 className="hud-card-title">{item.title}</h3>
                    <p className="hud-card-subtitle">{item.subtitle}</p>
                  </div>
                  <button 
                    className="hud-expand-btn" 
                    aria-label={`Toggle ${item.title}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(item.id);
                    }}
                  >
                    <ChevronDown 
                      size={18} 
                      className={`hud-chevron ${isExpanded ? 'rotated' : ''}`} 
                    />
                  </button>
                </div>

                <div className={`hud-card-body ${isExpanded ? 'open' : ''}`}>
                  <p className="hud-card-desc">{item.description}</p>
                  <div className="hud-skills-wrap">
                    {item.skills.map((skill) => (
                      <span key={skill} className="hud-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


