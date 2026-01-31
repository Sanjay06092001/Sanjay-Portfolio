import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeIn" as const,
    },
  },
};

const overlayVariants = {
  initial: {
    scaleY: 1,
  },
  enter: {
    scaleY: 0,
    transition: {
      duration: 0.6,
      ease: "circOut" as const,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.4,
      ease: "circIn" as const,
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <>
      {/* Page overlay for dramatic transition */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed inset-0 z-[100] bg-primary origin-bottom pointer-events-none"
      />
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ transitionDelay: '0.1s' }}
        className="fixed inset-0 z-[99] bg-background origin-bottom pointer-events-none"
      />
      
      {/* Content with fade/slide transition */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </>
  );
}
