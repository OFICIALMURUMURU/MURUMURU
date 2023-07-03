import './Calendario.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Calendario.png'
import Filtro from './Componentes/Filtro/Filtro';
import ContCalendario from './Componentes/Conteudo/ConteudoCalendario';
function Calendario() {
    document.title='MURUMURU| Calendário📅'
    return (
        <div className="calendario">
            <Conteudo banner={banner} texto="Calendário"/>
            <Filtro />
            <ContCalendario />
        </div>
         
    )
}

export default Calendario