'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Bhubaneswar,Odisha`;

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
              <div className="relative h-80 w-full rounded-lg overflow-hidden border">
                {apiKey && apiKey !== "YOUR_GOOGLE_MAPS_API_KEY_HERE" ? (
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src={mapSrc}>
                  </iframe>
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <p className="text-muted-foreground text-center p-4">
                      Please add your Google Maps API key to the .env file to display the map.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
