import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      clearTimeout(timeout);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return children;
}
