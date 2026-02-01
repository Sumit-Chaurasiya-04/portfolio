
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tighter text-gradient">SUMIT CHAURASIYA</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.id ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 border-b border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 rounded-md text-base font-medium ${
                activeSection === link.id ? 'bg-white/10 text-cyan-400' : 'text-gray-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
