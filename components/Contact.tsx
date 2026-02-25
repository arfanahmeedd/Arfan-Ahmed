import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] text-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <span className="text-[#FF3B30] font-black text-sm uppercase tracking-[0.2em]">Contact Us</span>
            <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight leading-none">
              READY TO <br /> ARCHITECT <br /> THE FUTURE?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest font-black text-[#FF3B30]">Send an Inquiry</p>
              <a href="mailto:arfanahmedd@gmail.com" className="text-2xl md:text-3xl font-light hover:text-[#FF3B30] transition-colors">arfanahmedd@gmail.com</a>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest font-black text-[#FF3B30]">Location</p>
              <p className="text-2xl md:text-3xl font-light">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            {[
              { label: 'Li', url: 'https://www.linkedin.com/in/arfanahmeed/' },
              { label: 'Ig', url: 'https://www.instagram.com/arfan.ahmedd' },
              { label: 'Fb', url: 'https://www.facebook.com/arfan.ahmedddd/' },
              { label: 'Be', url: 'https://www.behance.net/arfanahmedd' },
              { label: 'Ds', url: 'https://discord.com/adolfsparrow' },
              { label: 'Wa', url: '#' }
            ].map(social => (
              <a 
                key={social.label} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#FF3B30] hover:border-[#FF3B30] transition-all font-bold text-xs"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black opacity-50">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#FF3B30] transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black opacity-50">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#FF3B30] transition-colors" placeholder="john@example.com" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black opacity-50">Project Type</label>
              <select className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#FF3B30] transition-colors appearance-none">
                <option className="bg-[#0A0A0A]">Branding & Identity</option>
                <option className="bg-[#0A0A0A]">Product Design</option>
                <option className="bg-[#0A0A0A]">Research Work</option>
                <option className="bg-[#0A0A0A]">Creative Direction</option>
                <option className="bg-[#0A0A0A]">Other Inquiry</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black opacity-50">Your Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#FF3B30] transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
            </div>
            <div className="md:col-span-2 pt-8">
              <button className="px-12 py-5 bg-[#FF3B30] text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full flex items-center group shadow-xl shadow-[#FF3B30]/20">
                Send Proposal
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;