function rodarContraPiso() {
    function calcularMateriaisContraPiso(comprimentoCp, larguraCp, espessuraCp) {

        areaContraPiso = comprimentoCp * larguraCp;

        volumeConcreto = areaContraPiso * espessuraCp;

        volumeConcreto *= 1.1;

        var volumeCimento = volumeConcreto * (1 / (1 + 3 + 5));
        var volumeAreia = volumeCimento * 3;
        var volumeBrita = volumeCimento * 5;

        return {
            volumeConcreto, volumeCimento, volumeAreia, volumeBrita
        };
    }
    
    var comprimentoCp = parseFloatComVirgula(prompt("Informe o comprimento do Contrapiso"));
    var larguraCp = parseFloatComVirgula(prompt("Informe a largura do Contrapiso "));
    var espessuraCp = parseFloatComVirgula(prompt("Informe a espessura do Contrapiso"));

    var materiaisContrapiso = calcularMateriaisContraPiso(comprimentoCp, larguraCp, espessuraCp);

    alert('MATERIAIS PARA CONTRAPISO:\n' +
        'Volume de concreto: ' + materiaisContrapiso.volumeConcreto.toFixed(2) + ' m³' +
        '\nVolume de cimento: ' + materiaisContrapiso.volumeCimento.toFixed(2) + ' m³' +
        '\nVolume de areia: ' + materiaisContrapiso.volumeAreia.toFixed(2) + ' m³' +
        '\nVolume de brita: ' + materiaisContrapiso.volumeBrita.toFixed(2) + ' m³'
    );
}

function parseFloatComVirgula(valor) {
    var valorString = valor.replace(",", ".");
    return parseFloat(valorString);
}

document.getElementById("contraPiso").addEventListener("click", rodarContraPiso);
