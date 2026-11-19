import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CyberSphere3D from './components/CyberSphere3D';
import {
  ChevronDown,
  Cpu,
  Globe,
  Workflow,
  Database,
  Layers,
  ArrowRight,
  ShieldAlert,
  GitBranch,
  Gauge,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const SERVICES = [
  {
    id: 'ai-dev',
    number: '01',
    title: 'AI & MACHINE LEARNING ENGINEERING',
    subtitle: 'Intelligent systems, deep learning & LLM architectures',
    description:
      'Designing and deploying robust machine learning pipelines, deep learning models, and custom generative AI systems. Proficient in training PyTorch models, structuring Retrieval-Augmented Generation (RAG) knowledge retrieval with vector stores (ChromaDB, Pinecone), and orchestrating multi-turn conversational agents with streaming inference.',
    icon: <Cpu size={22} />,
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'RAG / Vector DBs', 'Gemini / OpenAI API', 'NLP & LLMs', 'HuggingFace', 'CatBoost & XGBoost'],
    deliverables: [
      'Custom LLM-powered domain agents with strict prompt conditioning',
      'Vector semantic search & hybrid BM25 retrieval pipelines',
      'Supervised & unsupervised predictive modeling with precision tuning',
      'Quantized, low-latency API wrappers for edge and server deployment',
    ],
  },
  {
    id: 'full-stack',
    number: '02',
    title: 'FULL-STACK SOFTWARE ENGINEERING',
    subtitle: 'High-performance web applications & distributed backends',
    description:
      'Building performant, highly maintainable full-stack applications. Specializing in Python backends (FastAPI, Django REST) paired with modern React/Next.js interfaces. Engineering reliable database schemas with PostgreSQL, relational constraints, MariaDB, and Redis sub-millisecond caching layers.',
    icon: <Globe size={22} />,
    skills: ['FastAPI (Async)', 'Django & DRF', 'React 19 / Vite', 'Next.js', 'PostgreSQL', 'Redis Caching', 'REST & WebSockets', 'SQLAlchemy'],
    deliverables: [
      'Asynchronous RESTful APIs with Pydantic type safety & OpenAPI docs',
      'Role-based access control (RBAC) with JWT and OAuth2 authentication',
      'Complex relational modeling, indexing, and query optimization',
      'Clean reactive user interfaces with accessible design and dark mode',
    ],
  },
  {
    id: 'mlops',
    number: '03',
    title: 'MLOPS & PRODUCTION INFRASTRUCTURE',
    subtitle: 'Automated model lifecycle, orchestration & drift monitoring',
    description:
      'Bridging the critical gap between Jupyter experiments and enterprise production. Containerizing ML microservices with Docker, orchestrating scheduled batch pipelines with Apache Airflow DAGs, tracking experiment hyper-parameters via MLflow, and monitoring real-time data drift with Evidently AI to trigger automated retraining.',
    icon: <Workflow size={22} />,
    skills: ['Docker & Compose', 'Apache Airflow DAGs', 'MLflow Tracking', 'Evidently AI (Drift)', 'CI/CD Pipelines', 'Linux / Bash Scripting', 'Model Registry'],
    deliverables: [
      'Reproducible Dockerized inference containers ready for cloud hosting',
      'Automated batch ingestion and retraining schedules with Airflow DAGs',
      'Statistical data drift detection alerting on feature distribution shifts',
      'Standardized model serialization (ONNX, Pickle, TorchScript)',
    ],
  },
  {
    id: 'data-eng',
    number: '04',
    title: 'DATA ENGINEERING & ANALYTICS',
    subtitle: 'Data sanitation, ETL pipelines & relational integrity',
    description:
      'Transforming unstructured, noisy data into clean, validated, analytical datasets. Leveraging Pandas, NumPy, and SQL for extensive exploratory data analysis (EDA), anomaly detection, automated duplicate resolution, and feature transformation pipelines feeding downstream business intelligence and machine learning models.',
    icon: <Database size={22} />,
    skills: ['Pandas & NumPy', 'SQL Analytics', 'ETL Data Pipelines', 'Data Quality Auditing', 'EDA & Visualization', 'Excel Modeling', 'Feature Engineering'],
    deliverables: [
      'Automated duplicate record resolution and verification tooling',
      'Outlier detection, missing value imputation, and normalization',
      'Interactive analytical visualizations and diagnostic dashboards',
      'Structured relational data schemas guaranteeing consistency',
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Problem Framing & Data Curation',
    desc: 'Understanding business objectives, defining evaluation metrics (F1, AUC, Latency), collecting and auditing raw datasets for bias and class imbalance.',
  },
  {
    step: '02',
    title: 'Algorithm Selection & Experimentation',
    desc: 'Benchmarking baseline models, fine-tuning hyperparameters using MLflow tracking, and rigorously validating against unseen cross-validation splits.',
  },
  {
    step: '03',
    title: 'API Wrapping & Microservice Design',
    desc: 'Building typed, asynchronous FastAPI endpoints, integrating Redis caching layers, and containerizing entire runtime environments with Docker.',
  },
  {
    step: '04',
    title: 'Continuous Monitoring & Drift Defense',
    desc: 'Deploying automated Evidently AI drift monitors, tracking inference latency, and establishing Airflow DAGs for hands-off model retraining.',
  },
];

const ARCH_BENCHMARKS = [
  {
    metric: '< 50ms',
    label: 'Inference Latency Target',
    detail: 'Optimized batch vectorization & in-memory caching',
  },
  {
    metric: '99.5%+',
    label: 'Data Integrity Standard',
    detail: 'Automated Pydantic schema validation on ingestion',
  },
  {
    metric: 'Zero-Downtime',
    label: 'RAG Knowledge Updates',
    detail: 'Incremental vector embedding indexing via ChromaDB',
  },
  {
    metric: '100%',
    label: 'Containerized Delivery',
    detail: 'Reproducible Docker images tested across environments',
  },
];

export default function WhatIDo() {
  const [expandedId, setExpandedId] = useState('ai-dev');

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="whatido-viewport-section" aria-label="What I Do & Technical Expertise">
      {/* Page Header */}
      <div className="section-header-tracked">
        <span className="tracked-eyebrow">TECHNICAL EXPERTISE</span>
        <h1 className="about-main-heading">
          Full-Spectrum <span className="title-purple-gradient">AI &amp; Software Engineering</span>
        </h1>
        <p className="career-subtext">
          Bridging mathematical intelligence, scalable backend architectures, and production MLOps infrastructure.
        </p>
      </div>

      {/* Main 3D Interactive Layout */}
      <div className="whatido-layout-grid">
        {/* Left Column: Heading & Summary */}
        <div className="whatido-title-column">
          <h2 className="whatido-giant-heading">
            WHAT<br />I DO
          </h2>
          <div className="hud-accent-line" />
          <p className="whatido-subtitle-note">
            Transforming experimental machine learning into reliable, high-availability software solutions that deliver real-world value.
          </p>
          <div className="whatido-quick-summary">
            <span className="summary-pill">
              <Sparkles size={13} className="text-purple" />
              <span>4 Core Technical Disciplines</span>
            </span>
            <span className="summary-pill">
              <Gauge size={13} className="text-purple" />
              <span>Production-Grade Reliability</span>
            </span>
          </div>
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
                  <div className="hud-header-left">
                    <span className="hud-card-number">{item.number}</span>
                    <div className="hud-header-text">
                      <h3 className="hud-card-title">{item.title}</h3>
                      <p className="hud-card-subtitle">{item.subtitle}</p>
                    </div>
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

                  <div className="hud-deliverables-block">
                    <span className="deliverables-heading">Core Engineering Deliverables:</span>
                    <ul className="deliverables-list">
                      {item.deliverables.map((d, i) => (
                        <li key={i} className="deliverable-item">
                          <CheckCircle size={14} className="deliverable-check" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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

      {/* Section 2: Architectural Engineering Standards */}
      <div className="expertise-benchmarks-section">
        <div className="academic-header">
          <div className="career-badge-pill">
            <Gauge size={13} className="career-badge-icon" />
            <span>Performance Targets</span>
          </div>
          <h2 className="academic-title">
            Architectural <span className="title-purple-gradient">Benchmarks &amp; Standards</span>
          </h2>
          <p className="academic-desc">
            Rigorous engineering standards applied across all production systems and research builds.
          </p>
        </div>

        <div className="benchmarks-grid-four">
          {ARCH_BENCHMARKS.map((b) => (
            <div key={b.label} className="benchmark-card">
              <span className="benchmark-metric">{b.metric}</span>
              <span className="benchmark-label">{b.label}</span>
              <p className="benchmark-detail">{b.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Engineering Lifecycle Process */}
      <div className="expertise-process-section">
        <div className="academic-header">
          <div className="career-badge-pill">
            <GitBranch size={13} className="career-badge-icon" />
            <span>End-to-End Workflow</span>
          </div>
          <h2 className="academic-title">
            My Engineering <span className="title-purple-gradient">Lifecycle</span>
          </h2>
          <p className="academic-desc">
            How I progress from an abstract computational problem to a monitored, production-deployed system.
          </p>
        </div>

        <div className="process-steps-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="process-step-card">
              <span className="step-number-tag">{step.step}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Next Steps CTA */}
      <div className="about-page-cta">
        <div className="cta-banner-inner">
          <div>
            <h3 className="cta-banner-title">Ready to see these capabilities in action?</h3>
            <p className="cta-banner-desc">Explore projects utilizing these exact machine learning, backend, and MLOps architectures.</p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/projects" className="btn-purple-glow">
              <span>View Verified Projects</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="btn-ghost-glass">
              <span>Discuss a Project</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
