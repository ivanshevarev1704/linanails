const services = [
  { title: 'Маникюр классический',      price: '500 ₽',    desc: 'Классическая обработка, покрытие по желанию' },
  { title: 'Маникюр + гель-лак',        price: '1300 ₽',   desc: 'Маникюр с покрытием гель-лаком' },
  { title: 'Маникюр аппаратный',        price: '1200 ₽',   desc: 'Аппаратная обработка кутикулы' },
  { title: 'Педикюр аппаратный',        price: '1200 ₽',   desc: 'Аппаратная обработка стоп и ногтей' },
  { title: 'Наращивание ногтей (гель)',  price: '2100 ₽',   desc: 'Гель, акригель, полигель любой формы' },
  { title: 'Коррекция наращённых',      price: '1600 ₽',   desc: 'Коррекция формы и покрытия' },
  { title: 'Укрепление ногтей',         price: '1500 ₽',   desc: 'Восстановление и укрепление ногтевой пластины' },
  { title: 'Дизайн (за 1 ноготь)',      price: '25–50 ₽',  desc: 'Френч, градиент, авторская роспись' },
  { title: 'SPA-уход для рук',          price: '500 ₽',    desc: 'Питание, массаж, парафинотерапия' },
  { title: 'Наращивание ресниц',        price: 'от 2000 ₽', desc: 'Классика / объём / 2D-3D' },
  {
    title: 'Сертификаты',
    price: 'от 1000 ₽',
    desc: 'Подарочные сертификаты на любую сумму',
    cta: 'Купить',
  },
];

export default function Services({ onBook }) {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section__title reveal">Мои услуги</h2>
        <p className="section__subtitle reveal">
          Полный спектр ухода за руками, ногами и не только
        </p>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal ${s.cta ? 'service-card--gift' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => onBook(s.title)}
            >
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>

              <div className="service-card__footer">
                <span className="service-card__price">{s.price}</span>
                <span className="service-card__link">
                  {s.cta || 'Записаться'} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}