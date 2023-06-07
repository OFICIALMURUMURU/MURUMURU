import './Parceiros.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Parceiros.jpg'
function Parceiros() {
    document.title = 'MURUMURU | Parceiros🤝'
    return (
        <div className="Parceiros">
            <Conteudo banner={banner} texto="Parceiros"/>
        </div>
    )
}

export default Parceiros