
import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0A0A0A] text-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Massive Typography */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#FF3B30] font-black text-sm uppercase tracking-[0.3em] block"
              >
                The Narrative
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black font-display tracking-tighter leading-[0.85]"
              >
                TECHNICAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/100">ARTISTRY.</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full max-w-sm rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/621763383_2391297967983045_8808452172227405457_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_ohc=-8ev5JGJNsYQ7kNvwENjMoB&_nc_oc=AdkpFyziD3yQ3taynZfTxKOG_XU3L3eIVUiN4gckQPI_ZfeeP1ayRukUTxChRH3rTiE&_nc_zt=23&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=nLqeCRHP9ncIq7Dbh6Jq_g&oh=00_Afv9FMqJOWf2kTkvzWv1uUjZO1Qxmk1sGzJohNyOnSdgBQ&oe=69A494C3" 
                alt="Arfan Ahmed - Technical Artistry" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Creative Lead</p>
                <p className="text-sm font-medium">Arfan Ahmed</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Refined Text */}
          <div className="lg:col-span-7 space-y-12 pt-4 lg:pt-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90">
                Arfan is a <span className="text-[#FF3B30] font-bold italic">visionary hybrid</span> bridging the gap between industrial engineering and high-fidelity brand design.
              </p>
              
              <div className="h-px w-24 bg-[#FF3B30]"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-white/60 text-base md:text-lg leading-relaxed font-light">
                <div className="space-y-6">
                  <p>
                    As a Textile Engineering graduate, he brings a rigorous, data-driven approach to every creative challenge. His background in industrial sustainability ensures that every design is not just beautiful, but purposeful.
                  </p>
                  <p>
                    His experience at MSMAEE in wastewater management and environmental compliance has instilled a deep respect for systems, efficiency, and the impact of industrial processes on our world.
                  </p>
                </div>
                <div className="space-y-6">
                  <p>
                    In the creative realm, Arfan is a professional fashion graphic designer crafting identities that define modern streetwear. He transforms complex brand stories into iconic visual languages.
                  </p>
                  <p>
                    He is currently focused on collaborating with forward-thinking partners to build a smarter, more sustainable, and visually compelling textile industry in Bangladesh and beyond.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats/Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
            >
              <div>
                <p className="text-2xl md:text-3xl font-black font-display text-[#FF3B30]">Textile</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Engineering</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black font-display text-[#FF3B30]">Brand</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Designing</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-2xl md:text-3xl font-black font-display text-[#FF3B30]">Sustainability</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Industrial Focus</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8"
            >
              <a 
                href="https://drive.google.com/file/d/18AyiC85l6xAkl0X3vp9tZYVKBT--G_bL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 text-xs font-black uppercase tracking-[0.3em] text-white hover:text-[#FF3B30] transition-colors"
              >
                <span>View Full Credentials</span>
                <div className="w-12 h-px bg-white/20 group-hover:bg-[#FF3B30] group-hover:w-16 transition-all duration-500"></div>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
