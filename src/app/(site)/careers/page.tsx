import { ApplicationForm } from '@/components/careers/application-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Guardian Shield Security',
  description: 'Join the elite team at Guardian Shield Security. Explore career opportunities and apply to become part of a leading security provider.',
};

export default function CareersPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Join Our Team</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are looking for dedicated, professional, and vigilant individuals to join Guardian Shield Security. Start your career with us and make a difference.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Apply for a Position</h2>
          <ApplicationForm />
        </div>
      </div>
    </>
  );
}
