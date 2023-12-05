import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar/Sidebar';
import Aside from '@/components/Aside/Aside';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'X',
  description: 'Happening now!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex justify-center min-h-screen w-full gap-0 lg:gap-4',
          inter.className
        )}
      >
        <Sidebar />
        {children}
        <Aside />
      </body>
    </html>
  );
}
