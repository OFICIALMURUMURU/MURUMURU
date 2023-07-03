import './BannerFundo.css';
import Logo from "../../../../img/logo-azul-claro.svg";
import { Link } from 'react-router-dom';
import img from './img_fundo_tijo.png'

function Banner() {

    return (
        <div className='banner'>

            <div className="texto">
                <div className="titulo">
                    <h1>inove, conecte e construa</h1>
                    <h2>construindo no futuro</h2>
                </div>
                <div className='botoes'>
                    <Link to='/login'><button id='login-button'>Entrar</button></Link>
                    <Link to='/cadastro'><button id="cadastro">Criar Conta</button></Link>
                   
                </div>
            </div>
            <img className="logo" src={Logo} alt="Logo da Empresa Murumuru"></img>
        </div>
    )
}

export default Banner