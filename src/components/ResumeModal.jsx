import React, { useState } from 'react';
import { FileText, X, Download, ExternalLink, Award, CheckCircle, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 20,
      spread: 45,
      origin: { x: 0.9, y: 0.9 },
      colors: ['#c084fc', '#a855f7', '#ffffff'],
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('basnetsmriti62@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Bottom-Right Pill Button */}
      <button
        onClick={handleOpen}
        className="floating-resume-pill"
        aria-label="View Resume"
        title="View & Download Resume"
      >
        <span className="resume-text">RESUME</span>
        <FileText size={16} className="resume-icon" />
      </button>

      {/* Resume Modal */}
      {isOpen && (
        <div className="resume-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div 
            className="resume-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="resume-modal-header">
              <div className="resume-title-wrap">
                <span className="resume-eyebrow">CURRICULUM VITAE</span>
                <h3 className="resume-name">Smriti Basnet</h3>
                <p className="resume-role">Computer Science with AI • Full-Stack & Python Developer</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="resume-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="resume-modal-body">
              {/* Highlight award */}
              <div className="resume-award-banner">
                <Award size={20} className="award-icon" />
                <div>
                  <strong>Grand Winner — TechSprint 2026 National Hackathon</strong>
                  <p>First prize recognition for innovative full-stack predictive AI architecture.</p>
                </div>
              </div>

              {/* Education */}
              <div className="resume-section-block">
                <h4 className="resume-subheading">EDUCATION</h4>
                <div className="resume-item">
                  <div className="resume-item-top">
                    <span className="resume-item-title">BSc (Hons) in Computer Science with Artificial Intelligence</span>
                    <span className="resume-item-date">2023 – 2026</span>
                  </div>
                  <span className="resume-item-org">Sunway College Kathmandu • Affiliated with Birmingham City University, UK</span>
                  <p className="resume-item-detail">Focus areas: Machine Learning, Deep Learning, Distributed Systems, Algorithms & Cloud Architectures.</p>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="resume-section-block">
                <h4 className="resume-subheading">CORE COMPETENCIES</h4>
                <div className="resume-skills-grid">
                  <div className="resume-skill-col">
                    <span className="skill-col-title">Languages &amp; Core</span>
                    <p>Python, JavaScript (ES6+), SQL, HTML5/CSS3</p>
                  </div>
                  <div className="resume-skill-col">
                    <span className="skill-col-title">AI &amp; Machine Learning</span>
                    <p>PyTorch, TensorFlow, Scikit-learn, RAG, LLM APIs, CatBoost, XGBoost</p>
                  </div>
                  <div className="resume-skill-col">
                    <span className="skill-col-title">Backend &amp; Cloud</span>
                    <p>FastAPI, Django, Django REST, PostgreSQL, Redis, Docker, Airflow</p>
                  </div>
                </div>
              </div>

              {/* Practical Experience */}
              <div className="resume-section-block">
                <h4 className="resume-subheading">PRACTICAL EXPERIENCE</h4>
                <div className="resume-item">
                  <div className="resume-item-top">
                    <span className="resume-item-title">IT Development Intern</span>
                    <span className="resume-item-date">2025 – 2026</span>
                  </div>
                  <span className="resume-item-org">University Grants Commission (UGC), Nepal</span>
                  <p className="resume-item-detail">Supported institutional data operations, duplicate record resolution, and data validation systems.</p>
                </div>
                <div className="resume-item">
                  <div className="resume-item-top">
                    <span className="resume-item-title">Executive Member</span>
                    <span className="resume-item-date">Ongoing</span>
                  </div>
                  <span className="resume-item-org">AI Club — SSRC Sunway College</span>
                  <p className="resume-item-detail">Organized AI research workshops, study groups, and hackathon technical mentorship.</p>
                </div>
              </div>
            </div>

            <div className="resume-modal-footer">
              <button 
                onClick={handleCopyEmail}
                className="resume-secondary-btn"
              >
                {copied ? <CheckCircle size={16} /> : <Mail size={16} />}
                <span>{copied ? 'Email Copied!' : 'Copy Direct Email'}</span>
              </button>

              <a
                href="mailto:basnetsmriti62@gmail.com?subject=Opportunity%20Inquiry%20via%20Portfolio"
                className="resume-primary-btn"
              >
                <Download size={16} />
                <span>Request Formal PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
