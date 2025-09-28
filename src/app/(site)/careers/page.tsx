
'use client';

import { motion } from 'framer-motion';
import { ApplicationForm } from '@/components/careers/application-form';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function CareersPage() {
  return (
    <>
      <motion.div
        className="bg-secondary"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Join Our Team</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are looking for dedicated, professional, and vigilant individuals to join PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED. Start your career with us and make a difference.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Apply for a Position</h2>
          <ApplicationForm />
        </div>
      </motion.div>
    </>
  );
}
