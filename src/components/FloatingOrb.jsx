import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function FloatingOrb() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSparkling, setIsSparkling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      const sections = ['home', 'about', 'whatido', 'experience', 'projects', 'contact'];

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section target positions (percentage of viewport)
  const POSITIONS = {
    home: { top: '34%', left: '29%', size: 48, glow: 38 },
    about: { top: '16%', left: '3.5%', size: 46, glow: 36 },
    whatido: { top: '74%', left: '53%', size: 52, glow: 40 },
    experience: { top: '56%', left: '44.8%', size: 44, glow: 42 },
    projects: { top: '42%', left: '46%', size: 46, glow: 38 },
    contact: { top: '65%', left: '78%', size: 48, glow: 40 },
  };

  const currentPos = POSITIONS[activeSection] || POSITIONS.home;

  const handleOrbClick = (e) => {
    setIsSparkling(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#c084fc', '#a855f7', '#e879f9', '#ffffff'],
      disableForReducedMotion: true,
      scalar: 0.7,
    });

    setTimeout(() => setIsSparkling(false), 800);
  };

  return (
    <div
      className={`floating-purple-orb ${isSparkling ? 'sparkling' : ''}`}
      style={{
        top: currentPos.top,
        left: currentPos.left,
        width: `${currentPos.size}px`,
        height: `${currentPos.size}px`,
      }}
      onClick={handleOrbClick}
      title="Interactive Energy Orb (Click me!)"
      aria-hidden="true"
    >
      <div className="orb-core" />
      <div className="orb-halo" />
      <div className="orb-inner-glint" />
    </div>
  );
}
