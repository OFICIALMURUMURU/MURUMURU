import { Link, Outlet } from 'react-router-dom';
import './ConteudoF.css';

function ConteudoF() {



    return (
        <div className="FerramentasConteudo">
            <h2>Selecione uma opção:</h2>
            <div className="calculadora-conteudo">
                <hr/>
                <div className="buttons">
                    <button>
                        <span><Link to="calculadora">Calculadora</Link></span>
                    </button>
                </div>
                <hr/>
                <Outlet />
            </div>
        </div>
    );
}

export default ConteudoF;
