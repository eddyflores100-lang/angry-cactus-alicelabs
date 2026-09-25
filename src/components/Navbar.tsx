import React from 'react';

export const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-[100] border-b-4 border-black dark:border-white bg-white dark:bg-black py-4 px-6 md:px-12 flex justify-between items-center">
      <button
        className="font-display text-3xl tracking-tighter uppercase cursor-pointer hover:text-primary transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ANGRY <span className="text-primary">CACTUS</span>
      </button>
      <div className="flex gap-4 md:gap-8 items-center">
        <button
          onClick={() => scrollTo('gallery')}
          className="hidden sm:block uppercase font-black text-sm tracking-widest hover:text-primary transition-colors"
        >
          Gallery
        </button>
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
