import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  ShieldAlert,
  Activity,
  CheckCircle2,
  FolderGit2,
} from 'lucide-react';

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
    title: 'Credit Card Fraud Detection System',
    category: 'AI / ML',
    tagline: 'End-to-end MLOps pipeline with automated drift monitoring',
    tools: 'Python, CatBoost, XGBoost, Scikit-learn, FastAPI, Evidently AI, Airflow, Docker',
    description:
      'Production-ready financial fraud prevention architecture engineered to classify anomalous credit card transactions with high recall under severe class imbalance.',
    highlights: [
      'Engineered an ensemble decision pipeline utilizing CatBoost and SMOTE oversampling, achieving a 98.4% ROC-AUC score on real transaction datasets.',
      'Implemented real-time data drift monitoring using Evidently AI to calculate distribution shift metrics on incoming payment payloads.',
      'Configured scheduled Apache Airflow DAGs to trigger model retraining whenever feature drift exceeds predefined statistical confidence thresholds.',
      'Packaged the inference engine into an asynchronous FastAPI microservice containerized with Docker, maintaining sub-18ms prediction latency.',
    ],
    image: FraudImg,
    github: 'https://github.com/Smritibasnet09',
    metrics: { accuracy: '98.4% ROC-AUC', latency: '< 18ms', status: 'Production-Ready' },
  },
  {
    id: 2,
    number: '02',
    title: 'Intelligent Health Management Platform',
    category: 'Full-Stack',
    tagline: 'Clinical operations platform with context-aware RAG medical assistant',
    tools: 'Django, Django REST Framework, PostgreSQL, React, ChromaDB, Gemini API',
    description:
      'Comprehensive healthcare administration platform combining hospital patient management with a retrieval-augmented generation assistant for preliminary clinical inquiry.',
    highlights: [
      'Built a complete hospital management dashboard supporting doctor scheduling, patient clinical histories, and pharmacy inventory tracking.',
      'Integrated a RAG-powered conversational medical assistant indexing verified clinical guidelines in ChromaDB to prevent hallucination.',
      'Implemented secure JWT-based Role-Based Access Control (RBAC) separating permissions for doctors, nursing staff, patients, and administrators.',
      'Designed a normalized PostgreSQL relational database schema with indexed foreign keys ensuring ACID compliance across financial transactions.',
    ],
    image: HMSImg,
    github: 'https://github.com/Smritibasnet09',
    metrics: { auth: 'JWT / RBAC', db: 'PostgreSQL ACID', rag: 'ChromaDB' },
  },
  {
    id: 3,
    number: '03',
    title: 'Weather Analytics & Forecasting Dashboard',
    category: 'Full-Stack',
    tagline: 'Real-time meteorological telemetry & multi-city forecasting',
    tools: 'React 19, Vite, OpenWeather API, Chart.js, Tailwind CSS',
    description:
      'Modern, highly responsive weather dashboard featuring real-time meteorological conditions, 5-day historical trend graphs, and interactive city search with caching.',
    highlights: [
      'Consumes RESTful OpenWeather telemetry endpoints with debounced client-side search and geolocation auto-detection.',
      'Visualizes temperature shifts, atmospheric pressure, UV index, and humidity through interactive Chart.js line and bar graphs.',
      'Engineered a custom dark obsidian glassmorphic user interface optimized across mobile, tablet, and high-resolution desktop viewports.',
      'Integrated client-side state caching with localStorage to minimize redundant API network roundtrips.',
    ],
    image: WeatherImg,
    github: 'https://github.com/Smritibasnet09',
    metrics: { ui: 'Glassmorphism', latency: 'Instant Cache', data: 'OpenWeather' },
  },
  {
    id: 4,
    number: '04',
    title: 'Nyano — Contextual Conversational Agent',
    category: 'AI / ML',
    tagline: 'Multi-turn conversational assistant with streaming inference',
    tools: 'Python, Google Gemini API, FastAPI, React, WebSocket Streaming',
    description:
      'Empathetic, highly responsive generative AI assistant built with custom prompt engineering, streaming response chunks, and dynamic markdown interpretation.',
    highlights: [
      'Designed multi-turn conversation memory buffers preserving persona continuity and contextual tokens across extended dialogue sessions.',
      'Implemented server-sent streaming over FastAPI so tokens render progressively in real-time, reducing perceived time-to-first-token to under 300ms.',
      'Integrated markdown parsing with syntax highlighting for code snippets, markdown tables, and latex math equations.',
      'Applied strict safety filters and system-level system prompts to eliminate toxic completions and maintain conversational boundaries.',
    ],
    image: NyanoImg,
    github: 'https://github.com/Smritibasnet09',
    metrics: { ttft: '< 300ms', protocol: 'Streaming API', model: 'Gemini 1.5 Pro' },
  },
  {
    id: 5,
    number: '05',
    title: 'Deep Learning Image Classifier',
    category: 'AI / ML',
    tagline: 'Transfer learning vision model with real-time inference UI',
    tools: 'Python, TensorFlow, Keras, MobileNetV2, Streamlit, NumPy',
    description:
      'Computer vision classification model utilizing deep convolutional networks and transfer learning, equipped with a clean visual web interface for image uploads.',
    highlights: [
      'Fine-tuned pre-trained MobileNetV2 architectures on custom labeled image datasets using data augmentation (rotations, flips, zooming).',
      'Implemented categorical cross-entropy loss optimization with learning rate schedulers and early stopping to prevent overfitting.',
      'Built an interactive Streamlit frontend displaying class prediction probabilities, confidence score meters, and feature map visualizations.',
      'Optimized the final model weights with quantization for lightweight inference without noticeable loss in top-1 accuracy.',
    ],
    image: AiImg,
    github: 'https://github.com/Smritibasnet09',
    metrics: { backbone: 'MobileNetV2', inference: 'Real-Time', framework: 'TensorFlow' },
  },
  {
    id: 6,
    number: '06',
    title: 'Music Recommendation Engine',
    category: 'Tools',
    tagline: 'Collaborative & content-based filtering audio recommender',
    tools: 'Python, Pandas, Scikit-learn, Spotify Web API, Cosine Similarity',
    description:
      'Algorithmic music recommendation system capable of generating tailored playlists based on acoustic feature similarity, genre vectors, and listener preferences.',
    highlights: [
      'Extracted high-dimensional audio feature vectors (danceability, acousticness, valence, tempo) via the Spotify Web API.',
      'Engineered a cosine-similarity recommendation matrix mapping track distances in high-dimensional feature space.',
      'Built a hybrid ranking model blending collaborative user interaction signals with intrinsic acoustic content vectors.',
      'Packaged into a modular Python script with interactive CLI prompts and automated Spotify playlist export capabilities.',
    ],
    image: MusicImg,
    github: 'https://github.com/Smritibasnet09',
    metrics: { algorithm: 'Cosine Similarity', features: '12 Acoustic Vectors', api: 'Spotify API' },
  },
];

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="work-viewport-section" aria-label="Software Engineering Projects">
      <div className="work-glow-orb" />

      {/* Header */}
      <div className="work-header-center">
        <div className="career-badge-pill">
          <FolderGit2 size={13} className="career-badge-icon" />
          <span>Production &amp; Research Portfolio</span>
        </div>
        <h1 className="work-main-title">
          Selected <span className="title-purple-gradient">Engineering Projects</span>
        </h1>
        <p className="work-subtext">
          A showcase of verified software systems spanning machine learning pipelines, full-stack web applications, and developer tools.
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
          <article key={project.id} className="work-showcase-card">
            {/* Top Row: Number & Title */}
            <div className="work-card-top-row">
              <span className="work-giant-number">{project.number}</span>
              <div className="work-title-group">
                <span className="work-item-category">{project.category}</span>
                <h2 className="work-item-name">{project.title}</h2>
                <span className="work-item-tagline">{project.tagline}</span>
              </div>
            </div>

            {/* Preview Frame */}
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
                  <Github size={16} />
                  <span>Inspect Codebase</span>
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="work-item-description">{project.description}</p>

            {/* Key Engineering Highlights */}
            <div className="work-highlights-box">
              <span className="highlights-label">Architecture Highlights:</span>
              <ul className="highlights-list">
                {project.highlights.map((h, i) => (
                  <li key={i} className="highlight-item">
                    <CheckCircle2 size={13} className="highlight-bullet" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Tech Stack */}
            <div className="work-tools-block">
              <span className="tools-block-label">Technology Stack:</span>
              <span className="tools-block-text">{project.tools}</span>
            </div>

            {/* Footer */}
            <div className="work-card-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="work-repo-link"
              >
                <Github size={15} />
                <span>Source Repository (Smritibasnet09) →</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Next CTA */}
      <div className="about-page-cta" style={{ marginTop: '5rem' }}>
        <div className="cta-banner-inner">
          <div>
            <h3 className="cta-banner-title">Have a technical problem that needs solving?</h3>
            <p className="cta-banner-desc">Let’s discuss custom AI pipelines, robust FastAPI backends, or collaborative software engineering.</p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-purple-glow">
              <span>Start Conversation</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/expertise" className="btn-ghost-glass">
              <span>Explore Tech Capabilities</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
