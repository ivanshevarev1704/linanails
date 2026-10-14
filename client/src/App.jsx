import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Prices from './components/Prices';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import useWheelSnap from './hooks/useWheelSnap';
import useScrollShadow from './hooks/useScrollShadow';

// 🌟 Внешние сервисы
export const BOOKING_URL = 'https://n2659888.yclients.ru';
export const MAX_URL = 'https://max.ru/se14657877_bot';
export const VK_URL = 'https://vk.ru/linanailsvlg';

export default function App() {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState('');

  const openBooking = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  const openMax = () => {
    window.open(MAX_URL, '_blank', 'noopener,noreferrer');
  };

  useWheelSnap();
  useScrollShadow();

  return (
    <>
      <Header onBook={openBooking} onMax={openMax} />
      <Hero onBook={openBooking} onMax={openMax} />
      <Services onBook={openBooking} />
      <Prices onBook={openBooking} />
      <Gallery />
      <About />
      <Reviews />
      <Contacts />
      <Footer />
      {open && <BookingModal preset={preset} onClose={() => setOpen(false)} />}
    </>
  );
}