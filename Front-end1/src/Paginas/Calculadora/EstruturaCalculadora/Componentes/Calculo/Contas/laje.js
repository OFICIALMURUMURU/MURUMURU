function rodarLaje() {
    var volumeConcreto = 0;
    var comprimentoTotalAco = 0;
    var comprimentoForma = 0;

    function calcularMateriaisLaje(areaLaje, espessuraLaje) {


      volumeConcreto = areaLaje * espessuraLaje;

      // margem de segurança (10%)
      volumeConcreto *= 1.1;


      comprimentoTotalAco = 2 * areaLaje + 2 * espessuraLaje;
      quantidadeBarrasAco = Math.ceil(comprimentoTotalAco / 0.15); // Considerando espaçamento de 15 cm

      comprimentoForma = 3; // Comprimento da forma em metros
      quantidadeFormas = Math.ceil(comprimentoTotalAco / comprimentoForma);

      // materiais auxiliares 
      volumeCimento =  Math.ceil(volumeConcreto / 8);
      volumeAreia = Math.ceil(volumeConcreto * 3 / 8);
      volumeBrita = Math.ceil(volumeConcreto * 4 / 8);

      //retornando os resultados
      return {
        volumeConcreto, quantidadeBarrasAco, quantidadeFormas, volumeCimento, volumeAreia, volumeBrita
      };
    }
    function ajuste(num, casas) {
      const og = Math.pow(10, casas);
      return Math.trunc(num * og) / og;
    }


    let areaLaje = parseFloat(prompt("Informe a área da laje em metros quadrados"));
    let espessuraLaje = parseFloat(prompt("Informe a espessura da laje"));

    let materiaisLaje = calcularMateriaisLaje(areaLaje, espessuraLaje);
    ajuste(volumeConcreto, volumeCimento, volumeAreia, volumeBrita, 4)
    ajuste(quantidadeBarrasAco, quantidadeFormas, 2)

    alert('MATERIAIS "BASE":\n' +
      'Volume de concreto: ' + materiaisLaje.volumeConcreto + ' m³' +
      '\nQuantidade de barras de aço: ' + materiaisLaje.quantidadeBarrasAco +
      '\nQuantidade de formas: ' + materiaisLaje.quantidadeFormas +
      '\n\nMATERIAIS AUXILIARES:' +
      '\nVolume de cimento: ' + materiaisLaje.volumeCimento + ' m³' +
      '\nVolume de areia: ' + materiaisLaje.volumeAreia + ' m³' +
      '\nVolume de brita: ' + materiaisLaje.volumeBrita + ' m³'
    );

  }
  document.getElementById("laje").addEventListener("click", rodarLaje);