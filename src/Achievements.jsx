import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Users, Star, ArrowRight, Zap, Target, CheckCircle2, ShieldCheck } from 'lucide-react';

import GDImg from './assets/GD.png';
import ImeImg from './assets/Ime.png';
import NariImg from './assets/Nari.png';
import KalpaImg from './assets/Kalpa.jpeg';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Grand Winner (1st Place) — TechSprint 2026',
    category: 'National AI & Software Hackathon',
    badge: '1st Place 🏆',
    icon: <Trophy size={16} />,
    image: GDImg,
    summary:
      'First prize podium championship awarded out of collegiate and developer teams nationwide for conceptualizing, engineering, and presenting a production-ready predictive AI architecture.',
    deepDive: [
      'Problem: Modern applications struggle with real-time prediction accuracy while failing to detect incoming data distribution shifts in production.',
      'Solution: Engineered a high-throughput microservice combining gradient-boosted decision trees with an automated Evidently AI drift monitor and scheduled Airflow retraining DAGs.',
      'Result: Praised by hackathon judges for architectural maturity, deterministic evaluation metrics, and seamless full-stack implementation.',
    ],
    techStack: ['Python', 'FastAPI', 'CatBoost', 'Evidently AI', 'Docker', 'React'],
  },
  {
    id: 2,
    title: 'Finalist Team — Global IME Bank AI/ML Hackathon 2025',
    category: 'FinTech & Real-Time Intelligence',
    badge: 'Finalist Team ⚡',
    icon: <Zap size={16} />,
    image: ImeImg,
    summary:
      'Recognized as a leading finalist team in an intensive 48-hour FinTech hackathon organized by one of Nepal’s premier commercial banking institutions.',
    deepDive: [
      'Problem: Financial institutions experience significant losses from subtle synthetic identity fraud and unauthorized micro-transactions.',
      'Solution: Prototyped a sub-50ms fraud scoring inference gateway utilizing ensemble classification, historical transaction embeddings, and alert telemetry.',
      'Result: Selected as finalist out of dozens of competing algorithmic teams for clean database schema design and practical banking viability.',
    ],
    techStack: ['Python', 'Scikit-learn', 'FastAPI', 'PostgreSQL', 'Redis', 'Pandas'],
  },
  {
    id: 3,
    title: 'Leadership Recognition — Sachet Nari: KMC Women Cell',
    category: 'Community Leadership & Empowerment',
    badge: 'Leadership Award 🌟',
    icon: <Star size={16} />,
    image: NariImg,
    summary:
      'Honored with an official Certificate of Appreciation by the Aaviyanta Foundation for grassroots volunteer leadership in advancing digital literacy among women.',
    deepDive: [
      'Initiative: Mobilized community workshops focused on basic computing, internet security, and career pathways in software and technology.',
      'Contribution: Prepared accessible curriculum materials and mentored participants on navigating online tools and educational platforms safely.',
      'Impact: Recognized for demonstrating proactive volunteer leadership and championing female participation in technology.',
    ],
    techStack: ['Community Leadership', 'Digital Literacy', 'Public Speaking', 'Mentorship'],
  },
  {
    id: 4,
    title: 'Honored Contributor — Kalpavriksha Annual Initiative',
    category: 'Social Impact & Academic Volunteer',
    badge: 'Honored Contributor 📜',
    icon: <Award size={16} />,
    image: KalpaImg,
    summary:
      'Awarded formal certificate of recognition in collaboration with Sunway College Kathmandu for valuable contribution toward youth academic and technological empowerment.',
    deepDive: [
      'Initiative: Collaborative youth empowerment program connecting university computer science students with aspiring secondary school learners.',
      'Contribution: Facilitated interactive logic puzzles, introductory programming exercises, and guided discussions on artificial intelligence fundamentals.',
      'Impact: Commended by faculty leadership for dedication to educational outreach and academic volunteer service.',
    ],
    techStack: ['Youth Mentorship', 'Educational Outreach', 'STEM Promotion', 'Academic Collaboration'],
  },
];

const HACKATHON_STATS = [
  {
    stat: '1st Place',
    label: 'National Championship',
    sub: 'TechSprint 2026 Grand Winner',
  },
  {
    stat: 'Top 5',
    label: 'FinTech Finalist',
    sub: 'Global IME Bank AI/ML Hackathon',
  },
  {
    stat: '150+',
    label: 'Hackathon Hours',
    sub: 'Intensive rapid prototyping & builds',
  },
  {
    stat: '2 Honors',
    label: 'Community Leadership',
    sub: 'Aaviyanta Foundation & Sunway',
  },
];

const HACKATHON_LESSONS = [
  {
    title: 'Velocity Under Pressure',
    desc: 'Hackathons teach you how to turn ambiguous constraints into a shipping MVP within 24 to 48 hours without getting bogged down by perfectionism.',
  },
  {
    title: 'Architecture Matters Early',
    desc: 'Even in rapid prototypes, clean separation of backend APIs, model inference, and frontend UI ensures that last-minute integrations succeed smoothly.',
  },
  {
    title: 'Communicating Technical Value',
    desc: 'A brilliant model is useless if stakeholders cannot understand its impact. Winning hackathons requires communicating complex AI logic clearly and persuasively.',
  },
];

export default function Achievements() {
  return (
    <section className="achievements-viewport-section" aria-label="Achievements, Hackathons and Podiums">
      <div className="achievements-ambient-glow" />

      {/* Header */}
      <div className="achievements-header-center">
        <div className="career-badge-pill">
          <Trophy size={13} className="career-badge-icon" />
          <span>Podiums &amp; Recognition</span>
        </div>
        <h1 className="achievements-main-title">
          Hackathons &amp; <span className="title-purple-gradient">Achievements</span>
        </h1>
        <p className="achievements-subtext">
          Verified podium championships, national hackathons, leadership awards, and social impact milestones.
        </p>
      </div>

      {/* Stats Counter Banner */}
      <div className="career-stats-grid">
        {HACKATHON_STATS.map((item) => (
          <div key={item.label} className="career-stat-card">
            <span className="career-stat-number">{item.stat}</span>
            <span className="career-stat-label">{item.label}</span>
            <p className="career-stat-desc">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Grid of Achievement Deep-Dive Cards */}
      <div className="achievements-cards-grid">
        {ACHIEVEMENTS.map((item) => (
          <article key={item.id} className="achievement-glass-card">
            <div className="achievement-img-wrap">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="achievement-img"
              />
              <span className="achievement-badge-pill">
                {item.icon}
                <span>{item.badge}</span>
              </span>
            </div>

            <div className="achievement-content-block">
              <span className="achievement-category">{item.category}</span>
              <h2 className="achievement-title">{item.title}</h2>
              <p className="achievement-desc">{item.summary}</p>

              {/* Detailed Breakdown */}
              <div className="achievement-breakdown-box">
                <span className="breakdown-label">Key Highlights &amp; Architecture:</span>
                <ul className="breakdown-list">
                  {item.deepDive.map((line, idx) => (
                    <li key={idx} className="breakdown-item">
                      <span className="breakdown-bullet" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="achievement-tags-row">
                {item.techStack.map((tech) => (
                  <span key={tech} className="tech-badge-glow">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Hackathon Mindset Section */}
      <div className="about-values-section" style={{ marginTop: '5rem' }}>
        <div className="academic-header">
          <div className="career-badge-pill">
            <Target size={13} className="career-badge-icon" />
            <span>Competitive Velocity</span>
          </div>
          <h2 className="academic-title">
            The Hackathon <span className="title-purple-gradient">Engineering Mindset</span>
          </h2>
          <p className="academic-desc">
            What competing in high-stakes national hackathons taught me about software delivery under intense constraints.
          </p>
        </div>

        <div className="values-grid-three">
          {HACKATHON_LESSONS.map((lesson) => (
            <div key={lesson.title} className="value-card">
              <h3 className="value-card-title">{lesson.title}</h3>
              <p className="value-card-desc">{lesson.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next CTA */}
      <div className="about-page-cta" style={{ marginTop: '4rem' }}>
        <div className="cta-banner-inner">
          <div>
            <h3 className="cta-banner-title">Want to see the code behind these wins?</h3>
            <p className="cta-banner-desc">Explore the actual repositories, architectures, and models powering these solutions.</p>
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
