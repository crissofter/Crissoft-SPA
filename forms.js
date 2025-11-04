export function validarFormulario(form) {
  const nome = form.querySelector('#nome').value.trim();
  const email = form.querySelector('#email').value.trim();
  const msg = form.querySelector('#mensagem');

  if (nome === '' || email === '') {
    msg.textContent = '⚠️ Preencha todos os campos!';
    msg.style.color = 'red';
  } else if (!email.includes('@')) {
    msg.textContent = '❌ Email inválido!';
    msg.style.color = 'orange';
  } else {
    msg.textContent = '✅ Cadastro realizado com sucesso!';
    msg.style.color = 'green';

    // Salvando no localStorage
    localStorage.setItem('usuario', JSON.stringify({ nome, email }));
  }
}
