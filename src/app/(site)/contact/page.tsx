'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help. Reach out to us for a consultation or with any questions you may have.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
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
                  <Mail className="w-6 h-6 text-accent" />
                  <span>contact@guardianshield.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                  <span>123 Security Avenue, Suite 100,<br />Bhubaneswar, Odisha</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Location</h2>
              <div className="relative h-80 rounded-lg overflow-hidden border p-4 flex items-center justify-center bg-secondary/20">
                <svg
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M250.15,62.35l-11.82,19.34l-11.66-3.13l-13.84,11.23l-10.9-2.91l-10.51,5.13l-10.51,0.22l-10.12,4.45l-14.71-3.13l-16.79-11.75l-13.92-2.31l-14.5,1.99l-8.52,9.3l-15.01,2.91l-11.68,14.7l-9.88,0.76l-14.61-4.7l-10.82,10.15l-10.61,16.5l-2.43,10.66l6.73,15.11l-1.89,14.4l-7.05,10.15l-14.71,32.33l-5.61,18.06l3.66,12.75l-2.64,21.69l3.44,14.07l13.1,13.25l16.14,1.48l13.73-1.48l18.42,8.97l20.4,14.1l11.41-0.34l18.73-10.83l10.9-0.12l14.28,7.3l12.56-1.5l11.8,4.14l15.93,12.01l19.5,4.72l17.75-2.73l22.46-13.8l12.87-13.8l7.07-23.79l-0.31-18.06l-4.75-14.1l-12.7-17.75l-11.51-5.13l-12.19,2.2l-14.71-4.91l-15.02-15.89l-5.71-14.1l-11.51-14.4l-6.8-15.99l2.84-13.43l8.62-11.08l-1.07-16.19l-11.51-9.97l-10.82-1.99Z"
                    fill="hsl(var(--secondary))"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                  />
                  <g transform="translate(305, 300)">
                    <circle cx="0" cy="0" r="10" fill="hsl(var(--primary))" className="animate-pulse" />
                    <circle cx="0" cy="0" r="5" fill="hsl(var(--primary-foreground))" />
                  </g>
                  <text x="305" y="330" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">
                    Bhubaneswar
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
