import './ConteudoPerfil.css';
import ItemConexao from './ItemConexao/ItemConexao';
import Especialidade from './Especialidade';
import FotoRuy from '../../../../img/Perfil-Ruy.png';
import { BsGear } from 'react-icons/bs';
import Online from '../../../../img/Online.svg';
import Offline from '../../../../img/Offline.svg';
import { Link } from 'react-router-dom';

export default function ConteudoPerfil({ user }) {
  return (
    <div className="estrutura-perfil">
      <div className="perfil">
        <span>PERFIL</span>
        <Link to="/configuracoes" className="config">
          <BsGear />
        </Link>

        <div className="conteudo-perfil">
          <img src={FotoRuy} alt="Perfil" />

          <span>{user?.nome}</span>
          <p>{user?.descricao}</p>
          <div className="especialidades">
           
          </div>
        </div>
      </div>
      <div className="lado-direito">
        <div className="conexao">
          <span>CONEXÕES</span>
          <div className="conteudo-conexao">
           
          </div>
        </div>

        <div className="meus-projetos">
          <span>MEUS PROJETOS</span>
          <div className="conteudo-projetos"></div>
        </div>
      </div>
    </div>
  );
}
