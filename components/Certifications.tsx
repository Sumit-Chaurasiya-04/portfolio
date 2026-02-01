
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Verified <span className="text-gradient">Credentials</span></h2>
          <p className="text-gray-500">Industry-recognized certifications across analytics, AI, and web technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <a 
              key={idx} 
              href={cert.link} 
              target="_blank" 
              className="glass-card p-6 rounded-xl flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors line-clamp-1">{cert.name}</h4>
                  <p className="text-gray-500 text-xs">{cert.issuer}</p>
                </div>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square text-gray-600 text-xs group-hover:text-white transition-colors"></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
