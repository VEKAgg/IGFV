'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type MotionDivProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
};

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
} 