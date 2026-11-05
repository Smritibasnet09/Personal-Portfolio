import React, { useState, useRef } from 'react';
import SmritiImg from '../assets/Smriti.png';
import { Sparkles, Award, Code2, Cpu } from 'lucide-react';

export default function HoloPortraitCard() {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.6 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="holo-portrait-wrapper">
      {/* Ambient background glow blooms */}
      <div className="holo-back-glow holo-glow-primary" />
      <div className="holo-back-glow holo-glow-secondary" />

      {/* Orbiting Sparkles */}
      <div className="holo-sparkle-dot sparkle-1" />
      <div className="holo-sparkle-dot sparkle-2" />
      <div className="holo-sparkle-dot sparkle-3" />

      {/* Floating Holographic Satellite Badges */}
      <div className="holo-floating-badge badge-top-right">
        <Cpu size={14} className="badge-icon-purple" />
        <span>AI &amp; MLOps</span>
      </div>

      <div className="holo-floating-badge badge-bottom-left">
        <Award size={14} className="badge-icon-gold" />
        <span>TechSprint '26 Winner</span>
      </div>

      {/* 3D Tilting Card */}
      <div
        ref={cardRef}
        className="holo-tilt-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
        }}
      >
        {/* Dynamic Glare Reflection */}
        <div
          className="holo-card-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(192, 132, 252, 0.2) 30%, transparent 70%)`,
            opacity: glare.opacity,
          }}
        />

        {/* Card Border Rim Light */}
        <div className="holo-card-rim" />

        {/* Real Portrait Image */}
        <div className="holo-image-container">
          <img
            src={SmritiImg}
            alt="Smriti Basnet"
            className="holo-portrait-img"
            loading="eager"
          />
        </div>

        {/* Holographic Lower Tag */}
        <div className="holo-caption-glass">
          <div className="holo-caption-header">
            <span className="holo-name">Smriti Basnet</span>
            <span className="holo-status-pill">
              <span className="status-dot-active" />
              <span>Available</span>
            </span>
          </div>
          <span className="holo-role-subtext">Computer Science with AI • Sunway / BCU</span>
        </div>
      </div>
    </div>
  );
}
