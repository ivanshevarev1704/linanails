export default function Hero({ onBook, onMax }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>
            Красота в каждой <span className="accent">детали</span>
          </h1>
          <p>
            Маникюр, педикюр, наращивание и авторский дизайн.
            Забота о ваших руках с любовью к каждой мелочи.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary btn--pulse" onClick={onBook}>
              Записаться онлайн
            </button>
            <button className="btn btn--primary btn--pulse btn--max" onClick={onMax}>
              <span className="btn__max-letter">M</span>
              <span>Написать в MAX</span>
            </button>
          </div>

          <div className="hero__stats hero__stats--desktop">
            <div><strong>9+</strong><span>лет опыта</span></div>
            <div><strong>2000+</strong><span>довольных клиентов</span></div>
            <div><strong>4.9★</strong><span>средняя оценка</span></div>
          </div>
        </div>

        <div className="hero__art">
          <div className="blob blob--violet" />
          <div className="blob blob--pink" />
          <div className="blob blob--autumn" />
          <div className="hero__card">
            <span className="hero__card-emoji">💅</span>
          </div>
        </div>
      </div>
    </section>
  );
}