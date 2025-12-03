import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  
  // Renderiza o App
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Lógica para remover o Preloader assim que o React montar
  // Usamos requestAnimationFrame para garantir que o browser pintou o App antes de tirar o loader
  requestAnimationFrame(() => {
    // Pequeno timeout para garantir transição suave e que o Tailwind processou
    setTimeout(() => {
      const preloader = document.getElementById('global-preloader');
      if (preloader) {
        preloader.classList.add('loaded');
        // Remove do DOM após a animação CSS terminar (0.6s)
        setTimeout(() => {
          preloader.remove();
        }, 600);
      }
    }, 800); // 800ms mínimo de display para não piscar muito rápido se a net for boa demais
  });
}