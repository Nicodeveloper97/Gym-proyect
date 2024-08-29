import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className=" w-full footer bg-gray-800 text-gray-400 py-10 px-4 md:px-6">
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg text-white font-semibold">Síguenos en</h3>
          <div className="mt-4 flex justify-center md:justify-start space-x-6">
            <a href="https://www.instagram.com" aria-label="Instagram" className="hover:text-purple-400">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.tiktok.com" aria-label="TikTok" className="hover:text-purple-400">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="https://twitter.com" aria-label="X" className="hover:text-purple-400">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg text-white font-semibold">Contacto</h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>info@gym-ejemplo.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 Gym random. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
