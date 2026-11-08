import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, Cpu, Layers, Radio, HeartPulse, ShieldAlert, CloudSun, Music } from 'lucide-react';

import NyanoImg from './assets/Nyano.png';
import HmsImg from './assets/HMS.png';
import FraudImg from './assets/Fraud.png';
import WeatherImg from './assets/Weatherapp.png';
import MusicImg from './assets/music.png';
import DifImg from './assets/dif.png';
import AiImg from './assets/Ai.jpeg';

const PROJECTS = [
  {
    number: '01',
    title: 'MeroHisab — Voice AI Assistant',
    category: 'Voice AI & Conversational LLM',
    tag: 'AI',
    tools: 'Python, Speech Recognition, NLP, FastAPI, SQLite, Conversational AI',
    description:
      'A voice-based AI assistant engineered to empower small shopkeepers and local businesses to track daily sales, expenses, and credit ledgers naturally through voice commands.',
    image: DifImg,
    github: 'https://github.com/Smritibasnet09/MeroHisab',
    icon: <Cpu size={16} />,
  },
  {
    number: '02',
    title: 'Nyano Kakh — IoT Infant Care',
    category: 'IoT & Embedded Healthcare',
    tag: 'IoT',
    tools: 'Arduino, ESP32, DHT11 Sensors, Python, Real-Time Alerting, Automated Incubator',
    description:
      'An affordable IoT-driven infant incubation and distress-monitoring system providing continuous temperature regulation, vital alerts, and automated notifications for infant healthcare.',
    image: NyanoImg,
    github: 'https://github.com/Smritibasnet09/Nyano_Kokh',
    icon: <HeartPulse size={16} />,
  },
  {
    number: '03',
    title: 'Fraud Alert — Financial Anomaly Detection',
    category: 'Machine Learning & Security',
    tag: 'AI',
    tools: 'Python, Scikit-learn, XGBoost, Anomaly Detection, Pandas, Data Preprocessing',
    description:
      'A machine learning classification pipeline detecting transactional anomalies and unauthorized credit card operations in real time with high recall and minimized false positives.',
    image: FraudImg,
    github: 'https://github.com/Smritibasnet09',
    icon: <ShieldAlert size={16} />,
  },
  {
    number: '04',
    title: 'Doclinic — Hospital Management (HMS)',
    category: 'Full-Stack Web Architecture',
    tag: 'FullStack',
    tools: 'Python, Django REST, React, PostgreSQL, Role-Based Access, Appointment Analytics',
    description:
      'A comprehensive healthcare administration portal featuring doctor dashboards, patient appointment routing, lab test tracking, and hospital capacity analytics.',
    image: HmsImg,
    github: 'https://github.com/Smritibasnet09',
    icon: <Layers size={16} />,
  },
  {
    number: '05',
    title: 'WeatherWise — Meteorological Forecast',
    category: 'Weather Web App & APIs',
    tag: 'FullStack',
    tools: 'React, OpenWeatherMap API, JavaScript, Modern Glassmorphic UI, Geolocation',
    description:
      'A sleek, responsive glassmorphic weather platform offering multi-day precipitation curves, air quality indices, temperature forecasts, and severe storm advisories.',
    image: WeatherImg,
    github: 'https://github.com/Smritibasnet09',
    icon: <CloudSun size={16} />,
  },
  {
    number: '06',
    title: 'Smart EV Car Charging System',
    category: 'IoT Automation & Energy',
    tag: 'IoT',
    tools: 'IoT Sensors, Microcontrollers, Python, RFID Authentication, Power Scheduling',
    description:
      'An IoT-enabled smart EV charging station featuring sensor-based slot reservation, automated power metering, and safety shutoff mechanisms for efficient electric mobility.',
    image: AiImg,
    github: 'https://github.com/Smritibasnet09/Smart-Electric-Car-Charging-System',
    icon: <Radio size={16} />,
  },
  {
    number: '07',
    title: 'GrooveSphere — Music Streaming Player',
    category: 'Frontend & Audio Engineering',
    tag: 'FullStack',
    tools: 'React, Web Audio API, Modern Dark UI, State Management, Spotify Design System',
    description:
      'A high-performance music streaming web application with audio playback controls, playlist creation, dynamic search filtering, and immersive dark-mode UI.',
    image: MusicImg,
    github: 'https://github.com/Smritibasnet09',
    icon: <Music size={16} />,
  },
  {
    number: '08',
    title: 'BigMart Sales Prediction',
    category: 'Predictive Data Science',
    tag: 'AI',
    tools: 'Python, Scikit-learn, Random Forest, Feature Engineering, EDA, Jupyter Notebook',
    description:
      'Supervised regression pipeline analyzing multi-store retail data across 1,500+ items to forecast supermarket outlet sales and optimize product inventory.',
    image: null,
    github: 'https://github.com/Smritibasnet09/Big_Mart_Prediction-Using-Machine-Learning',
    icon: <Cpu size={16} />,
  },
];

const CATEGORIES = [
  { id: 'All', label: 'All Projects' },
  { id: 'AI', label: 'AI & Machine Learning' },
  { id: 'IoT', label: 'IoT & Embedded' },
  { id: 'FullStack', label: 'Full-Stack Web' },
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.tag === activeCategory);

  return (
    <section id="projects" className="work-viewport-section" aria-label="My Work">
      <div className="work-glow-orb" />

      {/* Header */}
      <div className="work-header-center">
        <h2 className="work-main-title">
          My <span className="title-purple-gradient">Work</span>
        </h2>
        <p className="work-subtext">
          Real-world applications, AI pipelines, IoT innovations, and full-stack software from my GitHub codebase.
        </p>

        {/* Filter Pills */}
        <div className="work-filter-pills">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-pill-btn ${activeCategory === id ? 'active' : ''}`}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid matching Screenshot 5 */}
      <div className="work-cards-grid">
        {filteredProjects.map((item) => (
          <article key={item.number} className="work-showcase-card">
            {/* Top row: Number + Category */}
            <div className="work-card-top-row">
              <span className="work-giant-number">{item.number}</span>
              <div className="work-title-group">
                <h3 className="work-item-name">{item.title}</h3>
                <span className="work-item-category">
                  {item.icon}
                  <span>{item.category}</span>
                </span>
              </div>
            </div>

            {/* Tools and Features */}
            <div className="work-tools-block">
              <span className="tools-block-label">Tools &amp; Tech Stack</span>
              <p className="tools-block-text">{item.tools}</p>
            </div>

            {/* Project Image Preview (Only if image exists) */}
            {item.image && (
              <div className="work-preview-frame">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="work-preview-img"
                />
                <div className="work-preview-overlay">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-link-btn"
                    aria-label={`View ${item.title} on GitHub`}
                  >
                    <Github size={18} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            )}

            {}

            {/* Description */}
            <p className="work-item-description">{item.description}</p>

            {/* Footer link */}
            <div className="work-card-footer">
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="work-repo-link"
              >
                <span>Explore Codebase</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
