import React, { useState } from 'react';
import './Calculo.css';

function Calculo({ onResultadoCalculo }) {

    // UseState para mostrar apenas os campos necessários para a operação escolhida
    const [operacao, setOperacao] = useState('Parede');
    const [operacao2, setOperacao2] = useState('9x19x19');

    // UseState para mudar a operação da calculadora
    const handleOperacaoChange = (event) => {
        const selecionado = event.target.value;
        setOperacao(selecionado);
    };

    // UseState para mudar a segunda operação da calculadora, que depende da primeira
    const handleOperacao2Change = (event) => {
        const selecionado = event.target.value;
        setOperacao2(selecionado);
    };

    // Chamando o FormData para pegar as informações do formulario da calculadora
    const [formData] = useState(new FormData());

    // Lidando com a mudança dos dados do formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        formData.set(name, value);
    };

    // Lidando com o form sendo enviado
    const handleSubmit = async (e) => {
        // Evita o comportamento padrão do formulário
        e.preventDefault();

        // Obtem os valores do JSON
        const payload = {};
        for (let [key, value] of formData.entries()) {
            payload[key] = value;
        }

        // Coloca os valores do JSON em variáveis
        let alturaParede = parseFloat(payload['altura-parede']);
        let comprimentoParede = parseFloat(payload['comprimento-parede']);
        let alturaTijolo = parseFloat(payload['altura-tijolo']);
        let comprimentoTijolo = parseFloat(payload['comprimento-tijolo']);
        // const profundidadeTijolo = parseFloat(payload['profundidade-tijolo']);

        // FUNÇÕES DE CÁLCULO//

        // CÁLCULO DE PAREDE //

        // Função que calcula a área da parede
        function calcularAreaParede() {
            let areaParede = alturaParede * comprimentoParede;

            return areaParede
        }

        // Função que calcula a quantidade total de tijolos
        function calcularTijolo() {
            let quantidadeTijolo = Math.ceil(areaParede * tijolo);

            return quantidadeTijolo

        }

        // Função que calcula a margem de sobra dos tijolos
        function calcularTijoloSobra() {
            let margem = Math.ceil(quantidadeTijolo * 1.1);

            return margem
        }

        // Função que calcula a quantidade de tijolos usados por metro quadrado
        function tijoloMetroQuadrado() {
            let areaTijolo = comprimentoTijolo * alturaTijolo;
            let tijolo = 10000 / areaTijolo
            tijolo = ajuste(tijolo, 2)

            return tijolo
        }

        // Função para ajustar casas decimais
        function ajuste(num, casas) {
            const og = Math.pow(10, casas)
            return Math.trunc(num * og) / og;
        }

        // Definindo a quantidade de tijolos usados por metro quadrado
        function definirTipoTijolo() {

            if (operacao2 === 'personalizado') {
                let tijolo = tijoloMetroQuadrado();
                return tijolo
            } else if (operacao2 === '9x19x19') {
                let tijolo = 27.70;
                return tijolo
            } else if (operacao2 === '14x19x39') {
                let tijolo = 13.49;
                return tijolo
            }
        }

        // CÁLCULO DE VIGA //

        // Pega os valores do formulário e coloca em variaveis
        let comprimentoContraPiso = parseFloat(payload['comprimento-contra-piso']);
        let larguraContraPiso = parseFloat(payload['largura-contra-piso']);
        let espessuraContraPiso = parseFloat(payload['espessura-contra-piso']);


        // Função que calcula o contra piso
        function CalcularContraPiso() {
            let areaContraPiso = comprimentoContraPiso * larguraContraPiso;

            let volumeConcreto = areaContraPiso * espessuraContraPiso;

            volumeConcreto *= 1.1;

            var volumeCimento = volumeConcreto * (1 / (1 + 3 + 5));
            var volumeAreia = volumeCimento * 3;
            var volumeBrita = volumeCimento * 5;

            return {
                volumeConcreto, volumeCimento, volumeAreia, volumeBrita
            };
        }

        // Inicia as variáveis para o resultado final
        let tijolo = 0;
        let areaParede = 0;
        let quantidadeTijolo = 0;
        let sobra = 0;

        // Guarda os valores da conta do contrapiso em variaveis para enviar pro resultado
        var materiaisContraPiso = CalcularContraPiso();
        let volumeConcreto = materiaisContraPiso.volumeConcreto
        let volumeCimento = materiaisContraPiso.volumeCimento
        let volumeAreia = materiaisContraPiso.volumeAreia
        let volumeBrita = materiaisContraPiso.volumeBrita

        //Checa se os valores enviados no formulário são válidos

        // Ativa as funções de cálculo
        tijolo = definirTipoTijolo();
        areaParede = calcularAreaParede()
        quantidadeTijolo = calcularTijolo();
        sobra = calcularTijoloSobra();

        // Manda o resultado dos cálculos para o resultado
        if (operacao === 'Parede') {
            if (alturaParede <= 0 || comprimentoParede <= 0 || alturaTijolo <= 0 || comprimentoTijolo <= 0 || isNaN(alturaParede, comprimentoParede, alturaTijolo, comprimentoTijolo, comprimentoParede)) {
                alert('ERRO: Os números inseridos não podem ser iguais ou menores a zero.');
            } else {
                onResultadoCalculo({
                    alturaParede,
                    comprimentoParede,
                    tijolo,
                    areaParede,
                    quantidadeTijolo,
                    sobra
                })
            }
        } else if (operacao === 'Contrapiso') {
            if (comprimentoContraPiso <= 0 || larguraContraPiso <= 0 || espessuraContraPiso <= 0 || isNaN(comprimentoContraPiso, larguraContraPiso, espessuraContraPiso)) {
                alert('ERRO: Os números inseridos não podem ser iguais ou menores a zero.');
            } else {
                onResultadoCalculo({
                    volumeConcreto,
                    volumeCimento,
                    volumeAreia,
                    volumeBrita,
                })
            };

            // Transformando os dados do forms no json
            try {
                const response = await fetch('https://httpbin.org/post', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();

                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            };
        }
    }




    return (
        <div id="calculo">
            {/* Formulário da calculadora */}
            <form onSubmit={handleSubmit}>
                {/* Div para separar os seletores */}
                <div id='seletores'>
                    <div className='seletor'>
                        <label htmlFor='operacao'>Operação</label>
                        <select id='operacao' value={operacao} onChange={handleOperacaoChange}>
                            <option value="Parede">Parede</option>
                            <option value="Contrapiso">Contrapiso</option>
                        </select>
                    </div>
                    {/* Use State para que só apareca os campos necessários para a conta da operação  */}
                    {operacao === 'Parede' ? (
                        <div className='seletor'>
                            <label htmlFor='tijolo'>Tipo tijolo</label>
                            <select id='tijolo' value={operacao2} onChange={handleOperacao2Change}>
                                <option value="9x19x19">Cerâmica de 8 furos: 9x19x19cm</option>
                                <option value="14x19x39">Concreto de 3 furos: 14x19x39cm</option>
                                <option value="personalizado">Inserir um tamanho:</option>
                            </select>
                        </div>
                    ) : null}
                </div>
                {/* Use State para que só apareca os campos necessários para a conta da operação  */}
                {operacao === 'Parede' ? (
                    <div id='dados'>
                        <div className='inputs'>
                            <label htmlFor="altura-parede">Altura da parede (metros):</label>
                            <input id="altura-parede" type='text' name='altura-parede' onChange={handleInputChange}></input>
                        </div>
                        <div className='inputs'>
                            <label htmlFor="comprimento-parede">Comprimento da parede (metros):</label>
                            <input id="comprimento-parede" type='text' name='comprimento-parede' onChange={handleInputChange}></input>
                        </div>
                        {/* Use State para mostrar os campos no caso de tamanho personalizado de tijolo */}
                        {operacao2 === 'personalizado' ? (
                            <div className='tijolo-personalizado' >
                                <div className='inputs tijolo1'>
                                    <label htmlFor='altura-tijolo'>Altura do tijolo (centimetros):</label>
                                    <input id='altura-tijolo' type='text' name='altura-tijolo' onChange={handleInputChange}></input>
                                </div>
                                <div className='inputs tijolo2'>
                                    <label htmlFor='comprimento-tijolo'>Comprimento do tijolo (centimetros):</label>
                                    <input id='comprimento-tijolo' type='text' name='comprimento-tijolo' onChange={handleInputChange}></input>
                                </div>
                                <div className='inputs tijolo3'>
                                    <label htmlFor='profundidade-tijolo'>Profundidade do tijolo (centimetros):</label>
                                    <input id='profundidade-tijolo' type='text' name='profundidade-tijolo' onChange={handleInputChange}></input>
                                </div>
                            </div>
                        ) : null}
                    </div>
                ) : null}

                {operacao === 'Contrapiso' ? (
                    <div id='dados'>
                        <div className='inputs'>
                            <label htmlFor='comprimento-contra-piso'>Comprimento do Contrapiso (m)</label>
                            <input id='comprimento-contra-piso' name='comprimento-contra-piso' type='text' onChange={handleInputChange}></input>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='largura-contra-piso'>Largura do Contrapiso (m)</label>
                            <input id='largura-contra-piso' name='largura-contra-piso' type='text' onChange={handleInputChange}></input>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='espessura-contra-piso'>Espessura do Contrapiso (cm)</label>
                            <input id='espessura-contra-piso' name='espessura-contra-piso' type='text' onChange={handleInputChange}></input>
                        </div>

                    </div>
                ) : null}
                {/* Div com o botão de cálculo */}
                <div id='calcular'>
                    <input type='submit' value={'Calcular'}></input>
                </div>

            </form>
        </div>
    )

};

export default Calculo