import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Landmark,
  GraduationCap,
  Database,
  Trophy,
  Medal,
  Users,
  ArrowRight,
} from 'lucide-react';

/* ============================================================
   DATA (only the information from your design)
   ============================================================ */
const EXPERIENCES = [
  {
    id: 'ugc',
    date: ['2026 –', 'Present'],
    current: true,
    icon: Landmark,
    role: 'IT Development Intern',
    org: 'University Grants Commission (UGC), Nepal',
    location: 'Sanothimi, Bhaktapur',
    desc: 'Supported the central IT department in managing national educational data and ensuring data integrity.',
    tags: ['SQL', 'Data Cleaning', 'Database Management'],
  },
  {
    id: 'ssrc',
    date: ['2024 –', '2025'],
    icon: GraduationCap,
    role: 'Executive Member & AI Coordinator',
    org: 'SSRC AI Club — Sunway College Kathmandu',
    location: 'Kathmandu',
    desc: 'Led technical workshops, mentored students and built a tech community.',
    tags: ['PyTorch', 'Mentorship', 'Community'],
  },
  {
    id: 'dataksha',
    date: ['2023'],
    icon: Database,
    role: 'Data Entry & Analytics Specialist',
    org: 'Dataksha Analytics',
    location: 'Kathmandu',
    desc: 'Maintained high-quality datasets and streamlined data processes.',
    tags: ['Data Analytics', 'Quality Control', 'Spreadsheets'],
  },
];

const ACHIEVEMENTS = [
  { id: 'techsprint', tone: 'gold', icon: Trophy, title: 'TechSprint 2026', sub: 'National Hackathon Grand Winner', year: '2026' },
  { id: 'bronze', tone: 'bronze', icon: Medal, title: 'Bronze Award', sub: 'BCU Graduate', year: '2025' },
  { id: 'club', tone: 'violet', icon: Users, title: 'AI Club Leadership', sub: 'Workshops & Mentorship (60+ Students)', year: '2024 – 2025' },
];

/* ============================================================
   STYLES (inside this file so the page is self-contained)
   No custom page background: the section is transparent, so it
   always matches your site's own background (no color patches).
   ============================================================ */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.wk {
  --wk-accent: #8b5cf6;
  --wk-accent-light: #c4b5fd;
  --wk-ink: #f6f5fc;
  --wk-text: #d8d5ea;
  --wk-muted: #a09db8;
  --wk-line: rgba(255, 255, 255, 0.09);
  --wk-surface: rgba(255, 255, 255, 0.035);
  position: relative;
  max-width: 1200px;
  /* pushed to the right side (not centered). Increase the 5vw to move it back left, decrease to move it further right */
  margin: 0 clamp(1rem, 5vw, 5rem) 0 auto;
  /* top clears the fixed nav, left clears the social sidebar, bottom clears the Resume button */
  padding: 7.5rem 0 7rem 6.5rem;
  color: var(--wk-text);
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
.wk *, .wk *::before, .wk *::after { box-sizing: border-box; }
.wk h1, .wk h2, .wk h3, .wk p { font-family: inherit; }

/* One very soft glow that fades out completely before reaching any edge */
.wk-glow {
  position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background: radial-gradient(ellipse 36% 30% at 40% 30%, rgba(124, 58, 237, 0.13), transparent);
}

/* ---------- Layout ---------- */
.wk-row { display: grid; grid-template-columns: 320px minmax(0, 1fr); gap: 4rem; align-items: start; }
.wk-row + .wk-row { margin-top: 6rem; }
.wk-intro { position: sticky; top: 8rem; }

/* ---------- Intro ---------- */
.wk-kicker {
  display: inline-flex; align-items: center; gap: 0.75rem;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--wk-accent-light);
}
.wk-kicker::before { content: ""; width: 28px; height: 2px; background: var(--wk-accent); }
.wk-heading { margin: 1rem 0 0.9rem; font-size: clamp(2rem, 3.6vw, 2.75rem); font-weight: 700; line-height: 1.12; letter-spacing: -0.02em; color: var(--wk-ink); }
.wk-heading em { font-style: normal; color: var(--wk-accent); }
.wk-lead { margin: 0; max-width: 270px; color: var(--wk-muted); line-height: 1.7; font-size: 0.95rem; }

.wk-all {
  display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1.6rem; padding: 0.7rem 1.25rem;
  font-size: 0.86rem; font-weight: 600; color: #fff; text-decoration: none;
  background: #7c3aed; border-radius: 10px;
  transition: background 0.2s ease, transform 0.2s ease;
}
.wk-all:hover { background: #6d28d9; transform: translateY(-2px); }
.wk-all svg { transition: transform 0.2s ease; }
.wk-all:hover svg { transform: translateX(3px); }

/* ---------- Simple fade-in on scroll ---------- */
.wk-reveal { opacity: 0; transform: translateY(14px); transition: opacity 0.6s ease, transform 0.6s ease; }
.wk-reveal.is-in { opacity: 1; transform: none; }

/* ---------- Timeline ---------- */
.wk-timeline { position: relative; margin: 0; padding: 0; list-style: none; }
.wk-timeline::before {
  content: ""; position: absolute; left: 96px; top: 24px; bottom: 24px; width: 1px;
  background: linear-gradient(180deg, var(--wk-accent), rgba(139, 92, 246, 0.15));
}
.wk-item { display: grid; grid-template-columns: 82px 30px minmax(0, 1fr); align-items: start; margin-bottom: 1rem; }
.wk-date { padding-top: 1.25rem; text-align: right; font-size: 0.82rem; font-weight: 600; line-height: 1.4; color: var(--wk-accent-light); }
.wk-dotwrap { display: flex; justify-content: center; padding-top: 1.45rem; }
.wk-dot {
  width: 11px; height: 11px; border-radius: 50%;
  background: #0d0a18; border: 2px solid var(--wk-accent);
  transition: background 0.2s ease, transform 0.2s ease;
}
.wk-dot.is-live { background: #34d399; border-color: #34d399; }
.wk-item:hover .wk-dot { transform: scale(1.25); background: var(--wk-accent); }
.wk-item:hover .wk-dot.is-live { background: #34d399; }

/* ---------- Experience card ---------- */
.wk-card {
  display: flex; gap: 1.1rem; align-items: flex-start; padding: 1.2rem 1.4rem;
  background: var(--wk-surface); border: 1px solid var(--wk-line); border-radius: 14px;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}
.wk-item:hover .wk-card { border-color: rgba(167, 139, 250, 0.45); background: rgba(255, 255, 255, 0.055); transform: translateY(-2px); }
.wk-icon {
  flex: none; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 12px;
  color: var(--wk-accent-light); background: rgba(139, 92, 246, 0.14); border: 1px solid rgba(139, 92, 246, 0.28);
  transition: background 0.2s ease;
}
.wk-item:hover .wk-icon { background: rgba(139, 92, 246, 0.26); }
.wk-body { min-width: 0; }
.wk-role { margin: 0; font-size: 1.05rem; font-weight: 700; line-height: 1.3; color: var(--wk-ink); }
.wk-org { margin: 0.25rem 0 0.5rem; font-size: 0.84rem; font-weight: 500; color: var(--wk-text); }
.wk-org span { color: var(--wk-muted); }
.wk-desc { margin: 0 0 0.85rem; font-size: 0.86rem; line-height: 1.6; color: var(--wk-muted); }
.wk-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.wk-tag {
  padding: 0.25rem 0.7rem; font-size: 0.72rem; font-weight: 600; color: var(--wk-text);
  background: rgba(255, 255, 255, 0.05); border: 1px solid var(--wk-line); border-radius: 999px;
}

/* ---------- Achievements ---------- */
.wk-ach { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.wk-ach-card {
  overflow: hidden; background: var(--wk-surface); border: 1px solid var(--wk-line); border-radius: 14px;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}
.wk-ach-card:hover { border-color: rgba(167, 139, 250, 0.45); background: rgba(255, 255, 255, 0.055); transform: translateY(-3px); }
.wk-ach-media {
  display: grid; place-items: center; height: 100px; color: var(--tone-b);
  background: linear-gradient(180deg, var(--tone-a), transparent);
  border-bottom: 1px solid var(--wk-line);
}
.wk-ach-ring {
  display: grid; place-items: center; width: 54px; height: 54px; border-radius: 50%;
  border: 1px solid var(--tone-line); background: rgba(255, 255, 255, 0.04);
}
.wk-ach-body { padding: 1.05rem 1.2rem 1.2rem; }
.wk-ach-title { margin: 0; font-size: 1rem; font-weight: 700; color: var(--wk-ink); }
.wk-ach-sub { margin: 0.3rem 0 0.9rem; font-size: 0.84rem; line-height: 1.55; color: var(--wk-muted); }
.wk-year {
  display: inline-block; padding: 0.25rem 0.8rem; font-size: 0.74rem; font-weight: 600; color: var(--tone-b);
  border: 1px solid var(--tone-line); border-radius: 999px;
}
.tone-gold   { --tone-a: rgba(251, 191, 36, 0.14); --tone-b: #fcd34d; --tone-line: rgba(252, 211, 77, 0.35); }
.tone-bronze { --tone-a: rgba(251, 146, 60, 0.14); --tone-b: #fdba74; --tone-line: rgba(253, 186, 116, 0.35); }
.tone-violet { --tone-a: rgba(139, 92, 246, 0.2);  --tone-b: #c4b5fd; --tone-line: rgba(196, 181, 253, 0.35); }

@media (prefers-reduced-motion: reduce) {
  .wk-reveal { opacity: 1; transform: none; transition: none; }
  .wk-card, .wk-ach-card, .wk-all, .wk-dot, .wk-icon, .wk-all svg { transition: none; }
}

/* ---------- Responsive ---------- */
@media (max-width: 1100px) {
  .wk { padding-left: 5rem; }
  .wk-row { grid-template-columns: 270px minmax(0, 1fr); gap: 2.5rem; }
}
@media (max-width: 900px) {
  .wk { margin: 0 auto; padding: 6.5rem 1.25rem 6rem; }
  .wk-row { grid-template-columns: 1fr; gap: 2rem; }
  .wk-row + .wk-row { margin-top: 4.5rem; }
  .wk-intro { position: static; }
  .wk-lead { max-width: 480px; }
  .wk-ach { grid-template-columns: repeat(3, minmax(230px, 1fr)); overflow-x: auto; padding-bottom: 0.8rem; scrollbar-width: none; }
  .wk-ach::-webkit-scrollbar { display: none; }
}
@media (max-width: 600px) {
  .wk { padding: 5.5rem 1rem 6rem; }
  .wk-timeline::before { left: 5px; }
  .wk-item { grid-template-columns: 12px minmax(0, 1fr); column-gap: 1rem; }
  .wk-date { grid-column: 2; grid-row: 1; text-align: left; padding: 0 0 0.45rem; }
  .wk-date br { display: none; }
  .wk-date span { margin-right: 0.3em; }
  .wk-dotwrap { grid-column: 1; grid-row: 1 / span 2; padding-top: 0.2rem; justify-content: flex-start; }
  .wk-card { grid-column: 2; grid-row: 2; flex-direction: column; gap: 0.85rem; }
}
`;

/* ============================================================
   Fade-in on scroll
   ============================================================ */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const els = root.querySelectorAll('.wk-reveal');
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ============================================================
   COMPONENT
   ============================================================ */
export default function Experience() {
  const rootRef = useReveal();

  return (
    <section ref={rootRef} className="wk" aria-label="Experience and achievements">
      <style>{STYLES}</style>
      <span className="wk-glow" aria-hidden="true" />

      {/* ---------- Experience ---------- */}
      <div className="wk-row">
        <div className="wk-intro wk-reveal">
          <div className="wk-kicker">Professional Experience</div>
          <h1 className="wk-heading">
            Where I’ve <em>Worked.</em>
          </h1>
          <p className="wk-lead">
            A journey of growth through diverse roles in tech, data and innovation.
          </p>
        </div>

        <ol className="wk-timeline">
          {EXPERIENCES.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="wk-item wk-reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="wk-date">
                  {item.date.map((d, idx) => (
                    <React.Fragment key={d}>
                      <span>{d}</span>
                      {idx < item.date.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="wk-dotwrap" aria-hidden="true">
                  <span className={`wk-dot ${item.current ? 'is-live' : ''}`} />
                </div>
                <article className="wk-card">
                  <div className="wk-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div className="wk-body">
                    <h2 className="wk-role">{item.role}</h2>
                    <p className="wk-org">
                      {item.org} <span>• {item.location}</span>
                    </p>
                    <p className="wk-desc">{item.desc}</p>
                    <div className="wk-tags">
                      {item.tags.map((t) => (
                        <span key={t} className="wk-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>

      {/* ---------- Achievements ---------- */}
      <div className="wk-row">
        <div className="wk-intro wk-reveal">
          <div className="wk-kicker">Achievements &amp; Recognition</div>
          <h2 className="wk-heading">
            Milestones I’m <em>Proud</em> Of.
          </h2>
          <p className="wk-lead">Recognition that reflects my passion and hard work.</p>
          <Link to="/achievements" className="wk-all">
            View All Achievements <ArrowRight size={16} />
          </Link>
        </div>

        <div className="wk-ach">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <article
                key={a.id}
                className={`wk-ach-card wk-reveal tone-${a.tone}`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="wk-ach-media" aria-hidden="true">
                  <span className="wk-ach-ring">
                    <Icon size={24} strokeWidth={1.7} />
                  </span>
                </div>
                <div className="wk-ach-body">
                  <h3 className="wk-ach-title">{a.title}</h3>
                  <p className="wk-ach-sub">{a.sub}</p>
                  <span className="wk-year">{a.year}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}