import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    title: 'Manish Prakash - Full Stack Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and experience.',
    keywords: ['Full Stack Developer', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Manish Prakash' }],
    creator: 'Manish Prakash',
    publisher: 'Manish Prakash',
    robots: 'index, follow',
    openGraph: {
        title: 'Manish Prakash - Full Stack Developer Portfolio',
        description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Manish Prakash Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Manish Prakash - Full Stack Developer Portfolio',
        description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const themeColor = '#000000';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* <ClientScripts /> */}
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >

                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
