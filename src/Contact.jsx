import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('basnetsmriti62@gmail.com');
    setCopied(true);
    confetti({
      particleCount: 20,
      spread: 50,
      colors: ['#c084fc', '#a855f7', '#ffffff'],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Launch mailto fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.open(`mailto:basnetsmriti62@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setFormSent(true);
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#c084fc', '#a855f7', '#ec4899', '#ffffff'],
    });
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-viewport-section" aria-label="Contact Section">
      <div className="contact-ambient-glow" />

      {/* Header */}
      <div className="contact-header-center">
        <h2 className="contact-main-title">
          Start a <span className="title-purple-gradient">Conversation</span>
        </h2>
        <p className="contact-subtext">
          Have an interesting AI challenge, backend engineering opportunity, or collaborative project? Let's connect.
        </p>
      </div>

      <div className="contact-layout-split">
        {/* Left Side: Direct Contact Methods */}
        <div className="contact-direct-stack">
          {/* Email Card with One-Click Copy */}
          <div className="contact-glass-card">
            <div className="contact-icon-bubble">
              <Mail size={22} />
            </div>
            <div className="contact-info-block">
              <span className="contact-method-title">Direct Email</span>
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
              <span className="contact-method-title">LinkedIn Professional</span>
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
              <span className="contact-method-title">GitHub Codebase</span>
              <span className="contact-method-value">Smritibasnet09</span>
            </div>
            <span className="contact-arrow-badge">&rarr;</span>
          </a>

          {/* Status availability banner */}
          <div className="contact-status-banner">
            <span className="status-ping-dot" />
            <span>Currently open for Software &amp; AI Engineering Opportunities</span>
          </div>
        </div>

        {/* Right Side: Quick Message Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-glass-form">
            <h3 className="form-heading">Send a Quick Message</h3>

            <div className="form-field-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="form-input-text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="jane@example.com"
                className="form-input-text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-field-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Hi Smriti, I came across your portfolio and would love to discuss..."
                className="form-input-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="form-submit-btn" disabled={formSent}>
              {formSent ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>Message Prepared! Opening Mail...</span>
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
    </section>
  );
}
