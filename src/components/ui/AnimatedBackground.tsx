'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export function AnimatedBackground({ className = '', children }: AnimatedBackgroundProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden bg-dark ${className}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-dark opacity-50" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,107,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,107,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }} />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-40 right-40 w-24 h-24 bg-primary/5 rounded-full blur-xl"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Code Symbols */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary/10 text-6xl font-mono"
          animate={{
            rotate: [-12, 0, -12],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {`{ }`}
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 text-accent/10 text-4xl font-mono"
          animate={{
            rotate: [45, 35, 45],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          {`</>`}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 