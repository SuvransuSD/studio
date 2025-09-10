'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { type ReactNode, Suspense, useState, useEffect } from 'react';
import { Logo } from './logo';

const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="relative">
        <Logo />
        <motion.div
          className="absolute -inset-2 border-2 border-primary rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </motion.div>
  </div>
);

// Wrap in Suspense to fix Next.js bug with usePathname
// https://github.com/vercel/next.js/issues/49279
const TransitionInner = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== previousPath) {
      setLoading(true);
      const timer = setTimeout(() => {
        setPreviousPath(pathname);
        setLoading(false);
      }, 700); // Corresponds to the exit animation + a small buffer
      return () => clearTimeout(timer);
    }
  }, [pathname, previousPath]);


  return (
    <AnimatePresence mode="wait">
       {loading && <PageLoader />}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <TransitionInner>{children}</TransitionInner>
    </Suspense>
  );
}
