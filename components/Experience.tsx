import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 space-y-6">
          <span className="text-[#FF3B30] font-black text-sm uppercase tracking-[0.2em]">Professional Journey</span>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-[#0A0A0A]">
            WORK EXPERIENCE<span className="text-[#FF3B30]">.</span>
          </h2>
          <p className="text-xl text-black/60 font-light leading-relaxed">
            A track record of delivering high-impact design solutions for industry leaders and innovative startups.
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div 
              key={exp.id} 
              className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-black/5 last:border-0"
            >
              <div className="space-y-4">
                {exp.logoUrl && (
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-black/5 mb-4 bg-white shadow-sm">
                    <img 
                      src={exp.logoUrl} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="space-y-1">
                  <span className="text-sm font-black text-[#FF3B30] uppercase tracking-widest block">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-[#0A0A0A]">{exp.company}</h4>
                  {exp.location && (
                    <p className="text-xs text-black/40 font-medium uppercase tracking-wider">
                      {exp.location}
                    </p>
                  )}
                  {exp.type && (
                    <span className="inline-block text-[10px] font-bold bg-black/5 px-2 py-0.5 rounded uppercase tracking-tighter text-black/60">
                      {exp.type}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black font-display mb-4 group-hover:text-[#FF3B30] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-black/60 font-light max-w-2xl">
                    {exp.description}
                  </p>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF3B30] shrink-0"></span>
                      <span className="text-sm text-black/70 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Subtle background number */}
              <div className="absolute top-0 right-0 text-[120px] font-black text-black/[0.02] leading-none pointer-events-none select-none">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
