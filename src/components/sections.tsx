import React from 'react';

const scrollToBuy = () =>
  document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });

export const Hero: React.FC = () => (
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
          onClick={scrollToBuy}
          className="bg-primary text-white font-display text-3xl md:text-4xl py-4 md:py-5 px-8 md:px-16 border-4 border-black dark:border-white hover:scale-105 active:scale-95 transition-all uppercase brutalist-shadow"
        >
          GET FREE PAGES
        </button>
        <button
          onClick={scrollToBuy}
          className="bg-black dark:bg-white text-white dark:text-black font-display text-3xl md:text-4xl py-4 md:py-5 px-8 md:px-16 border-4 border-primary brutalist-shadow hover:scale-105 active:scale-95 transition-all uppercase"
        >
          BUY THE BOOK
        </button>
      </div>
    </div>

    <div className="hidden md:flex flex-1 justify-center items-center">
      <div className="w-full max-w-xl border-4 md:border-[10px] border-black dark:border-white p-0 bg-black relative group overflow-hidden brutalist-shadow">
        <div className="w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden relative bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/cactus_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  </section>
);

export const WhyThisExists: React.FC = () => (
  <section className="py-20 md:py-40 px-4 md:px-16 bg-black text-white border-b-8 border-white">
    <div className="max-w-7xl mx-auto">
      {/* Desktop */}
      <div className="hidden md:block">
        <h2 className="font-display text-5xl md:text-[6rem] lg:text-[8rem] uppercase mb-12 leading-none">
          COLORING DOESN&rsquo;T <br /> HAVE TO BE <span className="text-primary italic">CALM.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6">
            <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none text-zinc-400">
              Sometimes it&rsquo;s about control.<br />
              Sometimes it&rsquo;s about noise.<br />
              Sometimes it&rsquo;s just about filling lines until your head shuts up.
            </p>
          </div>
          <div className="bg-zinc-900 border-4 border-white p-8 md:p-12 brutalist-shadow flex flex-col justify-center">
            <ul className="space-y-6">
              {['No rules.', 'No instructions.', 'Just paper and ink.'].map((item, i) => (
                <li key={i} className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-white">
                  <span className="text-primary mr-4">_</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden text-center py-10 min-h-[50vh] flex flex-col justify-center">
        <h2 className="font-display text-4xl uppercase mb-8 leading-none">
          COLORING DOESN&rsquo;T <br /> HAVE TO BE <span className="text-primary italic text-5xl">CALM.</span>
        </h2>
        <div className="text-xl font-black uppercase text-zinc-400 leading-tight space-y-1">
          <p>Sometimes it&rsquo;s control.</p>
          <p>Sometimes it&rsquo;s noise.</p>
          <p>No rules. Just ink.</p>
        </div>
      </div>
    </div>
  </section>
);

export const MobileCTA: React.FC = () => (
  <section className="block md:hidden py-16 px-4 bg-primary text-white text-center border-b-4 border-black">
    <h2 className="font-display text-4xl uppercase mb-4">TRY BEFORE YOU STRIKE</h2>
    <p className="font-black text-lg uppercase mb-8 opacity-90">Download free pages. Print. Color. Decide.</p>
    <button
      onClick={scrollToBuy}
      className="w-full bg-black text-white py-4 font-display text-2xl uppercase border-4 border-white"
    >
      DOWNLOAD NOW
    </button>
  </section>
);

export const WhatYouGet: React.FC = () => (
  <section className="py-20 md:py-32 px-4 md:px-16 bg-white dark:bg-zinc-950 text-black dark:text-white border-b-8 border-black dark:border-white">
    <div className="max-w-7xl mx-auto">
      {/* Desktop */}
      <div className="hidden md:flex flex-col lg:flex-row gap-12 md:gap-24 lg:items-start">
        <div className="flex-1">
          <h2 className="font-display text-5xl md:text-[5rem] lg:text-[7rem] uppercase mb-8 leading-none">
            HIGH-DETAIL <br /> <span className="text-primary italic">B&amp;W ILLUSTRATIONS</span>
          </h2>
          <p className="text-2xl md:text-3xl font-black uppercase mb-8 tracking-tighter text-zinc-500">
            Urban chaos. Punk energy. Dark humor.<br />
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
          <img
            src="/gallery_alley.jpg"
            alt="Artwork preview - alley attack"
            loading="lazy"
            className="w-full border-8 border-black dark:border-white brutalist-shadow"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <h2 className="font-display text-5xl uppercase mb-8 leading-[0.9]">
          WHAT&rsquo;S <br />
          <span className="text-primary italic">INSIDE</span>
        </h2>
        <ul className="space-y-6 mb-12">
          {[
            'High-detail black & white pages',
            'Urban chaos & punk energy',
            'Made to be printed and destroyed',
          ].map((text, i) => (
            <li key={i} className="flex gap-4 items-start border-l-4 border-primary pl-4">
              <span className="font-black text-lg uppercase tracking-tight">{text}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-5 border-4 border-black dark:border-white font-display text-3xl uppercase bg-zinc-100 dark:bg-zinc-900"
        >
          SEE GALLERY
        </button>
      </div>
    </div>
  </section>
);

export const MarqueeBanner: React.FC = () => (
  <div className="bg-primary border-y-4 border-black dark:border-white overflow-hidden py-3 relative z-20">
    <div className="animate-marquee whitespace-nowrap flex items-center transform-gpu">
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
);

export const TryBeforeYouStrike: React.FC = () => (
  <section className="py-20 md:py-40 px-4 md:px-16 bg-zinc-100 dark:bg-zinc-900 border-b-8 border-black dark:border-white text-center relative overflow-hidden">
    <div className="max-w-5xl mx-auto relative z-10">
      <h2 className="font-display text-7xl md:text-[11rem] uppercase mb-8 leading-none">
        TRY BEFORE <br /> <span className="text-primary italic">YOU STRIKE</span>
      </h2>
      <div className="mb-12">
        <p className="font-black text-3xl md:text-5xl uppercase tracking-tighter text-black dark:text-white mb-4">
          Not sure? Good.
        </p>
        <p className="font-black text-xl md:text-3xl uppercase text-zinc-500 max-w-2xl mx-auto">
          Download a free sample pack.<br />
          Print it. Color it.<br />
          <span className="text-primary">If it hits &mdash; you&rsquo;ll know.</span>
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
);

export const FinalCTA: React.FC = () => (
  <div className="mt-20 py-16 md:py-24 bg-black text-white px-4 border-8 md:border-[12px] border-primary brutalist-shadow relative overflow-hidden flex items-center justify-center">
    <div className="relative z-10 text-center w-full">
      <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 leading-none text-white">
        READY TO <span className="text-primary italic">STRIKE?</span>
      </h2>
      <p className="font-black text-lg md:text-2xl uppercase mb-8 md:mb-12 text-zinc-400 max-w-2xl mx-auto">
        Start with the free pages or grab the full book.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
        <button
          onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary text-white font-display text-2xl md:text-4xl py-4 md:py-6 px-8 md:px-12 border-4 border-white hover:scale-105 active:scale-95 transition-all uppercase"
        >
          GET FREE PAGES
        </button>
        <button
          onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-zinc-900 text-white font-display text-2xl md:text-4xl py-4 md:py-6 px-8 md:px-12 border-4 border-white hover:scale-105 active:scale-95 transition-all uppercase"
        >
          BUY THE BOOK
        </button>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary rotate-45 transform translate-x-16 -translate-y-16 md:translate-x-32 md:-translate-y-32" />
  </div>
);
