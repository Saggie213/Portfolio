import React from 'react';
import './App.css';
import Header from './components/portfolio/Header';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Projects from './components/portfolio/Projects';
import Skills from './components/portfolio/Skills';
import Experience from './components/portfolio/Experience';
import Achievements from './components/portfolio/Achievements';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

function App() {
  return (
    <div className="App bg-[#0a0a0a] min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
