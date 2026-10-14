import { useEffect, useRef } from 'react';

/**
 * Плавное перелистывание секций колёсиком.
 * НЕ трогает клики по якорным ссылкам — они работают через CSS.
 */
export default function useWheelSnap() {
  const isAnimating = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll('.hero, .section, .footer')
    );
    if (!sections.length) return;

    // Получаем высоту шапки из CSS-переменной
    const getHeaderH = () =>
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h')
      ) || 110;

    // Easing
    const easeInOutQuint = (t) =>
      t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

    const smoothScrollTo = (targetY, duration = 1500) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuint(progress);
        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          rafId.current = requestAnimationFrame(step);
        } else {
          isAnimating.current = false;
          rafId.current = null;
        }
      };

      cancelAnimationFrame(rafId.current);
      isAnimating.current = true;
      rafId.current = requestAnimationFrame(step);
    };

    const getCurrentIndex = () => {
      const scrollY = window.scrollY;
      const headerH = getHeaderH();
      let closest = 0;
      let minDist = Infinity;
      sections.forEach((sec, i) => {
        const dist = Math.abs(sec.offsetTop - headerH - scrollY);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      return closest;
    };

    const scrollToIndex = (index) => {
      const target = Math.max(0, Math.min(index, sections.length - 1));
      const el = sections[target];
      const headerH = getHeaderH();
      smoothScrollTo(el.offsetTop - headerH, 1500);
    };

    let accumulated = 0;
    let lastTime = Date.now();

    const onWheel = (e) => {
      if (document.querySelector('.modal')) return;
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const current = getCurrentIndex();
      const currentEl = sections[current];
      const sectionHeight = currentEl.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (sectionHeight > viewportHeight + 40) {
        const top = currentEl.offsetTop;
        const bottom = top + sectionHeight;
        const scrollY = window.scrollY;
        const atTop = scrollY <= top + 20;
        const atBottom = scrollY + viewportHeight >= bottom - 20;

        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
          return;
        }
      }

      e.preventDefault();

      const now = Date.now();
      if (now - lastTime > 250) accumulated = 0;
      lastTime = now;
      accumulated += Math.abs(e.deltaY);

      if (accumulated < 40) return;
      accumulated = 0;

      if (isAnimating.current) return;

      if (e.deltaY > 0) scrollToIndex(current + 1);
      else if (e.deltaY < 0) scrollToIndex(current - 1);
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(rafId.current);
    };
  }, []);
}