import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que o 'pathname' mudar, rola a página para o topo
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente não renderiza nada visualmente
  return null; 
}