'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HomepageHighlights from '@/components/HomepageHighlights';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GlobalBackgroundContainer from '@/components/3d/GlobalBackgroundContainer';
import InteractiveCursor from '@/components/InteractiveCursor';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('Starter Plan (Basic)');

  return (
    <main className="relative min-h-screen bg-[#040508] text-white selection:bg-cyan-500 selection:text-black">
      <InteractiveCursor />
      <GlobalBackgroundContainer />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Pricing onSelectPlan={setSelectedPackage} />
        <Contact initialSelectedPackage={selectedPackage} />
        <HomepageHighlights />
        <Footer />
      </div>
    </main>
  );
}
