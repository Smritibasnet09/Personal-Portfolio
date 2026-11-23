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
  Linkedin,
  Mail,
  Copy,
  Check,
  ExternalLink,
  X,
  Sparkles,
  Trophy,
  Star,
  Flame,
  Eye,
  Layers,
  FolderGit2,
  Mic,
  BarChart3,
  ShoppingCart,
  Zap,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Project Screenshots
import FraudImg from './assets/Fraud.png';
import HMSImg from './assets/HMS.png';
import NyanoImg from './assets/Nyano.png';
import WeatherImg from './assets/Weatherapp.png';
import AiImg from './assets/Ai.jpeg';
import MusicImg from './assets/music.png';

// Achievement Images
import GDImg from './assets/GD.png';
import ImeImg from './assets/Ime.png';
import NariImg from './assets/Nari.png';
import KalpaImg from './assets/Kalpa.jpeg';
import DifImg from './assets/dif.png';

// ── Data ──────────────────────────────────────────────────────────────────────

const PROJECT_FILTERS = ['All Works', 'AI & Machine Learning', 'Full-Stack Systems'];

// Real projects with preview screenshots & metrics
const GITHUB_PROJECTS = [
  {
    id: 1,
    title: 'Credit Card Fraud Detection System',
    category: 'AI / MLOps',
    filterGroup: 'AI & Machine Learning',
    badge: 'Production-Ready 🚀',
    slug: 'fraud-detection-mlops',
    image: FraudImg,
    desc: 'Real-time financial fraud classification pipeline engineered with CatBoost and SMOTE oversampling. Integrated with Evidently AI for continuous feature drift monitoring and Apache Airflow automated model retraining.',
    tools: ['Python', 'CatBoost', 'FastAPI', 'Evidently AI', 'Docker', 'Airflow'],
    icon: ShieldAlert,
    color: '#c084fc',
    iconBg: 'rgba(192, 132, 252, 0.15)',
    iconBorder: 'rgba(192, 132, 252, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: '98.4% ROC-AUC · < 18ms latency',
    featured: true,
  },
  {
    id: 2,
    title: 'Intelligent Health Management Platform',
    category: 'Full-Stack & RAG',
    filterGroup: 'Full-Stack Systems',
    badge: 'Clinical Assistant 🏥',
    slug: 'health-management-rag',
    image: HMSImg,
    desc: 'Hospital administration platform combining patient records, doctor scheduling, and a ChromaDB-backed RAG medical assistant indexing verified clinical guidelines to assist doctors in preliminary inquiries.',
    tools: ['Django REST', 'React 19', 'PostgreSQL', 'ChromaDB', 'Gemini API'],
    icon: Activity,
    color: '#38bdf8',
    iconBg: 'rgba(56, 189, 248, 0.15)',
    iconBorder: 'rgba(56, 189, 248, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: 'JWT RBAC · PostgreSQL ACID',
    featured: true,
  },
  {
    id: 3,
    title: 'Nyano — Contextual Conversational Agent',
    category: 'Generative AI',
    filterGroup: 'AI & Machine Learning',
    badge: 'Streaming LLM ⚡',
    slug: 'nyano-agent',
    image: NyanoImg,
    desc: 'Empathetic multi-turn conversational agent with dialogue state persistence, real-time token streaming via Gemini API over FastAPI WebSockets, and dynamic markdown code syntax rendering.',
    tools: ['FastAPI', 'Google Gemini', 'React', 'WebSocket', 'Python'],
    icon: Bot,
    color: '#818cf8',
    iconBg: 'rgba(129, 140, 248, 0.15)',
    iconBorder: 'rgba(129, 140, 248, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: '< 300ms TTFT · Streaming API',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Analytics & Forecasting Dashboard',
    category: 'Full-Stack & Telemetry',
    filterGroup: 'Full-Stack Systems',
    badge: 'Live Telemetry 🌤️',
    slug: 'weather-analytics',
    image: WeatherImg,
    desc: 'Real-time meteorological analytics dashboard featuring live conditions, historical 5-day predictive trend charts, geolocation auto-detection, and client-side caching with a dark obsidian UI.',
    tools: ['React 19', 'Chart.js', 'OpenWeather API', 'Vite', 'Tailwind CSS'],
    icon: CloudSun,
    color: '#34d399',
    iconBg: 'rgba(52, 211, 153, 0.15)',
    iconBorder: 'rgba(52, 211, 153, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: 'Debounced Search · Local Cache',
    featured: false,
  },
  {
    id: 5,
    title: 'Deep Learning Image Classifier (AI BIN)',
    category: 'Computer Vision',
    filterGroup: 'AI & Machine Learning',
    badge: 'ICT Showcase 🎖️',
    slug: 'image-classifier-edge',
    image: AiImg,
    desc: 'Computer vision classification model fine-tuned on MobileNetV2 networks with transfer learning, data augmentation, and low-latency edge inference for automated smart waste segregation.',
    tools: ['TensorFlow', 'Keras', 'MobileNetV2', 'Streamlit', 'Python'],
    icon: Cpu,
    color: '#fbbf24',
    iconBg: 'rgba(251, 191, 36, 0.15)',
    iconBorder: 'rgba(251, 191, 36, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: 'MobileNetV2 · Real-Time Edge',
    featured: false,
  },
  {
    id: 6,
    title: 'Music Recommendation Engine',
    category: 'Machine Learning',
    filterGroup: 'AI & Machine Learning',
    badge: 'Collaborative Filter 🎵',
    slug: 'music-recommender',
    image: MusicImg,
    desc: 'Algorithmic music recommendation system generating personalized playlists via cosine distance across Spotify 12-dimensional audio feature vectors and user interaction signals.',
    tools: ['Scikit-learn', 'Spotify Web API', 'Pandas', 'Cosine Similarity'],
    icon: Music,
    color: '#ec4899',
    iconBg: 'rgba(236, 72, 153, 0.15)',
    iconBorder: 'rgba(236, 72, 153, 0.35)',
    github: 'https://github.com/Smritibasnet09',
    metrics: '12 Acoustic Vectors · Spotify API',
    featured: false,
  },
];

// ── SELECTED WORK — 5 real GitHub projects (typography-focused, no images) ──
const SELECTED_PROJECTS = [
  {
    id: 'merohisab',
    number: '01',
    featured: true,
    icon: Mic,
    title: 'MeroHisab',
    subtitle: 'Voice-Based AI Business Assistant',
    category: 'AI / NLP / Full-Stack',
    accentColor: '#a855f7',
    accentBg: 'rgba(168, 85, 247, 0.12)',
    accentBorder: 'rgba(168, 85, 247, 0.30)',
    description:
      'A voice-first AI business assistant designed for small shopkeepers. Record sales, expenses and customer credit using natural language, with conversational access to financial records and business summaries.',
    tech: ['Python', 'Django', 'Django REST', 'PostgreSQL', 'NLP', 'Speech-to-Text'],
    github: 'https://github.com/MeroHisab/MeroHisab',
    demo: null,
  },
  {
    id: 'bigmart',
    number: '02',
    featured: false,
    icon: BarChart3,
    title: 'Big Mart Sales Prediction',
    subtitle: 'Retail Forecasting with ML',
    category: 'Machine Learning / Data Science',
    accentColor: '#818cf8',
    accentBg: 'rgba(129, 140, 248, 0.10)',
    accentBorder: 'rgba(129, 140, 248, 0.26)',
    description:
      'Exploratory analysis and machine learning models applied to the Big Mart dataset to uncover sales patterns and develop retail demand predictions.',
    tech: ['Python', 'Machine Learning', 'Jupyter Notebook', 'EDA'],
    github: 'https://github.com/Smritibasnet09/Big_Mart_Prediction-Using-Machine-Learning',
    demo: null,
  },
  {
    id: 'grocery',
    number: '03',
    featured: false,
    icon: ShoppingCart,
    title: 'Grocery Store Management',
    subtitle: 'Full-Stack E-Commerce Platform',
    category: 'Full-Stack Web Development',
    accentColor: '#34d399',
    accentBg: 'rgba(52, 211, 153, 0.08)',
    accentBorder: 'rgba(52, 211, 153, 0.22)',
    description:
      'A web platform for browsing products, managing carts, placing orders and OTP-based authentication. Includes a full admin panel for products, users and order management.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Smritibasnet09/Grocery_Store_php',
    demo: null,
  },
  {
    id: 'evcharging',
    number: '04',
    featured: false,
    icon: Zap,
    title: 'Smart EV Charging System',
    subtitle: 'IoT-Based Energy Management',
    category: 'IoT / Smart Systems',
    accentColor: '#38bdf8',
    accentBg: 'rgba(56, 189, 248, 0.08)',
    accentBorder: 'rgba(56, 189, 248, 0.22)',
    description:
      'An IoT-based electric vehicle charging solution that improves charging efficiency and energy management through sensors and intelligent control mechanisms.',
    tech: ['IoT', 'Sensors', 'Smart Charging', 'Automation'],
    github: 'https://github.com/Smritibasnet09/Smart-Electric-Car-Charging-System',
    demo: null,
  },
  {
    id: 'nyanokokh',
    number: '05',
    featured: false,
    icon: HeartHandshake,
    title: 'Nyano Kokh',
    subtitle: 'A Warm Embrace — Social Impact',
    category: 'Web Development / Social Impact',
    accentColor: '#f472b6',
    accentBg: 'rgba(244, 114, 182, 0.08)',
    accentBorder: 'rgba(244, 114, 182, 0.22)',
    description:
      'A digital initiative building a supportive and inclusive environment through community support, education and accessible digital experiences for underserved communities.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Smritibasnet09/Nyano_Kokh',
    demo: null,
  },
];

// Highlight metrics for the podiums/achievements header
const IMPACT_HIGHLIGHTS = [
  {
    id: 'h1',
    icon: Trophy,
    title: 'Grand Winner 🏆',
    event: 'TechSprint Hackathon 2026',
    desc: '1st place national championship for predictive AI & MLOps architecture',
    color: '#fbbf24',
  },
  {
    id: 'h2',
    icon: Star,
    title: 'Cohort Winner 🌟',
    event: 'Sachet Nari @ 1st Cohort',
    desc: 'Appreciation from Aaviyanta Foundation for leadership in digital empowerment',
    color: '#ec4899',
  },
  {
    id: 'h3',
    icon: Flame,
    title: 'Finalist Team ⚡',
    event: 'Global IME Bank Hackathon',
    desc: 'Sub-50ms FinTech fraud scoring inference gateway across banking data',
    color: '#c084fc',
  },
  {
    id: 'h4',
    icon: Sparkles,
    title: 'National Showcase 🎖️',
    event: 'ICT Awards Fest 2025',
    desc: 'Demonstrated automated computer vision waste sorting with Project AI BIN',
    color: '#38bdf8',
  },
];

// Real achievements & milestones
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
  const [activeProjectFilter, setActiveProjectFilter] = useState('All Works');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredProjects = activeProjectFilter === 'All Works'
    ? GITHUB_PROJECTS
    : GITHUB_PROJECTS.filter((p) => p.filterGroup === activeProjectFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('basnetsmriti62@gmail.com');
    setCopiedEmail(true);
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#c084fc', '#a855f7', '#38bdf8', '#ffffff'],
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="home-page-container">

      {/* ── 1. HERO ── */}
      <Hero />

      {/* ── 2. SELECTED WORK — PREMIUM PROJECTS SHOWCASE ── */}
      <section className="hp-section sw-section" id="projects" aria-label="Selected Work — Featured Projects">
        <div className="sw-ambient-glow" />

        {/* ── Section Header ── */}
        <div className="sw-header">
          <div className="sw-header-text">
            <span className="sw-eyebrow">
              <span className="sw-eyebrow-dot" />
              SELECTED WORK
            </span>
            <h2 className="sw-heading">
              Projects That Solve{' '}
              <span className="title-purple-gradient">Real Problems.</span>
            </h2>
            <p className="sw-subtext">
              A collection of projects where I explore Artificial Intelligence, Machine Learning,
              Data Science and Full-Stack Development to build practical, meaningful solutions.
            </p>
          </div>
          <div className="sw-header-right">
            <span className="sw-project-count">
              <span className="sw-count-num">05</span>
              <span className="sw-count-label">Projects</span>
            </span>
            <a
              href="https://github.com/Smritibasnet09"
              target="_blank"
              rel="noopener noreferrer"
              className="sw-github-btn"
            >
              <Github size={14} />
              <span>GitHub Profile</span>
              <ArrowUpRight size={13} className="sw-arrow-icon" />
            </a>
          </div>
        </div>

        {/* ── Featured Card — MeroHisab ── */}
        {(() => {
          const featured = SELECTED_PROJECTS[0];
          const FeaturedIcon = featured.icon;
          return (
            <article
              className="sw-featured-card"
              style={{
                '--accent': featured.accentColor,
                '--accent-bg': featured.accentBg,
                '--accent-border': featured.accentBorder,
              }}
            >
              {/* Left: Icon + Number stripe */}
              <div className="sw-featured-stripe" style={{ '--accent': featured.accentColor }}>
                <span className="sw-featured-num">{featured.number}</span>
                <div
                  className="sw-featured-icon-wrap"
                  style={{ background: featured.accentBg, borderColor: featured.accentBorder, color: featured.accentColor }}
                >
                  <FeaturedIcon size={28} strokeWidth={1.6} />
                </div>
                <span className="sw-featured-label">Featured</span>
              </div>

              {/* Right: Content */}
              <div className="sw-featured-body">
                <div className="sw-featured-top">
                  <div className="sw-featured-meta">
                    <span
                      className="sw-cat-badge"
                      style={{ color: featured.accentColor, background: featured.accentBg, borderColor: featured.accentBorder }}
                    >
                      {featured.category}
                    </span>
                  </div>
                  <div className="sw-featured-links">
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sw-source-link"
                    >
                      <Github size={13} />
                      <span>View Source</span>
                      <ArrowUpRight size={12} className="sw-arrow-icon" />
                    </a>
                  </div>
                </div>

                <h3 className="sw-featured-title">{featured.title}</h3>
                <p className="sw-featured-subtitle">{featured.subtitle}</p>
                <p className="sw-featured-desc">{featured.description}</p>

                <div className="sw-divider" />

                <div className="sw-featured-footer">
                  <div className="sw-tech-pills">
                    {featured.tech.map((t) => (
                      <span key={t} className="sw-tech-pill" style={{ '--pill-color': featured.accentColor }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })()}

        {/* ── Secondary Projects Grid — 4 cards ── */}
        <div className="sw-grid">
          {SELECTED_PROJECTS.slice(1).map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="sw-card"
                style={{
                  '--accent': project.accentColor,
                  '--accent-bg': project.accentBg,
                  '--accent-border': project.accentBorder,
                }}
              >
                {/* Card Top Row */}
                <div className="sw-card-top">
                  <div
                    className="sw-card-icon"
                    style={{ background: project.accentBg, borderColor: project.accentBorder, color: project.accentColor }}
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <span className="sw-card-num">{project.number}</span>
                </div>

                {/* Title + Category */}
                <div className="sw-card-title-group">
                  <span
                    className="sw-cat-badge sw-cat-badge--small"
                    style={{ color: project.accentColor, background: project.accentBg, borderColor: project.accentBorder }}
                  >
                    {project.category}
                  </span>
                  <h3 className="sw-card-title">{project.title}</h3>
                  <p className="sw-card-subtitle">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="sw-card-desc">{project.description}</p>

                {/* Tech Pills */}
                <div className="sw-tech-pills sw-tech-pills--compact">
                  {project.tech.map((t) => (
                    <span key={t} className="sw-tech-pill" style={{ '--pill-color': project.accentColor }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="sw-divider" />

                {/* Footer Links */}
                <div className="sw-card-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sw-source-link"
                  >
                    <Github size={13} />
                    <span>View Source</span>
                    <ArrowUpRight size={12} className="sw-arrow-icon" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 3. ACHIEVEMENTS & SOCIAL WORK (PRESTIGE TIMELINE) ── */}
      <section className="hp-section hp-social-work-section" id="achievements" aria-label="Achievements and Social Work">
        <div className="hp-achievements-glow" />

        {/* Section Header */}
        <div className="achievements-section-heading-wrap">
          <span className="hp-clean-eyebrow">
            <Trophy size={13} className="eyebrow-spark-icon" />
            <span>Podiums &amp; Technical Milestones</span>
          </span>
          <h2 className="hp-clean-title">
            Achievements &amp; <span className="title-purple-gradient">Social Impact</span>
          </h2>
          <p className="achievements-section-sub">
            A milestone journey of national hackathon championships, community empowerment, and verified technology demonstrations.
          </p>
        </div>

        {/* Highlights Bar: 4 Major Podiums */}
        <div className="hp-milestones-highlight-grid">
          {IMPACT_HIGHLIGHTS.map((h) => {
            const HIcon = h.icon;
            return (
              <div key={h.id} className="hp-milestone-highlight-card">
                <div
                  className="hp-milestone-icon-pill"
                  style={{ color: h.color, borderColor: `${h.color}40`, background: `${h.color}15` }}
                >
                  <HIcon size={18} />
                </div>
                <div className="hp-milestone-info">
                  <span className="hp-milestone-badge" style={{ color: h.color }}>{h.title}</span>
                  <h4 className="hp-milestone-event">{h.event}</h4>
                  <p className="hp-milestone-desc">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Grid of Achievement Cards */}
        <div className="hp-achievements-grid">
          {ENHANCED_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className={`hp-achievement-card hp-achievement-card--${item.badgeType}`}
              onClick={() => setSelectedAchievement(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedAchievement(item);
                }
              }}
              title="Click to view deep dive"
            >
              {/* Media with Badges */}
              <div className="hp-achievement-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="hp-achievement-img"
                  loading="lazy"
                />
                <div className="hp-achievement-img-overlay" />

                {/* Floating Year Pill */}
                <span className="hp-achievement-year-badge">{item.year}</span>

                {/* Floating Award Pill */}
                <span className={`hp-achievement-floating-badge badge-${item.badgeType}`}>
                  {item.badge}
                </span>
              </div>

              {/* Card Info */}
              <div className="hp-achievement-info">
                <span className="hp-achievement-subtitle">{item.subtitle}</span>
                <h3 className="hp-achievement-title">{item.title}</h3>
                <p className="hp-achievement-summary">{item.summary}</p>

                <div className="hp-achievement-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="hp-achievement-tag">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="hp-achievement-footer">
                  <span className="hp-achievement-view-btn">
                    <span>Inspect Milestone</span>
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

      {/* ── 4. HIGH-IMPACT COLLABORATION & CONTACT HUB (LOWER SECTION) ── */}
      <section className="hp-section hp-collab-cta-section" id="collaboration" aria-label="Collaboration and Contact">
        <div className="hp-cta-glow-ambient" />

        <div className="hp-cta-card-wrapper">
          <div className="hp-cta-badge-row">
            <span className="hp-status-live-pill">
              <span className="status-dot-ping" />
              <span className="status-dot-solid" />
              <span>Available for AI / ML &amp; Software Engineering Roles</span>
            </span>
            <span className="hp-location-pill">
              <span>📍 Kathmandu, Nepal (GMT +5:45) · Open to Global Remote</span>
            </span>
          </div>

          <div className="hp-cta-content-grid">
            <div className="hp-cta-text-side">
              <h2 className="hp-cta-headline">
                Let’s Build Something <span className="title-purple-gradient">Extraordinary</span> Together
              </h2>
              <p className="hp-cta-subtext">
                Whether you need high-throughput machine learning pipelines, context-aware RAG architectures, or robust full-stack applications — I engineer solutions with rigorous discipline from research to production.
              </p>

              {/* Quick Email Copy Bar */}
              <div className="hp-email-copy-bar">
                <div className="hp-email-info">
                  <Mail size={16} className="hp-email-icon" />
                  <span className="hp-email-address">basnetsmriti62@gmail.com</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`hp-copy-action-btn ${copiedEmail ? 'copied' : ''}`}
                  aria-label="Copy email address"
                  type="button"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} />
                      <span>Copied! 🎉</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="hp-cta-actions-side">
              <div className="hp-cta-quick-cards">
                <Link to="/contact" className="hp-cta-primary-btn">
                  <div className="hp-btn-inner">
                    <span className="hp-btn-label">Start a Conversation</span>
                    <span className="hp-btn-sub">Open Interactive Contact Form</span>
                  </div>
                  <ArrowRight size={18} className="hp-btn-arrow" />
                </Link>

                <div className="hp-cta-social-links-grid">
                  <a
                    href="https://github.com/Smritibasnet09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-cta-social-card"
                  >
                    <div className="hp-social-card-icon-wrap">
                      <Github size={18} />
                    </div>
                    <div className="hp-social-card-text">
                      <span className="hp-social-card-name">GitHub</span>
                      <span className="hp-social-card-handle">@Smritibasnet09</span>
                    </div>
                    <ExternalLink size={13} className="hp-social-ext-icon" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/smriti-basnet-51478131a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hp-cta-social-card"
                  >
                    <div className="hp-social-card-icon-wrap">
                      <Linkedin size={18} />
                    </div>
                    <div className="hp-social-card-text">
                      <span className="hp-social-card-name">LinkedIn</span>
                      <span className="hp-social-card-handle">Smriti Basnet</span>
                    </div>
                    <ExternalLink size={13} className="hp-social-ext-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
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
