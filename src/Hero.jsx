import React from 'react';
import HoloPortraitCard from './components/HoloPortraitCard';
import { ArrowRight, Sparkles, Terminal, Code } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero-viewport-section" aria-label="Hero Introduction">
      {/* Ambient background glows */}
      <div className="hero-radial-glow hero-glow-left" />
      <div className="hero-radial-glow hero-glow-right" />

      <div className="hero-layout-grid">
        {/* Left Column: Greeting & Name */}
        <div className="hero-left-column">
          <div className="hero-greeting-wrap">
            <span className="hero-salutation">Hello! I am</span>
            <h1 className="hero-display-name">
              SMRITI BASNET
            </h1>
            <div className="hero-tag-pill">
              <span className="status-ping-dot" />
              <span>Sunway College • BCU UK Graduate</span>
            </div>
          </div>

          <p className="hero-intro-snippet">
            Engineering scalable backend architectures, machine learning pipelines, and conversational AI solutions.
          </p>

          <div className="hero-action-buttons">
            <button 
              onClick={() => scrollTo('projects')}
              className="btn-purple-glow"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="btn-ghost-glass"
            >
              <span>Get In Touch</span>
            </button>
          </div>
        </div>

        {/* Center Column: Interactive 3D Holographic Portrait Card */}
        <div className="hero-center-avatar">
          <HoloPortraitCard />
        </div>

        {/* Right Column: Roles & Glow Headlines */}
        <div className="hero-right-column">
          <div className="hero-role-block">
            <span className="hero-role-prefix">An</span>
            <h2 className="hero-role-title-ai">
              AI ENGINEER
            </h2>
            <h3 className="hero-role-title-fullstack">
              FULL-STACK DEVELOPER
            </h3>
          </div>

          <div className="hero-quick-stats">
            <div className="stat-card-glass">
              <span className="stat-number">1st</span>
              <span className="stat-desc">TechSprint '26 Grand Winner</span>
            </div>
            <div className="stat-card-glass">
              <span className="stat-number">6+</span>
              <span className="stat-desc">Production AI Pipelines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
