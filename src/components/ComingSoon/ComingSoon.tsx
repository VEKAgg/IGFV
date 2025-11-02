'use client';

import Link from 'next/link';
import { MotionDiv } from '@/components/Motion/MotionDiv';
import { FaRocket, FaGamepad, FaCode } from 'react-icons/fa';

export const ComingSoon = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex justify-center space-x-4 text-5xl text-primary">
            <MotionDiv
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
            >
              <FaRocket />
            </MotionDiv>
            <MotionDiv
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            >
              <FaGamepad />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.8 }}
            >
              <FaCode />
            </MotionDiv>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
            Level Loading...
          </h1>
          
          <div className="text-lg text-gray-300">
            <p className="mb-4">This feature is currently in development and will be released soon!</p>
            <p className="text-sm text-gray-400">
              Our dev squad is working overtime to bring you an epic experience.
              <br />XP boost activated: +200% coding speed!
            </p>
          </div>
          
          <div className="w-64 h-4 mx-auto bg-gray-700 rounded-full overflow-hidden">
            <MotionDiv
              className="h-full bg-gradient-to-r from-orange-500 to-red-600"
              initial={{ width: '10%' }}
              animate={{ width: '70%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div></div>
            </MotionDiv>
          </div>
          
          <p className="text-sm text-gray-500">
            Progress: 70% - Debugging final boss encounter
          </p>
          
          <div className="pt-4">
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark transition-colors rounded-lg shadow-glow hover:shadow-glow-hover"
            >
              Return to Base
            </Link>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}; 