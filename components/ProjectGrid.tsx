import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectGridProps {
  onBrowseAll?: () => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onBrowseAll }) => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <span className="text-[#FF3B30] font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">Selected Works</span>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-[#0A0A0A] leading-tight">
              OUR CRAFT IN <br className="hidden md:block" /> ACTION
            </h2>
          </div>
          <p className="max-w-md text-[10px] md:text-sm text-[#0A0A0A]/50 font-medium leading-relaxed uppercase tracking-widest">
            A curated selection of digital experiences and brand narratives built for the next generation of founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24 lg:mt-32' : ''}`}
            >
              <div className="relative aspect-[16/10] rounded-2xl md:rounded-[30px] overflow-hidden bg-gray-50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <span className="px-5 py-2.5 md:px-8 md:py-4 bg-white text-black font-black uppercase tracking-widest text-[9px] md:text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all rounded-full shadow-xl">
                    Explore Details
                  </span>
                </div>
              </div>
              <div className="mt-6 md:mt-10 flex justify-between items-start">
                <div className="space-y-1 md:space-y-2">
                  <p className="text-[9px] md:text-xs font-black text-[#FF3B30] uppercase tracking-[0.25em]">{project.category}</p>
                  <h3 className="text-xl md:text-3xl font-black font-display tracking-tight">{project.title}</h3>
                </div>
                <div className="h-[2px] w-8 md:w-16 bg-black/10 mt-4 md:mt-6 group-hover:w-12 md:group-hover:w-24 group-hover:bg-[#FF3B30] transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 flex justify-center">
          <button 
            onClick={onBrowseAll}
            className="w-full md:w-auto px-10 py-5 border-2 border-black text-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all rounded-full inline-block"
          >
            Browse All Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;