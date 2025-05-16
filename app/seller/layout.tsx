import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import { LoadingScreen } from '@/components/common/loading-screen';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'JustShoppingSmart - Compare Prices & Save',
  description: 'Find the best deals across the internet. JustShoppingSmart compares prices for you, so you can shop smarter and save more.',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
      <Providers>
        <LoadingScreen />
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </Providers>
      </body>
      </html>
  );
}