
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">How I Can <span className="text-gradient">Help</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Leveraging my diverse background to provide end-to-end technical solutions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl relative group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className={`fa-solid ${service.icon} text-8xl`}></i>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20">
                <i className={`fa-solid ${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {service.description}
              </p>
              <a href="#contact" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center transition-colors">
                CONTACT FOR PRICING <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
