import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';
import { GoogleAnalytics } from '@next/third-parties/google';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

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
    metadataBase: new URL('https://manishprakkashms.vercel.app'),
    title: 'Manish Prakkash - Full Stack MERN Developer Portfolio',
    description: 'Full Stack MERN Developer with 1+ years building scalable web solutions using React, Node.js, MongoDB, Express, and TypeScript. Explore my projects and skills.',
    keywords: ['Full Stack Developer', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Manish Prakash' }],
    creator: 'Manish Prakash',
    publisher: 'Manish Prakash',
    robots: 'index, follow',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Manish Prakkash - Full Stack MERN Developer Portfolio',
        description: 'Full Stack MERN Developer with 1+ years building scalable web solutions using React, Node.js, MongoDB, Express, and TypeScript.',
        url: 'https://manishprakkashms.vercel.app',
        type: 'website',
        locale: 'en_US',
        siteName: 'Manish Prakash Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Manish Prakkash - Full Stack MERN Developer Portfolio',
        description: 'Full Stack MERN Developer with 1+ years building scalable web solutions using React, Node.js, MongoDB, Express, and TypeScript.',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const themeColor = '#000000';

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manish Prakkash',
    jobTitle: 'Full Stack MERN Developer',
    url: 'https://manishprakkashms.vercel.app',
    sameAs: SOCIAL_LINKS.map(link => link.url),
    knowsAbout: [
        'React',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'Express',
        'Tailwind CSS',
        'Firebase',
        'JavaScript',
        'Full Stack Development',
        'MERN Stack'
    ],
    email: GENERAL_INFO.email,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
                suppressHydrationWarning
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
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
            <GoogleAnalytics gaId="G-MBGQG95ZVK" />
        </html>
    );
}
