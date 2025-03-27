'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import LoadingScreen from './components/LoadingScreen';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'Team Insights',
  description: 'Digital Agency specializing in web development and design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
} 