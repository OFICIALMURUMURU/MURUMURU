import './Ferramentas.css';


import Conteudo from '../Componentes/Conteudo/Conteudo';
import ConteudoF from './ComponentesF/ConteudoF'
import banner from '../../img/Ferramentas.jpg'


function Ferramentas() {
   
        document.title = 'MURUMURU| Ferramentas 🧰 '; 
        
    return (
        <div className="Ferramentas">
            <Conteudo banner = {banner} texto="Ferramentas"/>
            <ConteudoF />
        </div>
    )
}

export default Ferramentas