import './Lojas.css';
import linha from '../../../../../img/linha.png';

function Lojas(props){
    return(
        <div className="lojas">
            <span>{props.lojatipo}</span>
            <div className='linha'>
                <img src={linha} alt="linha" />
            </div>
        </div>

    )
}

export default Lojas