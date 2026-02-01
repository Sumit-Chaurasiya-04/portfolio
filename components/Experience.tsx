
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-gradient">Journey</span></h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative pl-10 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-cyan-500 before:to-transparent">
              <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm font-mono">{exp.period}</p>
                    <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-400 leading-relaxed">
                      <i className="fa-solid fa-check-circle text-cyan-500/40 mt-1.5 mr-3 flex-shrink-0"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
