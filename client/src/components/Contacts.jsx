export default function Contacts() {
  return (
    <section id="contacts" className="section contacts">
      <div className="container">
        <h2 className="section__title">Контакты</h2>
        <p className="section__subtitle">
          Свяжитесь удобным для вас способом
        </p>

        {/* Быстрые кнопки связи */}
        <div className="contacts__actions">
          <a
            className="contact-btn contact-btn--phone"
            href="tel:+79954028152"
          >
            <span className="contact-btn__icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </span>
            <span>Позвонить нам</span>
          </a>

          <a
            className="contact-btn contact-btn--max"
            href="https://max.ru/se14657877_bot"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-btn__icon">
              <span className="contact-btn__max-letter">M</span>
            </span>
            <span>Написать в MAX</span>
          </a>

          <a
            className="contact-btn contact-btn--vk"
            href="https://vk.ru/linanailsvlg"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-btn__icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13.16 18.5c-6.14 0-9.65-4.2-9.79-11.2h3.08c.1 5.14 2.37 7.31 4.16 7.76V7.3h2.9v4.42c1.77-.19 3.62-2.2 4.24-4.42h2.9c-.48 2.74-2.5 4.74-3.93 5.56 1.43.67 3.72 2.4 4.6 5.64h-3.2c-.68-2.14-2.38-3.78-4.61-4.01v4.01h-.35z"/>
              </svg>
            </span>
            <span>Мы в ВК</span>
          </a>
        </div>

        {/* Контактная информация + карта */}
        <div className="contacts__info">
          <div className="contacts__details">
            <div className="contact-item">
              <span className="contact-item__icon">📞</span>
              <div>
                <strong>Телефон</strong>
                <a href="tel:+79954028152">+7 (995) 402-81-52</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-item__icon">📍</span>
              <div>
                <strong>Адрес</strong>
                <span>г. Волгоград, ул. 50 лет Октября, 5</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-item__icon">🕐</span>
              <div>
                <strong>Режим работы</strong>
                <span>Ежедневно 10:00 – 20:00</span>
              </div>
            </div>
          </div>

          <div className="contacts__map">
<iframe
  title="Карта — LinaNails"
  src="https://yandex.ru/map-widget/v1/?ll=44.556916%2C48.723815&z=17&pt=44.556916,48.723815,pm2rdl"
  width="100%"
  height="100%"
  frameBorder="0"
  allowFullScreen
  loading="lazy"
  style={{ border: 0 }}
/>
          </div>
        </div>
      </div>
    </section>
  );
}