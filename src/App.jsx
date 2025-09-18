import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Palette, Smartphone, ArrowRight } from 'lucide-react';

import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Project";
import "./App.css";
import Experience from './Experience';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Footer></Footer>
      

    </div>
  );
};

export default App;
