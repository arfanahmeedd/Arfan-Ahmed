import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const AiVisionary: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBrainstorm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword) return;

    setIsLoading(true);
    setError('');
    try {
      const data = await geminiService.brainstormProject(keyword);
      setResult(data);
    } catch (err) {
      setError('The visionary engine is resting. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="visionary" className="py-24 bg-white border-y border-black/5 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-[#FF3B30] font-black text-sm uppercase tracking-[0.2em]">Lab Exploration</span>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#0A0A0A]">
              THE VISIONARY ENGINE.
            </h2>
            <p className="text-lg text-[#0A0A0A]/60 leading-relaxed font-light max-w-lg">
              Unlock a unique project concept powered by Arfan Projects' creative intelligence. Enter a keyword to generate a high-end design brief.
            </p>
          </div>

          <form onSubmit={handleBrainstorm} className="relative max-w-md">
            <input 
              type="text" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g., Space, Zen, Neon, Bio..."
              className="w-full px-8 py-5 bg-[#F5F5F5] rounded-full border-2 border-transparent focus:border-[#FF3B30] outline-none transition-all font-medium text-lg"
            />
            <button 
              disabled={isLoading}
              className="absolute right-2 top-2 bottom-2 px-8 bg-[#0A0A0A] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF3B30] transition-all disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Generate'}
            </button>
          </form>
          {error && <p className="text-[#FF3B30] text-sm font-bold uppercase">{error}</p>}
        </div>

        <div className="relative min-h-[400px]">
          {result ? (
            <div className="bg-[#0A0A0A] text-white p-10 rounded-3xl shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-black font-display tracking-tight text-[#FF3B30]">{result.title}</h3>
                <div className="flex space-x-2">
                  {result.suggestedColorPalette.map((color: string) => (
                    <div key={color} className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              </div>
              <p className="text-white/70 leading-relaxed italic">"{result.description}"</p>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Core Concepts</p>
                <div className="flex flex-wrap gap-2">
                  {result.concepts.map((concept: string) => (
                    <span key={concept} className="px-3 py-1 bg-white/10 rounded text-xs font-medium">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full py-4 mt-4 border border-[#FF3B30] text-[#FF3B30] font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#FF3B30] hover:text-white transition-all">
                Let's Build This Vision
              </button>
            </div>
          ) : (
            <div className="absolute inset-0 border-2 border-dashed border-black/10 rounded-3xl flex items-center justify-center group">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🔮</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] font-black text-black/20">Awaiting Concept</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiVisionary;