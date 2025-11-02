import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  // Core pages
  const staticPages = [
    '',
    'about',
    'blog',
    'events',
    'marketplace',
    'community/media',
  ].map(route => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add blog posts (in production, fetch this from your API/database)
  const blogPosts = [
    'future-of-gaming-2024',
    'ai-revolution-dev',
    'top-gaming-phones-2024',
    // ... add all blog post slugs
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
} 