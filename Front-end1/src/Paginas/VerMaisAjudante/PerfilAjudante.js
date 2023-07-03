
import FotoPerfilAjudantes from '../../img/Perfil-Ruy.png';
import { FaLessThan } from 'react-icons/fa';
import { RiStarSLine } from 'react-icons/ri';
import { RiStarSFill } from 'react-icons/ri';
import Obra from '../../img/obras2.png';
import { AiOutlineHeart } from 'react-icons/ai'

export default function PerfilAjudante() {
    return (

        <div className='containerperfil'>
            <div className="div_ancora">
                <div className='icone_voltar'>
                    <FaLessThan />
                </div>
                <a className='ancora_ajudantes' href='/'> Voltar para ajudantes</a>
            </div>
            <div className="perfil_do_ajudante">
                <div className='quadrado_ajudante'>
                    <div className="div_perfil_ajudante">
                        <img id="img_perfil_ajudante" className src={FotoPerfilAjudantes}></img>
                    </div>
                    <div className="nome_perfil_ajudante">
                        <p>João Almeida</p>
                    </div>
                </div>
            </div>
            <div className='texto_ajudante'>
                <div className='mini_container'>
                    <div className='interesse_frase'>
                        <h3>INTERESSE NAS OBRAS</h3>
                    </div>
                    <div className='frase_ajudante'>
                        <p>Vai ter alguma descrição aqui, talvez, não sei.<br></br> Porém, todavia, espero que tenha.</p>
                    </div>
                    <div className='habilidades_perfil_ajudante'>
                        <h2 className='sub_titulo_perfil'>HABILIDADES</h2>
                        <p className='habilidade_ajudante_perfil'>Életrica</p>
                        <p className='habilidade_ajudante_perfil'>Interior</p>
                        <p className='habilidade_ajudante_perfil'>Reboco</p>
                    </div>
                    <div className='termos_sobre_usuario'>
                        <div className='termo_coluna'>
                            <p>termo um:</p>
                            <p>termo dois:</p>
                        </div>
                        <div className='termo_coluna'>
                            <p>termo três:</p>
                            <p>termo quatro:</p>
                        </div>
                    </div>

                    <div className='comentarios_indicacoes'>
                        <p className='comentario_pag_perfil'>Comentários e indicações</p>
                        <div className='div_foto_comentario'>
                            <img className='foto_perfil_comentario' src={FotoPerfilAjudantes}></img>
                            <div className='nome_comentario_perfil'>
                                <p className='nome_ajudante_perfil'>João Almeida</p>
                                <p className='paragrafo_perfil_ajudante'>Muito confiável, veio todos os dias.</p>
                            </div>
                        </div>
                        <div className='div_foto_comentario'>
                            <img className='foto_perfil_comentario' src={FotoPerfilAjudantes}></img>
                            <div className='nome_comentario_perfil'>
                                <p className='nome_ajudante_perfil'>João Almeida</p>
                                <p className='paragrafo_perfil_ajudante'>Ótimo trabalho! </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='preco-obras'>
                    <h3>R$ 35/DIA</h3>
                    <div className='estrelinhas'><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSLine /></div>
                    <div className='botoes_perfil_ajudante'>
                        <a href="/">Enviar Mensagem</a>
                        <a className='conectar_perfil_ajudante' href="/">Conectar</a>
                    </div>
                    <div className='projeto_perfil_ajudante'>
                        <div className='div_projeto_perfil'>
                            <p className='sub_titulo_projeto'>PROJETO 5</p>
                            <div className='div_projeto_perfil'>
                                <img src={Obra}></img>
                            </div>
                            <div>
                                <p className='nome_projeto_ajudante'>João Almeida</p>
                                <div className='botao_perfil_ajudante'><p className='descricao_projeto_ajudante'>Descrição breve  </p> <div className='perfil_ajudante_like'><AiOutlineHeart /></div></div>

                            </div>
                            <div className='projetos_feitos_ajudante'>
                                <a className='ancora_projeto_feito' href='/'> Mais projetos que João participa  </a>
                                <div className='icone_voltar'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

