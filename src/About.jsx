import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Styles (everything lives in this one file)                        */
/*  Layout: bio on the left, a small clear journey on the right.      */
/*  Headings use a serif (Fraunces); body keeps your site's font.     */
/* ------------------------------------------------------------------ */

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&display=swap');

.ab-section {
  --ab-line: rgba(168, 85, 247, 0.28);
  --ab-accent: #a855f7;
  --ab-text: #f4f1fb;
  --ab-body: #c9c2dc;
  --ab-muted: #8f87a8;
  --ab-hi: #c4a6f5;
  --ab-serif: 'Fraunces', Georgia, 'Times New Roman', serif;

  position: relative;
  isolation: isolate;
  width: 100%;
  padding: 8rem 2rem 6rem; /* big top padding keeps it clear of the navbar */
  color: var(--ab-text);
  overflow-x: clip;
}
.ab-section::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 60px;
  left: 50%;
  width: 700px;
  height: 300px;
  max-width: 100%;
  transform: translateX(-50%);
  background: radial-gradient(closest-side, rgba(124, 58, 237, 0.16), transparent);
  filter: blur(30px);
  pointer-events: none;
}
.ab-wrap {
  max-width: 1080px;
  margin: 0 auto;
}

/* ---------- Title ---------- */
.ab-title {
  margin: 0 0 3rem;
  font-family: var(--ab-serif);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.01em;
}
.ab-title em {
  font-style: italic;
  color: var(--ab-hi);
}

/* ---------- Two columns ---------- */
.ab-cols {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 4.5rem;
  align-items: start;
}
.ab-left {
  position: sticky;
  top: 7rem;
}
.ab-h2 {
  margin: 0 0 0.8rem;
  font-family: var(--ab-serif);
  font-size: 1.35rem;
  font-weight: 500;
}
.ab-block {
  margin-bottom: 2.4rem;
}
.ab-block:last-child {
  margin-bottom: 0;
}
.ab-block p {
  margin: 0 0 0.85rem;
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--ab-body);
}
.ab-block p:last-child {
  margin-bottom: 0;
}
.ab-block strong {
  font-weight: 600;
  color: var(--ab-hi);
}

/* ---------- Journey (small and clear) ---------- */
.ab-right {
  padding-left: 1.5rem;
}
.ab-line {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}
.ab-line::before {
  content: '';
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 5px;
  width: 1px;
  background: linear-gradient(180deg, var(--ab-line), rgba(168, 85, 247, 0.05));
}
.ab-step {
  position: relative;
  display: grid;
  grid-template-columns: 11px minmax(0, 1fr);
  column-gap: 1.2rem;
  padding-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.ab-step:last-child {
  padding-bottom: 0;
}
.ab-step.is-seen {
  opacity: 1;
  transform: none;
}
.ab-dot {
  position: relative;
  z-index: 1;
  width: 11px;
  height: 11px;
  margin-top: 0.3rem;
  background: var(--ab-accent);
  border: 2px solid #1a0f33;
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--ab-accent), 0 0 10px rgba(168, 85, 247, 0.7);
}
.ab-when {
  display: block;
  margin-bottom: 0.1rem;
  font-family: var(--ab-serif);
  font-size: 0.85rem;
  font-style: italic;
  color: var(--ab-muted);
}
.ab-step h3 {
  margin: 0 0 0.25rem;
  font-family: var(--ab-serif);
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.3;
}
.ab-step p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.65;
  color: var(--ab-body);
}

/* ---------- Closing ---------- */
.ab-end {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
  margin-top: 4.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--ab-line);
}
.ab-end h3 {
  margin: 0;
  font-family: var(--ab-serif);
  font-size: 1.3rem;
  font-weight: 500;
}
.ab-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
.ab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.15rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--ab-text);
  text-decoration: none;
  border: 1px solid var(--ab-line);
  border-radius: 999px;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.ab-btn:hover {
  border-color: var(--ab-accent);
  background: rgba(168, 85, 247, 0.1);
}
.ab-btn.is-main {
  background: var(--ab-accent);
  border-color: var(--ab-accent);
}
.ab-btn.is-main:hover {
  background: #b46cf8;
}
.ab-btn:focus-visible {
  outline: 2px solid var(--ab-hi);
  outline-offset: 3px;
}

/* ---------- Smaller screens: one column ---------- */
@media (max-width: 900px) {
  .ab-cols {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .ab-left {
    position: static;
  }
  .ab-right {
    padding-left: 0;
  }
}
@media (max-width: 600px) {
  .ab-section {
    padding: 6.5rem 1.2rem 4rem;
  }
  .ab-title {
    margin-bottom: 2.2rem;
  }
  .ab-end {
    margin-top: 3.4rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .ab-step {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .ab-btn {
    transition: none;
  }
}
`;

/* ------------------------------------------------------------------ */
/*  Journey (edit here). Keep each text to one short sentence.        */
/*  when = year or "Mon Year". Order = top to bottom on the page.     */
/* ------------------------------------------------------------------ */

const JOURNEY = [
  {
    when: '2025',
    title: 'Started with the basics',
    text: 'A 160-day DSA challenge with GeeksforGeeks, the IBM Design Thinking course, and a visit to Bajra Technologies.',
  },
  {
    when: 'May 2025',
    title: 'My first hackathon',
    text: 'At the Global IME Bank AI & ML Hackathon, we built AnomaTriX, a model that flags suspicious transactions with over 90% accuracy.',
  },
  {
    when: '2025',
    title: 'Learned and shared',
    text: 'Presented a Smart Waste Management System at the ICT Startup Program 2025, and joined a 3-day Sachet Nari bootcamp on digital advocacy.',
  },
  {
    when: '2025–26',
    title: 'Kept building',
    text: 'Built Chuk, an AI kitchen and health platform, in 48 hours at MBMC IdeaX, and worked on DuFy, a music search tool for video editors.',
  },
  {
    when: '2026',
    title: 'Grand Winner at TechSprint',
    text: 'With Team Visionary, we won the national hackathon with an AR and AI science learning app.',
  },
  {
    when: '2026',
    title: 'Cloud and AI',
    text: 'Started learning AWS and joined Pinnacle Labs as an AI Intern.',
  },
  {
    when: '2026',
    title: 'Kribo Nepal',
    text: 'At the Mid-Valley Hackathon, we built a platform that connects farmers directly with brokers.',
  },
  {
    when: 'Now',
    title: 'Still learning',
    text: 'Studying Computer Science with AI at Sunway College Kathmandu.',
  },
];

/* ------------------------------------------------------------------ */
/*  One step: fades in the first time it scrolls into view            */
/* ------------------------------------------------------------------ */

function Step({ step }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <li ref={ref} className={`ab-step${seen ? ' is-seen' : ''}`}>
      <span className="ab-dot" aria-hidden="true" />
      <div>
        <span className="ab-when">{step.when}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function About() {
  return (
    <section className="ab-section" aria-label="About Smriti Basnet">
      <style>{STYLES}</style>

      <div className="ab-wrap">
        <h1 className="ab-title">
          Hi, I’m <em>Smriti Basnet</em>
        </h1>

        <div className="ab-cols">
          {/* Left: who I am */}
          <div className="ab-left">
            <div className="ab-block">
              <h2 className="ab-h2">Short Bio</h2>
              <p>
                I’m a <strong>Computer Science with Artificial Intelligence</strong> student with
                a passion for building things that solve real problems. I’m an AI &amp; ML
                enthusiast and a Python programmer, and I love exploring new technology and
                learning something new every day.
              </p>
              <p>
                I mainly write code in Python and JavaScript, and work with frameworks like
                Django, FastAPI and React.
              </p>
            </div>

            <div className="ab-block">
              <h2 className="ab-h2">Academic Journey</h2>
              <p>
                I’m currently pursuing my{' '}
                <strong>BSc (Hons) in Computer Science with Artificial Intelligence</strong> at
                Sunway College, Kathmandu, in partnership with Birmingham City University, UK.
              </p>
              <p>
                I’m also an Executive Member and AI Coordinator at the SSRC AI Club, where I help
                run workshops for other students.
              </p>
            </div>
          </div>

          {/* Right: my journey */}
          <div className="ab-right">
            <h2 className="ab-h2">My journey so far</h2>
            <ol className="ab-line">
              {JOURNEY.map((step) => (
                <Step key={step.title} step={step} />
              ))}
            </ol>
          </div>
        </div>

        <div className="ab-end">
          <h3>Want to see what I’ve built?</h3>
          <div className="ab-actions">
            <Link to="/projects" className="ab-btn is-main">
              <span>View projects</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/contact" className="ab-btn">
              <span>Get in touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}