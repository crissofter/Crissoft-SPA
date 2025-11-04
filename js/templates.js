console.log("templates.js carregado!")

import { validarFormulario } from '../forms.js';

export function renderHome() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Bem-vindo à SPA!</h1>
    <p>Use o menu acima para navegar entre as seções.</p>
  `;
  return div;
}

export function renderCadastro() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h2>Cadastro</h2>
    <label>Nome: <input type="text" id="nome" required></label><br>
    <label>Email: <input type="email" id="email" required></label><br>
    <button type="submit">Enviar</button>
    <p id="mensagem"></p>
  `;

  form.addEventListener('submit', e => {
    e.preventDefault();
    validarFormulario(form);
  });

  return form;
}

export function renderSobre() {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>Sobre</h2>
    <p>Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web.</p>
  `;
  return div;
}
