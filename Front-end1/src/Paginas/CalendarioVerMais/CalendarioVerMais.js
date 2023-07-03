import './CalendarioVerMais.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import banner from '../../img/Calendario.png';
import Filtro from './Filtro/Filtro';
import EstruturaCalendario from './Conteudo/ConteudoCalendarioVerMais';
function CalendarioVerMais(){

    document.title = 'Calendário | MURUMURU';
    return(
   
        <div>
        <Conteudo banner={banner} texto="Calendário" />
        <Filtro />
        <EstruturaCalendario />
    </div>
        
        
    )

    
} export default CalendarioVerMais;