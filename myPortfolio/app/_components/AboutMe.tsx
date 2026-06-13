'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { GitHubActivity } from './GitHubActivity';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-12 slide-up-and-fade">
                    Software Engineer focused on scalable infrastructure,
                    security, and full‑stack delivery.
                </h2>
                <p className="text-lg md:text-xl mb-16 slide-up-and-fade text-muted-foreground max-w-3xl">
                    From designing automated <strong>CI/CD pipelines</strong>{' '}
                    and resilient cloud architecture to crafting
                    high-performance <strong>React/Next.js</strong> frontends, I
                    engineer full software lifecycles that scale securely from
                    day one.
                </p>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <h3 className="text-5xl slide-up-and-fade font-anton">
                            Hi, I&apos;m Manish Prakkash
                        </h3>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I engineer reliable platforms from the cloud
                                down to the UI. I specialize in{' '}
                                <strong>DevSecOps</strong> and full-stack
                                architecture, bridging the gap between writing
                                code and shipping secure, automated deployments.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                More than just building features, my focus is on architecting robust solutions. My work emphasizes{' '}
                                <strong>infrastructure as code</strong>,
                                zero-trust security, and resilient backend
                                modeling to deliver products that perform under
                                pressure.
                            </p>
                        </div>
                    </div>
                </div>

                <GitHubActivity />
            </div>
        </section>
    );
};

export default AboutMe;
