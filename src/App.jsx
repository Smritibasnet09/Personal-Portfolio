import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Home from './Home';
import About from './About';
import WhatIDo from './WhatIDo';
import Experience from './Experience';
import Achievements from './Achievements';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';

import SocialSidebar from './components/SocialSidebar';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-app-root">
        {/* Route Change Scroll Reset */}
        <ScrollToTop />

        {/* Global Overlays */}
        <Header />
        <SocialSidebar />
        <ResumeModal />

        {/* Dynamic Route Pages */}
        <main className="main-viewport-flow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<WhatIDo />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
