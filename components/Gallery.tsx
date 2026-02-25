
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#F5F5F5] scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#FF3B30] font-black text-sm uppercase tracking-[0.2em]">Curated Moments</span>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-[#0A0A0A]">
            VISUAL STORYTELLING
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-lg bg-gray-200">
              <img 
                src={item.url} 
                alt={item.category} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full">
                  {item.category === 'social' ? 'Social Media' : item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
