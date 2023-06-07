import './MaoDeObra.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Pedreiro.jpg'
function MaoDeObra() {
    document.title = 'MURUMURU | Mão de obra🧱'
    return (
        <div className="MaoDeObra">
             <Conteudo banner={banner} texto="Mão de obra"/>
        </div>
    )
}

export default MaoDeObra