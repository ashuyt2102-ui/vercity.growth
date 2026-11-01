'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIntro from '@/components/TrustIntro';
import BookShowcase from '@/components/BookShowcase';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import CaseStudies from '@/components/CaseStudies';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GlobalBackgroundContainer from '@/components/3d/GlobalBackgroundContainer';
import InteractiveCursor from '@/components/InteractiveCursor';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string>('COMPLETE GROWTH PACKAGE (₹50,000/mo)');

  const handleSelectPlan = (planName: string) => {
    setSelectedPackage(planName);
  };

  return (
    <main className="relative min-h-screen bg-[#040508] text-white selection:bg-cyan-500 selection:text-black">
      {/* Precision Interactive Neon Cursor */}
      <InteractiveCursor />

      {/* Global Optimized 3D Universe Background */}
      <GlobalBackgroundContainer />

      {/* Interactive Foreground Elements */}
      <div className="relative z-10">
        {/* Persistent Sticky Navbar */}
        <Navbar />

        {/* Hero Section with 3D Spotlight */}
        <Hero />

        {/* Trust & Introduction Pillars */}
        <TrustIntro />

        {/* 3D Book Animation & Brand Lookbook Playbook */}
        <BookShowcase />

        {/* Services Section with Photo Shoot (from ₹10,000) */}
        <Services />

        {/* Portfolio Showcase with 3D Tilt Cards & Detail Modal */}
        <Portfolio />

        {/* Strategic Methodology & Focus */}
        <CaseStudies />

        {/* Pricing Section with VERCITY GROWTH Plans & Photo Shoot (From ₹10,000) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 4-Step Operational Timeline */}
        <Process />

        {/* About Us & Agency Leadership (Akash Kaushal & Ayush Shukla) */}
        <About />

        {/* Client Testimonial Carousel */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Fully Functional Contact Form with Direct Channels */}
        <Contact initialSelectedPackage={selectedPackage} />

        {/* Comprehensive Premium Agency Footer */}
        <Footer />
      </div>
    </main>
  );
}
