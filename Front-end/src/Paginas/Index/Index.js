import './Index.css';
import Banner from './Componentes/Banner/Banner'
import Post from './Componentes/PostIndex/PostIndex';


function Index() {
    document.title = 'MURUMURU';
    return (
        <div className='index'>
            <Banner />

            <div className="conteudoIndex">
                <div className='titulo'>
                    <span>PROJETOS DA SEMANA</span>
                </div>
                <div className='posts'>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default Index