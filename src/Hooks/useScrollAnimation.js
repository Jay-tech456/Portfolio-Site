// src/hooks/useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      const footer = document.querySelector('footer');
      footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.documentElement.scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useScrollAnimation;
