import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable 3D tilt on desktop for better mobile performance
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        const rect = cardRef.current!.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (centerY - e.clientY) / 50;
        const rotateY = (e.clientX - centerX) / 50;

        cardRef.current!.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const handleMouseLeave = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5] pt-24 md:pt-32 pb-16 md:pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 md:opacity-30">
        <div className="absolute top-[5%] -right-[5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#FF3B30]/20 rounded-full blur-[60px] md:blur-[100px]"></div>
        <div className="absolute -bottom-[5%] -left-[5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-8 md:space-y-10 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center space-x-3 px-3 py-1.5 md:px-4 md:py-2 bg-white/50 border border-black/5 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3B30]"></span>
                </span>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] text-[#0A0A0A]">
                  Creative Partnership 2026
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl xl:text-9xl font-black font-display tracking-tighter leading-[0.9] md:leading-[0.85] text-[#0A0A0A]">
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] via-[#E11D48] to-[#9F1239]">
                  Arfan
                </span>
                <br />
                <span className="inline-block transition-transform duration-500 md:hover:translate-x-4">
                  Ahmed.
                </span>
              </h1>
            </div>
            
            <p className="max-w-xl text-lg md:text-2xl text-[#0A0A0A]/60 leading-relaxed font-light">
              Textile Engineer and Fashion Graphic Designer specialized in <span className="text-[#0A0A0A] font-medium italic underline decoration-[#FF3B30]/30">industrial sustainability</span> and high-fidelity brand narratives.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <a 
                href="https://drive.google.com/drive/u/0/folders/1_tLp33rGlV0anidBOp7XXtnVMvNuiRAL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gpu flex-1 md:flex-none text-center justify-center px-6 md:px-10 py-4 md:py-5 bg-[#0A0A0A] text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#FF3B30] transition-all rounded-full shadow-lg flex items-center group"
              >
                <span>Explore Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="mailto:arfanahmedd@gmail.com"
                className="flex-1 md:flex-none text-center justify-center px-6 md:px-10 py-4 md:py-5 border-2 border-black/10 text-black text-xs md:text-sm font-bold uppercase tracking-widest hover:border-black transition-all rounded-full"
              >
                Inquire
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div 
              ref={cardRef}
              className="gpu relative z-20 w-full max-w-sm md:max-w-none mx-auto aspect-[4/5] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
            >
              <img 
                src="https://i.pinimg.com/736x/08/05/74/0805744b199734dcdd4f17aaa342fa34.jpg" 
                alt="Arfan Projects Vision" 
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl">
                <div className="flex justify-between items-end text-white">
                  <div>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Creative Lead</p>
                    <h3 className="text-lg md:text-xl font-black font-display">Arfan</h3>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Dhaka, BD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;