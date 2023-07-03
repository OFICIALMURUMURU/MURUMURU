import { Link } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import ProjetoPortfolio from './Componentes/ProjetoPortfolio';
import obra1 from '../../img/obras1.png'
import './ResultadoPortfolio.css'

function ResultadoPortfolio() {
    return (
        <div className="estrutura-resultado-portfolio">
            <div className='ancora-portfolio'>
                <Link to='/portfolio'><p><FaLessThan /> Voltar para portfólio</p></Link>
            </div>
            <ProjetoPortfolio
                NomeProjeto="Projeto 1"
                Likes='25'
                Imagem={obra1}
                NomeAutor='Jorge Aragão'
                Descricao='Vai ter alguma descrição aqui, talvez, não sei. Porém, todavia, espero que tenha.'
                Comentarista="Joao Almeida"
                Comentario="Ótimo projeto!"
                Especificacoes="Obra feita com tijolos de cerâmica, vigas de ferro e cimento"
            />
        </div>
    )
}

export default ResultadoPortfolio