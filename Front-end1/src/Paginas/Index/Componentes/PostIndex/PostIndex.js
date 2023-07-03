import placeholder from '../../../../img/obra.jpg'
import { AiOutlineHeart } from "react-icons/ai";
import './PostIndex.css'

function PostIndex(){
    return(

            <div className="post">
                <div className='alto'>
                    <img src={placeholder} alt="ble"></img>
                </div>

                <div className="baixo">

                    <div className="textopost">
                        <span>Autor</span>
                        <p>Descrição breve</p>
                    </div>

                    <div className="likes">
                        <span>25</span>
                        <span><AiOutlineHeart/></span>
                    </div>

                </div>
            </div>

    )
}

export default PostIndex

