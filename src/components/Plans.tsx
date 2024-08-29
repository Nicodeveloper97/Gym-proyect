import React from 'react';
import PlanCard from './PlanCard';
import { useFadeIn } from './Animations';

const Plans: React.FC = () => {
  useFadeIn(1, 0.5);

  return (
    <section className="plans fade-in py-16 md:py-24 px-4 bg-gray-900 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">Elige tu Plan</h2>
      <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
        Ofrecemos opciones flexibles para que puedas elegir el plan que mejor se adapte a tus necesidades.
      </p>
      <div className="mt-12 md:mt-16 flex flex-col md:flex-row flex-wrap justify-center">
        <PlanCard
          title="Mensual"
          price="$50/mes"
          features={['Acceso ilimitado', '1 clase grupal por semana', 'Acceso a la app']}
        />
        <PlanCard
          title="Semestral"
          price="$270/6 meses"
          features={['Acceso ilimitado', '3 clases grupales por semana', 'Acceso a la app']}
        />
        <PlanCard
          title="Anual"
          price="$500/año"
          features={['Acceso ilimitado', 'Clases grupales ilimitadas', 'Acceso a la app']}
        />
      </div>
    </section>
  );
};

export default Plans;
