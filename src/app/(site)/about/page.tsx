
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Eye, Handshake } from 'lucide-react';
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

const teamMembers = [
  {
    name: 'John D., CEO',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/100/100?a=1',
    dataAiHint: 'man face',
    experience: '20+ years in risk management and security consulting. Former military intelligence officer.',
    story: 'John founded PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED with a mission to bring military-grade precision and integrity to the private security sector. After a distinguished career, he saw a need for a more proactive and client-focused approach to security. He is passionate about creating safer communities and building a team that shares his commitment to excellence.',
  },
  {
    name: 'Jane S., COO',
    role: 'Chief Operating Officer',
    image: 'https://picsum.photos/100/100?a=2',
    dataAiHint: 'woman face',
    experience: '15 years in operations management for large-scale logistics and service companies.',
    story: 'Jane is the operational backbone of PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED. Her expertise in streamlining complex operations ensures that our services are delivered efficiently and effectively. She is dedicated to fostering a culture of continuous improvement and ensuring our clients receive the highest level of service.',
  },
  {
    name: 'Robert C., Head of Security',
    role: 'Head of Security',
    image: 'https://picsum.photos/100/100?a=3',
    dataAiHint: 'man face',
    experience: '25 years in law enforcement, specializing in tactical response and threat assessment.',
    story: 'Robert leads our field operations with a calm and decisive demeanor honed by years on the front lines. He is responsible for the training and deployment of our security personnel, ensuring every officer meets our rigorous standards. His hands-on approach guarantees that our security strategies are both robust and practical.',
  },
  {
    name: 'Emily W., Client Relations',
    role: 'Client Relations Manager',
    image: 'https://picsum.photos/100/100?a=4',
    dataAiHint: 'woman face',
    experience: '10 years in corporate account management and customer success in the B2B service industry.',
    story: 'Emily is the primary point of contact for our clients, building strong partnerships based on trust and communication. She works closely with each client to understand their unique needs and ensure their expectations are exceeded. Her dedication to client satisfaction is a cornerstone of our success.',
  },
];

type TeamMember = (typeof teamMembers)[0];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/800/600"
              alt="Company founding photo"
              data-ai-hint="old photo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED was born from a desire to create a safer community. Our founder, a veteran with extensive experience in risk management, saw the need for a security company that valued proactive prevention and client partnerships over reactive measures.
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
          viewport={{ once: false, amount: 0.2 }}
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

        {/* Leadership Team Section */}
        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedMember(null)}>
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Meet Our Leadership</h2>
              <p className="mt-2 text-muted-foreground">The experienced minds guiding our mission.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <DialogTrigger asChild key={member.name} onClick={() => setSelectedMember(member)}>
                  <div className="flex flex-col items-center text-center cursor-pointer group">
                    <Avatar className="w-32 h-32 mb-4 transition-transform duration-300 group-hover:scale-105">
                      <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                      <AvatarFallback>{member.name.split(',')[0].charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </motion.section>

          {selectedMember && (
            <DialogContent className="sm:max-w-2xl p-0">
               <div className="flex flex-col sm:flex-row">
                 <div className="relative sm:w-1/3 w-full h-48 sm:h-auto shrink-0">
                    <Image
                        src={selectedMember.image.replace('100/100', '400/600')}
                        alt={selectedMember.name}
                        data-ai-hint={selectedMember.dataAiHint}
                        fill
                        className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                    />
                 </div>
                 <div className="p-6 overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-2">{selectedMember.name}</DialogTitle>
                      <p className="text-base text-primary font-medium">{selectedMember.role}</p>
                    </DialogHeader>
                    <div className="mt-4 space-y-4 text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Experience</h4>
                        <p>{selectedMember.experience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Our Journey</h4>
                        <p>{selectedMember.story}</p>
                      </div>
                    </div>
                  </div>
               </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </>
  );
}
