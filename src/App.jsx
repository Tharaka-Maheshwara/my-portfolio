import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Volunteering from './components/Volunteering';
import References from './components/References';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen scroll-smooth text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certificates />
      <Volunteering />
      <References />
      <Contact />
    </div>
  );
}

export default App;