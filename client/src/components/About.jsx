import { useEffect, useRef } from 'react';

const features = [
  { title: 'Стерильность',      desc: 'Сухожаровой шкаф и одноразовые файлы' },
  { title: 'Премиум-материалы', desc: 'Luxio, CND, Kodi — проверенные бренды' },
  { title: 'Атмосфера',         desc: 'Уютная студия, чай и любимая музыка' },
  { title: 'Гибкий график',     desc: 'Работаю ежедневно с 9:00 до 21:00' },
];

const STAR_POSITIONS = [
  { top: '2%',  left: '10%' },
  { top: '10%', right: '8%' },
  { top: '30%', left: '-2%' },
  { top: '50%', right: '-4%' },
  { top: '68%', left: '0%' },
  { bottom: '6%', right: '14%' },
  { top: '18%', left: '44%' },
  { bottom: '14%', left: '28%' },
  { top: '42%', right: '18%' },
];

export default function About() {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;

    // Создаём 9 звёздочек один раз
    const stars = STAR_POSITIONS.map((pos, i) => {
      const el = document.createElement('span');
      el.className = 'star';
      el.textContent = '✦';
      Object.assign(el.style, pos);
      el.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(el);
      return el;
    });

    // Каждые 600мс случайная звёздочка "вспыхивает"
    const interval = setInterval(() => {
      const star = stars[Math.floor(Math.random() * stars.length)];

      // Рандомим новую позицию каждый раз
      const newPos = STAR_POSITIONS[Math.floor(Math.random() * STAR_POSITIONS.length)];
      star.style.top = newPos.top || '';
      star.style.bottom = newPos.bottom || '';
      star.style.left = newPos.left || '';
      star.style.right = newPos.right || '';

      // Новая случайная величина
      const size = 18 + Math.random() * 16; // 18–34px
      star.style.fontSize = `${size}px`;

      // Триггерим вспышку
      star.classList.remove('star--flash');
      // рестарт анимации
      void star.offsetWidth;
      star.classList.add('star--flash');
    }, 600);

    return () => {
      clearInterval(interval);
      stars.forEach((s) => s.remove());
    };
  }, []);

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__photo reveal">
          <div className="about__stars" ref={starsRef} />
         <div className="about__photo-circle">
  <img src="/lina.jpg" alt="Лина" />
</div>
          <div className="about__badge">9+ лет</div>
        </div>

        <div className="about__content reveal">
          <span className="section__eyebrow">Обо мне</span>
          <h2 className="section__title" style={{ textAlign: 'left' }}>
            Привет, я <span className="accent">Ангелина</span>
          </h2>
          <p className="about__lead">
            Сертифицированный мастер ногтевого сервиса. Работаю с любовью
            к деталям и вниманием к здоровью ваших ногтей.
          </p>

          <div className="about__features">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="about__feature reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="about__feature-icon">✦</div>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}