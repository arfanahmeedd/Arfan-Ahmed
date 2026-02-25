import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-6">
          <span className="text-[#FF3B30] font-black text-sm uppercase tracking-[0.2em]">Inquiry</span>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#0A0A0A]">
            COMMON <br /> QUESTIONS.
          </h2>
          <p className="text-[#0A0A0A]/50 font-medium leading-relaxed uppercase tracking-widest text-sm">
            Everything you need to know about working with Arfan Projects.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} className="border-b border-black/5 last:border-0">
              <button 
                onClick={() => setActiveIndex(activeIndex === item.id ? null : item.id)}
                className="w-full py-8 flex justify-between items-center group text-left"
              >
                <span className="text-xl md:text-2xl font-bold group-hover:text-[#FF3B30] transition-colors">{item.question}</span>
                <span className={`text-2xl transition-transform duration-500 ${activeIndex === item.id ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === item.id ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <p className="text-[#0A0A0A]/60 leading-relaxed text-lg font-light max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;