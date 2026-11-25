import React, { useState } from 'react';
import { Linkedin, Github, Copy, Check, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const EMAIL = 'basnetsmriti62@gmail.com';

const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/smriti-basnet-a140ab329/', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Smritibasnet09', Icon: Github },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return; // clipboard blocked: the email is still visible on the page
    }
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#c084fc', '#a855f7', '#ec4899', '#ffffff'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="ct" aria-label="Contact Smriti Basnet">
      <style>{styles}</style>

      {/* Decorative orbit rings */}
      <div className="ct-orbits" aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className="ct-content">
        <span className="ct-status">
          <i /> Open for opportunities
        </span>

        <h1 className="ct-title">
          Let’s <span>connect.</span>
        </h1>
        <p className="ct-text">Have a role or an idea? My inbox is always open.</p>

        <div className="ct-mail">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button type="button" onClick={copyEmail} aria-label="Copy email address">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="ct-links">
          {LINKS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <Icon size={17} /> {label} <ArrowUpRight className="ct-arrow" size={15} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = `
/* Fills the screen so everything sits in the exact center */
.ct {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  padding: 6rem 1rem;
  text-align: center;
}

.ct-orbits {
  position: absolute;
  z-index: -1;
  inset: 0;
  pointer-events: none;
}
.ct-orbits::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(640px, 100%);
  aspect-ratio: 1;
  translate: -50% -50%;
  background: radial-gradient(closest-side, rgba(147, 51, 234, 0.28), rgba(219, 39, 119, 0.08) 55%, transparent);
}
.ct-orbits i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: var(--size);
  translate: -50% -50%;
  border: 1px solid rgba(192, 132, 252, var(--line));
  border-radius: 50%;
  animation: ct-spin var(--speed) linear infinite;
}
.ct-orbits i::after {
  content: '';
  position: absolute;
  top: -4px;
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d8b4fe;
  box-shadow: 0 0 16px 4px rgba(192, 132, 252, 0.7);
}
.ct-orbits i:nth-child(1) { --size: 520px; --line: 0.16; --speed: 18s; }
.ct-orbits i:nth-child(2) { --size: 760px; --line: 0.1; --speed: 28s; animation-direction: reverse; }
.ct-orbits i:nth-child(3) { --size: 1020px; --line: 0.06; --speed: 40s; }

.ct-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 560px;
}

.ct-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.95rem;
  border: 1px solid rgba(52, 211, 153, 0.25);
  border-radius: 99px;
  background: rgba(52, 211, 153, 0.07);
  font-size: 0.75rem;
  color: #a7f3d0;
}
.ct-status i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #34d399;
  animation: ct-pulse 2s infinite;
}

.ct .ct-title {
  margin: 1.25rem 0 0.6rem;
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #fff;
}
.ct-title span {
  background: linear-gradient(100deg, #c084fc, #f472b6, #c084fc);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ct-shine 5s linear infinite;
}
.ct .ct-text { margin: 0 0 2rem; font-size: 0.95rem; color: #a1a1aa; }

/* Glass email pill */
.ct-mail {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 100%;
  padding: 0.4rem 0.4rem 0.4rem 1.4rem;
  border: 1px solid rgba(192, 132, 252, 0.28);
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 40px -18px rgba(168, 85, 247, 0.7);
  transition: border-color 0.25s, box-shadow 0.25s;
}
.ct-mail:hover { border-color: #c084fc; box-shadow: 0 18px 48px -14px rgba(168, 85, 247, 0.85); }
.ct .ct-mail a {
  min-width: 0;
  overflow-wrap: anywhere;
  color: #f3e8ff;
  font-size: 0.95rem;
  text-decoration: none;
}
.ct-mail button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 1.15rem;
  border: 0;
  border-radius: 99px;
  background: linear-gradient(100deg, #9333ea, #db2777);
  color: #fff;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s;
}
.ct-mail button:hover { filter: brightness(1.15); }

.ct-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; }
.ct .ct-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.15rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.02);
  color: #d4d4d8;
  font-size: 0.85rem;
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s, color 0.2s;
}
.ct .ct-links a:hover { transform: translateY(-3px); border-color: #c084fc; color: #fff; }
.ct-arrow { opacity: 0.5; }

.ct a:focus-visible,
.ct button:focus-visible { outline: 2px solid #c084fc; outline-offset: 3px; }

@media (max-width: 420px) {
  .ct-mail { gap: 0.5rem; padding-left: 1rem; }
  .ct .ct-mail a { font-size: 0.82rem; }
  .ct-mail button span { display: none; }
  .ct-mail button { padding: 0.65rem; }
}

@keyframes ct-spin { to { rotate: 360deg; } }
@keyframes ct-shine { to { background-position: -200% center; } }
@keyframes ct-pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
  70%, 100% { box-shadow: 0 0 0 7px rgba(52, 211, 153, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .ct-orbits i, .ct-title span, .ct-status i { animation: none; }
}
`;