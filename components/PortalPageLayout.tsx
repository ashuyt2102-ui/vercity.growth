import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalBackgroundContainer from '@/components/3d/GlobalBackgroundContainer';
import InteractiveCursor from '@/components/InteractiveCursor';

export default function PortalPageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen bg-[#040508] text-white selection:bg-cyan-500 selection:text-black">
      <InteractiveCursor />
      <GlobalBackgroundContainer />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
