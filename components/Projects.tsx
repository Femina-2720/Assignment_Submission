import React from 'react';
import { PROJECTS, ASSIGNMENT_NOTE, ASSIGNMENT_DETAILS } from '../constants';
import { Calendar, Code, ExternalLink, Star, Github, Globe, AlertTriangle, CheckCircle2, Layers, Terminal } from 'lucide-react';

const Projects: React.FC = () => {
  // Helper to handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; 
    // Fallback handled by UI logic if needed, or leave empty to prevent loop
  };

  return (
    <section id="projects" className="py-24 bg-game-dark relative">
       <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-game-surface to-transparent pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-4">Projects</h2>
          <p className="text-gray-400 font-space">Recent deployments and missions accomplished.</p>
        </div>

        {/* Note to Reviewer - Highlighted Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-400 font-bold font-space mb-2">{ASSIGNMENT_NOTE.title}</h3>
              <p className="text-amber-100/80 text-sm leading-relaxed">
                {ASSIGNMENT_NOTE.content}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className={`group relative rounded-2xl overflow-hidden bg-game-surface border border-white/5 transition-all duration-300`}
            >
              {/* Project Header Card */}
              <div className="md:flex border-b border-white/5">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-30 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 font-space shadow-lg">
                    <Star className="w-3 h-3 fill-black" /> FEATURED ASSIGNMENT
                  </div>
                )}

                {/* Image Container */}
                <div className={`relative overflow-hidden md:w-1/2 h-64 md:h-auto bg-black/20`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={handleImageError}
                    className="w-full h-full object-contain object-center p-4 relative z-10"
                  />
                </div>

                {/* Content */}
                <div className={`p-8 md:w-1/2 flex flex-col relative z-20`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-space">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 font-mono">
                        <Calendar className="w-3 h-3" /> {project.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-game-dark border border-white/10 rounded text-xs text-indigo-300 font-medium flex items-center gap-1">
                        <Code className="w-3 h-3" /> {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-900/20"
                      >
                        <Globe className="w-4 h-4" /> LIVE DEMO
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                      >
                        <Github className="w-4 h-4" /> VIEW CODE
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Technical Deep Dive Section (Only for Just Divide) */}
              {project.title === "Just Divide" && (
                <div className="bg-black/20 p-8 border-t border-white/5">
                  <h4 className="text-white font-space font-bold flex items-center gap-2 mb-6">
                    <Terminal className="w-5 h-5 text-game-secondary" /> Engineering Deep Dive
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column: Compliance & Stats */}
                    <div className="space-y-6">
                      <div>
                        <h5 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-3">Task Compliance</h5>
                        <ul className="space-y-3">
                          {ASSIGNMENT_DETAILS.compliance.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300"><strong className="text-white">{item.label}:</strong> {item.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                         <h5 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-3">Future Roadmap</h5>
                         <div className="flex flex-wrap gap-2">
                           {ASSIGNMENT_DETAILS.future.map((item, i) => (
                             <span key={i} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/5">
                               {item}
                             </span>
                           ))}
                         </div>
                      </div>
                    </div>

                    {/* Right Column: Technical Approach */}
                    <div>
                      <h5 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-3">Technical Approach</h5>
                      <div className="space-y-4">
                        {ASSIGNMENT_DETAILS.approach.map((item, i) => (
                          <div key={i} className="bg-game-dark/50 p-4 rounded-lg border border-white/5">
                            <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm mb-1">
                              <Layers className="w-4 h-4" /> {item.title}
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;