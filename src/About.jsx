import React from 'react';
import { Link } from 'react-router-dom';
import DifImg from './assets/dif.png';
import {
  GraduationCap,
  Award,
  Terminal,
  Sparkles,
  Cpu,
  Layers,
  Code2,
  Users,
  Compass,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Database,
  Workflow,
} from 'lucide-react';

const ACADEMIC_MODULES = [
  'Artificial Intelligence & Neural Networks',
  'Deep Learning & Natural Language Processing',
  'Distributed Systems & Cloud Architectures',
  'Advanced Data Structures & Algorithms',
  'Database Management & Relational Modeling',
  'Software Engineering & Agile Methodologies',
  'Big Data Analytics & Feature Engineering',
  'Machine Learning Model Evaluation & Optimization',
];

const SKILL_MATRIX = [
  {
    category: 'Programming & Web Frameworks',
    icon: <Code2 size={18} />,
    items: ['Python (3.10+)', 'JavaScript (ES6+)', 'FastAPI', 'Django & Django REST', 'React 19', 'Next.js', 'HTML5 & Modern CSS'],
  },
  {
    category: 'AI, Machine Learning & LLMs',
    icon: <Cpu size={18} />,
    items: ['PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'RAG (Retrieval-Augmented Gen)', 'LLM APIs (Gemini, OpenAI)', 'CatBoost & XGBoost', 'ChromaDB / Pinecone'],
  },
  {
    category: 'Databases & In-Memory Stores',
    icon: <Database size={18} />,
    items: ['PostgreSQL', 'Redis (Caching)', 'SQLite', 'MariaDB', 'SQL Query Optimization', 'ORM Data Modeling'],
  },
  {
    category: 'MLOps, DevOps & Tooling',
    icon: <Workflow size={18} />,
    items: ['Docker & Containerization', 'Apache Airflow (DAGs)', 'MLflow Tracking', 'Evidently AI (Drift)', 'Git & GitHub Workflows', 'Linux / Bash Scripting'],
  },
];

const LEADERSHIP_MILESTONES = [
  {
    role: 'Executive Member & AI Coordinator',
    org: 'SSRC AI Club — Sunway College Kathmandu',
    period: '2024 — Present',
    points: [
      'Orchestrated 5+ hands-on technical workshops covering PyTorch tensor operations, model fine-tuning, and RAG architectures for 60+ attendees.',
      'Mentored junior students and peer study groups on pythonic best practices and Kaggle data science workflows.',
      'Spearheaded internal campus hackathon preparation bootcamps, guiding teams on rapid prototyping and pitching.',
    ],
  },
  {
    role: 'Active Volunteer & Technology Advocate',
    org: 'Aaviyanta Foundation & KMC Women Cell',
    period: '2024',
    points: [
      'Conducted digital literacy and technology orientation sessions for young women across local municipal communities.',
      'Honored with the official Certificate of Appreciation by the Aaviyanta Foundation for proactive grassroots leadership.',
    ],
  },
];

const CORE_VALUES = [
  {
    title: 'Deterministic Over Black-Box',
    desc: 'While modern AI offers incredible capability, reliable engineering demands rigorous data validation, explainability metrics, and drift monitoring before production deployment.',
  },
  {
    title: 'Architecture Precedes Implementation',
    desc: 'Clean database schemas, modular service boundaries, and containerized dependencies prevent technical debt and allow rapid horizontal scaling.',
  },
  {
    title: 'Community-Driven Innovation',
    desc: 'Knowledge expands through sharing. Mentoring peers and contributing to open-source communities sharpens engineering depth and accelerates collective learning.',
  },
];

export default function About() {
  return (
    <section className="about-viewport-section" aria-label="About Smriti Basnet">
      <div className="about-glow-orb" />

      {/* Page Header */}
      <div className="section-header-tracked">
        <span className="tracked-eyebrow">ABOUT ME</span>
        <h1 className="about-main-heading">
          Engineering Intelligent Systems with <span className="title-purple-gradient">AI &amp; Scalable Code</span>
        </h1>
        <p className="career-subtext">
          A deep dive into my academic foundations, engineering philosophy, technical toolbox, and leadership contributions.
        </p>
      </div>

      {/* Section 1: Visual Identity & Narrative Overview */}
      <div className="about-grid-layout">
        {/* Left Side: AI Ecosystem Hologram Card & Credentials */}
        <div className="about-avatar-column">
          <div className="about-visual-card">
            <div className="about-visual-glow" />
            <div className="about-visual-frame">
              <img
                src={DifImg}
                alt="AI Ecosystem & Intelligence Architecture"
                className="about-visual-img"
                loading="lazy"
              />
              <div className="about-visual-overlay">
                <span className="about-visual-label">
                  <Cpu size={14} className="text-purple" />
                  <span>Applied AI &amp; Web Architectures</span>
                </span>
              </div>
            </div>
          </div>

          {/* Key Badges */}
          <div className="about-tags-row">
            <span className="tech-badge-glow">Sunway College (BCU UK)</span>
            <span className="tech-badge-glow">BSc (Hons) Computer Science with AI</span>
            <span className="tech-badge-glow">TechSprint '26 Grand Winner</span>
            <span className="tech-badge-glow">SSRC AI Club Executive</span>
          </div>
        </div>

        {/* Right Side: Narrative Copy */}
        <div className="about-text-column">
          <div className="about-copy-card">
            <p className="about-lead-paragraph">
              I am an AI and full-stack software engineer passionate about bridging algorithmic intelligence with production-grade web systems. 
              By merging backend robustness <em>(FastAPI, Django, PostgreSQL)</em> with machine learning architectures <em>(PyTorch, RAG, automated MLOps)</em>, 
              I design resilient software that solves real-world challenges.
            </p>

            <p className="about-body-paragraph">
              My engineering journey spans end-to-end systems: from creating automated fraud detection pipelines with live data drift telemetry 
              to architecting hospital management platforms with context-aware RAG assistants. To me, code is not just syntax—it is an instrument 
              for crafting meaningful, high-impact solutions.
            </p>

            <p className="about-body-paragraph">
              Currently completing my <strong>BSc (Hons) in Computer Science with Artificial Intelligence</strong> at Sunway College Kathmandu 
              (affiliated with Birmingham City University, UK), I couple rigorous coursework with hands-on hackathon building and active student leadership.
            </p>

            {/* Quick Feature Pillars */}
            <div className="about-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <Terminal size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Clean Architectures</h4>
                  <p className="pillar-desc">Production-grade APIs, containerized pipelines &amp; modular code.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Applied AI / ML</h4>
                  <p className="pillar-desc">Generative AI, RAG, predictive modeling &amp; edge inference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Academic Foundations & Coursework */}
      <div className="about-academic-container">
        <div className="academic-header">
          <div className="career-badge-pill">
            <GraduationCap size={13} className="career-badge-icon" />
            <span>Academic Curriculum</span>
          </div>
          <h2 className="academic-title">
            Higher Education &amp; <span className="title-purple-gradient">Curriculum Depth</span>
          </h2>
          <p className="academic-desc">
            Sunway College Kathmandu in academic partnership with Birmingham City University (BCU), UK. 
            Rigorous undergraduate focus on algorithms, distributed cloud systems, and applied artificial intelligence.
          </p>
        </div>

        <div className="academic-modules-grid">
          {ACADEMIC_MODULES.map((module) => (
            <div key={module} className="module-item-card">
              <CheckCircle2 size={16} className="module-check-icon" />
              <span className="module-name">{module}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Technical Skills Matrix */}
      <div className="about-skills-matrix-section">
        <div className="academic-header">
          <div className="career-badge-pill">
            <Layers size={13} className="career-badge-icon" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="academic-title">
            Categorized <span className="title-purple-gradient">Competence Matrix</span>
          </h2>
          <p className="academic-desc">
            Tools, frameworks, and programming libraries validated through working codebases and production deployments.
          </p>
        </div>

        <div className="skills-matrix-grid">
          {SKILL_MATRIX.map((group) => (
            <div key={group.category} className="matrix-category-card">
              <div className="matrix-card-header">
                <div className="matrix-icon-box">{group.icon}</div>
                <h3 className="matrix-group-title">{group.category}</h3>
              </div>
              <div className="matrix-items-wrap">
                {group.items.map((item) => (
                  <span key={item} className="matrix-item-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Leadership & Community Impact */}
      <div className="about-leadership-section">
        <div className="academic-header">
          <div className="career-badge-pill">
            <Users size={13} className="career-badge-icon" />
            <span>Leadership &amp; Mentorship</span>
          </div>
          <h2 className="academic-title">
            Community Leadership &amp; <span className="title-purple-gradient">Peer Mentorship</span>
          </h2>
          <p className="academic-desc">
            Fostering technical growth, organizing campus workshops, and empowering young women in STEM.
          </p>
        </div>

        <div className="leadership-cards-stack">
          {LEADERSHIP_MILESTONES.map((item) => (
            <div key={item.role} className="leadership-card">
              <div className="leadership-card-head">
                <div>
                  <h3 className="leadership-role-title">{item.role}</h3>
                  <span className="leadership-org-text">{item.org}</span>
                </div>
                <span className="leadership-period-badge">{item.period}</span>
              </div>
              <ul className="leadership-points-list">
                {item.points.map((pt, idx) => (
                  <li key={idx} className="leadership-point-item">
                    <span className="leadership-bullet-dot" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Core Engineering Values */}
      <div className="about-values-section">
        <div className="academic-header">
          <div className="career-badge-pill">
            <Compass size={13} className="career-badge-icon" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="academic-title">
            My Engineering <span className="title-purple-gradient">Philosophy</span>
          </h2>
        </div>

        <div className="values-grid-three">
          {CORE_VALUES.map((val) => (
            <div key={val.title} className="value-card">
              <h3 className="value-card-title">{val.title}</h3>
              <p className="value-card-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6: Next Steps CTA */}
      <div className="about-page-cta">
        <div className="cta-banner-inner">
          <div>
            <h3 className="cta-banner-title">Interested in reviewing verified codebases?</h3>
            <p className="cta-banner-desc">Explore end-to-end architectures, open-source repositories, and machine learning pipelines.</p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/projects" className="btn-purple-glow">
              <span>View Projects</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="btn-ghost-glass">
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
