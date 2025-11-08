const routes = {
  home: "pages/home.html",
  sobre: "pages/sobre.html",
  cadastro: "pages/cadastro.html",
};

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const buttons = document.querySelectorAll("[data-route]");

  // Função para carregar a página
  const navigate = async (route) => {
    const response = await fetch(routes[route]);
    const content = await response.text();
    app.innerHTML = content;
  };

  // Evento de clique nos botões
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => navigate(btn.dataset.route));
  });

  // Carrega a página inicial
  navigate("home");
});
