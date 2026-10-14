import { useEffect } from 'react';

/**
 * Тень и лёгкое уплотнение фона шапки при скролле страницы.
 */
export default function useScrollShadow() {
  useEffect(() => {
    const header = document.querySelector('.header');
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 8px 30px rgba(123, 44, 191, .12)';
        header.style.background = 'rgba(253, 247, 244, 0.98)';
      } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(253, 247, 244, 0.95)';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}