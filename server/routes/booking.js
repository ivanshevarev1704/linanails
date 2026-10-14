import express from 'express';
const router = express.Router();

// Хранилище в памяти (в проде замени на БД: PostgreSQL/MongoDB)
const bookings = [];

// Ссылка на мессенджер MAX (замени на свой username)
const MAX_LINK = process.env.MAX_LINK || 'https://max.ru/u/LinaNails';

router.post('/', (req, res) => {
  const { name, phone, service, date, time, comment } = req.body;
  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Заполните имя, телефон и услугу' });
  }

  const booking = {
    id: Date.now(),
    name, phone, service, date, time, comment,
    createdAt: new Date().toISOString(),
  };
  bookings.push(booking);

  // Формируем ссылку на MAX с предзаполненным текстом
  const text = `Здравствуйте! Хочу записаться в LinaNails.%0A` +
               `Имя: ${name}%0AУслуга: ${service}%0A` +
               (date ? `Дата: ${date}%0A` : '') +
               (time ? `Время: ${time}%0A` : '');

  res.json({
    success: true,
    booking,
    maxUrl: `${MAX_LINK}?text=${text}`,
  });
});

router.get('/', (_req, res) => res.json(bookings));

export default router;