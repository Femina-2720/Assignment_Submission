import React from 'react';
import { PERSONAL_INFO } from '../constants';
import MemoryGame from './MemoryGame';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed navbar height (approx 80px)
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative w-full grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="font-pixel text-xs text-game-accent flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
              READY PLAYER ONE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-space font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-secondary to-game-primary">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            {PERSONAL_INFO.heroText} I combine <span className="text-white font-bold">Game Logic</span> with <span className="text-white font-bold">Modern Web Tech</span> to build next-gen ed-tech experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="cursor-pointer px-8 py-4 bg-game-secondary hover:bg-pink-600 text-white font-bold rounded-lg transition-all transform hover:translate-y-[-2px] shadow-lg shadow-pink-500/30 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="cursor-pointer px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold rounded-lg transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
             <div className="text-sm text-gray-500 font-space">
                Tech Stack: React • Canvas • GenAI • Node.js
             </div>
          </div>
        </div>

        {/* Interactive Game Container */}
        <div className="relative hidden md:block">
          <div className="absolute -top-10 -right-10 text-game-accent opacity-50 animate-bounce">
            <MousePointer2 className="w-8 h-8 rotate-[-45deg]" />
            <span className="font-pixel text-xs ml-2">CLICK TO PLAY!</span>
          </div>
          <MemoryGame />
        </div>

      </div>
    </section>
  );
};

export default Hero;