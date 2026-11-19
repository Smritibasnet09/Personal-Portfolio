import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  Code2,
  GraduationCap,
  Database,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
} from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    role: 'Freelance AI & Full-Stack Developer',
    org: 'Self-Development & Client Solutions',
    period: '2025 — Present',
    current: true,
    location: 'Kathmandu, Nepal (Remote)',
    type: 'Freelance / Engineering Solutions',
    description:
      'Designing and developing tailored software solutions, conversational AI agents, and end-to-end predictive pipelines for diverse technical requirements.',
    responsibilities: [
      'Engineered custom RAG (Retrieval-Augmented Generation) assistants utilizing vector databases (ChromaDB, Pinecone) with streaming FastAPI endpoints.',
      'Constructed responsive full-stack dashboards using React 19, Tailwind, and Django REST, implementing JWT role-based access control.',
      'Optimized machine learning model inference routines with ONNX runtimes and batch vectorization, cutting response latency by over 40%.',
      'Configured Dockerized deployment environments with automated GitHub Actions CI/CD workflows for seamless continuous delivery.',
    ],
    tags: ['AI Agents', 'RAG Pipelines', 'FastAPI', 'Next.js', 'PyTorch', 'Docker', 'PostgreSQL'],
    icon: <Code2 size={20} />,
  },
  {
    id: 2,
    role: 'IT Development Intern',
    org: 'University Grants Commission (UGC), Nepal',
    period: '2025',
    current: false,
    location: 'Sanothimi, Bhaktapur, Nepal',
    type: 'Institutional IT & Data Operations',
    description:
      'Supported the central IT department of Nepal’s apex higher education regulatory body, managing large-scale national educational records and data integrity workflows.',
    responsibilities: [
      'Analyzed national institutional datasets across colleges and universities, identifying and resolving over 1,200 duplicate records.',
      'Developed automated Excel and SQL data cleaning scripts that accelerated semester verification cycles by 35%.',
      'Assisted senior IT officers in database sanitation, schema integrity auditing, and preparing analytical reporting tables for grant allocations.',
      'Collaborated closely with cross-department administrative personnel to establish standardized data entry validation guidelines.',
    ],
    tags: ['Data Cleaning', 'Verification Systems', 'SQL Analytics', 'Database Quality', 'Institutional Reporting'],
    icon: <Building2 size={20} />,
  },
  {
    id: 3,
    role: 'Executive Member & AI Coordinator',
    org: 'SSRC AI Club — Sunway College Kathmandu',
    period: '2024 — 2025',
    current: false,
    location: 'Maitidevi, Kathmandu, Nepal',
    type: 'Student Leadership & Technical Mentorship',
    description:
      'Elected to executive leadership to guide campus technology culture, conduct specialized machine learning workshops, and coach competitive hackathon teams.',
    responsibilities: [
      'Designed and facilitated 5+ comprehensive workshops on PyTorch fundamentals, data preprocessing, and API development for 60+ university students.',
      'Coordinated weekly peer study circles covering foundational deep learning papers, algorithmic complexity, and Kaggle competition techniques.',
      'Mentored 4 internal teams for national hackathons, providing direct guidance on architecture design, presentation delivery, and rapid MVP iteration.',
      'Liaised with college administration and external tech speakers to organize technical webinars and industry insight sessions.',
    ],
    tags: ['Technical Leadership', 'Workshop Coordination', 'Mentorship', 'PyTorch', 'Community Building'],
    icon: <GraduationCap size={20} />,
  },
  {
    id: 4,
    role: 'Data Entry & Analytics Specialist',
    org: 'Dataksha Analytics',
    period: '2023',
    current: false,
    location: 'Kathmandu, Nepal',
    type: 'Data Operations & Quality Assurance',
    description:
      'Maintained enterprise relational datasets, ensuring strict data governance standards for downstream analytical and statistical models.',
    responsibilities: [
      'Executed systematic data auditing across high-volume relational spreadsheets, maintaining an error-free accuracy benchmark exceeding 99.8%.',
      'Streamlined repetitive validation routines using structured formulas and macro automation, reducing weekly audit turnaround time.',
      'Collaborated with business intelligence analysts to restructure messy unstructured survey records into normalized database-ready formats.',
      'Maintained strict data confidentiality and compliance protocols for sensitive client records.',
    ],
    tags: ['Data Auditing', 'Quality Control', 'Data Pipelines', 'Spreadsheet Analytics', 'Normalization'],
    icon: <Database size={20} />,
  },
];

const CAREER_STATS = [
  {
    number: '60+',
    label: 'Peers & Students Mentored',
    desc: 'Through workshops & study circles at Sunway AI Club',
  },
  {
    number: '99.8%',
    label: 'Data Integrity Standard',
    desc: 'Maintained across institutional verification databases',
  },
  {
    number: '1st',
    label: 'National Championship',
    desc: 'TechSprint 2026 National Hackathon Grand Winner',
  },
  {
    number: '6+',
    label: 'Production Systems',
    desc: 'Engineered across AI, Full-Stack & MLOps domains',
  },
];

export default function Experience() {
  return (
    <section className="career-viewport-section" aria-label="Career and Professional Experience">
      {/* Section Header */}
      <div className="career-header-center">
        <div className="career-badge-pill">
          <Briefcase size={13} className="career-badge-icon" />
          <span>Professional Journey</span>
        </div>
        <h1 className="career-main-title">
          My Career &amp; <span className="title-purple-gradient">Professional Path</span>
        </h1>
        <p className="career-subtext">
          A progression of hands-on software development, institutional operations, and community leadership.
        </p>
        <div className="career-accent-divider" />
      </div>

      {/* Quantitative Impact Highlights */}
      <div className="career-stats-grid">
        {CAREER_STATS.map((stat) => (
          <div key={stat.label} className="career-stat-card">
            <span className="career-stat-number">{stat.number}</span>
            <span className="career-stat-label">{stat.label}</span>
            <p className="career-stat-desc">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Experience Cards Stack */}
      <div className="experience-cards-container">
        {EXPERIENCES.map((item) => (
          <article
            key={item.id}
            className={`experience-card ${item.current ? 'is-current' : ''}`}
          >
            {/* Left accent indicator line */}
            <div className="experience-card-accent-bar" />

            <div className="experience-card-inner">
              {/* Card Header */}
              <div className="experience-card-header">
                {/* Icon & Title info */}
                <div className="experience-header-main">
                  <div className="experience-icon-box" aria-hidden="true">
                    {item.icon}
                  </div>

                  <div className="experience-title-group">
                    <div className="experience-role-row">
                      <h2 className="experience-role-title">{item.role}</h2>
                      {item.current && (
                        <span className="experience-active-pill">
                          <span className="experience-active-dot" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="experience-meta-row">
                      <span className="experience-org-name">{item.org}</span>
                      <span className="experience-meta-sep">•</span>
                      <span className="experience-location-text">
                        <MapPin size={12} className="experience-location-icon" />
                        {item.location}
                      </span>
                      <span className="experience-meta-sep">•</span>
                      <span className="experience-type-text">{item.type}</span>
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="experience-duration-badge">
                  <Calendar size={13} className="experience-calendar-icon" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities Description */}
              <div className="experience-body">
                <p className="experience-description">{item.description}</p>

                <div className="experience-duties-block">
                  <span className="duties-title">Key Responsibilities &amp; Impact:</span>
                  <ul className="duties-list">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="duty-item">
                        <CheckCircle2 size={14} className="duty-check" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies / Skills Tags */}
              <div className="experience-footer">
                <div className="experience-tags-list">
                  {item.tags.map((tag) => (
                    <span key={tag} className="experience-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Next Step / Contact Callout */}
      <div className="about-page-cta" style={{ marginTop: '4rem' }}>
        <div className="cta-banner-inner">
          <div>
            <h3 className="cta-banner-title">Considering me for an AI or Software Engineering role?</h3>
            <p className="cta-banner-desc">Review my full formal resume or connect directly to discuss upcoming opportunities.</p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/contact" className="btn-purple-glow">
              <span>Get In Touch</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/projects" className="btn-ghost-glass">
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
