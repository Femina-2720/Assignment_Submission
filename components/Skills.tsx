import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 relative bg-game-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-4">Character Stats</h2>
          <div className="h-1 w-24 bg-game-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-game-dark p-8 rounded-2xl border border-white/5 hover:border-game-primary/30 transition-colors">
              <h3 className="font-space text-xl text-game-accent mb-6 uppercase tracking-widest border-b border-white/10 pb-2">
                {category}
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium flex items-center gap-2">
                        <span>{skill.icon}</span> {skill.name}
                      </span>
                      <span className="text-game-primary font-pixel text-xs">LVL {skill.level}</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-game-primary to-game-secondary rounded-full relative overflow-hidden group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 transform -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
