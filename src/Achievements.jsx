import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import ImeImg from './assets/Ime.png';
import NariImg from './assets/Nari.png';

/* ------------------------------------------------------------------ */
/*  Styles (everything lives in this one file)                        */
/*  Change the colors in .ag-section to re-theme the whole page.      */
/* ------------------------------------------------------------------ */

const STYLES = `
.ag-section {
  --ag-card: rgba(255, 255, 255, 0.04);
  --ag-border: rgba(168, 85, 247, 0.18);
  --ag-border-hover: rgba(168, 85, 247, 0.55);
  --ag-accent: #a855f7;
  --ag-accent-2: #7c3aed;
  --ag-text: #f4f1fb;
  --ag-muted: #a79fbd;

  width: 100%;
  padding: 4.5rem 2rem 6rem;
  color: var(--ag-text);
  overflow-x: clip; /* cards slide in from the sides without causing a scrollbar */
  /* No background on purpose: your page background shows through */
}

/* ---------- Header ---------- */
.ag-header {
  position: relative;
  isolation: isolate;
  max-width: 760px;
  margin: 0 auto 3rem;
  text-align: center;
}
.ag-header::before {
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
.ag-eyebrow {
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
.ag-eyebrow::before,
.ag-eyebrow::after {
  content: '';
  width: 46px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--ag-accent));
}
.ag-eyebrow::after {
  transform: scaleX(-1);
}
.ag-heading {
  margin: 0 0 0.9rem;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
}
.ag-gradient-text {
  background: linear-gradient(120deg, #c084fc, #a855f7 50%, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ag-sub {
  max-width: 480px;
  margin: 0 auto;
  color: var(--ag-muted);
  line-height: 1.65;
}

/* ---------- Timeline ---------- */
.ag-timeline {
  max-width: 1100px;
  margin: 0 auto;
}
.ag-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 140px minmax(0, 1fr);
  align-items: center;
}

/* the line in the middle: one gentle S-curve per row, they join smoothly */
.ag-axis {
  position: relative;
  grid-column: 2;
  grid-row: 1;
  align-self: stretch;
}
.ag-axis svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.ag-axis path {
  fill: none;
  stroke: rgba(168, 85, 247, 0.55);
  stroke-width: 2;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
  filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.6));
}
/* start the line at the first dot and end it at the last dot */
.ag-row.is-first .ag-axis svg {
  clip-path: inset(50% -20px 0 -20px);
}
.ag-row.is-last .ag-axis svg {
  clip-path: inset(0 -20px 50% -20px);
}

.ag-dot {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  transform: translate(-50%, -50%) scale(0.6);
  background: #140c26;
  border: 2px solid rgba(168, 85, 247, 0.6);
  border-radius: 50%;
  transition: transform 0.5s ease 0.15s, background 0.5s ease, box-shadow 0.5s ease;
}
.ag-row.is-seen .ag-dot {
  transform: translate(-50%, -50%) scale(1);
  background: linear-gradient(135deg, #7c3aed, #c084fc);
  border-color: #e9d5ff;
  box-shadow: 0 0 0 5px rgba(168, 85, 247, 0.18), 0 0 18px rgba(168, 85, 247, 0.8);
}

/* ---------- Card (slides in from the left or right) ---------- */
.ag-card {
  position: relative;
  grid-row: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 480px;
  margin: 0.7rem 0;
  padding: 1rem;
  background: var(--ag-card);
  border: 1px solid var(--ag-border);
  border-radius: 18px;
  opacity: 0;
  transform: translateX(var(--from));
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 0.25s ease, box-shadow 0.25s ease;
}
/* cards that have a photo are a little longer */
.ag-card.has-photo {
  max-width: 520px;
  min-height: 190px;
  margin: 1.1rem 0;
  padding: 1.2rem;
  gap: 1.2rem;
}
.ag-row.is-left .ag-card {
  --from: -60px;
  grid-column: 1;
  justify-self: end;
}
.ag-row.is-right .ag-card {
  --from: 60px;
  grid-column: 3;
  justify-self: start;
}
.ag-row.is-seen .ag-card {
  opacity: 1;
  transform: none;
}
.ag-row.is-seen .ag-card:hover {
  transform: translateY(-3px);
  border-color: var(--ag-border-hover);
  box-shadow: 0 18px 40px -22px rgba(124, 58, 237, 0.65);
}
/* short line from the card to the dot */
.ag-card::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 58px;
  height: 1px;
}
.ag-row.is-left .ag-card::before {
  left: 100%;
  background: linear-gradient(90deg, rgba(168, 85, 247, 0.6), transparent);
}
.ag-row.is-right .ag-card::before {
  right: 100%;
  background: linear-gradient(270deg, rgba(168, 85, 247, 0.6), transparent);
}

.ag-photo {
  flex: none;
  width: 112px;
  height: 112px;
  padding: 0;
  overflow: hidden;
  background: #140c26;
  border: 1px solid var(--ag-border);
  border-radius: 12px;
  cursor: zoom-in;
}
.has-photo .ag-photo {
  width: 130px;
  height: 160px;
}
.ag-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.ag-photo:hover img {
  transform: scale(1.08);
}

.ag-body {
  min-width: 0;
}
.ag-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.ag-tag {
  padding: 0.12rem 0.6rem;
  font-size: 0.68rem;
  font-weight: 600;
  color: #e9d5ff;
  background: rgba(168, 85, 247, 0.16);
  border-radius: 999px;
}
.ag-year {
  font-size: 0.72rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.35);
}
.ag-title {
  margin: 0 0 0.3rem;
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.3;
}
.ag-text {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--ag-muted);
}
.ag-more {
  margin: 0.55rem 0 0;
  font-size: 0.8rem;
  line-height: 1.55;
  color: rgba(167, 159, 189, 0.8);
}
.ag-note {
  margin: 0.55rem 0 0;
  font-size: 0.72rem;
  color: #b79be8;
}

/* ---------- Photo viewer ---------- */
.ag-viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  padding: 2rem 1rem;
  background: rgba(8, 5, 16, 0.88);
  backdrop-filter: blur(8px);
  animation: ag-fade 0.2s ease both;
}
.ag-viewer img {
  max-width: min(92vw, 1100px);
  max-height: 76vh;
  object-fit: contain;
  border-radius: 14px;
  box-shadow: 0 30px 80px -30px rgba(124, 58, 237, 0.6);
}
.ag-viewer-caption {
  max-width: 90vw;
  margin: 0;
  text-align: center;
  font-weight: 600;
  color: var(--ag-text);
}
.ag-viewer-caption span {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.82rem;
  font-weight: 400;
  color: #b79be8;
}
.ag-viewer-close {
  padding: 0.5rem 1.2rem;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ag-text);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--ag-border);
  border-radius: 10px;
  cursor: pointer;
}
.ag-viewer-close:hover {
  background: rgba(255, 255, 255, 0.14);
}
@keyframes ag-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ---------- Footer line ---------- */
.ag-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem 2rem;
  max-width: 1100px;
  margin: 2.4rem auto 0;
  padding-top: 1.4rem;
  border-top: 1px solid var(--ag-border);
  font-size: 0.9rem;
  color: var(--ag-muted);
}
.ag-footer p {
  margin: 0;
}
.ag-footer a {
  color: #c084fc;
  font-weight: 600;
  text-decoration: none;
}
.ag-footer a:hover {
  color: #e9d5ff;
  text-decoration: underline;
}

/* ---------- Focus ---------- */
.ag-photo:focus-visible,
.ag-viewer-close:focus-visible,
.ag-footer a:focus-visible {
  outline: 2px solid var(--ag-accent);
  outline-offset: 3px;
}

/* ---------- Phones: line on the left, all cards on the right ---------- */
@media (max-width: 720px) {
  .ag-section {
    padding: 3.5rem 1rem 4rem;
  }
  .ag-row {
    grid-template-columns: 48px minmax(0, 1fr);
  }
  .ag-axis {
    grid-column: 1;
  }
  .ag-row.is-left .ag-card,
  .ag-row.is-right .ag-card {
    --from: 40px;
    grid-column: 2;
    justify-self: stretch;
    max-width: none;
  }
  .ag-row.is-left .ag-card::before,
  .ag-row.is-right .ag-card::before {
    right: auto;
    left: -20px;
    width: 20px;
    background: linear-gradient(270deg, rgba(168, 85, 247, 0.6), transparent);
  }
  .ag-photo {
    width: 84px;
    height: 84px;
  }
  .has-photo .ag-photo {
    width: 96px;
    height: 130px;
  }
  .ag-card.has-photo {
    min-height: 0;
    padding: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ag-card,
  .ag-dot,
  .ag-photo img {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .ag-viewer {
    animation: none !important;
  }
}
`;

/* ------------------------------------------------------------------ */
/*  Data (edit your achievements here)                                */
/*                                                                    */
/*  To add a photo: put the file in ./assets, import it at the top,   */
/*  and set  image: YourImport.  Items with image: null just show    */
/*  the text. photoNote = a few words on what the photo shows.        */
/*  more = a slightly longer description, shown only on cards that    */
/*  have a photo.                                                     */
/* ------------------------------------------------------------------ */

const ACHIEVEMENTS = [
  {
    id: 1,
    tag: 'Hackathon',
    year: '2026',
    title: 'TechSprint — Grand Winner',
    text: 'First place at the national AI & software hackathon.',
    more: 'Our team took the top spot after building and pitching a working solution to the judges.',
    photoNote: 'Winning team',
    image: null, // add your TechSprint photo here
  },
  {
    id: 2,
    tag: 'Leadership',
    year: null,
    title: 'Sachet Nari — 1st Cohort Winner',
    text: 'Certificate of Appreciation for digital literacy work with women.',
    more: 'Recognised in the first cohort for helping women learn everyday digital skills and use the internet with more confidence and safety.',
    photoNote: 'Receiving the certificate',
    image: NariImg,
  },
  {
    id: 3,
    tag: 'Hackathon',
    year: '2025',
    title: 'MBMC_IDEAX — 48 Hours',
    text: 'Built a project in a 48-hour hackathon.',
    more: 'Went from idea to a working prototype in two days, working closely with the team under time pressure.',
    photoNote: 'Team during the hackathon',
    image: null,
  },
  {
    id: 4,
    tag: 'Visit',
    year: null,
    title: 'Company Visit — Intuji',
    text: 'Visited the Intuji team.',
    more: 'Met the team and got a look at how a real software company works day to day.',
    photoNote: 'At the Intuji office',
    image: null,
  },
  {
    id: 5,
    tag: 'Hackathon',
    year: '2025',
    title: 'Global IME Bank AI/ML Hackathon',
    text: 'Finalist in a 48-hour FinTech hackathon.',
    more: 'Worked with my team on an AI/ML idea for banking and reached the finalist round, presenting it on stage.',
    photoNote: 'At the hackathon venue',
    image: ImeImg,
  },
  {
    id: 6,
    tag: 'Showcase',
    year: '2025',
    title: 'ICT Awards Fest — Project AI BIN',
    text: 'Presented Project AI BIN at the festival.',
    more: 'Showed Project AI BIN to visitors and explained how it works.',
    photoNote: 'Team at the project stall',
    image: null,
  },
  {
    id: 7,
    tag: 'Program',
    year: '2026',
    title: 'Leapfrog Student Partnership Program',
    text: 'Took part in the student partnership program.',
    more: 'Joined the program to learn from industry mentors and meet other students.',
    photoNote: 'Group photo',
    image: null,
  },
  {
    id: 8,
    tag: 'Leadership',
    year: null,
    title: 'Sachet Nari — Ambassador Program',
    text: 'Gave the closing address after three months as an ambassador.',
    more: 'Spoke at the closing event and shared what the three months taught me.',
    photoNote: 'Closing address',
    image: null,
  },
  {
    id: 9,
    tag: 'Teaching',
    year: null,
    title: 'React.js Session — Islington College',
    text: 'Led a React.js session at Islington College Kathmandu.',
    more: 'Taught the React.js basics to students and answered their questions live.',
    photoNote: 'Teaching the session',
    image: null,
  },
];

/* ------------------------------------------------------------------ */
/*  One timeline row: curvy line piece + dot + card                   */
/* ------------------------------------------------------------------ */

function Row({ item, index, total, onOpen }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  // Slide the card in the first time it scrolls into view
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
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const side = index % 2 === 0 ? 'is-left' : 'is-right';
  const classes = [
    'ag-row',
    side,
    seen ? 'is-seen' : '',
    index === 0 ? 'is-first' : '',
    index === total - 1 ? 'is-last' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes}>
      <div className="ag-axis" aria-hidden="true">
        <svg viewBox="0 0 120 100" preserveAspectRatio="none">
          {/* gentler curve: change 84 / 36 to bend it more or less
              (110 / 10 was the old, very curvy one; 60 / 60 = straight) */}
          <path d="M60 0 C84 25 36 75 60 100" />
        </svg>
        <span className="ag-dot" />
      </div>

      <article className={`ag-card${item.image ? ' has-photo' : ''}`}>
        {item.image && (
          <button
            type="button"
            className="ag-photo"
            onClick={() => onOpen(item)}
            aria-label={`Open photo: ${item.title}`}
          >
            <img src={item.image} alt={`${item.title} — ${item.photoNote}`} loading="lazy" />
          </button>
        )}

        <div className="ag-body">
          <div className="ag-meta">
            <span className="ag-tag">{item.tag}</span>
            {item.year && <span className="ag-year">{item.year}</span>}
          </div>
          <h2 className="ag-title">{item.title}</h2>
          <p className="ag-text">{item.text}</p>
          {item.image && item.more && <p className="ag-more">{item.more}</p>}
          {item.image && <p className="ag-note">Photo: {item.photoNote}</p>}
        </div>
      </article>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Achievements() {
  const [open, setOpen] = useState(null);

  // Close the photo viewer with the Escape key
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section className="ag-section" aria-label="Achievements and social work">
      <style>{STYLES}</style>

      <header className="ag-header">
        <span className="ag-eyebrow">Recognition</span>
        <h1 className="ag-heading">
          Achievements &amp; <span className="ag-gradient-text">Social Work</span>
        </h1>
        <p className="ag-sub">Hackathons, awards and community moments.</p>
      </header>

      <div className="ag-timeline">
        {ACHIEVEMENTS.map((item, i) => (
          <Row
            key={item.id}
            item={item}
            index={i}
            total={ACHIEVEMENTS.length}
            onOpen={setOpen}
          />
        ))}
      </div>

      <div className="ag-footer">
        <p>
          Want to see the code behind these? <Link to="/projects">View projects</Link>
        </p>
        <p>
          Want to work together? <Link to="/contact">Get in touch</Link>
        </p>
      </div>

      {open && (
        <div
          className="ag-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <img
            src={open.image}
            alt={`${open.title} — ${open.photoNote}`}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="ag-viewer-caption">
            {open.title}
            <span>{open.photoNote}</span>
          </p>
          <button type="button" className="ag-viewer-close" onClick={() => setOpen(null)}>
            Close
          </button>
        </div>
      )}
    </section>
  );
}