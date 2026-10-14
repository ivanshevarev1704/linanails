import { useState } from 'react';

const serviceOptions = [
  'Маникюр', 'Педикюр', 'Наращивание', 'Дизайн',
  'Укрепление / коррекция', 'Гель-лак', 'SPA-уход', 'Ресницы',
];

export default function BookingModal({ preset, onClose }) {
  const [form, setForm] = useState({
    name: '', phone: '', service: preset || '', date: '', time: '', comment: '',
  });
  const [status, setStatus] = useState('idle');
  const [maxUrl, setMaxUrl] = useState('');

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setMaxUrl(data.maxUrl);
        setStatus('success');
        window.open(data.maxUrl, '_blank');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>
        <h3>Запись в LinaNails</h3>
        <p className="modal__hint">Заполните форму — и подтвердите запись в мессенджере MAX</p>

        {status === 'success' ? (
          <div className="modal__success">
            <p>✅ Заявка создана!</p>
            <a href={maxUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
              Открыть чат в MAX
            </a>
          </div>
        ) : (
          <form onSubmit={submit} className="modal__form">
            <input name="name" placeholder="Ваше имя" value={form.name} onChange={handle} required />
            <input name="phone" placeholder="Телефон" value={form.phone} onChange={handle} required />
            <select name="service" value={form.service} onChange={handle} required>
              <option value="">Выберите услугу</option>
              {serviceOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
            <div className="modal__row">
              <input type="date" name="date" value={form.date} onChange={handle} />
              <input type="time" name="time" value={form.time} onChange={handle} />
            </div>
            <textarea name="comment" placeholder="Комментарий (по желанию)" value={form.comment} onChange={handle} rows={3} />
            <button type="submit" className="btn btn--primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Отправляем…' : 'Записаться через MAX'}
            </button>
            {status === 'error' && <p className="error">Что-то пошло не так. Попробуйте снова.</p>}
          </form>
        )}
      </div>
    </div>
  );
}