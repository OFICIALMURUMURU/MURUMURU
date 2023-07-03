import './Card.css'
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Card(props) {
    return (

        <div className="portfolio-post">
            <span>{props.TituloProjeto}</span>
            <div className="estrutura-post">
                <div className="imagem-post">
                    <Link to="/resultadoportfolio"><img src={props.ImgPost} alt='imagem'></img></Link>
                </div>
                <div className="metade-baixo">
                    <div className='texto-post'>
                        <span>{props.Autor}</span>
                        <p>{props.Descricao}</p>
                    </div>
                    <div className='likes'>
                        <AiOutlineHeart />
                        <span>{props.Likes}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card