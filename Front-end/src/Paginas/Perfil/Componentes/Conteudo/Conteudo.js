import './Conteudo.css'
import FotoRuy from '../../../../img/Perfil-Ruy.png'
import { BsGear } from 'react-icons/bs'

export default function Conteudo() {
    return (
        <div className="Conteudo">
            <div className="Perfil">
                <span>PERFIL</span>

                <div className="ConteudoPerfil">
                    <img src={FotoRuy} alt='Perfil' />
                    <a href="" ><BsGear /></a>
                    <span>RUY</span>
                    <span>NIVEL 3</span>
                    <p>Vai ter alguma descrição aqui, talvez, não sei. Porém, todavia, espero que tenha.</p>
                </div>
            </div>
            <div className="Historico">
                <span>HISTÓRICO DE PROJETOS</span>

                <div className="ConteudoHistorico">
                    <h2>NOME DO PROJETO</h2>
                    <span>1 mês  Obras curtas  Jan 2023 - Fev 2023  </span>
                    <p>Vai ter alguma descrição aqui, talvez, não sei. Porém, todavia, espero que tenha.</p>
                    <hr/>

                    <h2>NOME DO PROJETO</h2>
                    <span>1 mês  Obras curtas  Jan 2023 - Fev 2023  </span>
                    <p>Vai ter alguma descrição aqui, talvez, não sei. Porém, todavia, espero que tenha.</p>
                    <hr/>


                    <h2>NOME DO PROJETO</h2>
                    <span>1 mês  Obras curtas  Jan 2023 - Fev 2023  </span>
                    <p>Vai ter alguma descrição aqui, talvez, não sei. Porém, todavia, espero que tenha.</p>
                    <hr/>

                    
                    <h2>NOME DO PROJETO</h2>
                    <span>1 mês  Obras curtas  Jan 2023 - Fev 2023  </span>
                    <p>Vai ter alguma descrição aqui, talvez, não sei. Porém, todavia, espero que tenha.</p>
                    <hr/>

                    <h2>NOME DO PROJETO</h2>
                    <span>1 mês  Obras curtas  Jan 2023 - Fev 2023  </span>
                    <p>Vai ter alguma descrição aqui, talvez, não sei. Porém, todavia, espero que tenha.</p>
                    

                    
                </div>
            </div>
        </div>
    )

}

