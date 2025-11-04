import { renderHome, renderCadastro, renderSobre } from './templates.js';

export function navegar(rota, container) {
  container.innerHTML = ''; // limpa conteúdo

  switch (rota) {
    case 'home':
      container.appendChild(renderHome());
      break;
    case 'cadastro':
      container.appendChild(renderCadastro());
      break;
    case 'sobre':
      container.appendChild(renderSobre());
      break;
    default:
      container.textContent = 'Página não encontrada!';
  }
}
