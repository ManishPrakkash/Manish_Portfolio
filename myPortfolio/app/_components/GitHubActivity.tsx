"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CommitsData, CommitsGrid } from '@/components/ui/commits-grid';

export const GitHubActivity = () => {
  const [sequence, setSequence] = useState<'noise1' | 'text' | 'noise2' | 'data'>('noise1');
  const [githubData, setGithubData] = useState<CommitsData | null>(null);
  const [noiseData, setNoiseData] = useState<CommitsData | null>(() => {
    const cells: { index: number }[] = [];
    for (let i = 0; i < 53 * 7; i++) {
      if (Math.random() < 0.1) cells.push({ index: i }); 
    }
    return { cells, width: 53, height: 7 };
  });
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const cacheKey = 'github_contributions_cache';
        const cacheTimeKey = 'github_contributions_cache_time';
        const cachedData = localStorage.getItem(cacheKey);
        const cachedTime = localStorage.getItem(cacheTimeKey);

        const now = new Date().getTime();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (cachedData && cachedTime && now - parseInt(cachedTime) < twentyFourHours) {
          setGithubData(JSON.parse(cachedData));
          return;
        }

        const res = await fetch('https://github-contributions-api.deno.dev/ManishPrakkash.json');
        if (!res.ok) throw new Error('Failed to fetch github data');

        const data = await res.json();
        const cells: { index: number; color: string }[] = [];
        
        if (data.contributions) {
          data.contributions.forEach((week: any[], colIndex: number) => {
            week.forEach((day: any, rowIndex: number) => {
              if (day.contributionCount > 0) {
                cells.push({
                  index: rowIndex * 53 + colIndex,
                  color: day.color
                });
              }
            });
          });
        }

        const formattedData = { cells, width: 53, height: 7 };
        setGithubData(formattedData);
        localStorage.setItem(cacheKey, JSON.stringify(formattedData));
        localStorage.setItem(cacheTimeKey, now.toString());
      } catch (error) {
        console.error(error);
        const cachedData = localStorage.getItem('github_contributions_cache');
        if (cachedData) setGithubData(JSON.parse(cachedData));
      }
    };

    fetchGithubData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setHasStarted(true), 600); // Wait for GSAP slide-up to complete
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const t1 = setTimeout(() => setSequence('text'), 2000); // Slower initial noise
    const t2 = setTimeout(() => setSequence('noise2'), 2000 + 4000); 
    const t3 = setTimeout(() => setSequence('data'), 2000 + 4000 + 2000); 
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (sequence === 'noise1' || sequence === 'noise2') {
      const generateNoise = () => {
        const cells: { index: number }[] = [];
        for (let i = 0; i < 53 * 7; i++) {
          if (Math.random() < 0.1) { // Lighter density
             cells.push({ index: i }); 
          }
        }
        setNoiseData({ cells, width: 53, height: 7 });
      };
      
      generateNoise();
      const interval = setInterval(generateNoise, 600); // Slower update + duration-1000 transition = smooth breathing
      return () => clearInterval(interval);
    }
  }, [hasStarted, sequence]);

  const getActiveData = () => {
    if (!hasStarted) return noiseData || { cells: [], width: 53, height: 7 };
    if (sequence === 'noise1' || sequence === 'noise2') return noiseData || { cells: [], width: 53, height: 7 };
    if (sequence === 'data' && githubData) return githubData;
    return { cells: [], width: 53, height: 7 }; 
  };

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center slide-up-and-fade mt-32 sm:mt-48 overflow-hidden">
      <h3 className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-6 slide-up-and-fade">
        {sequence === 'data' ? 'Live GitHub Contributions' : 'Syncing Profile...'}
      </h3>
      <div className="w-full max-w-5xl relative overflow-x-auto overflow-y-hidden flex justify-start sm:justify-center scrollbar-hide py-2 slide-up-and-fade">
         <div className="w-fit px-4 sm:px-0 mx-auto">
           {sequence === 'text' ? (
             <CommitsGrid text="MANISH" />
           ) : (
             <CommitsGrid data={getActiveData()} />
           )}
         </div>
      </div>
    </div>
  );
};
