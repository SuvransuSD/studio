
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.344402621743!2d85.76694691492026!3d20.2861269864099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1906cf2ed93579%3A0x82498444ded567c!2sNuagaon%2C%20Bhubaneswar%2C%20Odisha%20751003%2C%20India!5e0!3m2!1sen!2sus!4v1687834573699!5m2!1sen!2sus";

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help. Reach out to us for a consultation or with any questions you may have.
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
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you today?" rows={5} />
                </div>
                <Button type="submit" className="w-full">Submit Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span>info@preetorian.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <span>+91 63706 58861</span>
                    <span>+91 77352 51280</span>
                    <span>+91 99383 93018</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>PLOT NO-233/1389, NUAGAON, SHIBA MANDIR, GHOTHAPATNA,<br /> Malipada, Bhubaneswar, Khorda- 751003, Orissa</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Location</h2>
              <div className="relative h-80 w-full rounded-lg overflow-hidden border">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapSrc}>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
