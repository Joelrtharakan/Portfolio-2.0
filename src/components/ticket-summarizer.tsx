'use client';

import { useState } from 'react';
import { getSummary } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Bot, Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function TicketSummarizer() {
  const [ticketContent, setTicketContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketContent.trim()) return;

    setIsLoading(true);
    setSummary('');

    const result = await getSummary({ ticketContent });
    
    setSummary(result.summary);
    setIsLoading(false);
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20 h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-accent/10">
                <Bot className="w-6 h-6 text-accent" />
            </div>
            <CardTitle className="font-headline text-2xl text-accent">AI Ticket Summarizer</CardTitle>
        </div>
        <CardDescription>
          A demo of my AI skills. Paste a support ticket content below to get an instant summary.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ticket-content">Ticket Content</Label>
            <Textarea
              id="ticket-content"
              placeholder="Paste ticket details here..."
              value={ticketContent}
              onChange={(e) => setTicketContent(e.target.value)}
              rows={6}
              className="bg-background/50"
              disabled={isLoading}
            />
          </div>
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Summarize'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-grow flex flex-col">
        <AnimatePresence>
          {summary && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full mt-4 p-4 bg-background/50 rounded-lg border border-accent/30"
            >
              <h4 className="font-bold mb-2 text-accent">Summary:</h4>
              <p className="text-sm text-foreground/80 whitespace-pre-wrap">{summary}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardFooter>
    </Card>
  );
}
