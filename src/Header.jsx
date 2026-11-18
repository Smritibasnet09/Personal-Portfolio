import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Send } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/about', label: 'ABOUT' },
  { path: '/expertise', label: 'EXPERTISE' },
  { path: '/experience', label: 'CAREER' },
  { path: '/achievements', label: 'AWARDS' },
  { path: '/projects', label: 'WORK' },
  { path: '/contact', label: 'CONTACT' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`portfolio-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-floating-island">
        {/* Left: Brand Monogram Pill */}
        <div className="header-col-left">
          <Link
            to="/"
            className="header-brand-pill"
            aria-label="Back to home"
          >
            <div className="brand-pill-ring">
              <span className="brand-monogram-text">SB</span>
              <span className="brand-status-dot" title="Available for opportunities" />
            </div>
            <span className="brand-subname">Smriti Basnet</span>
          </Link>
        </div>

        {/* Center: "Portfolio" Stylized Capsule */}
        <div className="header-col-center">
          <Link to="/" className="header-center-pill">
            <span className="center-pill-glint" />
            <span className="center-pill-text">Portfolio</span>
          </Link>
        </div>

        {/* Right: Modern Navigation Pill Tabs */}
        <div className="header-col-right">
          <nav className="header-nav-desktop" aria-label="Main Navigation">
            <ul className="nav-pill-list">
              {NAV_ITEMS.map(({ path, label }) => {
                const isActive = location.pathname === path;
                return (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive: navActive }) =>
                        `nav-tab-btn ${navActive ? 'active' : ''}`
                      }
                    >
                      <span>{label}</span>
                      {isActive && <span className="nav-active-glow-pill" />}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick Connect Button */}
          <Link
            to="/contact"
            className="nav-quick-cta"
            aria-label="Contact Smriti"
          >
            <span>Connect</span>
            <Send size={12} className="cta-icon" />
          </Link>

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
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mobile-nav-items-stack">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `mobile-tab-btn ${isActive ? 'active' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </NavLink>
              {NAV_ITEMS.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `mobile-tab-btn ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
