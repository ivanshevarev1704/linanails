const prices = [
  { name: 'Маникюр классический',      price: '500 ₽' },
  { name: 'Маникюр + гель-лак',        price: '1300 ₽' },
  { name: 'Маникюр аппаратный',        price: '1200 ₽' },
  { name: 'Педикюр аппаратный',        price: '1200 ₽' },
  { name: 'Наращивание ногтей (гель)',  price: '2100 ₽' },
  { name: 'Коррекция наращённых',      price: '1600 ₽' },
  { name: 'Укрепление ногтей',         price: '1500 ₽' },
  { name: 'Дизайн (за 1 ноготь)',      price: '25–50 ₽' },
  { name: 'SPA-уход для рук',          price: '500 ₽' },
  { name: 'Наращивание ресниц',        price: 'от 2000 ₽' },
  { name: 'Подарочный сертификат',     price: 'от 1000 ₽' },
];

export default function Prices({ onBook }) {
  return (
    <section id="prices" className="section prices">
      <div className="container">
        <h2 className="section__title">Прайс-лист</h2>
        <p className="section__subtitle">Прозрачные цены без скрытых доплат</p>

        <ul className="prices__list">
          {prices.map((p) => (
            <li key={p.name}>
              <span>{p.name}</span>
              <span className="prices__dots" />
              <strong>{p.price}</strong>
            </li>
          ))}
        </ul>

        <div className="prices__cta">
          <button className="btn btn--primary btn--pulse" onClick={() => onBook()}>
            Записаться онлайн
          </button>
        </div>
      </div>
    </section>
  );
}