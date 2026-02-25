import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import AiVisionary from './components/AiVisionary';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Dynamic import for ProjectsPage to save initial memory
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'projects'>('home');

  const navigateTo = (newView: 'home' | 'projects', sectionId?: string) => {
    setView(newView);
    
    if (sectionId) {
      // Direct scroll if already on home, otherwise slight wait for mount
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        requestAnimationFrame(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar onNavigate={navigateTo} currentView={view} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            
            {/* Optimized Recognition Strip */}
            <div className="py-10 bg-white border-y border-black/5 overflow-hidden">
              <div className="flex space-x-12 animate-marquee whitespace-nowrap gpu">
                {[1, 2].map(i => (
                  <div key={i} className="flex items-center space-x-12 opacity-30">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Trusted by Clients Worldwide</span>
                    <span className="text-[#FF3B30]">●</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">500+ Projects Delivered</span>
                    <span className="text-[#FF3B30]">●</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Performance Optimized</span>
                    <span className="text-[#FF3B30]">●</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Design Contest Winner</span>
                    <span className="text-[#FF3B30]">●</span>
                  </div>
                ))}
              </div>
            </div>

            <Experience />
            <Services />
            <About />
            <AiVisionary />
            <Gallery />
            <FAQ />
            <Contact />
          </>
        ) : (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-black">LOADING ARCHIVE...</div>}>
            <ProjectsPage />
          </Suspense>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;