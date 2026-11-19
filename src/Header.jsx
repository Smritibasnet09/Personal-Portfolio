import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/expertise', label: 'Expertise' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll on mobile open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close menu when navigating
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className={`minimal-header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="minimal-nav-container">
        {/* Brand */}
        <Link to="/" className="minimal-brand" aria-label="Home">
          <span className="brand-name">Smriti Basnet</span>
          <span className="brand-dot" />
        </Link>

        {/* Desktop Links */}
        <nav className="minimal-desktop-nav" aria-label="Primary navigation">
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `minimal-nav-link ${isActive ? 'active' : ''}`
              }
            >
              {label}
              <span className="link-indicator" />
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="minimal-header-right">
          <button
            className="minimal-mobile-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Minimalist Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="minimal-mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="minimal-mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="minimal-mobile-top">
              <span className="minimal-mobile-logo">Navigation</span>
              <button
                className="minimal-mobile-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="minimal-mobile-nav">
              {NAV_LINKS.map(({ path, label }, index) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `minimal-mobile-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileOpen(false)}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <span>{label}</span>
                  <span className="mobile-active-dot" />
                </NavLink>
              ))}
            </nav>

            <div className="minimal-mobile-footer">
              <Link
                to="/contact"
                className="minimal-mobile-cta"
                onClick={() => setMobileOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
