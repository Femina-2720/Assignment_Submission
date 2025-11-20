import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';
import { EKLAVYA_MAPPING } from '../constants';

const WhyHireMe: React.FC = () => {
  return (
    <section id="why-hire-me" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="font-pixel text-2xl md:text-3xl text-white mb-4">Why Choose Femina?</h2>
            <p className="text-indigo-200 font-space text-lg">
              Perfectly aligned with the <span className="font-bold text-white">Eklavya</span> mission.
            </p>
          </div>

          <div className="grid gap-6 relative z-10">
            {EKLAVYA_MAPPING.map((item, index) => (
              <div key={index} className="bg-game-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-game-dark/70 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-red-400" />
                    <h4 className="text-gray-400 font-space text-sm uppercase tracking-wider">Your Need</h4>
                  </div>
                  <p className="text-white font-medium text-lg">{item.req}</p>
                </div>
                
                <div className="hidden md:block text-gray-500">
                  <div className="w-8 h-0.5 bg-gray-500"></div>
                </div>

                <div className="flex-1">
                   <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <h4 className="text-gray-400 font-space text-sm uppercase tracking-wider">My Match</h4>
                  </div>
                  <p className="text-indigo-100 text-lg">{item.match}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center z-10 relative">
             <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-white font-space text-sm">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                Available for Immediate Start
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
