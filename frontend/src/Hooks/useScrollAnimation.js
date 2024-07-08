// src/hooks/useScrollAnimation.js
import { useEffect } from 'react';

const useScrollAnimation = (elementRef) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = elementRef.current.querySelectorAll('.education-content');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [elementRef]);
};

export default useScrollAnimation;
