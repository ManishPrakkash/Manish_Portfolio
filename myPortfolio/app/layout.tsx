import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import ClientLayout from '@/components/ClientLayout';
import SmoothScroll from '@/components/SmoothScroll';
import MaintenancePage from './_components/MaintenanceView';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { RESOURCE_HINTS } from '@/lib/performance';
import MaintenanceCursor from './_components/MaintenanceCursor';
import GlobalParticle from '@/components/GlobalParticle';

// ─── MAINTENANCE MODE TOGGLE ───────────────────────────────────────────────
// Set to `true` to show the "Under Development" page to all visitors.
// Set to `false` to restore the normal portfolio.
// You can also use an environment variable: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
const MAINTENANCE_MODE = false;
// ───────────────────────────────────────────────────────────────────────────
// Force reload trigger
// Optimized font loading with display: swap for better performance
const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
    display: 'swap', // Prevents FOIT (Flash of Invisible Text)
});

const robotoFlex = Roboto_Flex({
    weight: ['400', '500', '700'], // Reduced weights for smaller bundle
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://manishprakkashms.vercel.app'),
    title: 'Manish Prakkash - DevOps Engineer Portfolio',
    description:
        'DevOps Engineer specializing in scalable cloud infrastructure, automated pipelines, and full-stack architecture. Explore my projects and skills.',
    keywords: [
        'DevOps Engineer',
        'React',
        'Node.js',
        'JavaScript',
        'TypeScript',
        'Portfolio',
    ],
    authors: [{ name: 'Manish Prakash' }],
    creator: 'Manish Prakash',
    publisher: 'Manish Prakash',
    robots: 'index, follow',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Manish Prakkash - DevOps Engineer Portfolio',
        description:
            'DevOps Engineer specializing in scalable cloud infrastructure, automated pipelines, and full-stack architecture.',
        url: 'https://manishprakkashms.vercel.app',
        type: 'website',
        locale: 'en_US',
        siteName: 'Manish Prakash Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Manish Prakkash - DevOps Engineer Portfolio',
        description:
            'DevOps Engineer specializing in scalable cloud infrastructure, automated pipelines, and full-stack architecture.',
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
    jobTitle: 'DevOps Engineer',
    url: 'https://manishprakkashms.vercel.app',
    sameAs: SOCIAL_LINKS.map((link) => link.url),
    knowsAbout: [
        'React',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'Express',
        'Tailwind CSS',
        'Firebase',
        'JavaScript',
        'DevOps',
        'Cloud Infrastructure',
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
            <head>
                {/* Resource hints for faster external resource loading */}
                {RESOURCE_HINTS.preconnect.map((url) => (
                    <link
                        key={url}
                        rel="preconnect"
                        href={url}
                        crossOrigin="anonymous"
                    />
                ))}
                {RESOURCE_HINTS.dnsPrefetch.map((url) => (
                    <link key={url} rel="dns-prefetch" href={url} />
                ))}
            </head>
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased ${MAINTENANCE_MODE ? 'maintenance-mode' : ''}`}
                suppressHydrationWarning
            >
                {/* Minified structured data for reduced HTML size */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
                <SmoothScroll>
                    {MAINTENANCE_MODE ? (
                        <>
                            <MaintenancePage />
                            <MaintenanceCursor />
                        </>
                    ) : (
                        <>
                            <Navbar />
                            <main>{children}</main>
                            <Footer />
                        </>
                    )}
                </SmoothScroll>

                <GlobalParticle />

                {!MAINTENANCE_MODE && (
                    <>
                        <ClientLayout />
                        <Preloader />
                        <StickyEmail />
                    </>
                )}
            </body>
            <GoogleAnalytics gaId="G-MBGQG95ZVK" />
            <Analytics />
            <Script id="microsoft-clarity" strategy="afterInteractive">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "x3raq6f9m3");
                `}
            </Script>
        </html>
    );
}
