function rodarLaje() {
    var volumeConcreto = 0;
    var comprimentoTotalAco = 0;
    var comprimentoForma = 0;

    function calcularMateriaisLaje(comprimentoLaje, larguraLaje, espessuraLaje) {
      var areaLaje = comprimentoLaje * larguraLaje;
      volumeConcreto = areaLaje * espessuraLaje;

      volumeConcreto *= 1.1;

      comprimentoTotalAco = 2 * (comprimentoLaje + larguraLaje) + 4 * espessuraLaje;
      var quantidadeBarrasAco = Math.ceil(comprimentoTotalAco / 0.15);

      comprimentoForma = 3; 
      var quantidadeFormas = Math.ceil(comprimentoTotalAco / comprimentoForma);

      var volumeCimento = volumeConcreto * 0.10;
      var volumeAreia = volumeConcreto * 0.30;
      var volumeBrita = volumeConcreto * 0.40;

      return {
        volumeConcreto,
        quantidadeBarrasAco,
        quantidadeFormas,
        volumeCimento,
        volumeAreia,
        volumeBrita
      };
    }

    function ajuste(num, casas) {
      return num.toFixed(casas);
    }

    var comprimentoLaje = parseFloatComVirgula(prompt("Informe o comprimento da Laje (maior medida da Laje)"));
    var larguraLaje = parseFloatComVirgula(prompt("Informe a largura da Laje "));
    var espessuraLaje = parseFloatComVirgula(prompt("Informe a espessura da laje"));

    var materiaisLaje = calcularMateriaisLaje(comprimentoLaje, larguraLaje, espessuraLaje);
    var volumeConcreto = ajuste(materiaisLaje.volumeConcreto, 2);
    var volumeCimento = ajuste(materiaisLaje.volumeCimento, 2);
    var volumeAreia = ajuste(materiaisLaje.volumeAreia, 2);
    var volumeBrita = ajuste(materiaisLaje.volumeBrita, 2);
    var quantidadeBarrasAco = ajuste(materiaisLaje.quantidadeBarrasAco, 0);
    var quantidadeFormas = ajuste(materiaisLaje.quantidadeFormas, 0);

    alert('MATERIAIS "BASE":\n' +
      'Volume de concreto: ' + volumeConcreto + ' m³' +
      '\nQuantidade de barras de aço: ' + quantidadeBarrasAco +
      '\nQuantidade de formas: ' + quantidadeFormas +
      '\n\nMATERIAIS AUXILIARES:' +
      '\nVolume de cimento: ' + volumeCimento + ' m³' +
      '\nVolume de areia: ' + volumeAreia + ' m³' +
      '\nVolume de brita: ' + volumeBrita + ' m³'
    );
  }

  function parseFloatComVirgula(valor) {
    var valorString = valor.replace(",", ".");
    return parseFloat(valorString);
  }

document.getElementById("laje").addEventListener("click", rodarLaje);
