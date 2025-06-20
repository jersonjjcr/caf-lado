import React, { useState, useEffect } from 'react';
import promo1 from '../assets/promos/promo1.png';
import promo2 from '../assets/promos/promo2.png';
import promo3 from '../assets/promos/promo3.png';

const promociones = [promo1, promo2, promo3,];

const BannerCarrusel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % promociones.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="banner-carousel">
      <img src={promociones[index]} alt={`Promoción ${index + 1}`} />
    </section>
  );
};

export default BannerCarrusel;
