import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScrollSpy = (name, hash) => {
  const navigate = useNavigate();

  useEffect(() => {
    const target = document.getElementById(name);
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navigate(hash);
          return;
        }
      },
      {
        root: null, // null or don't set it = viewport
        threshold: 0.5, // set offset 0.1 means trigger if atleast 10% of element in viewport
      }
    );
    observer.observe(target);
  }, [navigate]);
};
