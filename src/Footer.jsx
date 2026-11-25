import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const SOCIALS = [
  { href: 'https://github.com/Smritibasnet09', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/smriti-basnet-51478131a/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:basnetsmriti62@gmail.com', label: 'Email', Icon: Mail },
];

const FOOTER_CSS = `
.sb-footer {
  --sb-accent: var(--accent, #8b5cf6);
  --sb-text: var(--text-secondary, #9ca3af);
  --sb-text-strong: var(--text-primary, #f3f4f6);
  --sb-border: rgba(255, 255, 255, 0.08);

  position: relative;
  padding: 28px 24px 24px;
  background: transparent;
}

.sb-footer-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(720px, 80%);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--sb-accent), transparent);
  opacity: 0.7;
}

.sb-footer-row {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.sb-footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.sb-footer-mono {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--sb-text-strong);
  border: 1px solid var(--sb-accent);
  background: color-mix(in srgb, var(--sb-accent) 15%, transparent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--sb-accent) 35%, transparent);
}

.sb-footer-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sb-footer-icon,
.sb-footer-top {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--sb-border);
  background: transparent;
  color: var(--sb-text);
  cursor: pointer;
  transition: all 0.25s ease;
}
.sb-footer-icon:hover,
.sb-footer-top:hover,
.sb-footer-icon:focus-visible,
.sb-footer-top:focus-visible {
  color: var(--sb-text-strong);
  border-color: var(--sb-accent);
  background: color-mix(in srgb, var(--sb-accent) 18%, transparent);
  box-shadow: 0 0 14px color-mix(in srgb, var(--sb-accent) 40%, transparent);
  transform: translateY(-2px);
  outline: none;
}
.sb-footer-top {
  margin-left: 6px;
  border-color: var(--sb-accent);
  color: var(--sb-accent);
}

@media (max-width: 700px) {
  .sb-footer-row {
    flex-direction: column;
    gap: 14px;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sb-footer-icon,
  .sb-footer-top { transition: none; }
}
`;

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="sb-footer" aria-label="Page Footer">
      <style>{FOOTER_CSS}</style>

      <div className="sb-footer-line" />

      <div className="sb-footer-row">
        <Link to="/" className="sb-footer-brand" aria-label="Home">
          <span className="sb-footer-mono">SB</span>
        </Link>

        <div className="sb-footer-actions">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              className="sb-footer-icon"
              aria-label={label}
              title={label}
              {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <Icon size={15} />
            </a>
          ))}
          <button onClick={scrollToTop} className="sb-footer-top" aria-label="Scroll back to top">
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}