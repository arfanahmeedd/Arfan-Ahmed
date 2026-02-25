import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-black font-display tracking-tighter">
            ARFAN PROJECTS<span className="text-[#FF3B30] ml-0.5">.</span>
          </a>
          <p className="text-xs text-[#0A0A0A]/40 mt-2 uppercase tracking-widest font-bold">
            Architecting the future of design.
          </p>
        </div>

        <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-[#0A0A0A]/50">
          <a href="#" className="hover:text-[#FF3B30] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#FF3B30] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#FF3B30] transition-colors">Cookies</a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'Li', url: 'https://www.linkedin.com/in/arfanahmeed/' },
            { label: 'Ig', url: 'https://www.instagram.com/arfan.ahmedd' },
            { label: 'Fb', url: 'https://www.facebook.com/arfan.ahmedddd/' },
            { label: 'Be', url: 'https://www.behance.net/arfanahmedd' },
            { label: 'Ds', url: 'https://discord.com/adolfsparrow' }
          ].map(social => (
            <a 
              key={social.label} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A]/40 hover:text-[#FF3B30] transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="text-xs font-medium text-[#0A0A0A]/30 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Arfan Projects. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;