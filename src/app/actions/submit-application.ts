'use server';

import { z } from 'zod';
import { summarizeCv } from '@/ai/flows/summarize-cv-careers-page';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

const applicationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(10, 'Phone number is required.'),
  resume: z
    .instanceof(File)
    .refine((file) => file.size > 0, 'Resume is required.')
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      '.pdf, .doc, and .docx files are accepted.'
    ),
  message: z.string().optional(),
});

export type FormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function submitApplication(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const validatedFields = applicationSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      resume: formData.get('resume'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      console.error('Validation errors:', validatedFields.error.flatten().fieldErrors);
      return {
        status: 'error',
        message: 'Please check your input. ' + Object.values(validatedFields.error.flatten().fieldErrors).flat().join(' '),
      };
    }

    const { name, email, resume, phone, message } = validatedFields.data;

    // This is a generic job description for the AI. In a real app,
    // this might come from a specific job listing the user applied to.
    const jobDescription = `
      Position: Security Professional
      Company: PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED
      Description: Seeking a vigilant, reliable, and professional security officer. 
      Responsibilities include monitoring premises, patrolling, responding to incidents, 
      and ensuring the safety of clients and property. Strong communication and observation skills are essential.
    `;

    // Convert file to data URI for the AI flow
    const buffer = await resume.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const cvDataUri = `data:${resume.type};base64,${base64}`;

    // Call the AI to summarize the CV
    const summaryResult = await summarizeCv({
      jobDescription,
      cvDataUri,
    });

    // In a real application, you would use a service like Nodemailer, SendGrid, or Resend here.
    
    // 1. Send application details to the company
    console.log('--- New Job Application ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message || 'N/A'}`);
    console.log('CV Summary:', summaryResult.summary);
    console.log('--- (Simulated Email to HR) ---');

    // 2. Send confirmation email to the applicant
    console.log(`--- Sending confirmation to ${email} ---`);
    console.log(`Subject: Your application to PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED`);
    console.log(`Dear ${name},\n\nThank you for applying to PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED. We have received your application and our team will review it shortly. We appreciate your interest in joining us.\n\nBest regards,\nThe PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED Team`);
    console.log('--- (Simulated Confirmation Email) ---');

    return {
      status: 'success',
      message: 'Your application has been submitted successfully! A confirmation has been sent to your email.',
    };
  } catch (error) {
    console.error('Application submission error:', error);
    return {
      status: 'error',
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
