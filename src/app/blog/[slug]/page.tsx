'use client';

import { useBlogPost } from '@/hooks/useBlogPosts';
import { BlogContent } from '@/components/Blog/BlogContent';
import { ShareButtons } from '@/components/Blog/ShareButtons';
import { Comments } from '@/components/Blog/Comments';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const { data: post, isLoading, error } = useBlogPost(resolvedParams.slug);

  useEffect(() => {
    if (error) {
      console.error('Error loading blog post:', error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-red-500">Error loading blog post</div>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  const url = process.env.NEXT_PUBLIC_BASE_URL 
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`
    : `/blog/${post.slug}`;

  // Convert date strings to Date objects and then to ISO strings
  const publishedTime = new Date(post.publishedAt || post.createdAt).toISOString();
  const modifiedTime = new Date(post.updatedAt).toISOString();

  return (
    <>
      <NextSeo
        title={post.seo?.title || post.title}
        description={post.seo?.description || post.excerpt}
        openGraph={{
          title: post.seo?.title || post.title,
          description: post.seo?.description || post.excerpt,
          url,
          type: 'article',
          article: {
            publishedTime,
            modifiedTime,
            authors: [post.author.name],
            tags: post.tags,
          },
          images: post.seo?.ogImage
            ? [
                {
                  url: post.seo.ogImage,
                  width: 1200,
                  height: 630,
                  alt: post.title,
                },
              ]
            : post.featuredImage
            ? [
                {
                  url: post.featuredImage,
                  width: 1200,
                  height: 630,
                  alt: post.title,
                },
              ]
            : [],
        }}
      />

      <div className="min-h-screen bg-dark py-24 px-6">
        <div className="container mx-auto relative">
          {/* Share Buttons */}
          <ShareButtons url={url} title={post.title} />

          {/* Blog Content */}
          <BlogContent post={post} />

          {/* Comments Section */}
          <Comments
            url={url}
            identifier={post.slug}
            title={post.title}
          />
        </div>
      </div>
    </>
  );
} 