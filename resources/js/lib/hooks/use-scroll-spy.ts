import { useEffect, useState } from 'react';

/**
 * Observes every <section id="..."> on the page and returns the id of the one
 * currently in the viewport's upper-middle band. Tune `rootMargin` to bias
 * where on screen the "active" zone sits:
 *   '-30% 0px -60% 0px' means: section becomes active when its top crosses
 *   30% from the viewport top, stays active until it drops below 40% from the
 *   bottom.
 */
export function useScrollSpy(rootMargin = '-30% 0px -60% 0px'): string {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin, threshold: 0 },
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [rootMargin]);

    return activeSection;
}
