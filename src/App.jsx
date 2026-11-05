import React from 'react';
import './App.css';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import WhatIDo from './WhatIDo';
import Experience from './Experience';
import Achievements from './Achievements';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

import SocialSidebar from './components/SocialSidebar';
import ResumeModal from './components/ResumeModal';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Fixed UI Overlays */}
      <Header />
      <SocialSidebar />
      <ResumeModal />

      {/* Main Narrative Flow */}
      <main className="main-viewport-flow">
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Achievements />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
