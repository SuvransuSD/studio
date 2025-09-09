
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Video, Car, Siren, Briefcase, CalendarClock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Manned Guarding',
    description: 'Highly trained officers providing a visible deterrent and rapid response for properties of all types.',
    details: 'Our Manned Guarding service provides a constant, professional security presence at your site. Officers are SIA-licensed, rigorously trained in conflict management, and act as a powerful visual deterrent against crime. They conduct regular patrols, manage access control, and provide a rapid response to any incidents, ensuring the safety of your people and property around the clock.'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'CCTV Monitoring',
    description: '24/7 remote monitoring of your CCTV systems by our expert team, ensuring immediate action against suspicious activity.',
    details: 'Our state-of-the-art control room provides 24/7 CCTV monitoring services. Our expert analysts watch your premises in real-time, identifying and responding to threats before they escalate. In the event of an incident, we can issue audio warnings, dispatch mobile patrols, or notify emergency services, providing a proactive layer of security that never sleeps.'
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: 'Mobile Patrols',
    description: 'Cost-effective, visible security patrols conducted at random intervals to protect your premises day and night.',
    details: 'Mobile patrols offer a flexible and cost-effective security solution. Our marked vehicles perform random but regular checks on your property, creating a visible deterrent to would-be criminals. Each patrol is logged, and any signs of intrusion or damage are reported immediately. It\'s an ideal solution for covering large areas or for after-hours protection.'
  },
  {
    icon: <Siren className="w-8 h-8" />,
    title: 'Alarm Response & Keyholding',
    description: 'Fast and reliable response to alarm activations, minimizing risks to you and your staff, with secure keyholding services.',
    details: 'Remove the risk and inconvenience of responding to alarm activations yourself. As your dedicated keyholders, our rapid response team will attend your property in the event of an alarm, assess the situation, and take appropriate action. We ensure your site is secure, liaise with law enforcement if necessary, and provide a full incident report, giving you complete peace of mind.'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Corporate Security',
    description: 'Comprehensive security for corporate environments, including access control, concierge services, and risk assessments.',
    details: 'We provide a discreet and professional security presence tailored for the corporate environment. Our services include front-of-house concierge duties, managing access control systems, and performing regular threat assessments. We integrate seamlessly with your corporate culture to create a safe and welcoming environment for both employees and visitors.'
  },
  {
    icon: <CalendarClock className="w-8 h-8" />,
    title: 'Event Security',
    description: 'Specialized security planning and management for public and private events, ensuring a safe environment for all attendees.',
    details: 'From large-scale festivals to private corporate functions, our event security team ensures everything runs smoothly and safely. We assist with crowd management, access control, and emergency planning. Our experienced officers are trained to be both approachable and authoritative, ensuring a positive and secure experience for every attendee.'
  },
];

type Service = (typeof services)[0];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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

      <Dialog>
        <motion.div
          className="container mx-auto px-4 py-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <DialogTrigger asChild key={index} onClick={() => setSelectedService(service)}>
                <motion.div variants={fadeIn} custom={index}>
                  <Card className="flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
                </motion.div>
              </DialogTrigger>
            ))}
          </div>
        </motion.div>

        {selectedService && (
          <DialogContent>
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent/20 text-accent p-3 rounded-lg">
                  {selectedService.icon}
                </div>
                <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
              </div>
              <DialogDescription className="text-base text-muted-foreground">
                {selectedService.details}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
