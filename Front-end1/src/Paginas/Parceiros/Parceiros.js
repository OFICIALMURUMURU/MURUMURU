import './Parceiros.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Parceiros.png';
import ConteudoParceiros from './ComponentesP/ConteudoParceiros/ConteudoParceiros';



function Parceiros() {
    document.title = 'MURUMURU | Parceiros🤝'
    return (

        <div className="Parceiros">
            <Conteudo banner={banner} texto="Parceiros"/>

            <div className="Conteudo-Parceiros">
                
                <ConteudoParceiros />
            </div>

        </div>
    )
}

export default Parceiros