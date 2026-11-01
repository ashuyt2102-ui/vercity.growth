import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050608',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'VERCITY GROWTH — We Engineer Digital Growth | Premium 3D Marketing Agency',
  description: 'VERCITY GROWTH is a premier digital marketing agency combining performance ads, brand strategy, 3D digital experiences, and rapid conversion engineering.',
  keywords: [
    'Digital Marketing Agency',
    'Performance Marketing',
    'Meta Ads Management',
    'Google Ads Specialist',
    'Web Development',
    'Creative Studio',
    'VERCITY GROWTH',
    'Social Media Growth',
  ],
  authors: [{ name: 'VERCITY GROWTH Studio' }],
  metadataBase: new URL('https://vercitygrowth.com'),
  alternates: {
    canonical: 'https://vercitygrowth.com',
  },
  openGraph: {
    title: 'VERCITY GROWTH — Premium Digital Marketing & 3D Web Agency',
    description: 'We help ambitious brands scale with performance marketing, high-converting digital storefronts, and bespoke creative strategy.',
    url: 'https://vercitygrowth.com',
    siteName: 'VERCITY GROWTH',
    images: [
      {
        url: '/vercity-logo.jpg',
        width: 150,
        height: 150,
        alt: 'VERCITY GROWTH logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'VERCITY GROWTH — Digital Marketing & Growth Engineering',
    description: 'We engineer digital growth through performance marketing, 3D web experiences, and high-impact creative strategy.',
    images: ['/vercity-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: 'VERCITY GROWTH',
    description: 'We help ambitious brands scale through performance marketing, creative strategy and powerful digital experiences.',
    url: 'https://vercitygrowth.com',
    logo: 'https://vercitygrowth.com/vercity-logo.jpg',
    sameAs: [
      'https://instagram.com',
      'https://linkedin.com',
      'https://x.com',
    ],
    priceRange: '₹9,999 - ₹34,999+',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#050608] text-gray-100 min-h-screen antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
