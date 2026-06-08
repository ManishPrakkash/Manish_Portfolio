'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { Code2, Terminal, Sparkles } from 'lucide-react';

export default function MaintenancePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    /* ── GSAP Animations ─────────────────────────────────────── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.reveal-item', { y: 30, opacity: 0 });

            document.fonts.ready.then(() => {
                const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

                tl.to('.reveal-item', {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.15,
                });

                // Extremely subtle breathing glow
                gsap.to(glowRef.current, {
                    scale: 1.1,
                    opacity: 0.4,
                    duration: 5,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen w-full bg-[#1a1a1a] flex flex-col items-center justify-center font-[family-name:var(--font-roboto-flex)] overflow-hidden"
        >
            {/* ── Ultra Minimal Ambient Glow ──────────────────── */}
            <div
                ref={glowRef}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full z-0 opacity-20 mix-blend-screen"
                style={{
                    background:
                        'radial-gradient(circle, hsl(var(--primary) / 0.05) 0%, transparent 60%)',
                }}
            />

            {/* ── MAIN CONTENT ──────────────────────── */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
                {/* Status Dot Removed */}

                {/* Huge Minimal Title */}
                <h1 
                    className="reveal-item opacity-0 leading-[0.9] tracking-wider uppercase mb-10 w-full text-foreground/90 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
                    style={{ 
                        fontFamily: 'var(--font-anton), sans-serif',
                    }}
                >
                    <span className="text-primary">PORTFOLIO</span>
                    <span>COOKING<span className="text-primary">.</span></span>
                </h1>

                {/* Subtitle */}
                <p className="reveal-item opacity-0 text-muted-foreground/60 text-sm md:text-base font-light tracking-[0.2em] uppercase mb-16 max-w-xl">
                    Portfolio is undergoing a refined architectural update.
                </p>

                {/* Links */}
                <div className="reveal-item opacity-0 flex items-center justify-center gap-8">
                    <a
                        href="https://github.com/ManishPrakkash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/50 hover:text-foreground hover:-translate-y-1 transition-all duration-300"
                        title="GitHub"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    
                    <a
                        href="https://www.linkedin.com/in/manish-prakkash-03b3a931a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/50 hover:text-foreground hover:-translate-y-1 transition-all duration-300"
                        title="LinkedIn"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>

                    <a
                        href="mailto:manishprakkash@gmail.com"
                        className="text-muted-foreground/50 hover:text-foreground hover:-translate-y-1 transition-all duration-300"
                        title="Email"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
