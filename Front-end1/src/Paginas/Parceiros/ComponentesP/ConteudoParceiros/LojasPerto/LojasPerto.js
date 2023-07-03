import './LojasPerto.css';
import linha from '../../../../../img/linha.png';

function LojasPerto(){
    return(
        <div className="LojasPerto">
            <span>Lojas na sua região:</span>
            <div className='linha'>
                <img src={linha} alt="linha" />
            </div>
        </div>

    )
}

export default LojasPerto