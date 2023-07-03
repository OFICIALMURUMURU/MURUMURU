import { AiOutlineHeart } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi2";
import './ProjetoPortfolio.css'

function ProjetoPortfolio(props) {
    const dataAtual = new Date().toLocaleDateString();

    return (
        <div className='projeto-portfolio'>
            <div className='header-portfolio'>
                <div className="esquerda-header-portfolio">
                    <h1>{props.NomeProjeto}</h1>
                    <span>{dataAtual}</span>
                </div>
                <div className="direita-header-portfolio">
                    <span>{props.Likes}</span>
                    <AiOutlineHeart />
                </div>
            </div>
            <div className="imagem-portfolio">
                <img src={props.Imagem} alt='imagem'></img>
                <div className="descricao-portfolio">
                    <div className='nome-autor'>
                        <div className="imagem-comentario">
                            <HiUserCircle />
                        </div>
                        <div className="descricao-texto">
                            <span>{props.NomeAutor}</span>
                            <p>{props.Descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="especificacoes-comentarios">
                <div className='especificacoes-post'>
                    <span>Especificações</span>
                    <p>{props.Especificacoes}</p>
                </div>
                <div className='comentarios-post'>
                    <span>Comentarios e Indicações</span>
                    <div>
                        <div className="imagem-comentario">
                            <HiUserCircle />
                        </div>
                        <div className="texto-comentario">
                            <span>{props.Comentarista}</span>
                            <p>{props.Comentario}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjetoPortfolio