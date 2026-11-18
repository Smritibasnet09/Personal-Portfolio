import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import { ArrowRight, Cpu, Layers, Award, Briefcase, FolderGit2, Mail } from 'lucide-react';

const HIGHLIGHT_CARDS = [
  {
    title: 'About Me',
    subtitle: 'Background & Principles',
    desc: 'BSc (Hons) Computer Science with AI at Sunway College Kathmandu (BCU UK) and SSRC AI Club Executive.',
    link: '/about',
    icon: <Layers size={22} />,
    tag: 'Learn More',
  },
  {
    title: 'Expertise',
    subtitle: 'AI, Full-Stack & MLOps',
    desc: 'From fine-tuned LLM agents and RAG pipelines to scalable FastAPI/Django backends and Dockerized CI/CD.',
    link: '/expertise',
    icon: <Cpu size={22} />,
    tag: 'Explore Skills',
  },
  {
    title: 'Featured Work',
    subtitle: '6+ Production Builds',
    desc: 'Real-world machine learning systems, intelligent health assistants, and modern web applications.',
    link: '/projects',
    icon: <FolderGit2 size={22} />,
    tag: 'View Projects',
  },
  {
    title: 'Career Journey',
    subtitle: 'Experience & Roles',
    desc: 'Freelance AI engineering, institutional IT operations at UGC Nepal, and technical leadership.',
    link: '/experience',
    icon: <Briefcase size={22} />,
    tag: 'View Timeline',
  },
  {
    title: 'Awards & Podiums',
    subtitle: 'Hackathons & Honors',
    desc: '1st Place Grand Winner at TechSprint 2026, Global IME Bank FinTech finalist, and community awards.',
    link: '/achievements',
    icon: <Award size={22} />,
    tag: 'View Podiums',
  },
  {
    title: 'Get In Touch',
    subtitle: 'Let’s Collaborate',
    desc: 'Available for AI engineering, backend development opportunities, and technical research challenges.',
    link: '/contact',
    icon: <Mail size={22} />,
    tag: 'Connect Now',
  },
];

export default function Home() {
  return (
    <div className="home-page-container">
      {/* Grand Hero Section with 3D Holographic Card */}
      <Hero />

      {/* Quick Navigation / Spotlight Grid */}
      <section className="home-explore-section" aria-label="Portfolio Sections Overview">
        <div className="home-explore-header">
          <span className="tracked-eyebrow">PORTFOLIO OVERVIEW</span>
          <h2 className="home-explore-title">
            Explore <span className="title-purple-gradient">My Universe</span>
          </h2>
          <p className="home-explore-desc">
            Direct access to dedicated sections detailing my software engineering craft, research, and milestones.
          </p>
        </div>

        <div className="home-explore-grid">
          {HIGHLIGHT_CARDS.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="home-explore-card"
            >
              <div className="explore-card-top">
                <div className="explore-card-icon">{card.icon}</div>
                <span className="explore-card-tag">{card.tag}</span>
              </div>
              <h3 className="explore-card-title">{card.title}</h3>
              <span className="explore-card-sub">{card.subtitle}</span>
              <p className="explore-card-desc">{card.desc}</p>
              <div className="explore-card-arrow">
                <span>Open Page</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
