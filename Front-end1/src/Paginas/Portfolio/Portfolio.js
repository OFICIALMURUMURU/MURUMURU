import './Portfolio.css'
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Portfolio.png'
import Filtro from './ComponentesPort/FiltroPort/Filtro';
import ContPort from './ComponentesPort/ContPort/ConteudoPort';

function Portfolio() {
    document.title = 'MURUMURU | Portfólio';
    return (
        <div className="estrutura-portfolio">
            <Conteudo banner={banner} texto="Portfólio"/>

            <div className='portfolio'>
                <Filtro />
                <ContPort />
            </div>
        </div>
    )
}

export default Portfolio