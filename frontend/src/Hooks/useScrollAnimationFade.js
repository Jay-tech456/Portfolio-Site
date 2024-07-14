
import { useEffect } from 'react';

const useScrollAnimationFade = (elementRef) => {
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const elements = elementRef.current.querySelectorAll('.project-content');
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

export default useScrollAnimationFade;
