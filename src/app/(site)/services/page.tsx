
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Video, Car, Siren, Briefcase, CalendarClock } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Manned Guarding',
    description: 'Our highly trained, SIA-licensed security officers provide a visible deterrent and rapid response for properties of all types.',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'CCTV Monitoring',
    description: '24/7 remote monitoring of your CCTV systems by our expert team, ensuring immediate action against any suspicious activity.',
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Mobile Patrols',
    description: 'Cost-effective, visible security patrols conducted at random intervals to protect your premises day and night.',
  },
  {
    icon: <Siren className="w-8 h-8" />,
    title: 'Alarm Response & Keyholding',
    description: 'Fast and reliable response to alarm activations, minimizing risks to you and your staff, with secure keyholding services.',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Corporate Security',
    description: 'Comprehensive security solutions for corporate environments, including access control, concierge services, and risk assessments.',
  },
  {
    icon: <CalendarClock className="w-8 h-8" />,
    title: 'Event Security',
    description: 'Specialized security planning and management for public and private events, ensuring a safe and secure environment for all attendees.',
  },
];

export default function ServicesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Security Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to protect your people, property, and assets with diligence and professionalism.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex items-center space-x-4 flex-row">
                <div className="bg-accent/20 text-accent p-3 rounded-lg">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </>
  );
}
