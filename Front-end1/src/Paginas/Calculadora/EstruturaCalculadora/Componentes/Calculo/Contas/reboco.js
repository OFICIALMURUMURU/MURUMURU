document.getElementById("argamassa").addEventListener("click",calcularArgamassa)


function calcularArgamassa(){
    
    let tipoArgamassa = Number(prompt("Escolha o tipo de argamassa:\n" + "1) Assentamento\n" + "2) Revestimento\n" + "3) Colante\n" + "4) Rejuntamento"));

    while(tipoArgamassa != 1 && tipoArgamassa != 2 && tipoArgamassa != 3 && tipoArgamassa != 4){
        alert("Digite uma opção válida!")
        tipoArgamassa = Number(prompt("Escolha o tipo de argamassa:\n" + "1) Assentamento\n" + "2) Revestimento\n" + "3) Colante\n" + "4) Rejuntamento"));
    }


    switch (tipoArgamassa) {
        case 1:
            calcularAssentamento();
            break;
        case 2:

            break
        case 3:

            break;
        default:
    }

    function tipoAlvenaria(){
        let tipoAlvenaria = Number(prompt("Escolha o tipo de alvenaria:\n" + "1) Alvenaria Estrutural\n" + "2) Alvenaria de Vedação"));
        
        while(tipoAlvenaria != 1 && tipoAlvenaria != 2){
            alert("Digite uma opção válida!");
            tipoAlvenaria = Number(prompt("Escolha o tipo de alvenaria:\n" + "1) Alvenaria Estrutural\n" + "2) Alvenaria de Vedação"));
        }

        switch (tipoAlvenaria){
            case 1:
                calcularAlvenariaEstrutural();
                break
            case 2:
                calcularAlvenariaVedacao();
                break
        }
    }

    function calcularAssentamento(){
        let tipoAssentamento = Number(prompt("Qual tipo de argamassa será calculada?\n" + "1) Feita na obra\n" + "2) Industrializada"));

        while (tipoAssentamento != 1 && tipoAssentamento != 2){
            alert("Digite uma opção válida!")
                tipoAssentamento = Number(prompt("Qual tipo de argamassa será calculada?\n" + "1) Feita na obra\n" + "2) Industrializada"));
        }

        if(tipoAssentamento == 1){
            let traco = Number(prompt("Selecione o traço da argamassa:\n" + "1) Tijolo de ceramica\n" + "2) Tijolo de cimento"));
            
            while(traco != 1 && traco !=2){
                alert("Digite uma opção válida!");
                traco = Number(prompt("Selecione o traço da argamassa:\n" + "1) Tijolo de ceramica\n" + "2) Tijolo de cimento"));
            }

            // traço 1:2:8 (cimento,cal,areia)
            if(traco == 1){
                // 1 metro cubico de argamassa rende 100 metros quadrados de alvenaria aproximadamente no traço de 1:2:8 (cimento,cal,areia)
                let altAlvenaria = Number(prompt("Digite a altura da parede em metros:"));
                let larAlvenaria = Number(prompt("Digite a largura da parede em metros:"));
                let areaAlvenaria = altAlvenaria * larAlvenaria;
                let quantArgamassa = areaAlvenaria / 100;

                let cimento = 185.63 * quantArgamassa;
                let cal = 193.7 * quantArgamassa;
                let areia = 1.29 * quantArgamassa

                alert("Traço da argamassa: 1 lata de cimento, 2 latas de cal, 8 latas de areia (1:2:8)\n" + "Quantidade de argamassa necessária para cobrir a parede (em metros cúbicos): " + quantArgamassa.toFixed(2) + "\n" + "Quantidade de cimento gasto em kilos: " + cimento.toFixed(2) + "\n" + "Quantidade de cal em kilos: " + cal.toFixed(2) + "\n" + "Quantidade de areia em metros cúbicos: " + areia)
            }
        }
    }

};
