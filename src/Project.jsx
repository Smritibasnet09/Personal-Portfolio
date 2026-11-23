import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Styles (everything lives in this one file)                        */
/*  Change the colors in .pj-section to re-theme the whole page.      */
/* ------------------------------------------------------------------ */

const STYLES = `
.pj-section {
  --pj-card: rgba(255, 255, 255, 0.04);
  --pj-border: rgba(168, 85, 247, 0.18);
  --pj-border-hover: rgba(168, 85, 247, 0.55);
  --pj-accent: #a855f7;
  --pj-accent-2: #7c3aed;
  --pj-text: #f4f1fb;
  --pj-muted: #a79fbd;

  width: 100%;
  padding: 4.5rem 2rem 6rem;
  color: var(--pj-text);
  /* No background on purpose: your page background shows through */
}

/* ---------- Header ---------- */
.pj-header {
  position: relative;
  isolation: isolate;
  max-width: 760px;
  margin: 0 auto 3.4rem;
  text-align: center;
}
/* soft purple glow behind the heading */
.pj-header::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -70px;
  left: 50%;
  width: 540px;
  height: 260px;
  transform: translateX(-50%);
  background: radial-gradient(closest-side, rgba(124, 58, 237, 0.3), transparent);
  filter: blur(24px);
  pointer-events: none;
}
.pj-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.1rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #c4a6f5;
}
.pj-eyebrow::before,
.pj-eyebrow::after {
  content: '';
  width: 46px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--pj-accent));
}
.pj-eyebrow::after {
  transform: scaleX(-1);
}
.pj-heading {
  margin: 0 0 0.9rem;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
}
.pj-gradient-text {
  background: linear-gradient(120deg, #c084fc, #a855f7 50%, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pj-sub {
  max-width: 520px;
  margin: 0 auto;
  color: var(--pj-muted);
  line-height: 1.65;
}

/* ---------- Grid ---------- */
.pj-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  max-width: 1240px;
  margin: 0 auto;
}

/* ---------- Card ---------- */
.pj-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  background: var(--pj-card);
  border: 1px solid var(--pj-border);
  border-radius: 18px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  animation: pj-rise 0.55s ease both;
  animation-delay: calc(var(--d, 0) * 70ms);
}
/* thin glow line along the top edge */
.pj-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 1.8rem;
  right: 1.8rem;
  height: 2px;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(90deg, transparent, var(--pj-accent), transparent);
  opacity: 0.35;
  transition: opacity 0.25s ease;
}
.pj-card:hover {
  transform: translateY(-4px);
  border-color: var(--pj-border-hover);
  box-shadow: 0 18px 40px -22px rgba(124, 58, 237, 0.6);
}
.pj-card:hover::before {
  opacity: 1;
}

@keyframes pj-rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pj-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.pj-category {
  display: inline-block;
  padding: 0.15rem 0.65rem;
  font-size: 0.7rem;
  color: #e9d5ff;
  background: rgba(168, 85, 247, 0.14);
  border-radius: 999px;
}
.pj-number {
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.25);
}
.pj-title {
  margin: 0 0 0.35rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
}
.pj-tagline {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  color: #c4a6f5;
}
.pj-desc {
  margin: 0 0 1.1rem;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--pj-muted);
}
.pj-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: auto 0 1.2rem;
  padding: 0;
  list-style: none;
}
.pj-tag {
  padding: 0.18rem 0.55rem;
  font-size: 0.7rem;
  color: var(--pj-muted);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
}

/* "View source" with an underline that grows on hover */
.pj-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  font-size: 0.85rem;
  font-weight: 600;
  color: #c084fc;
  text-decoration: none;
}
.pj-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: -4px;
  height: 1px;
  background: currentColor;
  transition: right 0.25s ease;
}
.pj-link:hover {
  color: #e9d5ff;
}
.pj-link:hover::after {
  right: 0;
}
.pj-link:focus-visible,
.pj-footer a:focus-visible {
  outline: 2px solid var(--pj-accent);
  outline-offset: 3px;
}

/* ---------- Footer line ---------- */
.pj-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem 2rem;
  max-width: 1240px;
  margin: 2.4rem auto 0;
  padding-top: 1.4rem;
  border-top: 1px solid var(--pj-border);
  font-size: 0.9rem;
  color: var(--pj-muted);
}
.pj-footer p {
  margin: 0;
}
.pj-footer a {
  color: #c084fc;
  font-weight: 600;
  text-decoration: none;
}
.pj-footer a:hover {
  color: #e9d5ff;
  text-decoration: underline;
}

/* ---------- Responsive ---------- */
@media (max-width: 1024px) {
  .pj-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .pj-section {
    padding: 3.5rem 1rem 4rem;
  }
  .pj-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .pj-card {
    padding: 1.4rem;
  }
}

/* ---------- Reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .pj-card,
  .pj-link::after {
    animation: none !important;
    transition: none !important;
  }
}
`;

/* ------------------------------------------------------------------ */
/*  Data (edit your projects here)                                    */
/* ------------------------------------------------------------------ */

const GITHUB_PROFILE = 'https://github.com/Smritibasnet09';

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'Kribo Nepal',
    category: 'Full-Stack',
    tagline: 'Agricultural marketplace connecting farmers and brokers',
    description:
      'A digital marketplace where farmers list their produce and verified brokers post requirements, enabling location-based discovery and transparent negotiations.',
    tools: 'React, FastAPI, PostgreSQL, Socket.IO, React Native Maps, Scikit-learn',
    github: 'https://github.com/Smritibasnet09/Kribo-Nepal',
  },
  {
    id: 2,
    number: '02',
    title: 'Intelligent Health Management',
    category: 'Full-Stack',
    tagline: 'Hospital platform with a RAG medical assistant',
    description:
      'Manages doctors, patients, appointments and pharmacy inventory, with JWT role-based access and an AI assistant grounded in clinical guidelines.',
    tools: 'Django, PostgreSQL, React, ChromaDB, Gemini API',
    github: GITHUB_PROFILE,
  },
  {
    id: 3,
    number: '03',
    title: 'Learn.AR',
    category: 'AR / AI',
    tagline: 'AR and AI learning platform for biology and chemistry',
    description:
      'Learning assistant that turns biology and chemistry into interactive 3D models and virtual experiments, with chapter quizzes and a Gemini-powered AI tutor.',
    tools: 'React, Vite, Tailwind CSS, Three.js, AR.js, Node.js, MongoDB, Gemini API',
    github: 'https://github.com/Smritibasnet09/TechSprint_visionary_AR',
  },
 {
  id: 4,
  number: '04',
  title: 'Nyano Kokh (Smart Monitoring Blanket)',
  category: 'IoT / AI',
  tagline: 'Real time baby health and safety monitoring',
  description:
    'Smart monitoring blanket that tracks a baby’s temperature and movement in real time, providing alerts to caregivers for improved safety and comfort.',
  tools: 'IoT Sensors, Python, AI/ML, Django',
  github: GITHUB_PROFILE,
},
  {
    id: 5,
    number: '05',
    title: 'Smart Waste Classification',
    category: 'AI / ML',
    tagline: 'MobileNetV2 transfer learning on a Raspberry Pi 4',
    description:
      'Lightweight classifier that sorts waste into metal, organic, paper, plastic or none, running offline on a Raspberry Pi 4. Data augmentation raised accuracy from 71.2% to 93.6%.',
    tools: 'Python, MobileNetV2, Transfer Learning, Raspberry Pi 4',
    github: 'https://github.com/Smritibasnet09/Waste-Classification-System-Using-Transfer-Learning',
  },
  {
    id: 6,
    number: '06',
    title: 'Dufy (Music Recommendation)',
    category: 'Tools',
    tagline: 'Content and collaborative audio recommender',
    description:
      'Recommends tracks using cosine similarity over Spotify audio features and can export the result as a playlist.',
    tools: 'Python, Pandas, Scikit-learn, Spotify Web API',
    github: GITHUB_PROFILE,
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Project() {
  return (
    <section className="pj-section" aria-label="Projects">
      <style>{STYLES}</style>

      <header className="pj-header">
        <span className="pj-eyebrow">Selected Work</span>
        <h1 className="pj-heading">
          Latest <span className="pj-gradient-text">Projects</span>
        </h1>
        <p className="pj-sub">
          Machine learning pipelines, full-stack apps and developer tools, built end to end.
        </p>
      </header>

      <div className="pj-grid">
        {PROJECTS.map((p, i) => (
          <article key={p.id} className="pj-card" style={{ '--d': i }}>
            <div className="pj-head">
              <span className="pj-category">{p.category}</span>
              <span className="pj-number">{p.number}</span>
            </div>

            <h2 className="pj-title">{p.title}</h2>
            <p className="pj-tagline">{p.tagline}</p>
            <p className="pj-desc">{p.description}</p>

            <ul className="pj-stack" aria-label="Technology stack">
              {p.tools.split(',').map((t) => (
                <li key={t} className="pj-tag">
                  {t.trim()}
                </li>
              ))}
            </ul>

            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-link"
              aria-label={`View ${p.title} source code on GitHub`}
            >
              <Github size={15} aria-hidden="true" />
              View source
            </a>
          </article>
        ))}
      </div>

      <div className="pj-footer">
        <p>
          See all of my projects{' '}
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
            on GitHub
          </a>
        </p>
        <p>
          Want to work together? <Link to="/contact">Get in touch</Link>
        </p>
      </div>
    </section>
  );
}