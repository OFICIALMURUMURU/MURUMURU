import Conteudo from '../Componentes/Conteudo/Conteudo';
import EstruturaCalculadora from './EstruturaCalculadora/EstruturaCalculadora'
import banner from '../../img/Ferramentas.png'

function Calculadora() {

    document.title = 'Calculadora | MURUMURU';

    return (
        <div>
            <Conteudo banner={banner} texto="Calculadora" />
            <EstruturaCalculadora />
        </div>
    )
}

export default Calculadora;