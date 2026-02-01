
import React, { useState, useEffect } from 'react';

const roles = ["Data Analyst", "Web Developer", "Professional Tutor"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Fix: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to resolve the "Cannot find namespace 'NodeJS'" error in browser environments.
    let timer: ReturnType<typeof setTimeout>;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block py-1 px-4 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm font-mono tracking-widest uppercase">
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
          Hi, I'm <span className="text-gradient">Sumit Chaurasiya</span>
        </h1>
        
        <div className="text-2xl md:text-4xl font-light text-gray-400 mb-8 h-12">
          I'm a <span className="text-white font-mono border-r-2 border-cyan-500 pr-2">{displayText}</span>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed">
          Bridging the gap between raw data and impactful decisions. I specialize in building analytical workflows, modern web platforms, and empowering the next generation of tech talent.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="btn-gradient px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20">
            Let's Talk <i className="fa-solid fa-paper-plane ml-2"></i>
          </a>
          <a href="#projects" className="glass px-8 py-4 rounded-xl font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all">
            View Work
          </a>
        </div>
        
        <div className="mt-16 flex justify-center space-x-8 text-3xl">
          <a href="https://github.com/Sumit-Chaurasiya-04" target="_blank" className="text-gray-500 hover:text-white transition-colors">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sumit-chaurasiya-in" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-colors">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:sam.ciya64@gmail.com" className="text-gray-500 hover:text-blue-400 transition-colors">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
