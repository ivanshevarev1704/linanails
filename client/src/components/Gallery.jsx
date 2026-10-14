const works = [
  { src: '/work-1.jpg', alt: 'Френч' },
  { src: '/work-2.jpg', alt: 'Градиент' },
  { src: '/work-3.jpg', alt: 'Дизайн' },
  { src: '/work-4.jpg', alt: 'Стразы' },
  { src: '/work-5.jpg', alt: 'Матовый' },
  { src: '/work-6.jpg', alt: 'Роспись' },
  { src: '/work-7.jpg', alt: 'Омбре' },
  { src: '/work-8.jpg', alt: 'Нюд' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section__title reveal">Мои работы</h2>
        <p className="section__subtitle reveal">
          Каждый дизайн — маленькое произведение искусства
        </p>

        <div className="gallery__grid">
          {works.map((w, i) => (
            <div
              key={i}
              className={`gallery__item gallery__item--${i % 3} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img src={w.src} alt={w.alt} />
              {/* Блик-полоса, пробегающая при наведении */}
              <span className="gallery__shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}