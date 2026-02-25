import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  // Map icons to specific SVGs
  const getIcon = (type: string) => {
    switch (type) {
      case 'instagram':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'sparkles':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l1.91 5.89L20 12l-6.09 3.11L12 21l-1.91-5.89L4 12l6.09-3.11L12 3z"></path>
          </svg>
        );
      case 'shirt':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
          </svg>
        );
      case 'layout':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        );
      case 'compass':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
        );
      default:
        return <span>✨</span>;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0F172A] text-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 space-y-6">
          <span className="text-[#FF3B30] font-black text-sm uppercase tracking-[0.2em]">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight">
            COMPREHENSIVE DESIGN <br /> SOLUTIONS.
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            We offer end-to-end creative support for companies ready to challenge their industry norms and set new visual standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="w-14 h-14 mb-8 bg-gradient-to-br from-[#FF3B30] to-[#E11D48] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all shadow-lg border border-white/10">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-white/50 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/10 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute top-4 right-4 text-white/5 font-black text-6xl group-hover:text-white/10 transition-colors pointer-events-none">
                0{service.id.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;