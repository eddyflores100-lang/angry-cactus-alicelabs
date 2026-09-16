
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
const GUMROAD_LINK = "https://alicelabs.gumroad.com/l/pnnfgt";
const HOTMART_LINK = "https://pay.hotmart.com/Q103956873J";

const GALLERY_DATA: GalleryItemData[] = [
  { id: 1, title: "GARDEN REBEL", category: 'PUNK', page: "01", image: "/gallery_garden.png" },
  { id: 2, title: "CINEMA CHAOS", category: 'LETTERING', page: "05", image: "/gallery_theater.jpg" },
  { id: 3, title: "PHONE BOOTH", category: 'SIGNALS', page: "08", image: "/gallery_phone.jpg" },
  { id: 4, title: "ALLEY ATTACK", category: 'PUNK', page: "12", image: "/gallery_alley.jpg" },
  { id: 5, title: "TAXI TURMOIL", category: 'SIGNALS', page: "15", image: "/gallery_taxi.jpg" },
  { id: 6, title: "MOHAWK SPIKE", category: 'PUNK', page: "19", image: "/hero.jpg" },
  { id: 7, title: "TEDDY STOMP", category: 'PUNK', page: "22", image: "/gallery_7.png" },
  { id: 8, title: "BALCONY RAGE", category: 'SIGNALS', page: "25", image: "/gallery_8.jpg" },
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
  const [showMoreGallery, setShowMoreGallery] = useState(false);

  const filteredItems = filter === 'ALL' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-12 md:py-24 px-4 md:px-16 bg-zinc-100 dark:bg-zinc-900 border-b-4 border-black dark:border-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 -right-20 text-[10rem] md:text-[20rem] font-display text-black/5 dark:text-white/5 pointer-events-none select-none uppercase -rotate-12">
        Blocked
      </div>

      <div className="mb-8 md:mb-16 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl lg:text-8xl uppercase mb-4">Gallery</h2>
        <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-8">
          {['ALL', 'PUNK', 'LETTERING', 'SIGNALS'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-4 md:px-8 py-2 md:py-3 font-display text-base md:text-xl lg:text-2xl uppercase border-2 md:border-4 border-black dark:border-white transition-all ${
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
        {(showMoreGallery ? filteredItems : filteredItems.slice(0, 4)).map((item) => (
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

      <div className="md:hidden mt-12 text-center">
         <button 
           onClick={() => setShowMoreGallery(!showMoreGallery)}
           className="px-10 py-4 bg-black text-white dark:bg-white dark:text-black font-display text-2xl uppercase border-4 border-primary brutalist-shadow"
         >
           {showMoreGallery ? 'SHOW LESS' : 'LOAD MORE'}
         </button>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 md:p-12">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-md" onClick={() => setSelected(null)}></div>
          <div className="relative bg-white dark:bg-zinc-900 border-4 md:border-[10px] border-black dark:border-white w-full max-w-4xl max-h-[95vh] overflow-auto flex flex-col brutalist-shadow">
            <button 
              onClick={() => setSelected(null)} 
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white w-10 h-10 md:w-14 md:h-14 font-black border-2 md:border-4 border-black text-2xl md:text-3xl z-[160] hover:scale-110 active:scale-95 transition-transform"
            >
              ×
            </button>
            
            <div className="flex-1 p-4 md:p-12 bg-white flex items-center justify-center overflow-hidden min-h-[200px]">
               <img src={selected.image} alt={selected.title} className="max-w-full max-h-[50vh] md:max-h-full object-contain" />
            </div>

            <div className="p-4 md:p-8 border-t-4 md:border-t-[10px] border-black dark:border-white flex flex-col gap-4 bg-white dark:bg-black">
              <div className="text-center">
                <h4 className="font-display text-3xl md:text-5xl uppercase leading-none mb-2">{selected.title}</h4>
                <p className="font-black text-primary uppercase tracking-widest text-[10px] md:text-sm">{selected.category}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => window.print()}
                  className="bg-black text-white dark:bg-white dark:text-black py-3 md:py-4 font-display text-lg md:text-xl uppercase border-2 md:border-4 border-primary hover:bg-primary hover:text-white transition-colors active:translate-y-1"
                >
                  🖨️ Print
                </button>
                <a 
                  href={selected.image}
                  download={`${selected.title.replace(/\s+/g, '_')}.jpg`}
                  className="bg-primary text-white py-3 md:py-4 font-display text-lg md:text-xl uppercase border-2 md:border-4 border-black hover:bg-black transition-colors active:translate-y-1 text-center block"
                >
                  ⬇️ Download
                </a>
              </div>
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
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isNotForEveryoneOpen, setIsNotForEveryoneOpen] = useState(false);

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
      
      {/* 1. HERO SECTION */}
      <section className="h-[100svh] md:h-auto pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-16 flex flex-col md:flex-row gap-8 md:gap-12 border-b-4 md:border-b-8 border-black dark:border-white justify-center items-center overflow-hidden">
        <div className="flex-1 flex flex-col justify-center text-center md:text-left h-full md:h-auto">
          <div className="bg-primary text-white inline-block px-3 py-1 md:px-4 md:py-2 font-black uppercase text-[10px] md:text-sm mb-4 md:mb-6 tracking-widest self-center md:self-start">
            WARNING: ADULTS ONLY
          </div>
          
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] uppercase mb-6 md:mb-8 text-black dark:text-white">
            NOT CUTE <br /> <span className="text-primary italic">COLORING PAGES</span>
          </h1>
          
          <p className="text-xl md:text-3xl font-black uppercase max-w-xl mb-8 md:mb-12 tracking-tight text-black dark:text-white">
            Punk. Dark. Urban coloring for adults.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-md mx-auto md:mx-0">
            <button 
              onClick={() => document.getElementById('buy')?.scrollIntoView({behavior:'smooth'})}
              className="bg-primary text-white font-display text-3xl md:text-4xl py-4 md:py-5 px-8 md:px-16 border-4 border-black dark:border-white hover:scale-105 active:scale-95 transition-all uppercase brutalist-shadow"
            >
              GET FREE PAGES
            </button>
            <button 
              onClick={() => document.getElementById('buy')?.scrollIntoView({behavior:'smooth'})}
              className="bg-black dark:bg-white text-white dark:text-black font-display text-3xl md:text-4xl py-4 md:py-5 px-8 md:px-16 border-4 border-primary brutalist-shadow hover:scale-105 active:scale-95 transition-all uppercase"
            >
              BUY THE BOOK
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="w-full max-w-xl border-4 md:border-[10px] border-black dark:border-white p-0 bg-black relative group overflow-hidden brutalist-shadow">
            <div className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden relative bg-black">
              <video autoPlay muted loop playsInline preload="auto" poster="/hero.jpg" className="w-full h-full object-cover">
                <source src="/cactus_hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-primary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY THIS EXISTS */}
      <section className="py-20 md:py-40 px-4 md:px-16 bg-black text-white border-b-8 border-white">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <h2 className="font-display text-5xl md:text-[6rem] lg:text-[8rem] uppercase mb-12 leading-none">
              COLORING DOESN’T <br /> HAVE TO BE <span className="text-primary italic">CALM.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div className="space-y-6">
                <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none text-zinc-400">
                  Sometimes it’s about control.<br/>
                  Sometimes it’s about noise.<br/>
                  Sometimes it’s just about filling lines until your head shuts up.
                </p>
              </div>
              <div className="bg-zinc-900 border-4 border-white p-8 md:p-12 brutalist-shadow flex flex-col justify-center">
                <ul className="space-y-6">
                  {["No rules.", "No instructions.", "Just paper and ink."].map((item, i) => (
                    <li key={i} className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-white">
                      <span className="text-primary mr-4">_</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden text-center py-10 min-h-[50vh] flex flex-col justify-center">
            <h2 className="font-display text-4xl uppercase mb-8 leading-none">
              COLORING DOESN’T <br /> HAVE TO BE <span className="text-primary italic text-5xl">CALM.</span>
            </h2>
            <div className="text-xl font-black uppercase text-zinc-400 leading-tight space-y-1">
              <p>Sometimes it’s control.</p>
              <p>Sometimes it’s noise.</p>
              <p>No rules. Just ink.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERMEDIATE CTA (Mobile Only) */}
      <section className="block md:hidden py-16 px-4 bg-primary text-white text-center border-b-4 border-black">
        <h2 className="font-display text-4xl uppercase mb-4">TRY BEFORE YOU STRIKE</h2>
        <p className="font-black text-lg uppercase mb-8 opacity-90">Download free pages. Print. Color. Decide.</p>
        <button 
          onClick={() => document.getElementById('buy')?.scrollIntoView({behavior:'smooth'})}
          className="w-full bg-black text-white py-4 font-display text-2xl uppercase border-4 border-white"
        >
          DOWNLOAD NOW
        </button>
      </section>

      {/* 4. WHAT YOU GET */}
      <section className="py-20 md:py-32 px-4 md:px-16 bg-white dark:bg-zinc-950 text-black dark:text-white border-b-8 border-black dark:border-white">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col lg:flex-row gap-12 md:gap-24 lg:items-start">
            <div className="flex-1">
              <h2 className="font-display text-5xl md:text-[5rem] lg:text-[7rem] uppercase mb-8 leading-none">HIGH-DETAIL <br/> <span className="text-primary italic">B&W ILLUSTRATIONS</span></h2>
              <p className="text-2xl md:text-3xl font-black uppercase mb-8 tracking-tighter text-zinc-500">
                Urban chaos. Punk energy. Dark humor.<br/>
                Designed to be printed and destroyed with ink.
              </p>
              <div className="space-y-4 pt-8 border-t-8 border-primary">
                <p className="font-black text-xl uppercase tracking-widest text-zinc-400">Each page is made to:</p>
                <ul className="space-y-4">
                  {['Slow your head', 'Occupy your hands', 'Empty your mind'].map((text, i) => (
                    <li key={i} className="font-display text-4xl md:text-6xl uppercase tracking-tighter">{text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1">
               <img src="/gallery_alley.jpg" alt="Artwork Preview" className="w-full border-8 border-black dark:border-white brutalist-shadow" />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <h2 className="font-display text-5xl uppercase mb-8 leading-[0.9]">WHAT’S <br/><span className="text-primary italic">INSIDE</span></h2>
            <ul className="space-y-6 mb-12">
              {[
                'High-detail black & white pages',
                'Urban chaos & punk energy',
                'Made to be printed and destroyed'
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start border-l-4 border-primary pl-4">
                  <span className="font-black text-lg uppercase tracking-tight">{text}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})}
              className="w-full py-5 border-4 border-black dark:border-white font-display text-3xl uppercase bg-zinc-100 dark:bg-zinc-900"
            >
              SEE GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* RED TICKER BANNER */}
      <div className="bg-primary border-y-4 border-black dark:border-white overflow-hidden py-3 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-display text-2xl md:text-3xl text-white uppercase px-4 flex items-center">
              DANGER <span className="mx-4 text-black opacity-30">•</span> 
              BLOCKED <span className="mx-4 text-black opacity-30">•</span> 
              PUNK <span className="mx-4 text-black opacity-30">•</span> 
              FREE SAMPLES AVAILABLE <span className="mx-4 text-black opacity-30">•</span> 
              STAY SHARP <span className="mx-4 text-black opacity-30">•</span> 
            </span>
          ))}
        </div>
      </div>

      {/* 4. GALLERY */}
      <Gallery />

      {/* 5. TRY BEFORE YOU STRIKE */}
      <section className="py-20 md:py-40 px-4 md:px-16 bg-zinc-100 dark:bg-zinc-900 border-b-8 border-black dark:border-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-display text-7xl md:text-[11rem] uppercase mb-8 leading-none">TRY BEFORE <br/> <span className="text-primary italic">YOU STRIKE</span></h2>
          <div className="mb-12">
            <p className="font-black text-3xl md:text-5xl uppercase tracking-tighter text-black dark:text-white mb-4">Not sure? Good.</p>
            <p className="font-black text-xl md:text-3xl uppercase text-zinc-500 max-w-2xl mx-auto">
              Download a free sample pack.<br/>
              Print it. Color it.<br/>
              <span className="text-primary">If it hits — you’ll know.</span>
            </p>
          </div>
          <a 
            href="/cactus_free_samples.zip" 
            download
            className="inline-block bg-primary text-white font-display text-3xl md:text-6xl py-8 px-12 md:px-24 border-8 border-black hover:scale-105 active:scale-95 transition-all uppercase brutalist-shadow"
          >
            DOWNLOAD FREE PAGES
          </a>
          <p className="mt-8 font-black uppercase text-sm tracking-[0.3em] text-zinc-400">
            No email tricks. No payment. No bullshit.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full text-[35rem] font-display text-black/5 dark:text-white/5 pointer-events-none select-none flex items-center justify-center">
          FREE
        </div>
      </section>

      {/* 6. CHOOSE YOUR WEAPON */}
      <section id="buy" className="py-20 md:py-40 px-4 md:px-16 text-center bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grid grid-cols-12 gap-1 font-display uppercase text-9xl">
          {[...Array(24)].map((_, i) => <div key={i} className="opacity-10">ANGRY</div>)}
        </div>

        <h2 className="font-display text-5xl md:text-8xl lg:text-[11rem] uppercase mb-12 md:mb-24 leading-none relative z-10">
          CHOOSE YOUR <br /> <span className="text-primary italic">WEAPON</span>
        </h2>
        
        <div className="max-w-7xl mx-auto md:grid grid-cols-3 gap-8 md:gap-8 relative z-10 px-4 pb-20 border-b-8 border-black/10 dark:border-white/10 hidden">
          {/* Physical Card (Desktop) */}
          <div className="border-8 md:border-[12px] border-black dark:border-white p-4 bg-white dark:bg-black brutalist-shadow group hover:-translate-y-2 transition-transform h-full">
            <div className="p-8 md:p-10 border-4 border-dashed border-zinc-400 flex flex-col items-center h-full text-center">
              <span className="material-icons text-6xl text-primary mb-6">menu_book</span>
              <p className="font-black uppercase text-2xl md:text-3xl mb-2 tracking-tighter">PHYSICAL BOOK</p>
              <p className="font-bold text-zinc-500 text-lg mb-8 normal-case leading-relaxed">Premium print. Heavy ink. Real damage.</p>
              <a 
                href="https://www.amazon.com/dp/B0GJ3YCKGV" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto py-6 font-display text-2xl md:text-3xl uppercase border-4 border-black bg-primary text-white hover:bg-black transition-colors"
              >
                BUY ON AMAZON
              </a>
            </div>
          </div>

          {/* Hotmart Card (Desktop) */}
          <div className="border-8 md:border-[12px] border-black dark:border-white p-4 bg-white dark:bg-black brutalist-shadow group hover:-translate-y-2 transition-transform h-full">
            <div className="p-8 md:p-10 border-4 border-dashed border-zinc-400 flex flex-col items-center h-full text-center">
              <span className="material-icons text-6xl text-primary mb-6">payments</span>
              <p className="font-black uppercase text-2xl md:text-3xl mb-2 tracking-tighter">DIGITAL (PAYPAL)</p>
              <p className="font-bold text-zinc-500 text-lg mb-8 normal-case leading-relaxed">Instant access. Secured by Hotmart.</p>
              <a 
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto py-6 font-display text-2xl md:text-3xl uppercase border-4 border-black bg-primary text-white hover:bg-black transition-colors"
              >
                BUY ON HOTMART
              </a>
            </div>
          </div>

          {/* Digital Card (Desktop) */}
          <div className="border-8 md:border-[12px] border-black dark:border-white p-4 bg-white dark:bg-black brutalist-shadow group hover:-translate-y-2 transition-transform h-full">
            <div className="p-8 md:p-10 border-4 border-dashed border-zinc-400 flex flex-col items-center h-full text-center">
              <span className="material-icons text-6xl text-primary mb-6">download</span>
              <p className="font-black uppercase text-2xl md:text-3xl mb-2 tracking-tighter">DIGITAL (STRIPE)</p>
              <p className="font-bold text-zinc-500 text-lg mb-8 normal-case leading-relaxed">Direct download. Print anywhere.</p>
              <a 
                href={GUMROAD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto py-6 font-display text-2xl md:text-3xl uppercase border-4 border-black bg-primary text-white hover:bg-black transition-colors"
              >
                BUY ON GUMROAD
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Version */}
        <div className="md:hidden flex flex-col gap-8 pb-12 px-4 relative z-10">
          <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_#ff1e1e]">
            <div className="p-8 border-2 border-dashed border-zinc-700 flex flex-col items-center text-center">
              <span className="material-icons text-6xl text-primary mb-4">menu_book</span>
              <p className="font-black uppercase text-3xl mb-2">PHYSICAL BOOK</p>
              <p className="font-bold text-zinc-500 text-sm mb-8">Premium print edition.</p>
              <a href="https://www.amazon.com/dp/B0GJ3YCKGV" target="_blank" className="w-full py-4 bg-primary text-white font-display text-2xl uppercase border-4 border-black">BUY ON AMAZON</a>
            </div>
          </div>
          <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_#ff1e1e]">
            <div className="p-8 border-2 border-dashed border-zinc-700 flex flex-col items-center text-center">
              <span className="material-icons text-6xl text-primary mb-4">payments</span>
              <p className="font-black uppercase text-3xl mb-2">HOTMART (DIGITAL)</p>
              <p className="font-bold text-zinc-500 text-sm mb-8">Pay with PayPal or Card.</p>
              <a href={HOTMART_LINK} target="_blank" className="w-full py-4 bg-primary text-white font-display text-2xl uppercase border-4 border-black">BUY HOTMART</a>
            </div>
          </div>
          <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_#ff1e1e]">
            <div className="p-8 border-2 border-dashed border-zinc-700 flex flex-col items-center text-center">
              <span className="material-icons text-6xl text-primary mb-4">download</span>
              <p className="font-black uppercase text-3xl mb-2">GUMROAD (DIGITAL)</p>
              <p className="font-bold text-zinc-500 text-sm mb-8">Instant download.</p>
              <a href={GUMROAD_LINK} target="_blank" className="w-full py-4 bg-primary text-white font-display text-2xl uppercase border-4 border-black">BUY GUMROAD</a>
            </div>
          </div>
        </div>

        {/* 7. THIS IS NOT FOR EVERYONE (Collapsible for Mobile) */}
        <div className="mt-20 md:mt-32 max-w-4xl mx-auto text-left">
          <button 
            onClick={() => setIsNotForEveryoneOpen(!isNotForEveryoneOpen)}
            className="w-full flex justify-between items-center text-left md:pointer-events-none"
          >
            <h2 className="font-display text-4xl md:text-7xl uppercase border-l-8 border-primary pl-8">
              THIS IS NOT<br className="md:hidden"/> FOR EVERYONE. <br className="hidden md:block"/> 
              <span className="text-primary italic">THIS IS NOT FOR KIDS.</span>
            </h2>
            <span className="material-icons md:hidden transform transition-transform duration-300" style={{ transform: isNotForEveryoneOpen ? 'rotate(180deg)' : 'rotate(0)' }}>expand_more</span>
          </button>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden transition-all duration-500 ${isNotForEveryoneOpen || window.innerWidth > 768 ? 'max-h-[2000px] mt-8 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mt-8'}`}>
            <div>
              <p className="text-xl md:text-2xl font-black uppercase mb-6 leading-tight">
                Angry Cactus is not a relaxing coloring book.<br/>
                There are no mandalas. No butterflies. No cute animals.
              </p>
              <p className="font-bold text-zinc-500 text-lg italic mb-6">
                If you want peace — look elsewhere. <br/>
                If you want ink, lines, and rage — welcome.
              </p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-8 border-4 border-black dark:border-white">
              <p className="font-black uppercase text-xs tracking-widest text-zinc-500 mb-6 italic">This is for adults who:</p>
              <ul className="space-y-4">
                {['No kids', 'No cute', 'No mandalas', 'No butterflies'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg md:text-xl font-black uppercase tracking-tight">
                    <span className="text-primary text-2xl font-display">!</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 8. FINAL CTA */}
        <div className="mt-20 py-16 md:py-24 bg-black text-white px-4 border-8 md:border-[12px] border-primary brutalist-shadow relative overflow-hidden flex items-center justify-center">
          <div className="relative z-10 text-center w-full">
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 leading-none text-white">READY TO <span className="text-primary italic">STRIKE?</span></h2>
            <p className="font-black text-lg md:text-2xl uppercase mb-8 md:mb-12 text-zinc-400 max-w-2xl mx-auto">
              Start with the free pages or grab the full book.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <button 
                onClick={() => document.getElementById('buy')?.scrollIntoView({behavior:'smooth'})}
                className="bg-primary text-white font-display text-2xl md:text-4xl py-4 md:py-6 px-8 md:px-12 border-4 border-white hover:scale-105 active:scale-95 transition-all uppercase"
              >
                GET FREE PAGES
              </button>
              <button 
                onClick={() => document.getElementById('buy')?.scrollIntoView({behavior:'smooth'})}
                className="bg-zinc-900 text-white font-display text-2xl md:text-4xl py-4 md:py-6 px-8 md:px-12 border-4 border-white hover:scale-105 active:scale-95 transition-all uppercase"
              >
                BUY THE BOOK
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary rotate-45 transform translate-x-16 -translate-y-16 md:translate-x-32 md:-translate-y-32"></div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 md:py-24 px-6 border-t-8 border-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 relative z-10">
          <div className="flex flex-col items-start w-full">
            <div className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none text-left">
              ANGRY <br /> CACTUS®
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-12 font-black uppercase text-lg md:text-xl tracking-tighter w-full md:w-auto mt-8 md:mt-0">
            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 text-xs tracking-widest mb-2">Social</span>
              <a href="https://www.youtube.com/@NotCuteColoring" target="_blank" rel="noopener" className="hover:text-primary transition-colors text-sm md:text-xl">YouTube</a>
              <a href="https://www.tiktok.com/@angry.cactus7" target="_blank" rel="noopener" className="hover:text-primary transition-colors text-sm md:text-xl">TikTok</a>
              <span className="text-sm md:text-xl uppercase opacity-20">Instagram</span>
              <button className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-[10px] text-zinc-500 mt-2">Terms</button>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 text-xs tracking-widest mb-2">Company</span>
              <button onClick={() => setIsLabOpen(true)} className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-sm md:text-xl">The Lab</button>
              <button onClick={() => setIsWholesaleOpen(true)} className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-sm md:text-xl">Wholesale</button>
              <button onClick={() => setIsContactOpen(true)} className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-sm md:text-xl">Contact</button>
              <button className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-[10px] text-zinc-500 mt-2">Privacy</button>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-24 max-w-7xl mx-auto">
          <div className="border-t-4 border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-black text-zinc-500 uppercase tracking-[0.5em] text-[10px] text-left w-full">
              © 2026 ALICELABS LLC. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>

      {/* The Lab Modal */}
      {isLabOpen && (
        <div className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 border-[10px] border-black dark:border-white p-6 md:p-12 relative animate-in zoom-in duration-300">
            <button 
              onClick={() => setIsLabOpen(false)}
              className="absolute top-4 right-4 text-black dark:text-white hover:rotate-90 transition-transform"
            >
              <span className="material-icons text-4xl">close</span>
            </button>
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 text-black dark:text-white">The Lab</h2>
              <div className="font-black text-primary uppercase tracking-[0.3em] text-sm md:text-lg">
                ALICELABS® GLOBAL ECOSYSTEM
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black dark:text-white">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-black text-2xl mb-4 uppercase">01. Intelligent Commerce</h3>
                <p className="font-bold text-zinc-500 text-sm normal-case leading-relaxed">
                  We engineer high-conversion digital architectures through <strong>Nextfunnel</strong> and <strong>Equastore</strong>. 
                  Our expertise in <strong>Shopify Automations</strong> allows us to build premium e-commerce systems that handle 
                  everything from funnel logic to automated inventory management, scaling global brands with precision.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-black text-2xl mb-4 uppercase">02. AI-Driven Ecosystem</h3>
                <p className="font-bold text-zinc-500 text-sm normal-case leading-relaxed">
                  <strong>Alicelabs.ai</strong> represents our commitment to the future of intelligence. We deploy specialized 
                  agents like <strong>SellChat</strong> for conversational sales and <strong>Scantaxes</strong> for automated financial processing. 
                  Our ecosystem turns complex, manual workflows into streamlined, AI-managed data streams.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-black text-2xl mb-4 uppercase">03. Creative Powerhouse</h3>
                <p className="font-bold text-zinc-500 text-sm normal-case leading-relaxed">
                  We are a multi-disciplinary incubator for bold ideas. Through <strong>Nextbook</strong>, we redefine independent 
                  publishing, while <strong>Nextcast</strong> serves as our hub for cutting-edge podcasting and broadcasting. 
                  <strong>Angry Cactus</strong> is our flagship art brand, pushing the limits of visual counter-culture.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-black text-2xl mb-4 uppercase">04. Tech Infrastructure</h3>
                <p className="font-bold text-zinc-500 text-sm normal-case leading-relaxed">
                  The foundation of our lab lies in robust engineering. From <strong>CodeAuditor</strong>’s security analysis 
                  to <strong>FloraNova</strong>’s sustainable agri-tech solutions, we build the tools that empower modern industry. 
                  Our specialized <strong>Web Scrapers</strong> and bespoke <strong>App Development</strong> ensure no technical challenge goes unmet.
                </p>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 text-center">
              <p className="font-black text-zinc-400 uppercase text-xs tracking-widest leading-loose">
                Managed by ALICELABS® LLC • Sheridan, Wyoming<br/>
                Exploring the intersection of Art and Algorithms since 2024.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Wholesale Modal */}
      {isWholesaleOpen && (
        <div className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 border-[10px] border-black dark:border-white p-6 md:p-12 relative animate-in zoom-in duration-300">
            <button onClick={() => setIsWholesaleOpen(false)} className="absolute top-4 right-4 text-black dark:text-white hover:rotate-90 transition-transform"><span className="material-icons text-4xl">close</span></button>
            <div className="mb-12">
              <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 text-black dark:text-white">Wholesale</h2>
              <div className="font-black text-primary uppercase tracking-[0.3em] text-sm">Bulk Orders & B2B Partnerships</div>
            </div>
            <div className="space-y-8 text-black dark:text-white">
              <div className="p-8 border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800">
                <h3 className="font-black text-2xl mb-4 uppercase italic">What is Wholesale?</h3>
                <p className="font-bold text-zinc-500 leading-relaxed italic border-l-4 border-primary pl-6">
                  Wholesale means volume. If you own a tattoo shop, a bookstore, a conceptual art space, or a retail chain, 
                  you can stock Angry Cactus and Nextbook products at professional rates. 
                  We don't just sell items; we provide inventory for those who fuel the counter-culture.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-black uppercase tracking-tight">
                <div className="border-2 border-black dark:border-white p-4">
                  <span className="text-primary block text-4xl mb-2">30%</span>
                  <span>Maximum Discount</span>
                </div>
                <div className="border-2 border-black dark:border-white p-4">
                  <span className="text-primary block text-4xl mb-2">24h</span>
                  <span>Global Dispatch</span>
                </div>
              </div>
              <button onClick={() => { setIsWholesaleOpen(false); setIsContactOpen(true); }} className="w-full bg-primary text-white py-6 font-display text-4xl uppercase border-4 border-black brutalist-shadow hover:scale-[1.02] transition-transform">
                Apply for Wholesale
              </button>
              
              <div className="pt-8 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800">
                <p className="font-black text-[10px] uppercase tracking-widest text-zinc-400 mb-3 text-center">Join the digital hustle</p>
                <a 
                  href={`${GUMROAD_LINK}/affiliates`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-1 p-4 border-4 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all brutalist-shadow"
                >
                  <span className="font-display text-2xl md:text-3xl uppercase tracking-tighter">Affiliate Program</span>
                  <span className="font-black text-[10px] md:text-xs uppercase opacity-60 group-hover:opacity-100">Market the Art • Earn Commissions • Spread the Chaos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal (Form) */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          <div className="max-w-2xl w-full bg-white dark:bg-zinc-900 border-[10px] border-black dark:border-white p-6 md:p-12 relative animate-in slide-in-from-bottom duration-300">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-black dark:text-white hover:rotate-90 transition-transform"><span className="material-icons text-4xl">close</span></button>
            <div className="mb-10">
              <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 text-black dark:text-white">Contact</h2>
              <div className="font-black text-primary uppercase tracking-[0.1em] text-sm">Direct line to the lab. Speak your truth.</div>
            </div>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('TRANSMISSION SENT TO THE LAB.'); setIsContactOpen(false); }}>
              <div>
                <label className="block font-black uppercase text-xs mb-2 text-zinc-500">Identity / Name</label>
                <input required type="text" className="w-full bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-4 font-black focus:border-primary outline-none" placeholder="REBEL #123" />
              </div>
              <div>
                <label className="block font-black uppercase text-xs mb-2 text-zinc-500">Digital Address (Email)</label>
                <input required type="email" className="w-full bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-4 font-black focus:border-primary outline-none" placeholder="ALIEN@ALICELABS.AI" />
              </div>
              <div>
                <label className="block font-black uppercase text-xs mb-2 text-zinc-500">Transmission Type</label>
                <select className="w-full bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-4 font-black focus:border-primary outline-none appearance-none">
                  <option>General Inquiry</option>
                  <option>Wholesale Application</option>
                  <option>Tech Collaboration</option>
                  <option>Bug Report / Glitch</option>
                </select>
              </div>
              <div>
                <label className="block font-black uppercase text-xs mb-2 text-zinc-500">Message / Manifest</label>
                <textarea required rows={4} className="w-full bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-4 font-black focus:border-primary outline-none resize-none" placeholder="WHAT'S ON YOUR MIND?"></textarea>
              </div>
              <button type="submit" className="w-full bg-black dark:bg-white text-white dark:text-black py-6 font-display text-4xl uppercase border-4 border-primary brutalist-shadow hover:bg-primary hover:text-white transition-all">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Theme Toggle Button */}
      <button 
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-24 left-6 md:bottom-10 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center z-[200] hover:rotate-12 transition-transform shadow-xl active:scale-90"
        title="Toggle Reality"
      >
        <span className="material-icons text-2xl md:text-3xl">contrast</span>
      </button>

      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/10 backdrop-blur-sm z-[400] border-t-2 border-primary/20">
        <button 
          onClick={() => document.getElementById('buy')?.scrollIntoView({behavior:'smooth'})}
          className="w-full bg-primary text-white font-display text-xl py-3 border-4 border-black brutalist-shadow uppercase active:translate-y-1 transition-all"
        >
          GET FREE PAGES
        </button>
      </div>
    </div>
  );
}
