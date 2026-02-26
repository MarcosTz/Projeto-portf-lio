import React, { useState } from 'react';
import './home.css';

const imagens = [
  'https://wallpaperaccess.com/full/1138981.jpg',
  'https://th.bing.com/th/id/R.49e1fe0aac914bf7f8e16a90c390d439?rik=bJVT%2bd5p4g5vsQ&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.PfmLDp62wxYhwTHirypMQgHaHa?rs=1&pid=ImgDetMain',
];

const Carrossel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % imagens.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="carrossel">
      <button onClick={handlePrev}>⇦</button>
      <img src={imagens[index]} alt={`Imagem ${index + 1}`} />
      <button onClick={handleNext}>⇨</button>
    </div>
  );
};

export default Carrossel;
