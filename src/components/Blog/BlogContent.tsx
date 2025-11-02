'use client';

import ReactMarkdown from 'react-markdown';
import { IBlog } from '@/models/Blog';
import Image from 'next/image';
import { FaCalendar, FaUser, FaClock, FaEye } from 'react-icons/fa';
import { format } from 'date-fns';
import { MotionDiv } from '../Motion/MotionDiv';

interface BlogContentProps {
  post: IBlog;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden shadow-glow">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-primary/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400">
          {/* Author */}
          <div className="flex items-center gap-4">
            {post.author.image && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <FaUser className="text-primary" />
                <span>{post.author.name}</span>
              </div>
              {post.author.bio && (
                <p className="text-sm text-gray-500">{post.author.bio}</p>
              )}
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2">
            <FaCalendar className="text-primary" />
            <span>
              {format(new Date(post.publishedAt || post.createdAt), 'MMM d, yyyy')}
            </span>
          </div>

          {/* Reading Time */}
          <div className="flex items-center gap-2">
            <FaClock className="text-primary" />
            <span>{post.readingTime} min read</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2">
            <FaEye className="text-primary" />
            <span>{post.views} views</span>
          </div>
        </div>
      </MotionDiv>

      {/* Content */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-invert prose-primary max-w-none"
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </MotionDiv>

      {/* Author Bio (if provided) */}
      {post.author.bio && (
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-dark-lighter rounded-lg"
        >
          <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
          <p className="text-gray-400">{post.author.bio}</p>
        </MotionDiv>
      )}
    </article>
  );
} 