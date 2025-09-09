'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          variants={{
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -15 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>

        {/* Wipe-in transition overlay */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-primary origin-bottom z-50"
          variants={{
            initial: { scaleY: 1 },
            animate: { scaleY: 0 },
            exit: { scaleY: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Wipe-out transition overlay */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-primary origin-top z-50"
          variants={{
            initial: { scaleY: 0 },
            animate: { scaleY: 0 },
            exit: { scaleY: 1 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
