
'use server';

import {
  summarizeSupportTicket,
  type SummarizeSupportTicketInput,
  type SummarizeSupportTicketOutput,
} from '@/ai/flows/summarize-support-ticket';

export async function getSummary(
  input: SummarizeSupportTicketInput
): Promise<SummarizeSupportTicketOutput> {
  try {
    const output = await summarizeSupportTicket(input);
    return output;
  } catch (error) {
    console.error('Error summarizing ticket:', error);
    // Return a structured error if you want to handle it on the client
    return { summary: "An error occurred while summarizing the ticket. Please try again." };
  }
}
