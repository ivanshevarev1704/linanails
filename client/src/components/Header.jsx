import { useState, useEffect } from 'react';
import useActiveSection from '../hooks/useActiveSection';

const MAX_URL = 'https://max.ru/se14657877_bot';
const VK_URL = 'https://vk.ru/linanailsvlg';

export default function Header({ onBook }) {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  // Блокируем скролл body, когда открыто меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const headerH =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h')
      ) || 110;
    setTimeout(() => {
      window.scrollTo({ top: el.offsetTop - headerH, behavior: 'smooth' });
    }, 200);
  };

  const goTop = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a href="#top" className="logo" onClick={goTop}>
            <div className="logo__avatar">LN</div>
            <div className="logo__text">
              <span className="logo__title">LinaNails</span>
              <span className="logo__subtitle">студия красоты</span>
            </div>
          </a>

          {/* Десктопное меню */}
          <nav className="nav nav--desktop">
            <a href="#services" className={active === 'services' ? 'nav--active' : ''} onClick={(e) => goTo(e, 'services')}>Услуги</a>
            <a href="#prices" className={active === 'prices' ? 'nav--active' : ''} onClick={(e) => goTo(e, 'prices')}>Цены</a>
            <a href="#gallery" className={active === 'gallery' ? 'nav--active' : ''} onClick={(e) => goTo(e, 'gallery')}>Работы</a>
            <a href="#about" className={active === 'about' ? 'nav--active' : ''} onClick={(e) => goTo(e, 'about')}>Обо мне</a>
            <a href="#reviews" className={active === 'reviews' ? 'nav--active' : ''} onClick={(e) => goTo(e, 'reviews')}>Отзывы</a>
            <a href="#contacts" className={active === 'contacts' ? 'nav--active' : ''} onClick={(e) => goTo(e, 'contacts')}>Контакты</a>
          </nav>

          {/* Десктопные кнопки */}
          <div className="header__actions header__actions--desktop">
            <button className="btn btn--primary btn--pulse" onClick={onBook}>
              <span>Записаться</span>
            </button>

            <a
              className="header__expand header__expand--max"
              href={MAX_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Написать в MAX"
            >
              <span className="header__expand-icon"><span>M</span></span>
              <span className="header__expand-label">MAX</span>
            </a>

            <a
              className="header__expand header__expand--vk"
              href={VK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Мы ВКонтакте"
            >
              <span className="header__expand-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M13.16 18.5c-6.14 0-9.65-4.2-9.79-11.2h3.08c.1 5.14 2.37 7.31 4.16 7.76V7.3h2.9v4.42c1.77-.19 3.62-2.2 4.24-4.42h2.9c-.48 2.74-2.5 4.74-3.93 5.56 1.43.67 3.72 2.4 4.6 5.64h-3.2c-.68-2.14-2.38-3.78-4.61-4.01v4.01h-.35z"/>
                </svg>
              </span>
              <span className="header__expand-label">VKontakte</span>
            </a>
          </div>

          {/* Бургер — только на мобильных */}
          <button
            className={`burger ${menuOpen ? 'burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Мобильное меню */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <a href="#services" onClick={(e) => goTo(e, 'services')}>Услуги</a>
          <a href="#prices" onClick={(e) => goTo(e, 'prices')}>Цены</a>
          <a href="#gallery" onClick={(e) => goTo(e, 'gallery')}>Работы</a>
          <a href="#about" onClick={(e) => goTo(e, 'about')}>Обо мне</a>
          <a href="#reviews" onClick={(e) => goTo(e, 'reviews')}>Отзывы</a>
          <a href="#contacts" onClick={(e) => goTo(e, 'contacts')}>Контакты</a>
        </nav>

        <div className="mobile-menu__actions">
          <button
            className="btn btn--primary btn--pulse"
            onClick={() => {
              setMenuOpen(false);
              onBook();
            }}
          >
            <span>Записаться</span>
          </button>

          <div className="mobile-menu__socials">
            <a
              className="header__expand header__expand--max"
              href={MAX_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Написать в MAX"
            >
              <span className="header__expand-icon"><span>M</span></span>
              <span className="header__expand-label">MAX</span>
            </a>

            <a
              className="header__expand header__expand--vk"
              href={VK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Мы ВКонтакте"
            >
              <span className="header__expand-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M13.16 18.5c-6.14 0-9.65-4.2-9.79-11.2h3.08c.1 5.14 2.37 7.31 4.16 7.76V7.3h2.9v4.42c1.77-.19 3.62-2.2 4.24-4.42h2.9c-.48 2.74-2.5 4.74-3.93 5.56 1.43.67 3.72 2.4 4.6 5.64h-3.2c-.68-2.14-2.38-3.78-4.61-4.01v4.01h-.35z"/>
                </svg>
              </span>
              <span className="header__expand-label">VKontakte</span>
            </a>
          </div>
        </div>
      </div>

      {/* Затемнение фона */}
      <div
        className={`mobile-menu__backdrop ${menuOpen ? 'mobile-menu__backdrop--open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}