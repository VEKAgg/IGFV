'use client';

import { MotionDiv } from '@/components/Motion/MotionDiv';
import { useScroll, useTransform, motion, useSpring, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaLock } from 'react-icons/fa';
import Image from 'next/image';

const timelineEvents = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'VEKA was born from a vision to unite gamers and tech enthusiasts in a unique digital space.',
    image: '/timeline/beginning.jpg'
  },
  {
    year: '2023 Q2',
    title: 'Community First Steps',
    description: 'Launch of our core platform features and establishment of our founding community members.',
    image: '/timeline/community.jpg'
  },
  {
    year: '2023 Q3',
    title: 'Expanding Horizons',
    description: 'Introduction of specialized gaming communities and tech discussion forums.',
    image: '/timeline/expanding.jpg'
  },
  {
    year: '2023 Q4',
    title: 'Innovation Phase',
    description: 'Implementation of unique reward systems and community-driven development initiatives.',
    image: '/timeline/innovation.jpg'
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Expanding our reach globally while maintaining our core values of community and innovation.',
    image: '/timeline/future.jpg'
  },
] as const;

function TimelineItem({ event, index, scrollYProgress }: { 
  event: typeof timelineEvents[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isEven = index % 2 === 0;
  
  // Calculate viewport-relative progress for this item
  const itemProgress = useTransform(
    scrollYProgress,
    [
      Math.max(0, (index - 0.75) / timelineEvents.length),
      index / timelineEvents.length,
      Math.min(1, (index + 0.75) / timelineEvents.length)
    ],
    [0, 1, 0]
  );

  // Optimize performance with lower values for mobile
  const smoothProgress = useSpring(itemProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.002,
    mass: 0.2
  });

  const opacity = useTransform(smoothProgress, [0, 1], [0.3, 1]);
  
  // Use window.matchMedia to check screen size
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      setIsDesktop(mediaQuery.matches);

      // Add listener for screen size changes
      const handleResize = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
      mediaQuery.addEventListener('change', handleResize);
      
      return () => mediaQuery.removeEventListener('change', handleResize);
    }
  }, []);

  // Apply different scale based on screen size
  const scale = useTransform(
    smoothProgress,
    [0, 1],
    isDesktop ? [0.95, 1.5] : [0.95, 1.0]
  );

  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Timeline Line and Checkpoint - Adjusted for mobile */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 z-10">
        <motion.div
          style={{ opacity }}
          className="absolute top-1/2 left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-dark-lighter border-2 border-primary shadow-glow -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0.5 md:inset-1 rounded-full bg-primary/50" />
        </motion.div>
      </div>

      {/* Timeline Content - Optimized grid layout */}
      <motion.div
        style={{ opacity, scale }}
        className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 w-full max-w-4xl mx-auto py-8 md:py-16 px-4 md:px-8"
      >
        {/* Image Section - Optimized for performance */}
        <div className={`relative ${isEven ? "md:order-1" : ""}`}>
          <div className="bg-dark-lighter rounded-lg overflow-hidden shadow-glow w-full">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                quality={75} // Slightly reduced quality for better performance
              />
            </div>
          </div>
        </div>

        {/* Text Section - Simplified for better performance */}
        <div className={`space-y-3 md:space-y-4 relative z-0 ${isEven ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
          <div className={`flex items-center gap-4 text-primary ${!isEven && "md:flex-row-reverse"}`}>
            <span className="font-mono text-sm">{event.year}</span>
            <div className="h-px flex-1 bg-primary/30" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">{event.title}</h3>
          <p className="text-gray-400 text-sm md:text-base">{event.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

function LockedTimelineItem() {
  return (
    <div className="relative min-h-[30vh] flex flex-col items-center">
      <div className="w-px h-32 bg-primary/20">
        <div className="absolute top-32 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2 
            }}
            className="w-12 h-12 rounded-full bg-dark-lighter border-2 border-primary/50 flex items-center justify-center shadow-glow"
          >
            <FaLock className="text-primary/50 text-xl" />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 text-lg">
          Inshallah, our journey continues with your support.
          <br />
          <span className="text-primary/50">The next chapter awaits...</span>
        </p>
      </motion.div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.7"]
  });

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section - Simplified for performance */}
      <section className="mt-20 mb-0 relative flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 md:px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} // Reduced duration
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
              Our Journey
            </h1>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }} // Reduced duration and delay
            className="max-w-2xl mx-auto"
          >
            <p className="text-gray-300 text-base md:text-lg">
              Pioneering the future of gaming communities through innovation and collaboration.
              We&apos;re building more than just a platform - we&apos;re creating a movement.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={containerRef}
        className="py-12 md:py-20 px-4 md:px-6"
        style={{ 
          scrollBehavior: 'smooth'
        }}
      >
        <div className="container mx-auto max-w-5xl">
          {timelineEvents.map((event, index) => (
            <TimelineItem 
              key={event.year}
              event={event} 
              index={index} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
          <LockedTimelineItem />
        </div>
      </section>
    </div>
  );
} 