import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-game-dark min-h-screen text-slate-200 selection:bg-game-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyHireMe />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;
