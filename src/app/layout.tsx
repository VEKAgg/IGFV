import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Interstellar Goodfellas - IGFV',
  description: 'Elite: Dangerous squadron - Founded in 2019',
  openGraph: {
    title: 'Interstellar Goodfellas - IGFV',
    description: 'Elite: Dangerous squadron - Founded in 2019',
    url: '/',
    siteName: 'IGFV',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/veka-tabbar-logo.svg" sizes="any" />
      </head>
  <body className={`${inter.className} bg-dark-bg text-white`}>
          <div className="flex flex-col min-h-screen relative">
            {/* Grid Background - visible on all pages */}
            <div className="fixed inset-0 z-0 bg-grid pointer-events-none" />
            
            {/* Content Stack */}
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow bg-transparent">{children}</main>
              <Footer />
              <ScrollToTop />
            </div>
          </div>
      </body>
    </html>
  );
}
