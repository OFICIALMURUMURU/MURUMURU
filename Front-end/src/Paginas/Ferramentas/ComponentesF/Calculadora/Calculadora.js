import React, { useState } from 'react';


import './Calculadora.css'

import Relogio from './Componentes/Relogio'
import Historico from './Componentes/Historico/Historico';

function Calculadora() {

    const [operacao, setOperacao] = useState('Parede');
    const [operacao2, setOperacao2] = useState('8 furos');


    const handleOperacaoChange = (event) => {
        const selecionado = event.target.value;
        setOperacao(selecionado);
    };

    const handleOperacao2Change = (event) => {
        const selecionado = event.target.value;
        setOperacao2(selecionado);
    };



    return (
        <div>
            <div className='conteudo-calc'>

                <div className="calculadora">
                    <div className="projeto-calculadora">
                        <p>placeholder</p>
                    </div>

                    <div className='conta-calculadora'>
                        <div className='estrutura-calc'>
                            <div className="seletores">
                                <div className='operacao'>
                                    <h3>Operação</h3>
                                    <select value={operacao} onChange={handleOperacaoChange}>
                                        <option value="Laje">Laje</option>
                                        <option value="Parede">Parede</option>
                                        <option value="Coluna ou pilar">Coluna</option>
                                    </select>
                                </div>

                                {operacao === 'Parede' ? (
                                    <div className="tipo-tijolo">
                                        <label>Tipo tijolo</label>
                                        <select value={operacao2} onChange={handleOperacao2Change}>
                                            <option value="6 furos">6 furos</option>
                                            <option value="8 furos">8 furos</option>
                                            <option value="9 furos">9 furos</option>
                                        </select>
                                    </div>
                                ) : null}

                            </div>
                            {operacao === 'Parede' ? (
                                <div className='conta-operacao'>
                                    <div>
                                        <label for="altura">Altura da parede em metros:</label>
                                        <input id="altura" type='number'></input>
                                    </div>
                                    <div>
                                        <label for="largura">Largura da parede em metros:</label>
                                        <input id="largura" type='number'></input>
                                    </div>
                                    <button>Calcular</button>
                                </div>
                            ) : null}
                        </div>
                        <div className='resultado-sugestoes'>
                            <div className='resultado'>
                                <p className='resultado-conta'>Resultado</p>
                            </div>
                            <div className='sugestoes'>
                                <p className='sugestoes-conta'>Sugestôes</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className='estrutura-historico'>

                    <div className="horario-temp">
                        <Relogio />
                    </div>
                    <div className="historico">
                        <Historico/>
                        <Historico />
                        <Historico />
                        <Historico />
                        <Historico />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calculadora