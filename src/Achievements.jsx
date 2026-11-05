import React from 'react';
import { Trophy, Award, Users, Star, ExternalLink } from 'lucide-react';

import GDImg from './assets/GD.png';
import ImeImg from './assets/Ime.png';
import NariImg from './assets/Nari.png';
import KalpaImg from './assets/Kalpa.jpeg';

const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Grand Winner — TechSprint 2026',
    category: 'National AI Hackathon',
    description: 'First prize podium recognition for engineering an innovative predictive AI architecture and full-stack implementation.',
    image: GDImg,
    badge: '1st Place 🏆',
    icon: <Trophy size={16} />,
  },
  {
    id: 2,
    title: 'Global IME Bank AI/ML Hackathon 2025',
    category: 'FinTech & Machine Learning',
    description: 'Collaborated in an intensive hackathon prototyping intelligent financial automation and real-time transaction intelligence.',
    image: ImeImg,
    badge: 'Finalist Team ⚡',
    icon: <Award size={16} />,
  },
  {
    id: 3,
    title: 'Sachet Nari: KMC Women Cell Movement',
    category: 'Community Leadership & Empowerment',
    description: 'Honored with a Certificate of Appreciation by the Aaviyanta Foundation for proactive volunteer leadership in women empowerment.',
    image: NariImg,
    badge: 'Leadership Award 🌟',
    icon: <Star size={16} />,
  },
  {
    id: 4,
    title: 'Kalpavriksha Annual Youth Initiative',
    category: 'Social Impact & Academic Volunteer',
    description: 'Awarded formal certificate of recognition in collaboration with Sunway College for valuable youth empowerment contribution.',
    image: KalpaImg,
    badge: 'Honored Contributor 📜',
    icon: <Users size={16} />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-viewport-section" aria-label="Achievements and Hackathons">
      <div className="achievements-ambient-glow" />

      {/* Header */}
      <div className="achievements-header-center">
        <h2 className="achievements-main-title">
          Hackathons &amp; <span className="title-purple-gradient">Achievements</span>
        </h2>
        <p className="achievements-subtext">
          Verified podiums, national hackathons, leadership recognitions, and community milestones.
        </p>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="achievements-cards-grid">
        {ACHIEVEMENTS.map((item) => (
          <div key={item.id} className="achievement-glass-card">
            <div className="achievement-img-wrap">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="achievement-img"
              />
              <span className="achievement-badge-pill">
                {item.icon}
                <span>{item.badge}</span>
              </span>
            </div>

            <div className="achievement-content-block">
              <span className="achievement-category">{item.category}</span>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
