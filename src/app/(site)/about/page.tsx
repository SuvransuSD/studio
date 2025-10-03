
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Briefcase, Users, Handshake, TrendingUp, Network, Building, Wrench, FileText, GraduationCap } from 'lucide-react';
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
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">WHY US</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Solutions delivered with an Innovative touch
              </p>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto md:mx-0">
                Our ability to deliver our services with our own staff allows us to share experience and best practice from all across India, integrate our services, and empower our employees to exceed expectations - every day.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                    src="/Training pic.png"
                    alt="Solutions delivered with an innovative touch"
                    data-ai-hint="teamwork success"
                    fill
                    className="object-contain"
                />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Features Section */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          <Card>
            <CardHeader>
              <CardTitle>One-Stop Shop: Tailor-made Solution </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                PREETORIAN offers a comprehensive range of services across India. Whether you are looking for a single service or an integrated solution, our expertly trained, fully dedicated professionals take pride in delivering the highest standards efficiently. Our flexible operational model provides choice to expand or limit the scope of services to meet the needs of your business as it evolves.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can-do Safely: Experienced in Non-Core Business solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We take a positive and commercially aware "can-do" approach to the opportunities and challenges. We have years of experience enabling our customers to focus on their core business, by making their non-core jobs our strength. By keeping your premise hassle-free through great service, we facilitate the efficiency and productivity of your business.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lowering cost, adding value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The key purpose of outsourcing is to lower the total cost of operating non-core activities. When cost can't be reduced anymore, the next step is to look at the value of the services and start improving them. PREETORIAN is all about minimizing cost and maximizing value.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Local service backed by a national network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By choosing PREETORIAN, you get the perks of a locally owned organization that's backed by a national network.
              </p>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </>
  );
}
