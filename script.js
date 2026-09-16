const infoData = {
  mosca: {
    title: "Mosca-doméstica e a Cólera",
    subtitle: "Vetor Mecânico: Musca domestica",
    content: "As moscas-domésticas atuam transportando mecanicamente a bactéria <i>Vibrio cholerae</i> em suas patas, tromba e fezes. Ao pousarem em lixos ou esgotos contaminados e, em seguida, nos alimentos ou na água humana, transmitem a infecção. A cólera causa diarreia intensa e desidratação rápida.",
    link: "https://meninotazz.github.io/Jornada-Cientifica-CESFA-M14B/mosca/"
  },
  barata: {
    title: "Barata e a Salmonelose",
    subtitle: "Vetor Mecânico: Periplaneta americana",
    content: "As baratas transitam por locais altamente contaminados como tubulações de esgoto e lixeiras. Elas transportam a bactéria <i>Salmonella enterica</i> na parte externa do seu corpo e em seu trato digestivo. A contaminação ocorre quando caminham sobre utensílios domésticos ou alimentos.",
    link: "https://meninotazz.github.io/Barata-F/"
  },
  rato: {
    title: "Rato Urbano e a Leptospirose",
    subtitle: "Vetor/Reservatório: Rattus norvegicus",
    content: "A leptospirose é causada pela bactéria <i>Leptospira</i>, eliminada na urina dos roedores. Em períodos de chuvas e enchentes, a urina se mistura à água e à lama. A bactéria penetra na pele humana ou mucosas, provocando febre e dores musculares.",
    link: "https://meninotazz.github.io/Rato-F/"
  }
};

// Função para abrir o Modal
function openModal(vetor) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const data = infoData[vetor];

  if (data) {
    modalBody.innerHTML = `
      <h3>${data.title}</h3>
      <h4>${data.subtitle}</h4>
      <p>${data.content}</p>
      <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="modal-link-btn">Acessar Página Completa &rarr;</a>
    `;
    modal.style.display = "flex";
  }
}

// Função para fechar o Modal pelo botão X
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Fechar a janela se o usuário clicar na área escura (fora da caixa)
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
