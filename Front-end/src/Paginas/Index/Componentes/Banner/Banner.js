import './BannerFundo.css';
import Logo from "../../../../img/logo-branca-sem-fundo.png";
import { Link } from 'react-router-dom';

function Banner() {
    
    return (
        <div className='Banner'>
            <img className="logo" src={Logo} alt="Logo da Empresa Murumuru"></img>
            <div className="texto">
                <span>COMECE <Link to="/cadastro">AGORA</Link></span>
                <span>OU FAÇA <Link to="/login">LOGIN</Link></span>
            </div>
        </div>
    )
}

export default Banner