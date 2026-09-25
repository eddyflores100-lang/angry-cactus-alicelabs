import React, { useState } from 'react';
import './styles.css';

// Firebase Analytics initialization (auto-loads in browser).
import './src/lib/firebase';

import { Navbar } from './src/components/Navbar';
import { Hero, WhyThisExists, MobileCTA, WhatYouGet, MarqueeBanner, TryBeforeYouStrike, FinalCTA } from './src/components/sections';
import { Gallery } from './src/components/Gallery';
import { ChooseYourWeapon, NotForEveryone } from './src/components/ChooseYourWeapon';
import { Footer, LabModal, WholesaleModal, ContactModal, FloatingButtons } from './src/components/Footer';

export default function App() {
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-primary selection:text-white">
      <Navbar />

      <Hero />
      <WhyThisExists />
      <MobileCTA />
      <WhatYouGet />
      <MarqueeBanner />

      <Gallery />

      <TryBeforeYouStrike />

      <ChooseYourWeapon />

      <NotForEveryone />

      <FinalCTA />

      <Footer
        onOpenLab={() => setIsLabOpen(true)}
        onOpenWholesale={() => setIsWholesaleOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <LabModal open={isLabOpen} onClose={() => setIsLabOpen(false)} />
      <WholesaleModal
        open={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
        onApply={() => {
          setIsWholesaleOpen(false);
          setIsContactOpen(true);
        }}
      />
      <ContactModal open={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <FloatingButtons />
    </div>
  );
}
