
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  Building,
  Users,
  BrainCircuit,
  Clock,
  ThumbsUp,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'CEO, TechCorp',
    avatar: 'https://picsum.photos/100/100?a=5',
    dataAiHint: 'woman face',
    quote:
      'Guardian Shield\'s team is exceptional. Their professionalism and attention to detail gave us the peace of mind we needed for our corporate headquarters. I can\'t recommend them enough.',
  },
  {
    name: 'Michael B.',
    role: 'Event Organizer',
    avatar: 'https://picsum.photos/100/100?a=6',
    dataAiHint: 'man face',
    quote:
      'We hired Guardian Shield for our annual city festival, and they were flawless. The security was visible but not intrusive, and their team handled every situation with calm and expertise.',
  },
  {
    name: 'David R.',
    role: 'Warehouse Manager',
    avatar: 'https://picsum.photos/100/100?a=7',
    dataAiHint: 'man face',
    quote:
      'The mobile patrol service has been a game-changer for our facility. The random checks and detailed reports have significantly reduced instances of trespassing and theft after hours.',
  },
];


export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background">
      {/* Hero Section */}
      <section className="w-full relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-20 md:py-32 px-4">
          <motion.div
            className="text-center md:text-left"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tighter mb-6">
              Advanced Security for a Modern World
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground mb-8 mx-auto md:mx-0">
              Guardian Shield delivers intelligent, proactive security solutions
              that protect your assets, people, and peace of mind.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://picsum.photos/800/600?tech"
              alt="Modern security operations center"
              data-ai-hint="security command center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-secondary py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Guardian Shield Security?
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              Our commitment to excellence and innovation sets us apart.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={fadeIn}>
              <Card className="text-center h-full border-0 bg-transparent shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <BrainCircuit className="w-8 h-8" />
                  </div>
                  <CardTitle className="pt-4">Customized Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We don't believe in one-size-fits-all. Every solution is
                    tailored to your unique risk profile and operational needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="text-center h-full border-0 bg-transparent shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Clock className="w-8 h-8" />
                  </div>
                  <CardTitle className="pt-4">24/7 Vigilance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our state-of-the-art command center and rapid response
                    teams are always on, ensuring constant protection.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="text-center h-full border-0 bg-transparent shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <ThumbsUp className="w-8 h-8" />
                  </div>
                  <CardTitle className="pt-4">Licensed Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our personnel undergo rigorous training, background checks,
                    and are fully licensed to deliver elite service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Security Services
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              A complete range of services to cover every aspect of your
              security.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[
              { icon: <Users />, title: 'On-Site Guarding' },
              { icon: <Building />, title: 'Corporate Security' },
              { icon: <ShieldCheck />, title: 'Event Security' },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-accent/20 text-accent p-3 rounded-lg">
                        {service.icon}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Highly-trained professionals providing a visible deterrent
                      and immediate response.
                    </p>
                    <Link
                      href="/services"
                      className="font-semibold text-primary flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.5 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted by Leading Businesses
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              Hear what our clients have to say about our commitment to their safety.
            </p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2 }}
            variants={fadeIn}
          >
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <Avatar className="w-14 h-14">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-grow">
                          <div className="flex gap-0.5 text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                          </div>
                          <p className="text-muted-foreground flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <motion.div
          className="container max-w-4xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Secure Your Future Today
          </h2>
          <p className="max-w-xl text-muted-foreground mx-auto mb-8">
            Don't wait for a threat to become a reality. Contact our experts
            for a complimentary, no-obligation security assessment.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Assessment</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
