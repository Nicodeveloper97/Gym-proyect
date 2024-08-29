import { useEffect } from 'react';

export const useFadeIn = (duration: number = 1, delay: number = 0) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element: Element) => {
      element.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: duration * 1000,
        delay: delay * 1000,
        fill: 'forwards',
      });
    });
  }, []);
};
