'use client';

import Link from 'next/link';
import { MotionDiv } from '@/components/Motion/MotionDiv';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Game Over!</h2>
          <p className="text-gray-400 mb-8">The quest you&apos;re looking for seems to be in another castle...</p>
          
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark transition-colors rounded-lg shadow-glow hover:shadow-glow-hover"
          >
            Return to Base
          </Link>
        </MotionDiv>

        <MotionDiv
          className="mt-12 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Press START to continue...</p>
        </MotionDiv>
      </div>
    </div>
  );
} 