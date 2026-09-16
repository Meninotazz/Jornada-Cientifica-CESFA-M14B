function irParaSite(vetor) {
  const links = {
    mosca: "https://meninotazz.github.io/Jornada-Cientifica-CESFA-M14B/mosca/",
    barata: "https://meninotazz.github.io/Barata-F/",
    rato: "https://meninotazz.github.io/Rato-F/"
  };

  
  if (links[vetor]) {
    window.open(links[vetor], "_blank");
  }
}
