import './Portfolio.css'
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Portfolio.jpg'
function Portfolio() {
    document.title = 'MURUMURU | Portfólio👷🏾‍♂️';
    return (
        <div className="Portfolio">
            <Conteudo banner={banner} texto="Portfólio"/>
        </div>
    )
}

export default Portfolio