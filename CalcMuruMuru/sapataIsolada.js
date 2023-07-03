
function calcularMateriaisSapataIsolada(comprimento, largura, altura) {
  // Cálculo do volume de concreto em metros cúbicos
  const volumeConcreto = comprimento * largura * altura;

  // Cálculo da quantidade de concreto em metros cúbicos (considerando uma margem de 10% para perdas)
  const quantidadeConcreto = volumeConcreto * 1.1;

  // Cálculo da quantidade de aço para a armadura (exemplo: 4 barras de aço de 10mm por metro de sapata)
  const quantidadeAco = (comprimento + largura) * 2 * 4; // Exemplo para 4 barras de aço por metro de sapata

  // Cálculo da quantidade de formas de madeira (exemplo: 2 tábuas por metro de sapata)
  const quantidadeFormasMadeira = (comprimento + largura) * 2 * 2; // Exemplo para 2 tábuas por metro de sapata

  return {
    quantidadeConcreto: quantidadeConcreto.toFixed(2),
    quantidadeAco: quantidadeAco.toFixed(2),
    quantidadeFormasMadeira: quantidadeFormasMadeira.toFixed(2)
  };
}


function obterDadosSapatas() {
  const quantidadeSapatas = parseInt(prompt("Digite a quantidade de sapatas:"));

  const sapatas = [];

  for (let i = 0; i < quantidadeSapatas; i++) {
    const comprimentoSapata = parseFloat(prompt("Digite o comprimento da sapata " + (i + 1) + " em metros:"));
    const larguraSapata = parseFloat(prompt("Digite a largura da sapata " + (i + 1) + " em metros:"));
    const alturaSapata = parseFloat(prompt("Digite a altura da sapata " + (i + 1) + " em metros:"));

    const materiaisSapata = calcularMateriaisSapataIsolada(comprimentoSapata, larguraSapata, alturaSapata);

    sapatas.push({
      comprimento: comprimentoSapata,
      largura: larguraSapata,
      altura: alturaSapata,
      materiais: materiaisSapata
    });
  }

  return sapatas;
}

// Exemplo de uso do cálculo
const sapatas = obterDadosSapatas();

sapatas.forEach((sapata, index) => {
  alert("Sapata " + (index + 1) + ":\n" +
    "Comprimento: " + sapata.comprimento + " metros\n" +
    "Largura: " + sapata.largura + " metros\n" +
    "Altura: " + sapata.altura + " metros\n" +
    "Quantidade de concreto necessária: " + sapata.materiais.quantidadeConcreto + " metros cúbicos\n" +
    "Quantidade de aço necessária: " + sapata.materiais.quantidadeAco + " metros\n" +
    "Quantidade de formas de madeira necessárias: " + sapata.materiais.quantidadeFormasMadeira + " metros");
});

