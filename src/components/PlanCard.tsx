import React from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, features }) => {
  return (
    <div className="plan-card bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 text-center text-white mx-2 my-4 md:mx-4">
      <h3 className="text-2xl md:text-3xl font-bold text-purple-400">{title}</h3>
      <p className="text-xl md:text-2xl mt-4">{price}</p>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300">{feature}</li>
        ))}
      </ul>
      <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg">
        Suscribirse
      </button>
    </div>
  );
};

export default PlanCard;
