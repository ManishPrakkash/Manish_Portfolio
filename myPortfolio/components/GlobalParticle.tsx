'use client';

import React from 'react';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

export default function GlobalParticle() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}
