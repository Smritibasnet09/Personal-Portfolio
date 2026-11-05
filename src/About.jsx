import React from 'react';
import DifImg from './assets/dif.png';
import { Award, BookOpen, Terminal, Sparkles, GraduationCap, Cpu } from 'lucide-react';

const HIGHLIGHTS = [
  'BSc (Hons) Computer Science with AI',
  'Sunway College Kathmandu (BCU UK)',
  'SSRC AI Club Executive Member',
  'TechSprint 2026 National Hackathon Winner',
  'Python • FastAPI • Django • PyTorch',
];

export default function About() {
  return (
    <section id="about" className="about-viewport-section" aria-label="About Me">
      <div className="about-glow-orb" />

      {/* Top Tracked Title */}
      <div className="section-header-tracked">
        <span className="tracked-eyebrow">ABOUT ME</span>
      </div>

      <div className="about-grid-layout">
        {/* Left Side: AI Ecosystem Hologram Card & Credentials */}
        <div className="about-avatar-column">
          <div className="about-visual-card">
            <div className="about-visual-glow" />
            <div className="about-visual-frame">
              <img
                src={DifImg}
                alt="AI Ecosystem & Intelligence Architecture"
                className="about-visual-img"
                loading="lazy"
              />
              <div className="about-visual-overlay">
                <span className="about-visual-label">
                  <Cpu size={14} className="text-purple" />
                  <span>Applied AI &amp; Web Architectures</span>
                </span>
              </div>
            </div>
          </div>

          <div className="about-tags-row">
            {HIGHLIGHTS.map((tag) => (
              <span key={tag} className="tech-badge-glow">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Narrative Copy */}
        <div className="about-text-column">
          <div className="about-copy-card">
            <p className="about-lead-paragraph">
              I am a developer focused on the <strong>AI ecosystem</strong> and <strong>modern web development</strong>. 
              I combine full-stack expertise <em>(Python, FastAPI, Django, React)</em> with artificial intelligence implementations 
              to build intelligent agents, machine learning pipelines, and conversational assistants using modern technology.
            </p>

            <p className="about-body-paragraph">
              I have experience handling projects ranging from end-to-end MLOps architectures with automated drift 
              monitoring to intelligent health platforms with Retrieval-Augmented Generation (RAG). To me, code is an instrument 
              for creating meaningful solutions, and AI is a canvas for limitless innovation.
            </p>

            <p className="about-body-paragraph">
              Currently pursuing my <strong>BSc (Hons) in Computer Science with AI</strong> at Sunway College Kathmandu 
              (affiliated with Birmingham City University, UK), I also actively serve as an Executive Member of the 
              <strong> SSRC AI Club</strong>, organizing technical workshops and mentoring peers.
            </p>

            {/* Quick Feature Pillars */}
            <div className="about-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <Terminal size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Clean Architectures</h4>
                  <p className="pillar-desc">Production-grade APIs, containerized pipelines &amp; modular code.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="pillar-title">Applied AI / ML</h4>
                  <p className="pillar-desc">Generative AI, RAG, predictive modeling &amp; edge inference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
