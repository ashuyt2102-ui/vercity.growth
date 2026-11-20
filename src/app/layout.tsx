import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SpaceBackdrop from "../components/SpaceBackdrop";

export const metadata: Metadata = {
  title: "VERCITY GROWTH — We Engineer Digital Growth",
  description: "Strategy, creative, and performance marketing by Vercity Growth.",
};

const whatsapp = "https://wa.me/918851384747?text=Hi%20Akash%2C%20I%20would%20like%20to%20book%20a%20quick%2010-15%20min%20call%20to%20grow%20my%20brand.";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SpaceBackdrop />
        <nav className="navbar" aria-label="Primary navigation">
          <Link className="brand" href="/"><Image src="/vercity-logo.jpg" alt="" width={28} height={28} /><span><strong>VERCITY</strong><b>GROWTH</b><small>ENGINEERED ROI</small></span></Link>
          <div className="nav-links">
            {[["Home", "/"], ["Services", "/services"], ["Results", "/results"], ["Stories", "/stories"], ["Pricing", "/pricing"], ["About", "/about"], ["Founders", "/founders"], ["Contact", "/contact"]].map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}
          </div>
          <div className="nav-actions"><a className="phone" href="tel:+918851384747">+91 88513 84747</a><Link className="call-button" href="/contact">10–15 MIN CALL <span>↗</span></Link></div>
        </nav>
        <div className="app-content">
        {children}
        <footer className="site-footer">
          <div className="footer-intro">
            <Link className="footer-brand" href="/"><span className="brand-mark">▲</span> VERCITY GROWTH</Link>
            <p>Strategy, creative, and performance marketing for ambitious brands.</p>
          </div>
          <nav className="footer-col" aria-label="Studio links">
            <h2>Studio</h2>
            <Link href="/services">Services</Link><Link href="/results">Results</Link><Link href="/pricing">Pricing</Link>
          </nav>
          <nav className="footer-col" aria-label="Company links">
            <h2>Company</h2>
            <Link href="/about">About</Link><Link href="/founders">Founders</Link><Link href="/stories">Stories</Link>
          </nav>
          <div className="footer-col">
            <h2>Connect</h2>
            <Link href="/contact">Contact</Link><a href="mailto:vercitygrowth@gmail.com">vercitygrowth@gmail.com</a>
            <a href="tel:+918851384747">+91 88513 84747</a><a href={whatsapp}>WhatsApp</a>
            <a href="https://www.instagram.com/vercitygrowth.marketing" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <p className="copyright">© 2026 VERCITY GROWTH. All rights reserved.</p>
        </footer>
        </div>
      </body>
    </html>
  );
}
