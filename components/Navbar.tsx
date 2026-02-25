import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'projects', sectionId?: string) => void;
  currentView: 'home' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Projects', action: () => onNavigate('projects') },
    { name: 'Experience', action: () => onNavigate('home', 'experience') },
    { name: 'About', action: () => onNavigate('home', 'about') },
    { name: 'Services', action: () => onNavigate('home', 'services') },
    { name: 'Gallery', action: () => onNavigate('home', 'gallery') },
    { name: 'Contact', action: () => onNavigate('home', 'contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[150] transition-colors duration-500 ${
      isScrolled || isMenuOpen ? 'bg-[#F5F5F5]/90 backdrop-blur-xl border-b border-black/5 shadow-sm' : 'bg-transparent'
    }`}>
      <div className={`container mx-auto px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6 md:py-8'
      }`}>
        {/* Logo */}
        <button 
          onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} 
          className={`text-lg md:text-2xl font-black font-display tracking-tighter transition-colors flex items-center bg-transparent border-none cursor-pointer z-[160] ${
            isMenuOpen ? 'text-white' : 'text-black hover:text-[#FF3B30]'
          }`}
        >
          ARFAN PROJECTS<span className="text-[#FF3B30] ml-0.5">.</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-[10px] font-bold hover:text-[#FF3B30] transition-colors uppercase tracking-[0.2em] bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => onNavigate('home', 'contact')}
            className="px-6 py-2.5 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#FF3B30] transition-all rounded-full"
          >
            Let's Work
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-[160] flex flex-col items-end justify-center space-y-1.5 p-2 h-10 w-10 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 transition-all duration-300 transform origin-center ${
            isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-black'
          } group-hover:bg-[#FF3B30]`}></span>
          <span className={`w-4 h-0.5 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0 bg-white' : 'bg-black'
          } group-hover:bg-[#FF3B30]`}></span>
          <span className={`w-6 h-0.5 transition-all duration-300 transform origin-center ${
            isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-black'
          } group-hover:bg-[#FF3B30]`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 min-h-screen w-screen bg-[#0A0A0A] z-[155] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center space-y-8 px-6 text-center">
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => { link.action(); setIsMenuOpen(false); }}
              className={`text-white text-4xl font-black font-display uppercase tracking-tighter hover:text-[#FF3B30] transition-all transform duration-500 delay-[${idx * 50}ms] ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('home', 'contact'); setIsMenuOpen(false); }}
            className={`mt-10 px-10 py-5 border-2 border-[#FF3B30] text-[#FF3B30] font-bold uppercase tracking-widest hover:bg-[#FF3B30] hover:text-white transition-all rounded-full transform duration-700 ${
              isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            Start a Project
          </button>
        </div>
        
        {/* Mobile Contact Info */}
        <div className={`absolute bottom-12 text-center text-white/30 space-y-2 transition-opacity duration-700 delay-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">Dhaka, Bangladesh</p>
          <p className="text-sm font-light">arfanahmedd@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;