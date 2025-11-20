import React from 'react';
import { PROJECTS } from '../constants';
import { Calendar, Code, ExternalLink, Star } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-game-dark relative">
       <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-game-surface to-transparent pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-4">Quest Log</h2>
          <p className="text-gray-400 font-space">Recent deployments and missions accomplished.</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className={`group relative rounded-2xl overflow-hidden bg-game-surface border border-white/5 hover:border-game-primary transition-all duration-300 md:flex`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 font-space">
                  <Star className="w-3 h-3 fill-black" /> FEATURED
                </div>
              )}

              <div className={`relative overflow-hidden md:w-1/2 h-64 md:h-auto bg-indigo-950/50`}>
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className={`p-8 md:w-1/2 flex flex-col justify-center`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <h3 className="text-2xl font-bold text-white group-hover:text-game-secondary transition-colors font-space">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 font-mono">
                      <Calendar className="w-3 h-3" /> {project.date}
                    </div>
                  </div>
                  {project.link && (
                    <a href={project.link} className="text-gray-400 hover:text-white">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-game-dark border border-white/10 rounded text-xs text-indigo-300 font-medium flex items-center gap-1">
                      <Code className="w-3 h-3" /> {t}
                    </span>
                  ))}
                </div>
                
                {project.title === "Just Divide" && (
                   <div className="mt-6 pt-6 border-t border-white/5">
                      <p className="text-sm text-green-400 font-mono">
                       &gt;  Tech Highlight: Recursive cascading merge algorithms & Phaser 3 grid system.
                      </p>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;