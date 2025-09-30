
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
                    src="https://picsum.photos/seed/why-us/600/400"
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
              <CardTitle>One-Stop Shop: Tailor-made Solution</CardTitle>
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

        {/* Service Boutique Section */}
        <motion.section
          className="mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">SERVICE BOUTIQUE</h2>
          </div>
          <div className="relative">
             <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
             <div className="absolute top-0 bottom-24 left-1/2 w-0.5 bg-border hidden md:block"></div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
              {[
                { icon: <Shield className="w-8 h-8" />, title: 'Security Services' },
                { icon: <Building className="w-8 h-8" />, title: 'Integrated Facility Management' },
                { icon: <Users className="w-8 h-8" />, title: 'Manpower Sourcing & HR Solutions' },
                { icon: <FileText className="w-8 h-8" />, title: 'Toll Operations & Management' },
                { icon: <GraduationCap className="w-8 h-8" />, title: 'Skill Development Programs' },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                        <div className="absolute top-[-4rem] left-1/2 w-0.5 h-16 bg-border hidden md:block"></div>
                        <Card className="mx-auto bg-primary/10 text-primary p-4 rounded-lg w-fit border-primary border-2 shadow-lg">
                           {service.icon}
                        </Card>
                    </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
      <div className="bg-destructive text-destructive-foreground py-8">
        <motion.div 
            className="container mx-auto px-4 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
        >
            <h3 className="text-2xl font-bold mb-4">GROUP COMPANIES</h3>
            <p className="max-w-4xl mx-auto text-lg">
                Vetted Consultant | Apoint Infotech | Innovision International | Aerodrone Robotics | Innovision HR Consultancy LLC
            </p>
        </motion.div>
      </div>
    </>
  );
}
