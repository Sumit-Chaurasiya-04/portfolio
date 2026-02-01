
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-gradient">Skillset</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">A comprehensive toolkit spanning the entire data lifecycle and modern web stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl group">
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 transition-colors">
                <i className={`fa-solid ${cat.icon} text-2xl text-cyan-400`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-gray-400 flex items-center text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
