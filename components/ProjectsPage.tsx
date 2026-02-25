import React, { useState, memo, useEffect, useRef } from 'react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  isFlexible?: boolean;
}

interface Section {
  id: string;
  title: string;
  desc: string;
  items: ProjectItem[];
}

const ProjectSections: Section[] = [
  { 
    id: 'logo-design', 
    title: 'Logo Design', 
    desc: 'The architectural core of brand identity.',
    items: [
      { id: 'logo-user-5', title: 'Achromatic Essence', category: 'Core Branding', imageUrl: 'https://i.pinimg.com/736x/e3/ae/d2/e3aed2c656b27a0c26fba11b994ecdf0.jpg' },
      { id: 'logo-user-3', title: 'Geometric Monolith', category: 'Structural Identity', imageUrl: 'https://i.pinimg.com/736x/8e/e3/b2/8ee3b2b06f96efa5c468f05fbb301355.jpg' },
      { id: 'logo-user-2', title: 'Minimalist Form', category: 'Visual Language', imageUrl: 'https://i.pinimg.com/736x/e6/6b/55/e66b55609d22a9a9add9843371ff29c9.jpg' },
      { id: 'logo-user-1', title: 'Signature Mark', category: 'Premium Identity', imageUrl: 'https://i.pinimg.com/736x/8e/1c/a4/8e1ca41deb3f12147365eaad518a65a5.jpg' },
    ]
  },
  { 
    id: 'social-media', 
    title: 'Social Media Posters', 
    desc: 'Strategic high-fidelity content engines.',
    items: [
      { id: 'sm-user-1', title: 'Arfan Social Narrative', category: 'Creative Direction', imageUrl: 'https://i.pinimg.com/736x/c0/9d/d4/c09dd41eb991ef6648bc1dde3a85457e.jpg' },
      { id: 'sm-user-2', title: 'Premium Editorial Series', category: 'Visual Storytelling', imageUrl: 'https://i.pinimg.com/1200x/f0/bd/39/f0bd391ae27e867215edb69036a4d7e1.jpg' },
      { id: 'sm-user-3', title: 'Social Media Poster I', category: 'Social Media', imageUrl: 'https://i.pinimg.com/474x/69/1b/9a/691b9a504f9736cb9ef554c39706f53e.jpg' },
      { id: 'sm-user-4', title: 'Social Media Poster II', category: 'Social Media', imageUrl: 'https://i.pinimg.com/1200x/5a/45/29/5a452943d6fe1aa041972ede4c9bb75b.jpg' },
      { id: 'sm-user-5', title: 'Social Media Poster III', category: 'Social Media', imageUrl: 'https://i.pinimg.com/736x/d9/fb/11/d9fb11556c43055db1eaf0a101169c7c.jpg' },
      { id: 'sm-user-6', title: 'Social Media Poster IV', category: 'Social Media', imageUrl: 'https://i.pinimg.com/736x/a8/d8/36/a8d836f5d090fdf83e2b2c3bdcf0e3cd.jpg' },
      { id: 'sm-user-7', title: 'Social Media Poster V', category: 'Social Media', imageUrl: 'https://media.discordapp.net/attachments/1345426296360144988/1423778443727736943/USM.jpg?ex=699d6a41&is=699c18c1&hm=3b6c09516b5ecda779327890fe8f14964a2ed06526c8b2089cd278635a2fcb64&=&format=webp&width=1220&height=452' },
    ]
  },
  {
    id: 'fashion-graphics',
    title: 'Fashion Graphic Designs',
    desc: 'Lifestyle-driven graphical narratives for apparel.',
    items: [
      { id: 'fash-user-1', title: 'Avant-Garde Concept', category: 'Apparel Design', imageUrl: 'https://i.pinimg.com/736x/54/de/ad/54dead469a99b29977a314681eed8418.jpg' },
      { id: 'fash-user-2', title: 'Urban Narrative', category: 'Graphic Tee', imageUrl: 'https://i.pinimg.com/736x/37/64/28/3764287ae04d08ce42bf9f87e8cb293b.jpg' },
      { id: 'fash-user-3', title: 'Streetwear Fusion', category: 'Apparel Graphics', imageUrl: 'https://i.pinimg.com/1200x/cf/7d/c0/cf7dc0212c29e6e0e5c72f866d0db29b.jpg' },
      { id: 'fash-user-4', title: 'Neo-Editorial Concept', category: 'Fashion Graphics', imageUrl: 'https://i.pinimg.com/736x/64/7e/6b/647e6b3079a2faf880a62dc7ba9341d9.jpg' },
    ]
  },
  {
    id: 'architectural-cad',
    title: 'Architectural CAD Designs',
    desc: 'Precision drafting and structural visualization for modern spaces.',
    items: [
      { 
        id: 'cad-user-1', 
        title: 'Modern Structural Blueprint', 
        category: 'Technical Drafting', 
        imageUrl: 'https://i.pinimg.com/1200x/6a/06/e0/6a06e07df0a62f515e4f0011b0ad658f.jpg',
        isFlexible: true
      },
    ]
  }
];

const ProjectCard = memo(({ item, onClick }: { item: ProjectItem; onClick: (url: string) => void }) => (
  <div 
    className={`group cursor-pointer space-y-3 md:space-y-4 ${item.isFlexible ? 'md:col-span-2' : ''}`}
    onClick={() => onClick(item.imageUrl)}
  >
    <div className={`gpu relative ${item.isFlexible ? 'aspect-[4/5] md:aspect-[21/9]' : 'aspect-square'} rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm transition-transform duration-500 hover:shadow-xl hover:-translate-y-1`}>
      <img 
        src={item.imageUrl} 
        alt={item.title}
        className={`w-full h-full ${item.isFlexible ? 'object-contain p-4 md:p-12' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/placeholder/800/800';
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
        <span className="p-3 md:p-4 bg-white/90 rounded-full opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all shadow-lg">
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </span>
      </div>
    </div>
    <div className="px-1">
      <h4 className="text-base md:text-lg font-bold tracking-tight">{item.title}</h4>
      <p className="text-[9px] md:text-xs text-black/40 uppercase tracking-[0.2em]">{item.category}</p>
    </div>
  </div>
));

const ProjectsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(ProjectSections[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 768;
      // Precision offset to land perfectly under the sticky header
      const offset = isMobile ? 130 : 160; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  // Improved Center-active-tab logic
  useEffect(() => {
    const activeBtn = tabsRef.current[activeTab];
    const container = scrollContainerRef.current;
    if (activeBtn && container) {
      const containerWidth = container.offsetWidth;
      const btnWidth = activeBtn.offsetWidth;
      const btnLeft = activeBtn.offsetLeft;
      
      const scrollPos = btnLeft - (containerWidth / 2) + (btnWidth / 2);
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      // Offset matches the visual landing zone
      const scrollPos = window.scrollY + 200;
      for (const section of ProjectSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const slide = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth / 2 : container.offsetWidth / 2;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen pt-28 md:pt-40 pb-16 md:pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <header className="mb-12 md:mb-20 space-y-4 md:space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-3 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-black/5 rounded-full shadow-sm">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#FF3B30]"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/></svg>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Curated Project Archive</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-tight md:leading-none">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] to-[#9F1239]">ARCHIVE.</span>
          </h1>
        </header>

        {/* Premium Slider Navigation - Lowered Z-index to z-80 to ensure main nav at z-150 is always on top */}
        <div className="sticky top-[60px] md:top-[72px] lg:top-[88px] z-80 -mx-6 md:-mx-12 bg-[#F5F5F5]/95 backdrop-blur-2xl border-y border-black/5 mb-12 md:mb-20">
          <div className="relative flex items-center">
            
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => slide('left')}
              className="hidden lg:flex absolute left-4 z-30 w-10 h-10 items-center justify-center bg-white rounded-full shadow-md border border-black/5 hover:bg-[#FF3B30] hover:text-white transition-all transform hover:scale-110 active:scale-95"
              aria-label="Slide Left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            {/* Visual Hints for Mobile Swipe */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none"></div>
            
            <div 
              ref={scrollContainerRef}
              className="flex items-center space-x-6 md:space-x-12 overflow-x-auto no-scrollbar py-6 md:py-10 px-8 md:px-24 snap-x snap-mandatory scroll-smooth w-full"
            >
              {ProjectSections.map((section) => (
                <button
                  key={section.id}
                  ref={el => tabsRef.current[section.id] = el}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative flex-shrink-0 whitespace-nowrap text-[10px] md:text-xs font-black uppercase tracking-[0.25em] transition-all duration-500 py-2 snap-center group/btn ${
                    activeTab === section.id ? 'text-[#FF3B30] scale-105' : 'text-black/30 hover:text-black hover:scale-105'
                  }`}
                >
                  {section.title}
                  <div className={`absolute -bottom-2 left-0 right-0 h-[3px] rounded-full transition-all duration-700 ${
                    activeTab === section.id 
                      ? 'bg-[#FF3B30] scale-x-100' 
                      : 'bg-black/10 scale-x-0 group-hover/btn:scale-x-50 opacity-0 group-hover/btn:opacity-100'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Visual Hints for Mobile Swipe */}
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none"></div>

            <button 
              onClick={() => slide('right')}
              className="hidden lg:flex absolute right-4 z-30 w-10 h-10 items-center justify-center bg-white rounded-full shadow-md border border-black/5 hover:bg-[#FF3B30] hover:text-white transition-all transform hover:scale-110 active:scale-95"
              aria-label="Slide Right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
          
          {/* Subtle Mobile Scroll Progress Indicator */}
          <div className="md:hidden h-[2px] w-full bg-black/5">
             <div 
              className="h-full bg-[#FF3B30]/20 transition-all duration-300" 
              style={{ width: `${((ProjectSections.findIndex(s => s.id === activeTab) + 1) / ProjectSections.length) * 100}%` }}
             ></div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {ProjectSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32 md:scroll-mt-48">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                <div className="lg:col-span-4 space-y-3 md:space-y-4">
                  <div className="w-10 md:w-12 h-1 bg-[#FF3B30]"></div>
                  <h2 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight leading-tight">{section.title}</h2>
                  <p className="text-[10px] md:text-sm text-black/50 font-medium leading-relaxed uppercase tracking-widest">{section.desc}</p>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {section.items.map((item) => (
                      <ProjectCard key={item.id} item={item} onClick={setSelectedImage} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white p-2 md:p-4 z-[210]">
            <svg className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl gpu"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;