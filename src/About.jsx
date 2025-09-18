import React from 'react';
import difImg from "./assets/dif.png";

const About = () => {
  return (
    <section id="about" className="about">
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

      <div className="about__container">
        <div className="about__content">
          <div className="about__image-section">
            <div className="about__image-wrapper">
              <div className="about__image-glow"></div>
              <div className="about__image-container">
                <div className="about__image-placeholder">
                  <img 
                    src= {difImg}
                    alt="Smriti Basnet" 
                    className="about__profile-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="about__image-fallback">👩‍💻</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about__text-section">
            <div className="about__section-number">01.</div>
            
            <h2 className="about__title">
              About Me
              <div className="about__title-underline"></div>
            </h2>

            <div className="about__description">
              <p>
                Hi there! I'm <span className="about__highlight-name">Smriti Basnet</span>, a{' '}
                <span className="about__highlight">tech enthusiast & student</span> who loves exploring coding, projects, and creative ideas. 
                 I'm currently studying Bsc. Cs with AI in Sunway Collge in 3rd Semester.
              </p>
              
              <p>
                I’m also part of an <a href="#" className="about__link">AI Club</a> where I dive into artificial intelligence topics, share ideas, 
                and keep improving my skills every day. I enjoy experimenting with different technologies and making projects that are both fun and useful. 
              </p>
              
              <p>
                My journey is just beginning, but I’m always excited to learn, take on challenges, and grow step by step as a developer and innovator. 
                Whether it’s coding, problem-solving, or building something new, I’m ready to explore more and more.
              </p>
              
              <p>
                In short, I’m curious, creative, and passionate about tech  and I believe this is just the start of something big!
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default About;
