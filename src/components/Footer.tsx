import React from 'react';
import { GUMROAD_LINK } from '../data/links';

interface FooterProps {
  onOpenLab: () => void;
  onOpenWholesale: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLab, onOpenWholesale, onOpenContact }) => (
  <footer className="bg-black text-white py-12 md:py-24 px-6 border-t-8 border-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 relative z-10">
      <div className="flex flex-col items-start w-full">
        <div className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none text-left">
          ANGRY <br /> CACTUS&reg;
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-12 font-black uppercase text-lg md:text-xl tracking-tighter w-full md:w-auto mt-8 md:mt-0">
        <div className="flex flex-col gap-4">
          <span className="text-zinc-600 text-xs tracking-widest mb-2">Social</span>
          <a
            href="https://www.youtube.com/@NotCuteColoring"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-sm md:text-xl"
          >
            YouTube
          </a>
          <a
            href="https://www.tiktok.com/@angry.cactus7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors text-sm md:text-xl"
          >
            TikTok
          </a>
          <span className="text-sm md:text-xl uppercase opacity-20">Instagram</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-zinc-600 text-xs tracking-widest mb-2">Company</span>
          <button
            onClick={onOpenLab}
            className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-sm md:text-xl cursor-pointer"
          >
            The Lab
          </button>
          <button
            onClick={onOpenWholesale}
            className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-sm md:text-xl cursor-pointer"
          >
            Wholesale
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-primary text-left bg-transparent border-none p-0 uppercase text-sm md:text-xl cursor-pointer"
          >
            Contact
          </button>
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
);

interface LabModalProps {
  open: boolean;
  onClose: () => void;
}

export const LabModal: React.FC<LabModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
      <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 border-[10px] border-black dark:border-white p-6 md:p-12 relative animate-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black dark:text-white hover:rotate-90 transition-transform cursor-pointer"
          aria-label="Close"
        >
          <span className="material-icons text-4xl">close</span>
        </button>
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 text-black dark:text-white">The Lab</h2>
          <div className="font-black text-primary uppercase tracking-[0.3em] text-sm md:text-lg">
            ALICELABS&reg; GLOBAL ECOSYSTEM
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black dark:text-white">
          {[
            {
              n: '01',
              title: 'Intelligent Commerce',
              body: 'We engineer high-conversion digital architectures through Nextfunnel and Equastore. Our expertise in Shopify Automations allows us to build premium e-commerce systems that handle everything from funnel logic to automated inventory management, scaling global brands with precision.',
            },
            {
              n: '02',
              title: 'AI-Driven Ecosystem',
              body: 'Alicelabs.ai represents our commitment to the future of intelligence. We deploy specialized agents like SellChat for conversational sales and Scantaxes for automated financial processing. Our ecosystem turns complex, manual workflows into streamlined, AI-managed data streams.',
            },
            {
              n: '03',
              title: 'Creative Powerhouse',
              body: 'We are a multi-disciplinary incubator for bold ideas. Through Nextbook, we redefine independent publishing, while Nextcast serves as our hub for cutting-edge podcasting and broadcasting. Angry Cactus is our flagship art brand, pushing the limits of visual counter-culture.',
            },
            {
              n: '04',
              title: 'Tech Infrastructure',
              body: 'The foundation of our lab lies in robust engineering. From CodeAuditor\'s security analysis to FloraNova\'s sustainable agri-tech solutions, we build the tools that empower modern industry. Our specialized Web Scrapers and bespoke App Development ensure no technical challenge goes unmet.',
            },
          ].map((item) => (
            <div key={item.n} className="border-l-4 border-primary pl-6">
              <h3 className="font-black text-2xl mb-4 uppercase">
                {item.n}. {item.title}
              </h3>
              <p className="font-bold text-zinc-500 text-sm normal-case leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t-2 border-dashed border-zinc-300 dark:border-zinc-700 text-center">
          <p className="font-black text-zinc-400 uppercase text-xs tracking-widest leading-loose">
            Managed by ALICELABS&reg; LLC &bull; Sheridan, Wyoming
            <br />
            Exploring the intersection of Art and Algorithms since 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

interface WholesaleModalProps {
  open: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const WholesaleModal: React.FC<WholesaleModalProps> = ({ open, onClose, onApply }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
      <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 border-[10px] border-black dark:border-white p-6 md:p-12 relative animate-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black dark:text-white hover:rotate-90 transition-transform cursor-pointer"
          aria-label="Close"
        >
          <span className="material-icons text-4xl">close</span>
        </button>
        <div className="mb-12">
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 text-black dark:text-white">Wholesale</h2>
          <div className="font-black text-primary uppercase tracking-[0.3em] text-sm">
            Bulk Orders &amp; B2B Partnerships
          </div>
        </div>
        <div className="space-y-8 text-black dark:text-white">
          <div className="p-8 border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-800">
            <h3 className="font-black text-2xl mb-4 uppercase italic">What is Wholesale?</h3>
            <p className="font-bold text-zinc-500 leading-relaxed italic border-l-4 border-primary pl-6">
              Wholesale means volume. If you own a tattoo shop, a bookstore, a conceptual art space, or a retail chain,
              you can stock Angry Cactus and Nextbook products at professional rates. We don&rsquo;t just sell items; we
              provide inventory for those who fuel the counter-culture.
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
          <button
            onClick={onApply}
            className="w-full bg-primary text-white py-6 font-display text-4xl uppercase border-4 border-black brutalist-shadow hover:scale-[1.02] transition-transform cursor-pointer"
          >
            Apply for Wholesale
          </button>

          <div className="pt-8 border-t-2 border-dashed border-zinc-200 dark:border-zinc-800">
            <p className="font-black text-[10px] uppercase tracking-widest text-zinc-400 mb-3 text-center">
              Join the digital hustle
            </p>
            <a
              href={`${GUMROAD_LINK}/affiliates`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 p-4 border-4 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all brutalist-shadow"
            >
              <span className="font-display text-2xl md:text-3xl uppercase tracking-tighter">Affiliate Program</span>
              <span className="font-black text-[10px] md:text-xs uppercase opacity-60 group-hover:opacity-100">
                Market the Art &bull; Earn Commissions &bull; Spread the Chaos
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/95 z-[500] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
      <div className="max-w-2xl w-full bg-white dark:bg-zinc-900 border-[10px] border-black dark:border-white p-6 md:p-12 relative animate-in slide-in-from-bottom duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black dark:text-white hover:rotate-90 transition-transform cursor-pointer"
          aria-label="Close"
        >
          <span className="material-icons text-4xl">close</span>
        </button>
        <div className="mb-10">
          <h2 className="font-display text-5xl md:text-7xl uppercase mb-4 text-black dark:text-white">Contact</h2>
          <div className="font-black text-primary uppercase tracking-[0.1em] text-sm">
            Direct line to the lab. Speak your truth.
          </div>
        </div>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('TRANSMISSION SENT TO THE LAB.');
            onClose();
          }}
        >
          <div>
            <label className="block font-black uppercase text-xs mb-2 text-zinc-500">Identity / Name</label>
            <input
              required
              type="text"
              className="w-full bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-4 font-black focus:border-primary outline-none"
              placeholder="REBEL #123"
            />
          </div>
          <div>
            <label className="block font-black uppercase text-xs mb-2 text-zinc-500">
              Digital Address (Email)
            </label>
            <input
              required
              type="email"
              className="w-full bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-4 font-black focus:border-primary outline-none"
              placeholder="ALIEN@ALICELABS.AI"
            />
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
            <textarea
              required
              rows={4}
              className="w-full bg-zinc-100 dark:bg-zinc-800 border-2 border-black dark:border-white p-4 font-black focus:border-primary outline-none resize-none"
              placeholder="WHAT'S ON YOUR MIND?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black py-6 font-display text-4xl uppercase border-4 border-primary brutalist-shadow hover:bg-primary hover:text-white transition-all cursor-pointer"
          >
            Send Transmission
          </button>
        </form>
      </div>
    </div>
  );
};

export const FloatingButtons: React.FC = () => (
  <>
    <button
      onClick={() => document.documentElement.classList.toggle('dark')}
      className="fixed bottom-24 left-6 md:bottom-10 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center z-[200] hover:rotate-12 transition-transform shadow-xl active:scale-90 cursor-pointer"
      title="Toggle Reality"
      aria-label="Toggle dark mode"
    >
      <span className="material-icons text-2xl md:text-3xl">contrast</span>
    </button>

    <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/10 backdrop-blur-sm z-[400] border-t-2 border-primary/20">
      <button
        onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full bg-primary text-white font-display text-xl py-3 border-4 border-black brutalist-shadow uppercase active:translate-y-1 transition-all cursor-pointer"
      >
        GET FREE PAGES
      </button>
    </div>
  </>
);
