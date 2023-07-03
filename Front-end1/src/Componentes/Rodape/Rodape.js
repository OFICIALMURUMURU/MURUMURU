import './Rodape.css';
import LogoInsta from '../../../img/instagram.png';
import LogoLinkedin from '../../../img/linkedin.png';
import LogoLinktree from '../../../img/linktree.png';
import LogoProa from '../../../img/logo-proa.png'

function Rodape() {
    return (
        <div className="copyright">
            <div className="rodape">
                <div className="contato">
                    <h4>contato</h4>
                    <span>Perguntas Frequentes</span>
                    <span>Atendimento ao Cliente</span>
                </div>
                <div className="apoio">
                    <h4>com apoio de :</h4>
                    <img src={LogoProa} alt="logo instituto proa"></img>
                    <span>Instituto Proa</span>
                </div>
                <div className="redes-sociais">
                    <h4>redes sociais</h4>
                    <div className="logos">
                        <a href='https://www.linkedin.com/company/murumuru-oficial/' target='blank'><img src={LogoLinkedin} alt='logo linkedin'></img></a>
                        <a href='https://www.instagram.com/murumuruplataforma/?igshid=MzRlODBiNWFlZA%3D%3D' target='blank'><img src={LogoInsta} alt='logo instagram'></img></a>
                        <a href='https://linktr.ee/MURUMURUoficial' target='blank'><img src={LogoLinktree} alt='logo linktree'></img></a>
                    </div>
                </div>
            </div>
            <span>© 2023 MURUMURU Todos os direitos reservados.</span>
        </div>
    )
}

export default Rodape;