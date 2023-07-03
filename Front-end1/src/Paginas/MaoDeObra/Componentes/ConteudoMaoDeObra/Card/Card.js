import './Card.css'
import fotoperfil from '../../../../../img/Perfil-Ruy.png';
import Parafusos from '../../../../../img/parafuso.svg';
import { Link } from 'react-router-dom';
function Card(props){
    return(
        <div className="estrutura-cartao">
            <div className="header-cartao">
                <div className="parafusos">
                    <img src= {Parafusos} />
                    <img src= {Parafusos} />
                  
                </div>
                <div className="img-cartao">
                    <img src={fotoperfil} alt="imagem de perfil"/>
                </div>
            </div>
            <div className="conteudo-cartao">
                <span>{props.nomeAjudante}</span>
                <span className="local-ajudante">{props.cidade} - Zona {props.zona}</span>
                <div className='habilidades-cartao'>
                    <span>{props.habilidade1}</span>
                    <span>{props.habilidade2}</span>
                    <span>{props.habilidade3}</span>
                </div>
                <div className="info-cartao">
                    <span>{props.obras} Obras</span>
                  <Link to='/perfilMaodeObra'> <button className="ver-mais">Ver Mais</button></Link>  
                </div>
            </div>
        </div> 
               
    )
}

export default Card