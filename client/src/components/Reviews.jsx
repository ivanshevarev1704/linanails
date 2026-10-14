import { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Анна',
    service: 'Маникюр + дизайн',
    rating: 5,
    text: 'Ангелина — мастер от Бога! Хожу уже полгода, ни разу не было ни скола, ни отслойки. Дизайн подбирает идеально под настроение и образ.',
    date: 'Октябрь 2025',
  },
  {
    name: 'Мария',
    service: 'Наращивание',
    rating: 5,
    text: 'Наконец-то нашла своего мастера! Форма идеальная, длина как заказывала. Очень аккуратно, стерильно, и атмосфера в студии уютная.',
    date: 'Сентябрь 2025',
  },
  {
    name: 'Екатерина',
    service: 'Педикюр SPA',
    rating: 5,
    text: 'После SPA-педикюра ножки как у младенца 😍 Массаж — отдельное удовольствие. Ангелина не торопится, всё делает с душой.',
    date: 'Сентябрь 2025',
  },
  {
    name: 'Ольга',
    service: 'Гель-лак',
    rating: 5,
    text: 'Покрытие держится уже больше 4 недель, ни одного скола! Цвета в палитре — просто мечта. Уже записалась на следующий раз.',
    date: 'Август 2025',
  },
  {
    name: 'Дарья',
    service: 'Коррекция + укрепление',
    rating: 5,
    text: 'Ногти были в ужасном состоянии после другого мастера. Ангелина восстановила за пару месяцев, теперь не нарадуюсь своей натуральной длине.',
    date: 'Август 2025',
  },
  {
    name: 'Виктория',
    service: 'Подарочный сертификат',
    rating: 5,
    text: 'Подарила маме сертификат на маникюр — она в восторге! Ангелина очень внимательная и терпеливая, всё объясняет. Спасибо! 💜',
    date: 'Июль 2025',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="review__stars" aria-label={`${count} из 5 звёзд`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 700) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(t);
  }, [maxIndex]);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [perView, maxIndex, index]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <h2 className="section__title">Отзывы клиентов</h2>
        <p className="section__subtitle">
          Более 2000 довольных клиентов за 9 лет работы
        </p>

        <div className="reviews__viewport">
          <div
            className="reviews__track"
            ref={trackRef}
            style={{
              transform: `translateX(calc(-${index} * (100% / ${perView})))`,
            }}
          >
            {reviews.map((r, i) => (
              <div
                className="review"
                key={i}
                style={{ flex: `0 0 calc(100% / ${perView})` }}
              >
                <div className="review__head">
                  <div className="review__avatar">{r.name.charAt(0)}</div>
                  <div className="review__meta">
                    <strong>{r.name}</strong>
                    <span>{r.service}</span>
                  </div>
                </div>
                <Stars count={r.rating} />
                <p className="review__text">{r.text}</p>
                <span className="review__date">{r.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews__controls">
          <button
            className="reviews__btn"
            onClick={prev}
            aria-label="Предыдущий отзыв"
          >
            ←
          </button>

          <div className="reviews__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`reviews__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Перейти к отзыву ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="reviews__btn"
            onClick={next}
            aria-label="Следующий отзыв"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}