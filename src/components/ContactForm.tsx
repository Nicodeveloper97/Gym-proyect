import React from 'react';
import { useFadeIn } from './Animations';

const ContactForm: React.FC = () => {
  useFadeIn(1, 0.5);

  return (
    <section className="w-full contact-form fade-in py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-800 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">Contáctanos</h2>
      <p className="mt-4 text-base md:text-lg text-gray-300 max-w-lg mx-auto">
        Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
      </p>
      <form className="mt-8 max-w-md md:max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-left text-gray-300">Nombre</label>
          <input type="text" id="name" name="name" className="w-full p-3 bg-gray-700 text-white rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block text-left text-gray-300">Email</label>
          <input type="email" id="email" name="email" className="w-full p-3 bg-gray-700 text-white rounded" />
        </div>
        <div>
          <label htmlFor="message" className="block text-left text-gray-300">Mensaje</label>
          <textarea id="message" name="message" className="w-full p-3 bg-gray-700 text-white rounded"></textarea>
        </div>
        <button type="submit" className="w-40 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
