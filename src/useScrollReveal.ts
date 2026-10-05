import { useEffect, useRef } from 'react';

/**
 * IntersectionObserver hook that adds .visible to elements with .reveal / .reveal-stagger
 */
export function useScrollReveal() {
  const sentinelRef = useRef<boolean>(false);

  useEffect(() => {
    if (sentinelRef.current) return;
    sentinelRef.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = document.querySelectorAll('.reveal, .reveal-stagger');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
