import React from 'react';
import Smriti from '../src/assets/Smriti.png'; 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <div className="hero__bg-element hero__bg-element--1"></div>
        <div className="hero__bg-element hero__bg-element--2"></div>
      </div>

      <div className="hero__container">
        <div className="hero__row">
          <div className="hero__text">
            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">Smriti Basnet</span>
            </h1>
            <div className="hero__subtitle">
              Full Stack Developer
            </div>
            <p className="hero__description">
              Crafting digital experiences that blend design, functionality, and purpose. Ready to build something remarkable with you.
            </p>

            <div className="hero__buttons">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="hero__btn hero__btn--primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}
                className="hero__btn hero__btn--secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hero__image">
            <img src={Smriti} alt="Smriti Basnet" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
