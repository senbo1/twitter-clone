import type { Metadata } from 'next';
import '@/app/globals.css';
import localFont from "next/font/local"
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar/Sidebar';
import Aside from '@/components/Aside/Aside';

const chirp = localFont({ src: [
  {
    path: '../../../public/fonts/Chirp-Regular.woff2',
    weight: '400',
  },
  {
    path: '../../../public/fonts/Chirp-Bold.woff2',
    weight: '700',
  },
  {
    path: '../../../public/fonts/Chirp-Medium.woff2',
    weight: '500',
  }
]})


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
          'flex justify-center min-h-screen w-full gap-0 lg:gap-4 dark',
          chirp.className
        )}
      >
        <Sidebar />
        {children}
        <Aside />
      </body>
    </html>
  );
}
