import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

import FraudImg from './assets/Fraud.png';
import HMSImg from './assets/HMS.png';
import WeatherImg from './assets/Weatherapp.png';
import NyanoImg from './assets/Nyano.png';
import AiImg from './assets/Ai.jpeg';
import MusicImg from './assets/music.png';

const FILTERS = ['All', 'AI / ML', 'Full-Stack', 'Tools'];

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'Credit Card Fraud Detection',
    category: 'AI / ML',
    tools: 'Python, Scikit-learn, CatBoost, XGBoost, FastAPI',
    description:
      'End-to-end MLOps pipeline for real-time fraud detection with automated data drift monitoring, model retraining via Airflow DAGs, and a FastAPI inference endpoint.',
    image: FraudImg,
    github: 'https://github.com/Smritibasnet09',
  },
  {
    id: 2,
    number: '02',
    title: 'Health Management System',
    category: 'Full-Stack',
    tools: 'Django, Django REST, PostgreSQL, React',
    description:
      'Intelligent health platform with RAG-powered medical assistant, appointment scheduling, patient records management, and role-based access control.',
    image: HMSImg,
    github: 'https://github.com/Smritibasnet09',
  },
  {
    id: 3,
    number: '03',
    title: 'Weather Dashboard App',
    category: 'Full-Stack',
    tools: 'React, Vite, OpenWeather API, Chart.js',
    description:
      'Real-time weather dashboard with city search, 5-day forecasts, interactive charts, and responsive glass-morphism UI design.',
    image: WeatherImg,
    github: 'https://github.com/Smritibasnet09',
  },
  {
    id: 4,
    number: '04',
    title: 'Nyano — AI Chatbot',
    category: 'AI / ML',
    tools: 'Python, Gemini API, FastAPI, React',
    description:
      'Conversational AI assistant built with Google Gemini API, supporting context-aware multi-turn dialogue, streaming responses, and markdown rendering.',
    image: NyanoImg,
    github: 'https://github.com/Smritibasnet09',
  },
  {
    id: 5,
    number: '05',
    title: 'AI Image Classifier',
    category: 'AI / ML',
    tools: 'Python, TensorFlow, Keras, Streamlit',
    description:
      'Deep learning image classification model trained on custom datasets with transfer learning, real-time prediction UI, and model performance visualization.',
    image: AiImg,
    github: 'https://github.com/Smritibasnet09',
  },
  {
    id: 6,
    number: '06',
    title: 'Music Recommendation Engine',
    category: 'Tools',
    tools: 'Python, Pandas, Scikit-learn, Spotify API',
    description:
      'Content-based and collaborative filtering music recommendation system with playlist generation and feature similarity analysis.',
    image: MusicImg,
    github: 'https://github.com/Smritibasnet09',
  },
];

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="work-viewport-section" aria-label="Projects">
      <div className="work-glow-orb" />

      {/* Header */}
      <div className="work-header-center">
        <h2 className="work-main-title">
          My <span className="title-purple-gradient">Work</span>
        </h2>
        <p className="work-subtext">
          Production-grade projects spanning AI/ML pipelines, full-stack web apps, and developer tools.
        </p>

        {/* Filter Pills */}
        <div className="work-filter-pills">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`filter-pill-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="work-cards-grid">
        {filtered.map((project) => (
          <div key={project.id} className="work-showcase-card">
            {/* Top Row: Number & Title */}
            <div className="work-card-top-row">
              <span className="work-giant-number">{project.number}</span>
              <div className="work-title-group">
                <h3 className="work-item-name">{project.title}</h3>
                <span className="work-item-category">{project.category}</span>
              </div>
            </div>

            {/* Tools */}
            <div className="work-tools-block">
              <span className="tools-block-label">Tech Stack</span>
              <span className="tools-block-text">{project.tools}</span>
            </div>

            {/* Preview Image */}
            <div className="work-preview-frame">
              <img
                src={project.image}
                alt={project.title}
                className="work-preview-img"
                loading="lazy"
              />
              <div className="work-preview-overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-link-btn"
                >
                  <span>View Project</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="work-item-description">{project.description}</p>

            {/* Footer */}
            <div className="work-card-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="work-repo-link"
              >
                <Github size={14} />
                <span>Source Code →</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
