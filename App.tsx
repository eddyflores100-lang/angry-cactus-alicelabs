
import React, { useState, useEffect } from 'react';

// --- Types ---
interface GalleryItemData {
  id: number;
  title: string;
  category: 'PUNK' | 'LETTERING' | 'SIGNALS';
  page: string;
  image: string;
}

// --- Data ---
const GALLERY_DATA: GalleryItemData[] = [
  { id: 1, title: "CACTUS PUNK #01", category: 'PUNK', page: "01", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
  { id: 2, title: "BLOCKED ACCESS", category: 'SIGNALS', page: "05", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
  { id: 3, title: "RIOT ALPHABET", category: 'LETTERING', page: "08", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
  { id: 4, title: "ANARCHY TYPE", category: 'LETTERING', page: "12", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
  { id: 5, title: "DANGER ZONE", category: 'SIGNALS', page: "15", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
  { id: 6, title: "MOHAWK SPIKE", category: 'PUNK', page: "19", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
  { id: 7, title: "STENCIL CHAOS", category: 'LETTERING', page: "22", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
  { id: 8, title: "STOP SIGNAL", category: 'SIGNALS', page: "25", image: "https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" },
];

// --- Components ---

const ImageWithFallback: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  return (
    <div className={`relative bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border-2 border-black dark:border-white ${className}`}>
      {error ? (
        <div className="flex flex-col items-center justify-center text-center p-4">
          <span className="material-icons text-6xl mb-2 opacity-20">warning_amber</span>
          <p className="font-display text-2xl uppercase opacity-40">SIGNAL LOST</p>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-contain ${className}`}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-[100] border-b-4 border-black dark:border-white bg-white dark:bg-black py-4 px-6 md:px-12 flex justify-between items-center">
      <div 
        className="font-display text-3xl tracking-tighter uppercase cursor-pointer hover:text-primary transition-colors" 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        ANGRY <span className="text-primary">CACTUS</span>
      </div>
      <div className="flex gap-4 md:gap-8 items-center">
        <button onClick={() => scrollTo('gallery')} className="hidden sm:block uppercase font-black text-sm tracking-widest hover:text-primary transition-colors">Gallery</button>
        <button 
          onClick={() => scrollTo('buy')} 
          className="bg-primary text-white px-6 py-2 font-display text-xl uppercase tracking-wider hover:scale-105 transition-transform border-4 border-black active:bg-black active:translate-y-1 active:shadow-none brutalist-shadow"
        >
          Buy Now
        </button>
      </div>
    </nav>
  );
};

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'PUNK' | 'LETTERING' | 'SIGNALS'>('ALL');
  const [selected, setSelected] = useState<GalleryItemData | null>(null);

  const filteredItems = filter === 'ALL' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-4 md:px-16 bg-zinc-100 dark:bg-zinc-900 border-b-4 border-black dark:border-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 -right-20 text-[20rem] font-display text-black/5 dark:text-white/5 pointer-events-none select-none uppercase -rotate-12">
        Blocked
      </div>

      <div className="mb-16 relative z-10">
        <h2 className="font-display text-6xl md:text-8xl uppercase mb-4">Gallery</h2>
        <div className="flex flex-wrap gap-4 mt-8">
          {['ALL', 'PUNK', 'LETTERING', 'SIGNALS'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-3 font-display text-xl md:text-2xl uppercase border-4 border-black dark:border-white transition-all ${
                filter === cat 
                  ? 'bg-primary text-white translate-x-1 translate-y-1 shadow-none' 
                  : 'bg-white dark:bg-black hover:-translate-y-1 brutalist-shadow active:translate-y-0 active:shadow-none'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelected(item)}
            className="group cursor-pointer bg-white dark:bg-zinc-800 border-4 border-black dark:border-white p-4 hover:-rotate-1 hover:scale-[1.02] transition-all brutalist-shadow active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            <ImageWithFallback 
              src={item.image} 
              alt={item.title} 
              className="w-full aspect-[3/4] mb-4 bg-white"
            />
            <div className="flex justify-between items-center border-t-2 border-black dark:border-white pt-4">
              <div>
                <h3 className="font-display text-2xl uppercase leading-none">{item.title}</h3>
                <span className="text-primary font-black text-[10px] tracking-widest uppercase">{item.category}</span>
              </div>
              <span className="font-black text-zinc-400 font-sans">P.{item.page}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-md" onClick={() => setSelected(null)}></div>
          <div className="relative bg-white dark:bg-zinc-900 border-[10px] border-black dark:border-white w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col brutalist-shadow">
            <button 
              onClick={() => setSelected(null)} 
              className="absolute top-4 right-4 bg-primary text-white w-14 h-14 font-black border-4 border-black text-3xl z-[160] hover:scale-110 active:scale-95 transition-transform"
            >
              ×
            </button>
            
            <div className="flex-1 p-4 md:p-12 bg-white flex items-center justify-center overflow-hidden">
               <img src={selected.image} alt={selected.title} className="max-w-full max-h-full object-contain" />
            </div>

            <div className="p-8 border-t-[10px] border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-6 bg-white dark:bg-black">
              <div className="text-center md:text-left">
                <h4 className="font-display text-5xl md:text-6xl uppercase leading-none mb-2">{selected.title}</h4>
                <p className="font-black text-primary uppercase tracking-[0.2em] text-sm">High-Voltage Design Category: {selected.category}</p>
              </div>
              <button 
                onClick={() => {
                  window.print();
                  setSelected(null);
                }}
                className="bg-black text-white dark:bg-white dark:text-black px-12 py-4 font-display text-2xl uppercase border-4 border-primary hover:bg-primary hover:text-white transition-colors brutalist-shadow active:shadow-none active:translate-y-1"
              >
                Print Sample
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default function App() {
  const [buying, setBuying] = useState(false);
  const [done, setDone] = useState(false);

  const handleBuy = () => {
    setBuying(true);
    // Simulated checkout logic
    setTimeout(() => {
      setBuying(false);
      setDone(true);
      setTimeout(() => setDone(false), 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-16 flex flex-col md:flex-row gap-12 border-b-8 border-black dark:border-white">
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-primary text-white inline-block px-4 py-2 font-black uppercase text-sm mb-6 tracking-widest self-start">
            WARNING: ADULTS ONLY
          </div>
          <h1 className="font-display text-8xl md:text-[12rem] leading-[0.8] uppercase mb-8">
            ANGRY <br /> <span className="text-primary italic">CACTUS</span>
          </h1>
          <p className="text-3xl font-black uppercase max-w-xl mb-12 leading-tight tracking-tight">
            Blocked signals, punk lettering, and aggressive cactus designs. <br />
            <span className="text-zinc-500 italic">Color it like you mean it.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => document.getElementById('buy')?.scrollIntoView({behavior:'smooth'})}
              className="bg-black dark:bg-white text-white dark:text-black font-display text-4xl py-6 px-16 border-4 border-primary brutalist-shadow hover:scale-105 active:scale-95 transition-all uppercase"
            >
              Get The Book
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})}
              className="bg-white dark:bg-black text-black dark:text-white font-display text-4xl py-6 px-16 border-4 border-black dark:border-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all uppercase"
            >
              Browse Art
            </button>
          </div>
        </div>
        <div className="flex-1 border-[10px] border-black dark:border-white p-4 bg-white relative group">
          <ImageWithFallback 
            src="https://r2.erweima.ai/ai_image/956f4d2f831940989f660d5b63484f70_1024x1024.jpg" 
            alt="Main Punk Cactus Character" 
            className="w-full aspect-square grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 font-display text-3xl uppercase -rotate-6 border-4 border-black">
            40+ Pages
          </div>
        </div>
      </section>

      {/* Decorative Ticker */}
      <div className="bg-primary text-white py-6 overflow-hidden border-b-8 border-black dark:border-white flex whitespace-nowrap select-none">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="font-display text-4xl uppercase mx-12 shrink-0 tracking-[0.2em]">
            DANGER - BLOCKED - PUNK - NO REGRETS - STAY SHARP -
          </span>
        ))}
      </div>

      <Gallery />

      {/* Purchase Section */}
      <section id="buy" className="py-40 px-4 md:px-16 text-center border-b-8 border-black dark:border-white bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grid grid-cols-12 gap-1 font-display uppercase text-9xl">
          {[...Array(24)].map((_, i) => <div key={i} className="opacity-10">ANGRY</div>)}
        </div>

        <h2 className="font-display text-8xl md:text-[11rem] uppercase mb-16 leading-none relative z-10">
          READY TO <br /> <span className="text-primary italic">STRIKE?</span>
        </h2>
        
        <div className="max-w-3xl mx-auto border-[12px] border-black dark:border-white p-4 bg-white dark:bg-black brutalist-shadow relative z-10">
          <div className="p-12 border-4 border-dashed border-zinc-400 dark:border-zinc-600 flex flex-col items-center">
            <p className="font-black uppercase text-3xl mb-12 tracking-tighter">Limited Edition Physical Book: 120gsm Paper</p>
            <div className="flex flex-col w-full gap-4">
               <button 
                onClick={handleBuy}
                disabled={buying}
                className={`w-full py-10 font-display text-6xl uppercase border-8 border-black dark:border-white transition-all ${
                  done ? 'bg-green-500 text-white' : 'bg-primary text-white hover:scale-105 active:translate-y-2'
                } disabled:opacity-50 brutalist-shadow active:shadow-none`}
              >
                {buying ? 'Processing...' : done ? 'Secured!' : 'Buy On Amazon'}
              </button>
              <p className="font-black text-zinc-500 uppercase tracking-widest text-sm mt-4">
                Global Shipping • 30-Day Returns • Pure Chaos
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-24 px-6 border-t-8 border-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
          <div className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none text-center md:text-left">
            ANGRY <br /> CACTUS
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 font-black uppercase text-xl tracking-tighter">
            <button className="hover:text-primary text-left">The Lab</button>
            <button className="hover:text-primary text-left">Press Kit</button>
            <button className="hover:text-primary text-left">Wholesale</button>
            <button className="hover:text-primary text-left">Contact</button>
            <button className="hover:text-primary text-left">Instagram</button>
            <button className="hover:text-primary text-left">TikTok</button>
          </div>
        </div>
        <div className="mt-20 text-center border-t border-zinc-800 pt-10 font-black text-zinc-600 uppercase tracking-[1em] text-xs">
          © 2024 ANGRY CACTUS BRAND — ALL RIGHTS DESTROYED
        </div>
      </footer>

      {/* Theme Toggle Button */}
      <button 
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-10 left-10 w-20 h-20 bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center z-[200] hover:rotate-12 transition-transform shadow-xl active:scale-90"
        title="Toggle Reality"
      >
        <span className="material-icons text-4xl">contrast</span>
      </button>
    </div>
  );
}
