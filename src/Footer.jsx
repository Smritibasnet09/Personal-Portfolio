import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const FOOTER_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/expertise', label: 'Expertise' },
  { path: '/experience', label: 'Career' },
  { path: '/achievements', label: 'Awards' },
  { path: '/projects', label: 'Work' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer" aria-label="Page Footer">
      <div className="footer-inner-wrap">
        <div className="footer-left-info">
          <Link to="/" className="footer-monogram" aria-label="Home">
            SB
          </Link>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Smriti Basnet. Crafted with Three.js &amp; React.
          </p>
        </div>

        <nav className="footer-nav-links" aria-label="Footer Navigation">
          {FOOTER_LINKS.map(({ path, label }) => (
            <Link key={path} to={path} className="footer-nav-link">
              {label}
            </Link>
          ))}
        </nav>

        <button 
          onClick={scrollToTop} 
          className="footer-back-to-top"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
