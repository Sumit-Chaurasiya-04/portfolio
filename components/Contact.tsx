
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have a project in mind, need data consulting, or looking for tutoring? Reach out and let's discuss how we can work together.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl group-hover:text-cyan-400 transition-colors">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-gray-500 tracking-widest">Email Me</p>
                  <a href="mailto:sam.ciya64@gmail.com" className="text-white font-bold text-lg hover:text-cyan-400 transition-colors">sam.ciya64@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl group-hover:text-green-400 transition-colors">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-gray-500 tracking-widest">WhatsApp</p>
                  <a href="https://wa.me/919899558849" target="_blank" className="text-white font-bold text-lg hover:text-green-400 transition-colors">+91 9899558849</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl group-hover:text-blue-400 transition-colors">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-gray-500 tracking-widest">Location</p>
                  <p className="text-white font-bold text-lg">Sector-93, Noida, UP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="What's on your mind?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-gradient py-4 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
              >
                Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-sm">
                  Please fill in all fields before sending.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
