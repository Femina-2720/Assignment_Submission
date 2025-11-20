import React from 'react';
import { PERSONAL_INFO, ACHIEVEMENTS } from '../constants';
import { Mail, Phone, MapPin, Trophy } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-game-surface pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-pixel text-2xl text-white mb-6">Start A New Game?</h2>
            <p className="text-gray-400 text-lg mb-8">
              I am currently looking for the <span className="text-white font-bold">Volunteer Game Development Intern</span> role. 
              Let's build something educational and fun together.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-gray-300 hover:text-game-secondary transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-space text-lg">{PERSONAL_INFO.email}</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-space text-lg">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-space text-lg">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Achievements Column */}
          <div className="bg-game-dark p-8 rounded-2xl border border-white/5">
             <h3 className="font-space text-xl text-white mb-6 flex items-center gap-2">
               <Trophy className="w-5 h-5 text-yellow-500" /> Achievements
             </h3>
             <div className="space-y-6">
                {ACHIEVEMENTS.map((ach, i) => (
                  <div key={i} className="flex gap-4 items-start">
                     <div className="mt-1">
                        <ach.icon className="w-5 h-5 text-game-accent" />
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-sm">{ach.title}</h4>
                        <p className="text-gray-400 text-xs mt-1">{ach.event}</p>
                        <p className="text-gray-600 text-[10px] font-mono mt-1">{ach.date}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-600 text-sm font-space">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Designed for Eklavya Application.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
