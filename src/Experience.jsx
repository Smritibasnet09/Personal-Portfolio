import React from 'react';
import ImeImg from "./assets/Ime.png";
import KalpaImg from "./assets/Kalpa.jpeg";
import NariImg from "./assets/Nari.png";
import AiImg from "./assets/Ai.jpeg";
import GDImg from "./assets/GD.png";

const Experience = ({ sectionNumber = "03" }) => {
  const achievements = [
    {
      id: 1,
      title: "Global IME Hackathon Participant",
      image: ImeImg,
      hasPlayButton: true,
      description: "Participated on May 1–2, showcasing innovative tech solutions."
    },
    {
      id: 2,
      title: "Executive Member - AI Club",
      image: AiImg,
      hasPlayButton: true,
      description: "Serving as Executive Member at AI Club, SSRC Sunway College."
    },
    {
      id: 3,
      title: "Volunteer - Sachet Naari",
      image: NariImg,
      hasPlayButton: true,
      description: "Contributed as a volunteer in Sachet Naari, awarded with a certificate."
    },
    {
      id: 4,
      title: "Volunteer - Kalpavriksha",
      image: KalpaImg,
      hasPlayButton: true,
      description: "Volunteered in Kalpavriksha, supporting community-driven initiatives."
    }
  ];

  return (
    <section id="experience" className="experience">
      {/* Background Stars */}
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

      <div className="experience__container">
        <div className="experience__header">
          <div className="experience__section-number">{sectionNumber}.</div>
          <h2 className="experience__title">
            My Experience
            <div className="experience__title-underline"></div>
          </h2>
        </div>

        <div className="experience__content">
          <div className="experience__job-info">
            <div className="experience__company-timeline">
              <div className="experience__timeline-line"></div>
              <div className="experience__timeline-dot"></div>
            </div>

            <div className="experience__job-details">
              <div className="experience__company-info">
                <h3 className="experience__company-name">Graphics Designer</h3>
                <p className="experience__job-type">Freelancer</p>
              </div>

              <div className="experience__job-description">
                <div className="experience__company-logo">
                  <img src={GDImg} alt="Graphics Designing" />
                </div>
                <div className="experience__job-text">
                  <h4 className="experience__job-title">Graphics Designer</h4>
                  <p className="experience__job-desc">
                    Created professional designs for events, social media, and projects using tools like Canva 
                    and Photoshop. Focused on clean, creative, and impactful visual communication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="experience__achievement-card">
                <div className="experience__achievement-image">
                  <img src={achievement.image} alt={achievement.title} />
                  {achievement.hasPlayButton && (
                    <div className="experience__play-button">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="experience__achievement-content">
                  <h4 className="experience__achievement-title">{achievement.title}</h4>
                  <p className="experience__achievement-desc">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;