import './CardP.css'
import { AiOutlineHeart } from "react-icons/ai";

function CardP(props){
    return(

        <div className="post">

            <div className="Titulo">
                <span>{props.nomeLoja}</span>
            </div>

            <div className="imagem">
                <div className="fotoLoja">
                    <img src={props.fotoLoja} alt="imagem da loja"/>
                </div>
            </div>

            <div className="Descricao">
                <div className="sobreLoja">
                    <span>{props.sobreLoja}</span>
                </div>

                <div className="Frete">
                    <span>{props.frete}</span>
            
                </div>
            </div>
            
        </div>
    )
}

export default CardP