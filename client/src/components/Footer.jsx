export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__logo">LinaNails</div>
          <p>Студия красоты и ухода за ногтями. Маникюр, педикюр, наращивание.</p>
        </div>

        <div>
          <h4>Контакты</h4>
          <p>г. Волгоград, 50 Лет Октября, 5</p>
          <p>Ежедневно 9:00 – 21:00</p>
          <p>+7 (995) 402-81-52</p>
        </div>

        <div>
          <h4>Я есть в ВК</h4>
          <a
            className="social-vk"
            href="https://vk.ru/linanailsvlg"
            target="_blank"
            rel="noreferrer"
            aria-label="Мы ВКонтакте"
          >
            <span className="social-vk__ring" />
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M13.16 18.5c-6.14 0-9.65-4.2-9.79-11.2h3.08c.1 5.14 2.37 7.31 4.16 7.76V7.3h2.9v4.42c1.77-.19 3.62-2.2 4.24-4.42h2.9c-.48 2.74-2.5 4.74-3.93 5.56 1.43.67 3.72 2.4 4.6 5.64h-3.2c-.68-2.14-2.38-3.78-4.61-4.01v4.01h-.35z"/>
            </svg>
            <span className="social-vk__label">ВКонтакте</span>
          </a>
        </div>
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} LinaNails. Все права защищены.
      </div>
    </footer>
  );
}