import { useEffect, useState } from 'react';

/**
 * Определяет активную секцию при скролле и подсвечивает её в меню.
 */
export default function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const onScroll = () => {
      const headerH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h')
      ) || 100;

      let current = '';
      sections.forEach((sec) => {
        const top = sec.offsetTop - headerH - 20;
        if (window.scrollY >= top) {
          current = sec.id;
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return active;
}