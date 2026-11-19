import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

const FOOTER_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/expertise', label: 'Expertise' },
  { path: '/experience', label: 'Career' },
  { path: '/achievements', label: 'Awards' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer" aria-label="Page Footer">
      <div className="footer-glow-bar" />
      <div className="footer-inner-wrap">
        <div className="footer-left-info">
          <Link to="/" className="footer-brand-lockup" aria-label="Home">
            <div className="footer-monogram">SB</div>
            <div className="footer-brand-text">
              <span className="footer-author-name">Smriti Basnet</span>
              <span className="footer-author-role">AI &amp; Software Engineer</span>
            </div>
          </Link>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Smriti Basnet. Built with React 19 &amp; Three.js.
          </p>
        </div>

        <nav className="footer-nav-links" aria-label="Footer Navigation">
          {FOOTER_LINKS.map(({ path, label }) => (
            <Link key={path} to={path} className="footer-nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-right-actions">
          <div className="footer-social-icons">
            <a
              href="https://github.com/Smritibasnet09"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/smriti-basnet-51478131a/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:basnetsmriti62@gmail.com"
              className="footer-social-icon-btn"
              aria-label="Send Email"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          <button 
            onClick={scrollToTop} 
            className="footer-back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
