'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Building, Users } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <motion.section
        className="w-full h-[60vh] md:h-[80vh] relative text-white"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Security guard overlooking a city"
          data-ai-hint="security city"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Your Safety, Our Priority
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg md:text-xl text-primary-foreground/90 mb-8"
            variants={fadeIn}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Guardian Shield Security provides elite, reliable, and professional security solutions tailored to your unique needs.
          </motion.p>
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Preview */}
      <motion.section
        className="w-full max-w-6xl py-16 md:py-24 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted Security Partner</h2>
            <p className="text-muted-foreground mb-6">
              With over a decade of experience, Guardian Shield Security has established itself as a leader in the security industry. Our mission is to provide peace of mind through professional, vigilant, and customized security services. We are committed to excellence, integrity, and the safety of our clients.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeIn} className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/600/400"
              alt="Security professionals in a meeting"
              data-ai-hint="security meeting"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Services</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              We offer a comprehensive range of security services to protect individuals, assets, and properties.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={fadeIn}>
              <Card className="text-center h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/20 text-accent p-3 rounded-full w-fit">
                    <Users className="w-8 h-8" />
                  </div>
                  <CardTitle className="pt-4">Manned Guarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional, SIA-licensed guards for static and mobile security needs.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="text-center h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/20 text-accent p-3 rounded-full w-fit">
                    <Building className="w-8 h-8" />
                  </div>
                  <CardTitle className="pt-4">Corporate Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tailored security solutions for office buildings, and corporate campuses.</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="text-center h-full hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/20 text-accent p-3 rounded-full w-fit">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <CardTitle className="pt-4">Event Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Expert security management for events of all sizes, ensuring safety for all attendees.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            className="text-center mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeIn}
          >
            <Button asChild size="lg" variant="link">
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-6xl py-16 md:py-24 px-4">
        <motion.div
          className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg text-center shadow-2xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to enhance your security?</h2>
          <p className="max-w-xl mx-auto mb-8">
            Contact us today for a no-obligation consultation and let us design a security plan that's right for you.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
