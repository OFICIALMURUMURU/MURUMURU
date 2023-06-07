import './Calendario.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Calendario.jpg'
function Calendario() {
    document.title='MURUMURU| Calendário📅'
    return (
        <div className="Calendario">
            <Conteudo banner={banner} texto="Calendário"/>
        </div>
    )
}

export default Calendario