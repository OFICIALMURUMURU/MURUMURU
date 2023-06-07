document.getElementById("calcularVolumeConcreto").addEventListener("click", calculandoVolumeDeConcreto );
document.getElementById("AreaDaForma").addEventListener("click", AreaDaForma );

function AreaDaForma(){
//viga de concreto armado: Para calcular a área de fôrma basta fazer ((2 x altura) – (0,1 x N) + largura) x comprimento de vão livre, sendo N o número de lajes adjacentes. A viga exemplo possui um vão livre (distância entre a face dos apoios) de 3,15 metros, 14cm de largura, 30cm de altura e duas lajes adjacentes. Portanto.
var lajesAdjacentes = parseFloat(prompt("insira quantas lajes adjacentes tem: "));
var larguraCm = parseFloat(prompt("insira qual largura a viga tem: ")); //14cm = 0.14
var alturaCm = parseFloat(prompt("insira qual altura a viga tem: ")); // 30cm = 0.3
var comprimentoVaoLivre = parseFloat(prompt("insira o comprimento do vão livre em Metros:")) //3150mm = 3,15metros

//Área de Fôrma = ((2 x 0,3) – (0,1 x 2) + 0,14) x 3,15 = 1,70m².
areaForma = ((2 * alturaCm) - (0.1 * lajesAdjacentes) + larguraCm)* comprimentoVaoLivre; 

//Para calcular o volume de concreto de uma viga é ainda mais simples. Basta multiplicar sua altura, largura e metro linear. Sendo assim, utilizando as informações da nossa viga, temos que Volume de Concreto = 0,3 x 0,14 x 3,15 = 0,1323m³.
volumeDeConcreto = alturaCm*larguraCm*comprimentoVaoLivre;

window.alert("Informações da viga:\n"+"areaForma: "+areaForma.toFixed(2)+" m²\n"+"volumeDeConcreto: "+volumeDeConcreto.toFixed(4)+" m");

}

function calculandoVolumeDeConcreto() {
  var larguraViga = parseInt(prompt("Insira a largura da viga (em metros)"));
  var alturaViga = parseInt(prompt("Insira a altura da viga (em metros)"));
  var alturaLaje = parseInt(prompt("Insira a espessura da laje  (em metros)"));
  var comprimento = parseInt(prompt("Insira o comprimento da viga (em metros)"));

  larguraVigaCm = larguraViga / 100; // Converter para metros
  alturaVigaCm = alturaViga / 100; // Converter para metros
  alturaLajeCm = alturaLaje / 100; // Converter para metros

  // Comprimento das vigas menores. Exemplo: 5 m – 2 x 0,2 m = 4,6 m
  var comprimentoVigaMenor = comprimento - 2 * larguraVigaCm;

  // Área da viga: largura x (altura – espessura da laje) = área em m² Exemplo: 0,20 m x (0,50 m – 0,12 m) = 0,076 m²
  var areaDaViga = larguraVigaCm * (alturaVigaCm - alturaLajeCm);

  //área de seção das vigas. Exemplo: 2 x 0,076 m² x 5 m = 0,76 m³
  var areaDeSecaoDasVigas = 2 * areaDaViga * comprimento;
  
  //comprimento das vigas. Exemplo: 2 x 0,076 m² x 4,6 m = 0,69 m³ 
  var comprimentoDasVigas = 2 * areaDaViga * comprimentoVigaMenor;

  //Volume total das vigas. Exemplo: 0,76 m³ + 0,69 m³= 1,45 m³
  var volumeTotalVigas = areaDeSecaoDasVigas + comprimentoDasVigas;

  window.alert("Informações da viga:\n" +
    "Área da viga: " + areaDaViga.toFixed(3) + " m²\n" +
    "Área de seção das vigas: " + areaDeSecaoDasVigas.toFixed(3) + " m²\n" +
    "Comprimento das vigas: " + comprimentoDasVigas.toFixed(3) + " m\n" +
    "Volume total das vigas: " + volumeTotalVigas.toFixed(3) + " m³\n" +
    "Comprimento da viga menor: " + comprimentoVigaMenor.toFixed(2) + " m");
}