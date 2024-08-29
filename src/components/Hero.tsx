import React from 'react';
import { useFadeIn } from './Animations';

const Hero: React.FC = () => {
  useFadeIn(1, 0.5);

  return (
    <section className="w-full hero fade-in text-center py-20 px-4 bg-gradient-to-b from-gray-800 to-black md:py-24">
      <h1 className="text-3xl md:text-5xl font-bold text-purple-400">Transforma tu Cuerpo</h1>
      <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300">
        Únete a nuestro gimnasio y alcanza tus objetivos de fitness con entrenadores expertos y un ambiente motivador.
      </p>
      <button className="mt-6 md:mt-10 px-6 md:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg">
        Comienza Ahora
      </button>
    </section>
  );
};

export default Hero;
