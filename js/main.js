// js/main.js
import { navegar } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 main.js carregado com sucesso');

  const app = document.getElementById('app');
  const botoes = document.querySelectorAll('[data-route]');

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      const rota = btn.getAttribute('data-route');
      console.log(`🧭 Navegando para: ${rota}`);
      navegar(rota, app);
    });
  });

  // Rota inicial
  navegar('home', app);
});
