
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Handshake } from 'lucide-react';
import imageData from '@/app/lib/placeholder-images.json';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const { aboutPage } = imageData;

export default function AboutPage() {
  return (
    <>
      <motion.div
        className="bg-secondary"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing unparalleled safety and peace of mind through integrity, vigilance, and professionalism.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <motion.section
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={aboutPage.companyStory.src}
              alt={aboutPage.companyStory.alt}
              data-ai-hint={aboutPage.companyStory.dataAiHint}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2025, PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED was born from a desire to create a safer community. Our founder, a veteran with extensive experience in risk management, saw the need for a security company that valued proactive prevention and client partnerships over reactive measures.
            </p>
            <p className="text-muted-foreground">
              From our humble beginnings with a small team of dedicated professionals, we have grown into a leading security provider, trusted by businesses and individuals across the nation. Our commitment to our core values remains the bedrock of our success.
            </p>
          </div>
        </motion.section>

        {/* Core Values Section */}
        <motion.section
          className="mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <Shield className="w-8 h-8" />
                </div>
                <CardTitle className="pt-4">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We operate with unwavering honesty, transparency, and ethical standards. Trust is the foundation of our client relationships.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <Eye className="w-8 h-8" />
                </div>
                <CardTitle className="pt-4">Vigilance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We remain ever-watchful and proactive, identifying potential threats before they escalate to ensure the continuous safety of our clients.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <Handshake className="w-8 h-8" />
                </div>
                <CardTitle className="pt-4">Professionalism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our team consists of highly trained, courteous, and disciplined professionals dedicated to delivering excellence in service.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </>
  );
}
