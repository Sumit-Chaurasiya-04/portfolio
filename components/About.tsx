
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden glass">
              {/* REPLACE THIS IMAGE WITH YOUR OWN: /assets/profile.jpg */}
              <img 
                src="assets/profile.jpg" 
                alt="Sumit Chaurasiya" 
                className="w-full h-full object-cover filter contrast-125 brightness-90 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
              Driven by Data, <br/>
              <span className="text-cyan-500">Built for Impact.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am an aspiring Junior Data Analyst with a robust foundation in Computer Science. My expertise lies in Python, SQL, and BI tools, where I focus on turning complex datasets into strategic roadmaps. 
            </p>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Beyond analytics, I am a passionate Web Developer and Educator. Having mentored over 800 students, I possess a unique ability to communicate technical concepts clearly and build tools that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl border-l-4 border-cyan-500">
                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-cyan-400">Current Academic</h4>
                <p className="text-gray-300 font-medium">B.Sc Computer Science</p>
                <p className="text-gray-500 text-sm">Chaudhary Charan Singh University (2024-2027)</p>
              </div>
              <div className="glass-card p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-purple-400">Specialization</h4>
                <p className="text-gray-300 font-medium">Advanced Programming</p>
                <p className="text-gray-500 text-sm">DIIT Noida (ADCP - 92.38%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
