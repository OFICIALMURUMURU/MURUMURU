import './Principais.css';
import linha from '../../../../../img/linha.png';

function Principais(){
    return(
        <div className="LojasPerto">
            <span>Principais parceiros:</span>
            <div className='linha'>
                <img src={linha} alt="linha" />
            </div>
        </div>
    )
}

export default Principais