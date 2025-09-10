'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { type ReactNode, Suspense } from 'react';

// Wrap in Suspense to fix Next.js bug with usePathname
// https://github.com/vercel/next.js/issues/49279
const TransitionInner = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
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
