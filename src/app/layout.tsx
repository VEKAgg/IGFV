import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Newsletter } from '@/components/Newsletter/Newsletter';
import { ClientProviders } from '@/components/Providers/ClientProviders';
import { Metadata } from 'next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VEKA',
  description: 'A dynamic community platform built for gamers, by gamers',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'VEKA - Gaming Community Platform',
    description: 'A dynamic community platform built for gamers, by gamers',
    url: '/',
    siteName: 'VEKA',
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
        <Script id="handle-darkreader">
          {`
            // Temporarily disable Dark Reader during hydration
            if (typeof window !== 'undefined') {
              const darkreaderElements = document.querySelectorAll('[data-darkreader-inline-stroke], [data-darkreader-inline-bgimage]');
              darkreaderElements.forEach(el => {
                if (el instanceof HTMLElement) {
                  el.removeAttribute('data-darkreader-inline-stroke');
                  el.removeAttribute('data-darkreader-inline-bgimage');
                  el.removeAttribute('style');
                }
              });
            }
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-dark text-gray-100`}>
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Newsletter />
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
