'use server';

/**
 * @fileOverview A support ticket summarization AI agent.
 *
 * - summarizeSupportTicket - A function that handles the support ticket summarization process.
 * - SummarizeSupportTicketInput - The input type for the summarizeSupportTicket function.
 * - SummarizeSupportTicketOutput - The return type for the summarizeSupportTicket function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSupportTicketInputSchema = z.object({
  ticketContent: z.string().describe('The content of the support ticket to summarize.'),
});
export type SummarizeSupportTicketInput = z.infer<typeof SummarizeSupportTicketInputSchema>;

const SummarizeSupportTicketOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the support ticket.'),
});
export type SummarizeSupportTicketOutput = z.infer<typeof SummarizeSupportTicketOutputSchema>;

export async function summarizeSupportTicket(input: SummarizeSupportTicketInput): Promise<SummarizeSupportTicketOutput> {
  return summarizeSupportTicketFlow(input);
}

const summarizeSupportTicketPrompt = ai.definePrompt({
  name: 'summarizeSupportTicketPrompt',
  input: {schema: SummarizeSupportTicketInputSchema},
  output: {schema: SummarizeSupportTicketOutputSchema},
  prompt: `You are an AI assistant helping to summarize support tickets. Please provide a concise and informative summary of the following support ticket content:\n\n{{{ticketContent}}}\n\nSummary:`, 
});

const summarizeSupportTicketFlow = ai.defineFlow(
  {
    name: 'summarizeSupportTicketFlow',
    inputSchema: SummarizeSupportTicketInputSchema,
    outputSchema: SummarizeSupportTicketOutputSchema,
  },
  async input => {
    const {output} = await summarizeSupportTicketPrompt(input);
    return output!;
  }
);
