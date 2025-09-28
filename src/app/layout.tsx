import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED | Professional Security Services',
  description: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED offers comprehensive, professional security services including manned guarding, CCTV monitoring, and event security. Trust us to protect what matters most.',
  keywords: 'security services, manned guarding, CCTV monitoring, event security, PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED, Bhubaneswar security, professional security',
  authors: [{ name: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED' }],
  creator: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED',
  publisher: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED',
  openGraph: {
    title: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED | Professional Security Services',
    description: 'Top-tier security solutions tailored to your needs. From corporate security to public events, we provide unparalleled protection.',
    url: 'https://pretoriansecurity.com', // Replace with your actual domain
    siteName: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PREETORIAN INTEGRATED SOLUTIONS PRIVATE LIMITED | Professional Security Services',
    description: 'Expert security services for peace of mind. Discover our range of solutions.',
    // creator: '@yourtwitterhandle', // Replace with your Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
