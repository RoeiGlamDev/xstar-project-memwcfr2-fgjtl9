import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'cosmetics',
  description: 'cosmetics - website | Premium creative and design platform with animations and 3D effects',
  keywords: 'cosmetics, website, creative and design, animations and 3D effects',
  authors: [{ name: 'cosmetics' }],
  openGraph: {
    title: 'cosmetics',
    description: 'cosmetics - website | Premium creative and design platform',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}