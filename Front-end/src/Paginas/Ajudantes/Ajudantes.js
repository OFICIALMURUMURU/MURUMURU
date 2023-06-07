import './Ajudantes.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import Conteudoo from './Componentes/Componentes';
import banner from '../../img/Pedreiro.jpg'
function Ajudantes() {
    document.title = 'MURUMURU | Ajudantes🏗️';
    return (
        <div className="Ajudantes">
            <Conteudo banner={banner} texto="Ajudantes"/>
            <Conteudoo />
            
        </div>
    )
}

export default Ajudantes