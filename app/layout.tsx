import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://luxorahardware.com'),
  title: 'Luxora Hardware - Premium Architectural Hardware & Interior Fittings',
  description: 'Elevate your interiors with luxury architectural hardware, handles, knobs, and premium fittings. Experience craftsmanship and elegance with Luxora Hardware.',
  keywords: 'luxury hardware, architectural hardware, door handles, cabinet knobs, interior fittings, premium hardware',
  openGraph: {
    title: 'Luxora Hardware - Premium Architectural Hardware',
    description: 'Elevate your interiors with luxury architectural hardware and premium fittings',
    images: [
      {
        url: 'https://images.pexels.com/photos/6585611/pexels-photo-6585611.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxora Hardware - Premium Architectural Hardware',
    description: 'Elevate your interiors with luxury architectural hardware',
    images: [
      {
        url: 'https://images.pexels.com/photos/6585611/pexels-photo-6585611.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
