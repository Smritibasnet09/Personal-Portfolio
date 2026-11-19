import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import {
  ArrowRight,
  ShieldAlert,
  Activity,
  Bot,
  CloudSun,
  Cpu,
  Music,
  Github,
  ExternalLink,
  X,
} from 'lucide-react';

import GDImg from './assets/GD.png';
import ImeImg from './assets/Ime.png';
import NariImg from './assets/Nari.png';
import KalpaImg from './assets/Kalpa.jpeg';
import DifImg from './assets/dif.png';
import AiImg from './assets/Ai.jpeg';

// ── Data ──────────────────────────────────────────────────────────────────────

const TECH_MARQUEE = [
  'Python 3.11', 'PyTorch', 'TensorFlow', 'FastAPI', 'Django REST',
  'RAG Pipelines', 'LLM Agents', 'Docker', 'Apache Airflow', 'MLflow',
  'Evidently AI', 'PostgreSQL', 'Redis', 'React 19', 'Next.js',
  'Scikit-learn', 'CatBoost', 'ChromaDB', 'CI/CD Pipelines',
];

// Real projects directly from Smriti's GitHub
const GITHUB_PROJECTS = [
  {
    id: 1,
    title: 'Credit Card Fraud Detection System',
    category: 'AI / MLOps',
    badge: 'Production-Ready',
    desc: 'Real-time financial fraud prevention architecture engineered to classify anomalous credit card transactions with high recall under severe class imbalance, with automated Evidently AI drift monitoring and Airflow retraining.',
    tools: ['Python', 'CatBoost', 'FastAPI', 'Evidently AI', 'Docker', 'Airflow'],
    icon: ShieldAlert,
    color: '#c084fc',
    iconBg: 'rgba(192, 132, 252, 0.15)',
    iconBorder: 'rgba(192, 132, 252, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: '98.4% ROC-AUC · < 18ms latency',
  },
  {
    id: 2,
    title: 'Intelligent Health Management Platform',
    category: 'Full-Stack & RAG',
    badge: 'Clinical Assistant',
    desc: 'Hospital operations dashboard combining clinical patient records, doctor scheduling, and a context-aware RAG medical assistant indexing verified clinical guidelines in ChromaDB.',
    tools: ['Django REST', 'React 19', 'PostgreSQL', 'ChromaDB', 'Gemini API'],
    icon: Activity,
    color: '#38bdf8',
    iconBg: 'rgba(56, 189, 248, 0.15)',
    iconBorder: 'rgba(56, 189, 248, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: 'JWT RBAC · PostgreSQL ACID',
  },
  {
    id: 3,
    title: 'Nyano — Contextual Conversational Agent',
    category: 'Generative AI',
    badge: 'Streaming LLM',
    desc: 'Empathetic multi-turn conversational assistant with context preservation, streaming inference via Gemini API, and dynamic markdown interpretation with code syntax highlighting.',
    tools: ['FastAPI', 'Google Gemini', 'React', 'WebSocket', 'Python'],
    icon: Bot,
    color: '#818cf8',
    iconBg: 'rgba(129, 140, 248, 0.15)',
    iconBorder: 'rgba(129, 140, 248, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: '< 300ms TTFT · Streaming API',
  },
  {
    id: 4,
    title: 'Weather Analytics & Forecasting Dashboard',
    category: 'Full-Stack & Telemetry',
    badge: 'Live Telemetry',
    desc: 'Real-time meteorological analytics dashboard featuring live conditions, historical 5-day trend charts, geolocation detection, and cached multi-city search with dark obsidian UI.',
    tools: ['React 19', 'Chart.js', 'OpenWeather API', 'Vite', 'Tailwind CSS'],
    icon: CloudSun,
    color: '#34d399',
    iconBg: 'rgba(52, 211, 153, 0.15)',
    iconBorder: 'rgba(52, 211, 153, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: 'Debounced Search · Local Cache',
  },
  {
    id: 5,
    title: 'Deep Learning Image Classifier',
    category: 'Computer Vision',
    badge: 'Transfer Learning',
    desc: 'Computer vision classification model utilizing fine-tuned MobileNetV2 networks with data augmentation, early stopping optimization, and interactive Streamlit inference UI.',
    tools: ['TensorFlow', 'Keras', 'MobileNetV2', 'Streamlit', 'Python'],
    icon: Cpu,
    color: '#fbbf24',
    iconBg: 'rgba(251, 191, 36, 0.15)',
    iconBorder: 'rgba(251, 191, 36, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: 'MobileNetV2 · Real-Time Inference',
  },
  {
    id: 6,
    title: 'Music Recommendation Engine',
    category: 'Machine Learning',
    badge: 'Collaborative Filter',
    desc: 'Algorithmic music recommendation system generating personalized playlists via cosine distance across Spotify 12-dimensional audio feature vectors and user interaction signals.',
    tools: ['Scikit-learn', 'Spotify Web API', 'Pandas', 'Cosine Similarity'],
    icon: Music,
    color: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.15)',
    iconBorder: 'rgba(236, 72, 153, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: '12 Acoustic Vectors · Spotify API',
  },
];

// Real achievements & milestones arranged in alternating timeline
const ENHANCED_ACHIEVEMENTS = [
  {
    id: 1,
    year: '2026',
    title: 'Techsprint Hackathon 2026',
    subtitle: 'National AI & Software Championship',
    badge: 'Grand Winner 🏆',
    badgeType: 'gold',
    image: GDImg,
    summary: 'Awarded 1st place out of collegiate & engineering teams nationwide for engineering a production-ready predictive AI architecture.',
    deepDive: 'Engineered a high-throughput microservice combining gradient-boosted decision trees with an automated Evidently AI drift monitor and scheduled Airflow retraining DAGs.',
    tags: ['Python', 'CatBoost', 'FastAPI', 'Docker'],
  },
  {
    id: 2,
    year: '2025',
    title: 'Sachet Nari @ 1st Cohort',
    subtitle: 'Women Leadership & Digital Empowerment',
    badge: 'Cohort Winner 🌟',
    badgeType: 'pink',
    image: NariImg,
    summary: 'Recognized with official Certificate of Appreciation by Aaviyanta Foundation for proactive leadership in digital literacy workshops.',
    deepDive: 'Mobilized community workshops focused on basic computing, internet security, and career pathways in software and technology.',
    tags: ['Community', 'Digital Literacy', 'Mentorship'],
  },
  {
    id: 3,
    year: '2025',
    title: 'Global IME BANK AI/ML Hackathon 2025',
    subtitle: 'FinTech & Real-Time Predictive Gateway',
    badge: 'Finalist Team ⚡',
    badgeType: 'purple',
    image: ImeImg,
    summary: 'Prototyped sub-50ms fraud scoring inference gateway with real-time transaction embeddings in an intensive 48-hour FinTech hackathon.',
    deepDive: 'Selected as finalist out of dozens of competing algorithmic teams for clean database schema design and practical banking viability.',
    tags: ['Scikit-learn', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    id: 4,
    year: '2025',
    title: 'MBMC_IDEAX 2025: 48h Hackathon',
    subtitle: 'Rapid Prototyping & Innovation Sprint',
    badge: '48h Sprint ⚡',
    badgeType: 'blue',
    image: DifImg,
    summary: 'Engineered rapid high-impact MVP solutions addressing civic and education technology under strict 48-hour sprint constraints.',
    deepDive: 'Collaborated in an intensive hackathon environment, implementing responsive React UI paired with asynchronous Python backend services.',
    tags: ['Rapid MVP', 'Full-Stack AI', 'Architecture'],
  },
  {
    id: 5,
    year: '2025',
    title: 'ICT Awards Fest 2025',
    subtitle: 'National Tech Showcase (Project AI BIN)',
    badge: 'National Showcase 🎖️',
    badgeType: 'teal',
    image: AiImg,
    summary: 'Demonstrated automated computer vision waste classification and smart IoT sorting at the prestigious national ICT Awards exposition.',
    deepDive: 'Built edge inference pipelines classifying recyclables in real-time, receiving commendation from national technology evaluators.',
    tags: ['Computer Vision', 'IoT Sorting', 'Embedded AI'],
  },
  {
    id: 6,
    year: '2024',
    title: 'Company Visits Intuji',
    subtitle: 'Engineering Culture & Industrial Immersion',
    badge: 'Tech Immersion 🏢',
    badgeType: 'blue',
    image: KalpaImg,
    summary: 'In-depth industry exploration of modern software engineering practices, cloud deployments, and scalable system design at Intuji.',
    deepDive: 'Observed enterprise continuous integration routines, microservices orchestration, and production engineering practices.',
    tags: ['Industry Best Practices', 'Cloud Architecture'],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <div className="home-page-container">

      {/* ── 1. HERO ── */}
      <Hero />

      {/* ── TECH MARQUEE ── */}
      <section className="tech-marquee-wrapper" aria-label="Technology Stack">
        <div className="tech-marquee-track">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, idx) => (
            <span key={idx} className="tech-marquee-item">
              <span className="marquee-dot" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── 2. LATEST GITHUB PROJECTS ── */}
      <section className="hp-section hp-latest-projects-section" id="projects" aria-label="Latest GitHub Projects">
        <div className="hp-projects-glow" />
        <div className="hp-clean-header-row">
          <div>
            <span className="hp-clean-eyebrow">GitHub Portfolio</span>
            <h2 className="hp-clean-title">Latest projects</h2>
          </div>
          <a
            href="https://github.com/Smritibasnet09"
            target="_blank"
            rel="noopener noreferrer"
            className="hp-clean-view-all"
          >
            <Github size={15} />
            <span>GitHub Profile</span>
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="hp-clean-projects-grid">
          {GITHUB_PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.id} className="hp-clean-project-card">
                <div className="hp-clean-card-header">
                  <div
                    className="hp-clean-icon-avatar"
                    style={{
                      background: project.iconBg,
                      borderColor: project.iconBorder,
                      color: project.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="hp-project-title-meta">
                    <h3 className="hp-clean-project-name">{project.title}</h3>
                    <div className="hp-project-tags-line">
                      <span className="hp-project-cat-pill">{project.category}</span>
                      <span className="hp-project-metric-pill">{project.metrics}</span>
                    </div>
                  </div>
                </div>

                <p className="hp-clean-project-desc">{project.desc}</p>

                <div className="hp-project-tools-row">
                  {project.tools.map((tool) => (
                    <span key={tool} className="hp-project-tech-chip">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="hp-clean-card-bottom">
                  <Link to="/projects" className="hp-project-detail-link">
                    <span>Full Specs</span>
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-clean-arrow-btn"
                    title={`View source code of ${project.title} on GitHub`}
                    aria-label={`View source code of ${project.title} on GitHub`}
                  >
                    <Github size={15} />
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. ACHIEVEMENTS & SOCIAL WORK (CLEAN GRID) ── */}
      <section className="hp-section hp-social-work-section" id="achievements" aria-label="Achievements and Social Work">
        <div className="hp-achievements-glow" />
        
        {/* Section Header */}
        <div className="achievements-section-heading-wrap">
          <span className="hp-clean-eyebrow">Podiums &amp; Impact</span>
          <h2 className="hp-clean-title">Achievements &amp; Social Work</h2>
          <p className="achievements-section-sub">
            A milestone journey of hackathon victories, community empowerment, and technical leadership.
          </p>
        </div>

        {/* Clean Grid of Achievement Cards */}
        <div className="hp-achievements-grid">
          {ENHANCED_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="hp-achievement-card"
              onClick={() => setSelectedAchievement(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedAchievement(item);
                }
              }}
              title="Click to view details"
            >
              {/* Full Image */}
              <div className="hp-achievement-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="hp-achievement-img"
                  loading="lazy"
                />
                <div className="hp-achievement-img-overlay" />
              </div>

              {/* Card Info */}
              <div className="hp-achievement-info">
                <span className="hp-achievement-subtitle">{item.subtitle}</span>
                <h3 className="hp-achievement-title">{item.title}</h3>
                <p className="hp-achievement-summary">{item.summary}</p>

                <div className="hp-achievement-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="hp-achievement-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="hp-achievement-footer">
                  <span className="hp-achievement-view-btn">
                    <span>View Details</span>
                    <ExternalLink size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to All Awards */}
        <div className="achievements-bottom-cta">
          <Link to="/achievements" className="hp-clean-view-all">
            <span>Explore All Awards &amp; Podiums</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Interactive Achievement Lightbox Modal ── */}
      {selectedAchievement && (
        <div className="achievement-lightbox-backdrop" onClick={() => setSelectedAchievement(null)}>
          <div 
            className="achievement-lightbox-dialog" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button 
              className="achievement-lightbox-close"
              onClick={() => setSelectedAchievement(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="achievement-lightbox-media">
              <img 
                src={selectedAchievement.image} 
                alt={selectedAchievement.title} 
                className="achievement-lightbox-img" 
              />
            </div>

            <div className="achievement-lightbox-info">
              <span className="lightbox-subtitle">{selectedAchievement.subtitle}</span>
              <h3 className="lightbox-title">{selectedAchievement.title}</h3>
              <p className="lightbox-desc">{selectedAchievement.summary}</p>
              
              <div className="lightbox-deepdive">
                <strong>Project Impact:</strong>
                <p>{selectedAchievement.deepDive}</p>
              </div>

              <div className="lightbox-tags">
                {selectedAchievement.tags.map((tag) => (
                  <span key={tag} className="hp-enhanced-tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>

              <Link 
                to="/achievements" 
                className="lightbox-cta-btn"
                onClick={() => setSelectedAchievement(null)}
              >
                <span>Read Full Achievement Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
