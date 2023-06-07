// Numero de tilojos necessários por metro quadrado. Nesse caso, é um tijolo baiano de 9x19x19cm.
let tijolo = 0;

// Adicionando os eventos que chamam as funções no html
document.getElementById("parede").addEventListener("click", tijoloBase);
document.getElementById("quarto").addEventListener("click", quartoLadosIguais);

// Função que calcula tijolos necessários para construir uma parede
function areaParede() {
    // Função para receber a altura da parede
    function obterAltura() {
        // Receber altura da parede
        let altura = parseFloat(prompt("Digite a altura da parede (metros)"));
        // Checar se a variavel altura é um número ou não
        while (isNaN(altura)) {
            alert("Por favor, digite um número!");
            altura = parseFloat(prompt("Digite a altura da parede (metros)"));
        }
        // Retorna o valor da variavel altura
        return altura
    }
    // Função para receber o comprimento da parede
    function obterComprimento() {
        // Recebe o comprimento da parede
        let comprimento = parseFloat(prompt("Digite o comprimento da parede (metros)"));

        // Checa se a variavel comprimento é um número ou não
        while (isNaN(comprimento)) {
            alert("Por favor, digite um número!");
            comprimento = parseFloat(prompt("Digite o comprimento da parede (metros)"));
        }
        // Retorna o valor do let comprimento
        return comprimento;
    }

    function calcularArea() {
        // Calcula o valor da area total da parede
        let areaParede = altura * comprimento;
        // Retorna o valor da area
        return areaParede;
    }

    function calcularTijolo() {
        // Calcula a quantidade total de tijolos
        let quantidadeTijolo = Math.ceil(areaParede * tijolo);
        // Mostra ao usuário a quantidade de tijolos necessários sem margem de sobra
        alert("Quantidade de tijolos baianos necessários para construir a parede (sem margem de sobra): " + quantidadeTijolo);
        // Calcula a margem de sobra dos tijolos
        let margem = Math.ceil(quantidadeTijolo * 1.1);
        // Mostra ao usuário o resultado de tijolos necessários com margem
        alert("Quantidade de tijolos baianos necessários para construir a parede (com margem de sobra): " + margem);
    }

    // Recebe a altura da parede digitada pelo usuario
    altura = obterAltura();
    // Recebe o comprimento da parede digitado pelo usuário
    comprimento = obterComprimento();
    // Recebe a area da parede calculada
    areaParede = calcularArea();
    // Calcula o resultado final                                                                                               
    calcularTijolo();
};

function tijoloBase() {
    let tipoTijolo = Number(prompt("Escolha o tipo de tijolo:\n" + "1) Tijolo baiano de 8 furos: 9 x 19 x 19cm\n" + "2) Tijolo de concreto de 3 furos: 14 x 19 x 39cm\n" + "3) Inserir um tamanho de tijolo:"));

    switch (tipoTijolo) {
        case 1:
            tijolo = 27.70; // Tijolo de 8 furos: 9 x 19 x 19cm
            break;
        case 2:
            tijolo = 13.49; // Tijolo de concreto: 14 x 19 x 39cm
            break
        case 3:
            tijoloMetroQuadrado()
            break;
        default:
    }

    function ajuste(num, casas) {
        const og = Math.pow(10, casas)
        return Math.trunc(num * og) / og;
    }

    function tijoloMetroQuadrado() {
        let profundidadeT = Number(prompt("Informe o valor da profundidade do tijolo (em cm)"));
        let larguraT = Number(prompt("Informe o valor da largura do tijolo (em cm)"));
        let alturaT = Number(prompt("Informe o valor da altura do tijolo (em cm)"));
        areaT = larguraT * alturaT;
        tijolo = 10000 / areaT
        tijolo = ajuste(tijolo, 2)
    }
    areaParede()
}


function quartoLadosIguais() {
    alert("Exemplo: vamos supor que você vai construir um quarto simples de 4m por 4m, pé direito de 2,7m, oitão de 80cm, uma janela de 1m por 1m e uma porta de 90cm por 210cm.")
    let lado = parseInt(prompt("Digite o comprimento das paredes (em metros):"))
    let perimetro = lado * 4
    let altura = parseFloat(prompt("Digite a altura do quarto (em metros, separado por ponto se precisar. Ex: 2.1):"))
    let areaParedes = perimetro * altura

    let oitao = parseFloat(prompt("Digite a altura do oitão (em metros, separado por ponto se precisar. Ex: 0.80):"))
    let areaOitao = lado * oitao

    let janelaA = parseFloat(prompt("Digite a altura da janela (em metros):"))
    let janelaC = parseFloat(prompt("Digite o comprimento da janela (em metros):"))
    let areaJanela = janelaA * janelaC

    let portaA = parseFloat(prompt("Digite a altura da porta (em metros):"))
    let portaC = parseFloat(prompt("Digite o comprimento da porta (em metros):"))
    let areaPorta = portaA * portaC

    let areaTotal = areaParedes + areaOitao - areaJanela - areaPorta
    alert(areaTotal)
    let quantidadeTotal = areaTotal * tijolo
    alert("Quantidade de tijolos baianos necessários para construir a parede (sem margem de sobra): " + quantidadeTotal)
    let margem = quantidadeTotal * 1.1
    alert("Quantidade de tijolos baianos necessários para construir a parede (com margem de sobra): " + margem)

}

// 2,10 altura 2 comprimento