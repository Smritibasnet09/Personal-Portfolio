import React from 'react';
import WeatherAppImg from "./assets/Weatherapp.png";
import HMSIMG from "./assets/HMS.png";
import FraudImg from "./assets/Fraud.png";
import MusicImg from "./assets/Music.png";
import NyanoImg from "./assets/Nyano.png";

const Projects = ({ sectionNumber = "02" }) => {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A simple weather forecasting app that shows live weather data using APIs ☀️🌧️",
      image: WeatherAppImg,
      gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
      links: {
        github: "https://github.com/Smritibasnet09/Chuk",
        demo: "https://github.com/Smritibasnet09/Chuk"
      }
    },
    {
      id: 2,
      title: "Fraud Detection System",
      description: "AI-powered fraud detection project that identifies suspicious transactions and prevents risks 🔐",
      image: FraudImg,
      gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      links: {
        github: "https://github.com/Smritibasnet09/Big_Mart_Prediction-Using-Machine-Learning",
        demo: "https://github.com/Smritibasnet09/Big_Mart_Prediction-Using-Machine-Learning"
      }
    },
    {
      id: 3,
      title: "Music Suggestion App",
      description: "An AI-powered music app that suggests songs and playlists based on mood and preferences 🎵✨",
      image: MusicImg,
      gradient: "linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)",
      links: {
        github: "https://github.com/Smritibasnet09/Book-Recommendation",
        demo: "https://github.com/Smritibasnet09/Book-Recommendation"
      }
    },
    {
      id: 4,
      title: "Nyano Kokh",
      description: "A cultural-local project promoting Nepali traditions, food, and awareness for communities 🇳🇵🔥",
      image: NyanoImg,
      gradient: "linear-gradient(135deg, #16a34a 0%, #84cc16 100%)",
      links: {
        github: "https://github.com/Smritibasnet09/Nyano_Kokh",
        demo: "https://github.com/Smritibasnet09/Nyano_Kokh"
      }
    },
    {
      id: 5,
      title: "VisionAR — TechSprint Winner",
      description: "Award-winning AR project built for TechSprint hackathon. Immersive augmented reality experience 🏆🥽",
      image: HMSIMG,
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
      links: {
        github: "https://github.com/Smritibasnet09/TechSprint_visionary_AR",
        demo: "https://github.com/Smritibasnet09/TechSprint_visionary_AR"
      }
    },
    {
      id: 6,
      title: "Grocery Store (PHP)",
      description: "A full-stack grocery store management system built with PHP — products, cart & admin panel 🛒",
      image: FraudImg,
      gradient: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
      links: {
        github: "https://github.com/Smritibasnet09/Grocery_Store_php",
        demo: "https://github.com/Smritibasnet09/Grocery_Store_php"
      }
    }
  ];

  return (
    <section id="projects" className="projects">
  
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__section-number">{sectionNumber}.</div>
          <h2 className="projects__title">
             Projects
            <div className="projects__title-underline"></div>
          </h2>
        </div>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__card" style={{background: project.gradient}}>
              <div className="projects__card-content">
                <div className="projects__image">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className="projects__info">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__description">{project.description}</p>
                  
                  <div className="projects__links">
                    <a href={project.links.github} className="projects__link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.links.demo} className="projects__link" aria-label="View Repository" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;