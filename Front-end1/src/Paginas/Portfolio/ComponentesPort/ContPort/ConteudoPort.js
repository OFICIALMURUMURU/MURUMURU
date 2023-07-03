import './ConteudoPort.css';
import Card from './Card/Card';


import obras1 from '../../../../img/obras1.png';
import obras2 from '../../../../img/obras2.png';
import obras3 from '../../../../img/obras3.png';
import obras4 from '../../../../img/obras4.png';


function ConteudoParceiros() {
    return (
        <div className='conteudo-portfolio'>
            <Card TituloProjeto="Projeto 1" ImgPost={obras1} Autor="Jorge Aragão" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 2" ImgPost={obras2} Autor="Joao Crispim" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 3" ImgPost={obras3} Autor="Denis Almeida" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 4" ImgPost={obras4} Autor="Felipe Ancho" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 5" ImgPost={obras1} Autor="Larissa Souza" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 6" ImgPost={obras2} Autor="Andressa Fabi" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 7" ImgPost={obras3} Autor="Vania Alessandra" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 8" ImgPost={obras4} Autor="Leandro Silva" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 9" ImgPost={obras1} Autor="Tiago Marfim" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 10" ImgPost={obras2} Autor="Isnete Alves" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 11" ImgPost={obras3} Autor="Fabiola Sophie" Descricao="Projeto de casa" Likes="25" />
            <Card TituloProjeto="Projeto 12" ImgPost={obras4} Autor="Sandra Gouveia" Descricao="Projeto de casa" Likes="25" />
        </div>



    )
}



export default ConteudoParceiros