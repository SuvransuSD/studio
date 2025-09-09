import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Eye, Handshake } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Guardian Shield Security',
  description: 'Learn about Guardian Shield Security\'s history, mission, and the dedicated team committed to your safety.',
};

const teamMembers = [
  { name: 'John D., CEO', role: 'Founder & CEO', image: 'https://picsum.photos/100/100?a=1', dataAiHint: 'man face' },
  { name: 'Jane S., COO', role: 'Chief Operating Officer', image: 'https://picsum.photos/100/100?a=2', dataAiHint: 'woman face' },
  { name: 'Robert C., Head of Security', role: 'Head of Security', image: 'https://picsum.photos/100/100?a=3', dataAiHint: 'man face' },
  { name: 'Emily W., Client Relations', role: 'Client Relations Manager', image: 'https://picsum.photos/100/100?a=4', dataAiHint: 'woman face' },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Guardian Shield Security</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing unparalleled safety and peace of mind through integrity, vigilance, and professionalism.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
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
              Founded in 2010, Guardian Shield Security was born from a desire to create a safer community. Our founder, a veteran with extensive experience in risk management, saw the need for a security company that valued proactive prevention and client partnerships over reactive measures.
            </p>
            <p className="text-muted-foreground">
              From our humble beginnings with a small team of dedicated professionals, we have grown into a leading security provider, trusted by businesses and individuals across the nation. Our commitment to our core values remains the bedrock of our success.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/20 text-accent p-3 rounded-full w-fit">
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
                <div className="mx-auto bg-accent/20 text-accent p-3 rounded-full w-fit">
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
                <div className="mx-auto bg-accent/20 text-accent p-3 rounded-full w-fit">
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
        </section>

        {/* Leadership Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Meet Our Leadership</h2>
            <p className="mt-2 text-muted-foreground">The experienced minds guiding our mission.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.split(',')[0].charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
