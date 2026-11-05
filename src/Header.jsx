import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'whatido', label: 'EXPERTISE' },
  { id: 'experience', label: 'CAREER' },
  { id: 'achievements', label: 'AWARDS' },
  { id: 'projects', label: 'WORK' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const scrollPos = window.scrollY + 200;
      const allSections = ['home', 'about', 'whatido', 'experience', 'achievements', 'projects', 'contact'];

      for (const id of [...allSections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`portfolio-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-floating-island">
        {/* Left: Brand Monogram Pill */}
        <div className="header-col-left">
          <button
            className="header-brand-pill"
            onClick={() => scrollTo('home')}
            aria-label="Back to home"
          >
            <div className="brand-pill-ring">
              <span className="brand-monogram-text">SB</span>
              <span className="brand-status-dot" title="Available for opportunities" />
            </div>
            <span className="brand-subname">Smriti Basnet</span>
          </button>
        </div>

        {/* Center: "Portofolio" Stylized Capsule */}
        <div className="header-col-center">
          <div className="header-center-pill" onClick={() => scrollTo('home')}>
            <span className="center-pill-glint" />
            <span className="center-pill-text">Portofolio</span>
          </div>
        </div>

        {/* Right: Modern Navigation Pill Tabs */}
        <div className="header-col-right">
          <nav className="header-nav-desktop" aria-label="Main Navigation">
            <ul className="nav-pill-list">
              {NAV_ITEMS.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <button
                      className={`nav-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => scrollTo(id)}
                    >
                      <span>{label}</span>
                      {isActive && <span className="nav-active-glow-pill" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick Connect Button */}
          <button
            onClick={() => scrollTo('contact')}
            className="nav-quick-cta"
            aria-label="Contact Smriti"
          >
            <span>Connect</span>
            <Send size={12} className="cta-icon" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-card" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-card-header">
              <span className="mobile-nav-brand">SB • Portfolio</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mobile-nav-items-stack">
              <button
                className={`mobile-tab-btn ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollTo('home')}
              >
                HOME
              </button>
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  className={`mobile-tab-btn ${activeSection === id ? 'active' : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
