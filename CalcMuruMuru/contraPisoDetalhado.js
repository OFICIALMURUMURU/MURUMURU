
    function rodarContraPiso() {
        function calcularMateriaisContraPiso(comprimentoCp, larguraCp, espessuraCp, proporcaoCimento, proporcaoAreia, proporcaoBrita, densidadeCimento, densidadeAreia, densidadeBrita) {
            areaContraPiso = comprimentoCp * larguraCp;

            volumeConcreto = areaContraPiso * espessuraCp;

            volumeConcreto *= 1.1;

            var volumeCimento = volumeConcreto * (proporcaoCimento / (proporcaoCimento + proporcaoAreia + proporcaoBrita));
            var volumeAreia = volumeConcreto * (proporcaoAreia / (proporcaoCimento + proporcaoAreia + proporcaoBrita));
            var volumeBrita = volumeConcreto * (proporcaoBrita / (proporcaoCimento + proporcaoAreia + proporcaoBrita));

            var massaCimento = volumeCimento * densidadeCimento;
            var massaAreia = volumeAreia * densidadeAreia;
            var massaBrita = volumeBrita * densidadeBrita;

            return {
                volumeConcreto, volumeCimento, volumeAreia, volumeBrita, massaCimento, massaAreia, massaBrita
            };
        }

        var comprimentoCp = parseFloatComVirgula(prompt("Informe o comprimento do Contrapiso"));
        var larguraCp = parseFloatComVirgula(prompt("Informe a largura do Contrapiso"));
        var espessuraCp = parseFloatComVirgula(prompt("Informe a espessura do Contrapiso"));
        var proporcaoCimento = parseFloatComVirgula(prompt("Informe a proporção de cimento"));
        var proporcaoAreia = parseFloatComVirgula(prompt("Informe a proporção de areia"));
        var proporcaoBrita = parseFloatComVirgula(prompt("Informe a proporção de brita"));
        var densidadeCimento = parseFloatComVirgula(prompt("Informe a densidade do cimento (em kg/m³)"));
        var densidadeAreia = parseFloatComVirgula(prompt("Informe a densidade da areia (em kg/m³)"));
        var densidadeBrita = parseFloatComVirgula(prompt("Informe a densidade da brita (em kg/m³)"));

        var materiaisContrapiso = calcularMateriaisContraPiso(comprimentoCp, larguraCp, espessuraCp, proporcaoCimento, proporcaoAreia, proporcaoBrita, densidadeCimento, densidadeAreia, densidadeBrita);

        alert('MATERIAIS PARA CONTRAPISO:\n' +
            'Volume de concreto: ' + materiaisContrapiso.volumeConcreto.toFixed(2) + ' m³' +
            '\nVolume de cimento: ' + materiaisContrapiso.volumeCimento.toFixed(2) + ' m³' +
            '\nVolume de areia: ' + materiaisContrapiso.volumeAreia.toFixed(2) + ' m³' +
            '\nVolume de brita: ' + materiaisContrapiso.volumeBrita.toFixed(2) + ' m³' +
            '\nMassa de cimento: ' + materiaisContrapiso.massaCimento.toFixed(2) + ' kg' +
            '\nMassa de areia: ' + materiaisContrapiso.massaAreia.toFixed(2) + ' kg' +
            '\nMassa de brita: ' + materiaisContrapiso.massaBrita.toFixed(2) + ' kg'
        );
    }

    function parseFloatComVirgula(valor) {
        var valorString = valor.replace(",", ".");
        return parseFloat(valorString);
    }

    document.getElementById("contraPisoDetalhado").addEventListener("click", rodarContraPiso);
