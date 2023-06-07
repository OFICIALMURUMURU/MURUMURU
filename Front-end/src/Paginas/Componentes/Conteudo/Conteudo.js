import './Conteudo.css'

export default function Conteudo(props) {
    return (
        <div className='conteudo'>
            
            <img src={props.banner} alt="deus."/>
           
            <h2>{props.texto}</h2>
            
            
        </div>

    )
}
