import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Optimize for Vercel deployment
    output: 'standalone',

    // Enable experimental features for better performance
    experimental: {
        optimizePackageImports: ['gsap', 'lucide-react', '@gsap/react'],
    },

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 year cache for optimized images
    },

    // Compression and optimization
    compress: true,

    // Enable SWC minification for smaller bundles
    swcMinify: true,

    // Reduce bundle size by excluding server-only modules from client
    modularizeImports: {
        'lucide-react': {
            transform: 'lucide-react/dist/esm/icons/{{member}}',
        },
    },

    // Headers for better caching and security
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
            // Aggressive caching for static assets (fonts, images, etc.)
            {
                source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2|ttf|eot)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            // Cache JS and CSS chunks
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/cv/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },

    // Redirects for better SEO
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ];
    },

    // Webpack configuration for bundle optimization
    webpack: (config, { dev, isServer }) => {
        // Only apply optimizations in production builds
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 244000,
                    cacheGroups: {
                        // Separate GSAP into its own chunk
                        gsap: {
                            test: /[\\/]node_modules[\\/](gsap|@gsap)[\\/]/,
                            name: 'gsap',
                            priority: 30,
                            reuseExistingChunk: true,
                        },
                        // Vendor chunk for other libraries
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            priority: 20,
                            reuseExistingChunk: true,
                        },
                        // Common components chunk
                        commons: {
                            name: 'commons',
                            minChunks: 2,
                            priority: 10,
                        },
                    },
                },
            };
        }
        return config;
    },
};

export default nextConfig;

