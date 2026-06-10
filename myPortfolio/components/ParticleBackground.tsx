'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState, useEffect, memo, useMemo } from 'react';
import { getOptimalParticleCount, prefersReducedMotion } from '@/lib/performance';

gsap.registerPlugin(useGSAP);

/**
 * Optimized particle background component
 * - Reduces particles based on device capability
 * - Respects reduced motion preferences
 * - Uses memoization for better performance
 */
const ParticleBackground = memo(() => {
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const [particleCount, setParticleCount] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(true);

    // Determine optimal particle count on mount (client-side only)
    useEffect(() => {
        setParticleCount(getOptimalParticleCount());
        setShouldAnimate(!prefersReducedMotion());
    }, []);

    // Create particle array only when count is determined
    const particles = useMemo(() => 
        Array.from({ length: particleCount }, (_, i) => i), 
        [particleCount]
    );

    useGSAP(() => {
        if (particleCount === 0) return;

        particlesRef.current.forEach((particle) => {
            if (!particle) return;
            
            gsap.set(particle, {
                width: Math.random() * 3 + 2, // 2 to 5px
                height: Math.random() * 3 + 2, // 2 to 5px
                opacity: Math.random() * 0.4 + 0.3, // 0.3 to 0.7 base opacity
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
            });

            if (shouldAnimate) {
                gsap.to(particle, {
                    opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 peak twinkle opacity
                    duration: Math.random() * 3 + 2, // 2 to 5 second duration
                    repeat: -1,
                    yoyo: true, // Smoothly fade back and forth
                    ease: 'sine.inOut',
                    delay: Math.random() * 5, // Randomize when they start twinkling
                });
            }
        });
    }, [particleCount, shouldAnimate]);

    // Don't render anything until we know the particle count
    if (particleCount === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
            {particles.map((i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) particlesRef.current[i] = el;
                    }}
                    className="absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;

