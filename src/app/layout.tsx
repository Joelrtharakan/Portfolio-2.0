import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Joel R Tharakan',
  description: 'The futuristic 3D personal portfolio of Joel R Tharakan, an AI & Full-Stack Developer.',
  openGraph: {
    title: 'Joel R Tharakan',
    description: 'Passionate about creating intelligent solutions that make a difference.',
    url: 'https://your-domain.com', // To be updated with actual domain
    siteName: 'Joel R Tharakan Portfolio',
    images: [
      {
        url: 'https://your-domain.com/og-image.png', // To be updated
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immersive Portfolio 3D - Joel R Tharakan',
    description: 'Passionate about creating intelligent solutions that make a difference.',
    creator: '@joelrtharakan', // To be updated if available
    images: ['https://your-domain.com/twitter-image.png'], // To be updated
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
