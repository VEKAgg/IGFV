'use client';

import { IBlog } from '@/models/Blog';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUser, FaClock, FaEye } from 'react-icons/fa';
import { format } from 'date-fns';
import { MotionDiv } from '../Motion/MotionDiv';

interface BlogCardProps {
  post: IBlog;
  priority?: boolean;
}

export function BlogCard({ post, priority = false }: BlogCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-dark-lighter rounded-lg overflow-hidden shadow-glow hover:shadow-glow-hover transition-shadow"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-primary text-xl">VEKA</span>
            </div>
          )}
        </div>

        <div className="p-6">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-dark rounded-full text-xs text-primary/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <FaUser className="text-primary" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-primary" />
              <span>{format(new Date(post.publishedAt || post.createdAt), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-primary" />
              <span>{post.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-primary" />
              <span>{post.views} views</span>
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
} 