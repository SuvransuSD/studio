'use server';

/**
 * @fileOverview A flow to summarize a CV for a job application on the careers page.
 *
 * - summarizeCv - A function that handles the CV summarization process.
 * - SummarizeCvInput - The input type for the summarizeCv function.
 * - SummarizeCvOutput - The return type for the summarizeCv function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCvInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The description of the job the applicant is applying for.'),
  cvDataUri: z
    .string()
    .describe(
      'The CV of the applicant, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
    ),
});
export type SummarizeCvInput = z.infer<typeof SummarizeCvInputSchema>;

const SummarizeCvOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the CV, tailored to the job description.'),
});
export type SummarizeCvOutput = z.infer<typeof SummarizeCvOutputSchema>;

export async function summarizeCv(input: SummarizeCvInput): Promise<SummarizeCvOutput> {
  return summarizeCvFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCvPrompt',
  input: {schema: SummarizeCvInputSchema},
  output: {schema: SummarizeCvOutputSchema},
  prompt: `You are an expert resume writer. Please provide a summary of the
  following CV, highlighting the skills and experience that are most relevant
  to the job description provided. The CV is provided as a data URI. The job
  description is provided as a string.

Job Description: {{{jobDescription}}}
CV: {{media url=cvDataUri}}

Summary:`,
});

const summarizeCvFlow = ai.defineFlow(
  {
    name: 'summarizeCvFlow',
    inputSchema: SummarizeCvInputSchema,
    outputSchema: SummarizeCvOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
