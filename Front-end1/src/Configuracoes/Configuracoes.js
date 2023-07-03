import { HiUserCircle } from "react-icons/hi2";
import FotoPerfil from '../../img/Perfil-Ruy.png';
import React, { useState } from 'react';

import './Configuracoes.css'



function Configuracoes() {

    const [imagemSelecionada, setImagemSelecionada] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImagemSelecionada(reader.result)
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="estrutura-configuracao">
            <h1>Configurações</h1>

            <div className="card-configuracao">
                <div className='header-configuracao'>
                    <HiUserCircle />
                    <span>Perfil</span>
                </div>
                <div className='conteudo-configuracao'>
                    <div className='perfil-configuracao'>
                        <img src={imagemSelecionada} alt="teste"></img>
                        <span>Foto de perfil:</span>
                        <form>
                            <label for="enviar-imagem" class="botao-enviar-imagem">Escolha um arquivo</label>
                            <input id="enviar-imagem" type="file" onChange={handleImageChange}></input>
                        </form>
                    </div>
                    <div className='info-configuracao'>
                        <form>
                            <div className="campo">
                                <label htmlFor="nome">Nome:</label>
                                <input id='nome' type="text"></input>
                            </div>
                            <div className="campo">
                                <label htmlFor="sobrenome">Sobrenome:</label>
                                <input id='sobrenome' type="text"></input>
                            </div>
                            <div className='campo'>
                                <label htmlFor="descricao">Descrição:</label>
                                <textarea id='descricao'></textarea>
                            </div>
                            <div className='campo'>
                                <label htmlFor="descricao">Habilidades:</label>
                                <select>
                                    <option>teste</option>
                                </select>
                            </div>
                            <div className='campo'>
                                <label>Projetos em destaque:</label>
                                <button>Selecionar Projetos</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="botoes-configuracao">
                    <button id='sair'>Sair</button>
                    <button id="descartar">Descartar Atualizações</button>
                    <button id='salvar'>Salvar Atualizações</button>
                </div>
            </div>
        </div>
    )
}

export default Configuracoes;