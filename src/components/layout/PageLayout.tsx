'use client';

import { ReactNode, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';
import { preloadImages } from '@/utils/adaptiveLoading';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  images?: string[];
  preloadNextPages?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    cardType?: 'summary' | 'summary_large_image';
    handle?: string;
  };
}

export function PageLayout({
  children,
  title,
  description,
  images = [],
  preloadNextPages = [],
  openGraph,
  twitter,
}: PageLayoutProps) {
  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Preload current page images
    if (images.length > 0) {
      preloadImages(images);
    }

    // Preload next possible pages
    if (preloadNextPages.length > 0) {
      const preloadLinks = preloadNextPages.map(page => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'document';
        link.href = page;
        return link;
      });

      preloadLinks.forEach(link => document.head.appendChild(link));

      return () => {
        preloadLinks.forEach(link => document.head.removeChild(link));
      };
    }
  }, [images, preloadNextPages]);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: openGraph?.title || title,
          description: openGraph?.description || description,
          images: openGraph?.images || images.map(url => ({ url })),
          site_name: 'VEKA',
        }}
        twitter={{
          handle: twitter?.handle || '@veka_gg',
          site: '@veka_gg',
          cardType: twitter?.cardType || 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=5',
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            name: 'theme-color',
            content: '#121212',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/veka-tabbar-logo.svg',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />
      {children}
    </>
  );
} 