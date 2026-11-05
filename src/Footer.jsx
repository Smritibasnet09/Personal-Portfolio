import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer" aria-label="Page Footer">
      <div className="footer-inner-wrap">
        <div className="footer-left-info">
          <span className="footer-monogram">SB</span>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Smriti Basnet. Crafted with Three.js &amp; React.
          </p>
        </div>

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
