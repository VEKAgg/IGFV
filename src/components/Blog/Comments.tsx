'use client';

import { DiscussionEmbed } from 'disqus-react';
import { MotionDiv } from '../Motion/MotionDiv';

interface CommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export function Comments({ url, identifier, title }: CommentsProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="mt-12 max-w-4xl mx-auto bg-dark-lighter p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Comments</h2>
      <DiscussionEmbed
        shortname="vekagg"
        config={{
          url: url,
          identifier: identifier,
          title: title,
          language: 'en',
        }}
      />
    </MotionDiv>
  );
} 