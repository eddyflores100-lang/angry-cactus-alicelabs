import React, { useState } from 'react';
import { GUMROAD_LINK, HOTMART_LINK, AMAZON_LINK } from '../data/links';

interface BuyCardProps {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

const BuyCard: React.FC<BuyCardProps> = ({ icon, title, description, cta, href }) => (
  <div className="border-8 md:border-[12px] border-black dark:border-white p-4 bg-white dark:bg-black brutalist-shadow group hover:-translate-y-2 transition-transform h-full">
    <div className="p-8 md:p-10 border-4 border-dashed border-zinc-400 flex flex-col items-center h-full text-center">
      <span className="material-icons text-6xl text-primary mb-6">{icon}</span>
      <p className="font-black uppercase text-2xl md:text-3xl mb-2 tracking-tighter">{title}</p>
      <p className="font-bold text-zinc-500 text-lg mb-8 normal-case leading-relaxed">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-auto py-6 font-display text-2xl md:text-3xl uppercase border-4 border-black bg-primary text-white hover:bg-black transition-colors"
      >
        {cta}
      </a>
    </div>
  </div>
);

const MobileBuyCard: React.FC<BuyCardProps> = ({ icon, title, description, cta, href }) => (
  <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_#ff1e1e]">
    <div className="p-8 border-2 border-dashed border-zinc-700 flex flex-col items-center text-center">
      <span className="material-icons text-6xl text-primary mb-4">{icon}</span>
      <p className="font-black uppercase text-3xl mb-2">{title}</p>
      <p className="font-bold text-zinc-500 text-sm mb-8">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 bg-primary text-white font-display text-2xl uppercase border-4 border-black"
      >
        {cta}
      </a>
    </div>
  </div>
);

export const ChooseYourWeapon: React.FC = () => (
  <section
    id="buy"
    className="py-20 md:py-40 px-4 md:px-16 text-center bg-white dark:bg-zinc-950 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grid grid-cols-12 gap-1 font-display uppercase text-9xl">
      {[...Array(24)].map((_, i) => (
        <div key={i} className="opacity-10">
          ANGRY
        </div>
      ))}
    </div>

    <h2 className="font-display text-5xl md:text-8xl lg:text-[11rem] uppercase mb-12 md:mb-24 leading-none relative z-10">
      CHOOSE YOUR <br /> <span className="text-primary italic">WEAPON</span>
    </h2>

    {/* Desktop */}
    <div className="max-w-7xl mx-auto md:grid grid-cols-3 gap-8 md:gap-8 relative z-10 px-4 pb-20 border-b-8 border-black/10 dark:border-white/10 hidden">
      <BuyCard
        icon="menu_book"
        title="PHYSICAL BOOK"
        description="Premium print. Heavy ink. Real damage."
        cta="BUY ON AMAZON"
        href={AMAZON_LINK}
      />
      <BuyCard
        icon="payments"
        title="DIGITAL (PAYPAL)"
        description="Instant access. Secured by Hotmart."
        cta="BUY ON HOTMART"
        href={HOTMART_LINK}
      />
      <BuyCard
        icon="download"
        title="DIGITAL (STRIPE)"
        description="Direct download. Print anywhere."
        cta="BUY ON GUMROAD"
        href={GUMROAD_LINK}
      />
    </div>

    {/* Mobile */}
    <div className="md:hidden flex flex-col gap-8 pb-12 px-4 relative z-10">
      <MobileBuyCard
        icon="menu_book"
        title="PHYSICAL BOOK"
        description="Premium print edition."
        cta="BUY ON AMAZON"
        href={AMAZON_LINK}
      />
      <MobileBuyCard
        icon="payments"
        title="HOTMART (DIGITAL)"
        description="Pay with PayPal or Card."
        cta="BUY HOTMART"
        href={HOTMART_LINK}
      />
      <MobileBuyCard
        icon="download"
        title="GUMROAD (DIGITAL)"
        description="Instant download."
        cta="BUY GUMROAD"
        href={GUMROAD_LINK}
      />
    </div>
  </section>
);

export const NotForEveryone: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const showContent = !isMobile || isOpen;

  return (
    <div className="mt-20 md:mt-32 max-w-4xl mx-auto text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left md:pointer-events-none"
      >
        <h2 className="font-display text-4xl md:text-7xl uppercase border-l-8 border-primary pl-8">
          THIS IS NOT
          <br className="md:hidden" /> FOR EVERYONE. <br className="hidden md:block" />
          <span className="text-primary italic">THIS IS NOT FOR KIDS.</span>
        </h2>
        <span
          className="material-icons md:hidden transform transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          expand_more
        </span>
      </button>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden transition-all duration-500 ${
          showContent ? 'max-h-[2000px] mt-8 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mt-8'
        }`}
      >
        <div>
          <p className="text-xl md:text-2xl font-black uppercase mb-6 leading-tight">
            Angry Cactus is not a relaxing coloring book.
            <br />
            There are no mandalas. No butterflies. No cute animals.
          </p>
          <p className="font-bold text-zinc-500 text-lg italic mb-6">
            If you want peace &mdash; look elsewhere. <br />
            If you want ink, lines, and rage &mdash; welcome.
          </p>
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-8 border-4 border-black dark:border-white">
          <p className="font-black uppercase text-xs tracking-widest text-zinc-500 mb-6 italic">
            This is for adults who:
          </p>
          <ul className="space-y-4">
            {['No kids', 'No cute', 'No mandalas', 'No butterflies'].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-lg md:text-xl font-black uppercase tracking-tight"
              >
                <span className="text-primary text-2xl font-display">!</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
