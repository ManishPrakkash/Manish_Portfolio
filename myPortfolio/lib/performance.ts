// Performance optimization utilities

export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
};

export const preloadImages = async (srcs: string[]): Promise<void> => {
    const promises = srcs.map((src) => preloadImage(src));
    await Promise.all(promises);
};

// Lazy loading utility
export const lazyLoad = (element: HTMLElement, callback: () => void) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(element);
            }
        });
    });

    observer.observe(element);
};

// Debounce utility for performance
export const debounce = <T extends (..._args: any[]) => any>(
    func: T,
    wait: number,
): ((..._args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;

    return (..._args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(..._args), wait);
    };
};

// Throttle utility for performance
export const throttle = <T extends (..._args: any[]) => any>(
    func: T,
    limit: number,
): ((..._args: Parameters<T>) => void) => {
    let inThrottle: boolean;

    return (..._args: Parameters<T>) => {
        if (!inThrottle) {
            func(..._args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
};

// Resource hints for better performance
export const addResourceHints = () => {
    const links = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'anonymous',
        },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://static.hotjar.com' },
    ];

    links.forEach(({ rel, href, crossOrigin }) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (crossOrigin) link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
    });
};
