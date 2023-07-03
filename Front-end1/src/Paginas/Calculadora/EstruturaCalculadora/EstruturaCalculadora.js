import Calculo from './Componentes/Calculo/Calculo';
import ResultadoCalculo from './Componentes/ResultadoCalculo/ResultadoCalculo'

import React, { useState } from 'react';

import './EstruturaCalculadora.css';

function EstruturaCalculadora() {

    // UseState para mudar o resultado do cálculo
    const [resultadoCalculo, setResultadoCalculo] = useState(null);

    // Função para lidar com o UseState do resultado
    const handleResultadoCalculo = (resultado) => {
        setResultadoCalculo(resultado);
    };

    return (
        <div className="estrutura-calculadora">
            <div className="calculadora">
                <div id='calculo-exterior'>
                    <Calculo onResultadoCalculo={handleResultadoCalculo} />
                </div>
                <div id='resultado'>
                    <ResultadoCalculo resultado={resultadoCalculo} />
                </div>
            </div>
        </div>
    );
}

export default EstruturaCalculadora;
