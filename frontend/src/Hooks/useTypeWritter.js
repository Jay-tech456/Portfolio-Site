// src/Hooks/useTypewriter.js
import { useState, useEffect, useRef } from 'react';

const useTypewriter = (text, speed = 100) => {
  const [typedText, setTypedText] = useState('');
  const index = useRef(0);
  const timeoutRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const startTyping = () => {
    if (index.current < text.length) {
      setTypedText((prev) => prev + text.charAt(index.current));
      index.current += 1;
      timeoutRef.current = setTimeout(startTyping, speed);
    }
  };

  return { typedText, elementRef };
};

export default useTypewriter;