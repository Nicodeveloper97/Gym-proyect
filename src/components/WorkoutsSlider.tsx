import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import { useFadeIn } from './Animations';

const WorkoutsSlider: React.FC = () => {
  useFadeIn(1, 0.5);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const workouts = [
    {
      title: 'Entrenamiento de Fuerza',
      description: 'Desarrolla fuerza y masa muscular con nuestro equipo de pesas y programas personalizados.',
    },
    {
      title: 'Cardio',
      description: 'Mejora tu resistencia cardiovascular con nuestras clases de HIIT y máquinas de cardio de última generación.',
    },
    {
      title: 'Yoga y Pilates',
      description: 'Equilibra tu mente y cuerpo con nuestras clases de yoga y pilates, perfectas para todos los niveles.',
    },
    // Añade más entrenamientos si es necesario
  ];

  return (
    <section className="w-full workouts fade-in py-16 md:py-24 px-4 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">Nuestros Entrenamientos</h2>
      <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
        Ofrecemos una amplia variedad de entrenamientos, desde fuerza y resistencia hasta yoga y pilates.
      </p>
      <div className="mt-12 md:mt-16">
        <Slider {...settings}>
          {workouts.map((workout, index) => (
            <div key={index} className="p-6">
              <div className="bg-gray-800 rounded-lg py-8 px-6 text-center">
                <h3 className="text-xl md:text-2xl text-purple-400">{workout.title}</h3>
                <p className="mt-4 text-gray-300">{workout.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkoutsSlider;
