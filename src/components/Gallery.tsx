import React, { useState } from 'react';
import { GALLERY_DATA, GALLERY_FILTERS, type GalleryFilter, type GalleryItem } from '../data/gallery';
import { ImageWithFallback } from './ImageWithFallback';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<GalleryFilter>('ALL');
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [showMoreGallery, setShowMoreGallery] = useState(false);

  const filteredItems =
    filter === 'ALL' ? GALLERY_DATA : GALLERY_DATA.filter((item) => item.category === filter);

  return (
    <section
      id="gallery"
      className="py-12 md:py-24 px-4 md:px-16 bg-zinc-100 dark:bg-zinc-900 border-b-4 border-black dark:border-white relative overflow-hidden"
    >
      <div className="absolute top-10 -right-20 text-[10rem] md:text-[20rem] font-display text-black/5 dark:text-white/5 pointer-events-none select-none uppercase -rotate-12">
        Blocked
      </div>

      <div className="mb-8 md:mb-16 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl lg:text-8xl uppercase mb-4">Gallery</h2>
        <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-8">
          {GALLERY_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
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
                <span className="text-primary font-black text-[10px] tracking-widest uppercase">
                  {item.category}
                </span>
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

      {selected && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 md:p-12">
          <div
            className="absolute inset-0 bg-black/98 backdrop-blur-md"
            onClick={() => setSelected(null)}
          />
          <div className="relative bg-white dark:bg-zinc-900 border-4 md:border-[10px] border-black dark:border-white w-full max-w-4xl max-h-[95vh] overflow-auto flex flex-col brutalist-shadow">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary text-white w-10 h-10 md:w-14 md:h-14 font-black border-2 md:border-4 border-black text-2xl md:text-3xl z-[160] hover:scale-110 active:scale-95 transition-transform"
              aria-label="Close"
            >
              ×
            </button>

            <div className="flex-1 p-4 md:p-12 bg-white flex items-center justify-center overflow-hidden min-h-[200px]">
              <img
                src={selected.image}
                alt={selected.title}
                className="max-w-full max-h-[50vh] md:max-h-full object-contain"
              />
            </div>

            <div className="p-4 md:p-8 border-t-4 md:border-t-[10px] border-black dark:border-white flex flex-col gap-4 bg-white dark:bg-black">
              <div className="text-center">
                <h4 className="font-display text-3xl md:text-5xl uppercase leading-none mb-2">
                  {selected.title}
                </h4>
                <p className="font-black text-primary uppercase tracking-widest text-[10px] md:text-sm">
                  {selected.category}
                </p>
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
