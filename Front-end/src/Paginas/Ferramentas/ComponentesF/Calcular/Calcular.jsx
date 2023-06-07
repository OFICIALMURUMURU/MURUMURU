import React, { useState } from 'react';
import './Calcular.css';
import imgLaje from '../imgFerramentas/img_laje.png';
import imgParede from '../imgFerramentas/img_parede.png';
import imgColuna from '../imgFerramentas/img_coluna.png';

function Calcular() {
  const [operacao, setOperacao] = useState('Parede');
  const [operacao2, setOperacao2] = useState('8 furos');
  const [imagem, setImagem] = useState(imgLaje);

  const handleOperacaoChange = (event) => {
    const selecionado = event.target.value;
    setOperacao(selecionado);

    if (selecionado === 'Laje') {
      setImagem(imgLaje);
    } else if (selecionado === 'Parede') {
      setImagem(imgParede);
    } else if (selecionado === 'Coluna ou pilar') {
      setImagem(imgColuna);
    }
  };

  const handleOperacao2Change = (event) => {
    const selecionado = event.target.value;
    setOperacao2(selecionado);
  };

  return (
    <div className='calculadoraEsquerda'>
      <div className='seletores'>
        <article>
          <h3>Operação</h3>
          <select value={operacao} onChange={handleOperacaoChange}>
            <option value="Laje">Laje</option>
            <option value="Parede">Parede</option>
            <option value="Coluna ou pilar">Coluna ou pilar</option>
          </select>
        </article>

        {operacao === 'Parede' ? (
          <div>
            <h3>Tipo tijolo</h3>
            <select value={operacao2} onChange={handleOperacao2Change}>
              <option value="6 furos">6 furos</option>
              <option value="8 furos">8 furos</option>
              <option value="9 furos">9 furos</option>
            </select>
          </div>
        ) : null}
      </div>
      <div className='imagem'>
        <img src={imagem} alt="" />
      </div>

      
        <form action="">
          <article>
            <input type="number"  />
            <br />
            <label >Informe a quantidade<br /> em metros quadrados</label>
            <br />
          </article>
          <article>
            <input type="number"  />
            <br />
            <label >Informe a quantidade<br /> em metros quadrados</label>
            <br />
          </article>
          <br />
          <button className='calculando'>Calcular</button>
        </form>
      
    </div>
  );
}

export default Calcular;
