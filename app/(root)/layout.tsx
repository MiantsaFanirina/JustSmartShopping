import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Chatbot } from '@/components/common/chatbot';
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
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Chatbot />
            <Footer />
            <Toaster />
        </Providers>
        </body>
        </html>
    );
}