
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter text-gradient">Sumit Chaurasiya</span>
            <p className="text-gray-500 text-sm mt-2">Data Analyst | Developer | Professional Tutor</p>
          </div>
          
          <div className="flex space-x-6 text-gray-500 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 text-xs mb-2">Designed & Built by Sumit Chaurasiya</p>
            <p className="text-gray-500 text-xs font-mono">&copy; {currentYear} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
