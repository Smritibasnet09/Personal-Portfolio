import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  ChevronDown,
  HelpCircle,
  MapPin,
  Calendar,
} from 'lucide-react';
import confetti from 'canvas-confetti';

const FAQS = [
  {
    q: 'What types of roles or opportunities are you looking for?',
    a: 'I am actively seeking roles as an AI Engineer, Junior Backend Developer (Python / FastAPI / Django), or Machine Learning Engineering Intern. I am also open to select freelance consulting projects for custom RAG pipelines or web applications.',
  },
  {
    q: 'Are you available for remote work across international time zones?',
    a: 'Yes! I am based in Kathmandu, Nepal (GMT+5:45) and have experience working remotely and asynchronously with global teams using Git, Slack, Discord, and project management boards.',
  },
  {
    q: 'What is your core production tech stack?',
    a: 'My primary language is Python (FastAPI, Django REST, PyTorch, Scikit-learn). For databases and persistence, I rely on PostgreSQL and Redis. For frontends, I work with React 19, Next.js, and modern CSS/Tailwind. For MLOps, I use Docker, Apache Airflow, and MLflow.',
  },
  {
    q: 'Can you build end-to-end applications from scratch?',
    a: 'Absolutely. As evidenced by my Grand Winner podium at TechSprint 2026 and multiple full-stack builds, I take ownership from problem definition and database schema modeling all the way to containerized deployment and automated monitoring.',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('basnetsmriti62@gmail.com');
    setCopied(true);
    confetti({
      particleCount: 25,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#c084fc', '#a855f7', '#ffffff'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Launch mailto fallback
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:basnetsmriti62@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setFormSent(true);
    confetti({
      particleCount: 40,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#c084fc', '#a855f7', '#ec4899', '#ffffff'],
    });
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact-viewport-section" aria-label="Contact Smriti Basnet">
      <div className="contact-ambient-glow" />

      {/* Header */}
      <div className="contact-header-center">
        <div className="career-badge-pill">
          <Mail size={13} className="career-badge-icon" />
          <span>Get in Touch</span>
        </div>
        <h1 className="contact-main-title">
          Let’s Build Something <span className="title-purple-gradient">Exceptional</span>
        </h1>
        <p className="contact-subtext">
          Whether you have an ambitious AI challenge, a full-stack engineering role, or a hackathon idea, my inbox is always open.
        </p>
      </div>

      {/* Main Split Grid: Direct Methods vs Message Form */}
      <div className="contact-layout-split">
        {/* Left Column: Direct Methods, Availability & Response Time */}
        <div className="contact-direct-stack">
          {/* Email Card with Copy Trigger */}
          <div className="contact-glass-card">
            <div className="contact-icon-bubble">
              <Mail size={22} />
            </div>
            <div className="contact-info-block">
              <span className="contact-method-title">Primary Direct Email</span>
              <a href="mailto:basnetsmriti62@gmail.com" className="contact-method-value">
                basnetsmriti62@gmail.com
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="contact-action-btn"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? <CheckCircle2 size={18} className="text-emerald" /> : <Copy size={18} />}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/smriti-basnet-a140ab329/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-glass-card"
          >
            <div className="contact-icon-bubble">
              <Linkedin size={22} />
            </div>
            <div className="contact-info-block">
              <span className="contact-method-title">LinkedIn Network</span>
              <span className="contact-method-value">smriti-basnet</span>
            </div>
            <span className="contact-arrow-badge">&rarr;</span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Smritibasnet09"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-glass-card"
          >
            <div className="contact-icon-bubble">
              <Github size={22} />
            </div>
            <div className="contact-info-block">
              <span className="contact-method-title">GitHub Profile &amp; Repositories</span>
              <span className="contact-method-value">Smritibasnet09</span>
            </div>
            <span className="contact-arrow-badge">&rarr;</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/9779800000000"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-glass-card"
          >
            <div className="contact-icon-bubble">
              <MessageCircle size={22} />
            </div>
            <div className="contact-info-block">
              <span className="contact-method-title">Direct WhatsApp Chat</span>
              <span className="contact-method-value">Instant Messaging</span>
            </div>
            <span className="contact-arrow-badge">&rarr;</span>
          </a>

          {/* Status & Availability Banner */}
          <div className="contact-status-banner">
            <span className="status-ping-dot" />
            <div>
              <strong>Actively Open for Opportunities</strong>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.78rem', color: '#9ca3af' }}>
                Full-Time Engineering Roles, AI Internships &amp; Technical Consulting.
              </p>
            </div>
          </div>

          {/* Response SLA Note */}
          <div className="contact-sla-badge">
            <Clock size={15} className="text-purple" />
            <span>Guaranteed Response: Typically within 12 to 24 hours.</span>
          </div>
        </div>

        {/* Right Column: Dispatch Message Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-glass-form">
            <h2 className="form-heading">Send a Direct Message</h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Fill in your details below. Clicking submit will automatically prepare an email draft in your default client.
            </p>

            <div className="form-field-group">
              <label htmlFor="name" className="form-label">
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Alex Morgan"
                className="form-input-text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="alex@company.com"
                className="form-input-text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="AI Engineering Role / Collaboration"
                className="form-input-text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="message" className="form-label">
                Your Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Hi Smriti, I came across your portfolio and project builds, and I would love to discuss..."
                className="form-input-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="form-submit-btn" disabled={formSent}>
              {formSent ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>Opening Mail Client...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Dispatch Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="contact-faq-section">
        <div className="academic-header">
          <div className="career-badge-pill">
            <HelpCircle size={13} className="career-badge-icon" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="academic-title">
            Frequently Asked <span className="title-purple-gradient">Questions</span>
          </h2>
          <p className="academic-desc">
            Quick answers regarding availability, tech stacks, and working preferences.
          </p>
        </div>

        <div className="faq-accordion-stack">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`faq-item-card ${isOpen ? 'is-open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question-text">{faq.q}</h3>
                  <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                </div>
                {isOpen && (
                  <div className="faq-answer-block">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
