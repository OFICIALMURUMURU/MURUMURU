import './Perfil.css';
import Conteudo from './Componentes/Conteudo/Conteudo';


function Perfil(){
    document.title='MURUMURU | Perfil 👨🏻‍💻 '
    return(
        <div className="Perfil">
            <Conteudo />
        </div>
    )
}

export default Perfil