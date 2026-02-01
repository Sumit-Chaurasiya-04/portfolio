
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-500 max-w-xl">From deep-sea data analysis to AI-integrated web applications.</p>
          </div>
          <a href="https://github.com/Sumit-Chaurasiya-04" target="_blank" className="text-cyan-400 font-mono text-sm hover:underline">
            VIEW ALL REPOSITORIES →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <i className={`fa-solid ${project.icon} text-cyan-400`}></i>
                  </div>
                  <a href={project.link} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                    <i className="fa-brands fa-github text-2xl"></i>
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono tracking-tighter text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-white/5 bg-white/5">
                <a href={project.link} target="_blank" className="block text-center py-2 text-sm font-bold text-gray-400 hover:text-cyan-400 transition-colors">
                  Check Details <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
