import './Index.css';
import Banner from './Componentes/Banner/Banner'
import Casinha from '../../img/construction.svg'
import EquipeMurumuru from '../../img/IMG_5829.jpg';

function Index() {
    document.title = 'MURUMURU';
    return (
        <div className='estrutura-index'>
            <Banner />
            <div className='conteudo-index'>
                <div className='texto-index'>
                    <h1>um pouco de nossa história</h1>
                    <p>Em uma família de Gabriel pai, Gabriel filho e Gabriel neto, com tanto para contar, surge a MURUMURU.
                        Um projeto iniciado por alunos do Instituto PROA, olhamos para aqueles que constreem tanto à nossa volta, profissionais da construção civil.</p>
                </div>
                <div className='img-index'>
                    <img src={Casinha} alt='casinha'></img>
                </div>

            </div>
           
            </div>

        
    )
}

export default Index