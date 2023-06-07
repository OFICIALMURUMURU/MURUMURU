import './Historico.css'

function Historico() {
    return (
        <div className="item-historico">
            <div className='titulo-historico'>
                <h3>Operação</h3>
                <h4>Feito em: XX/XX/XXXX</h4>
            </div>
            <hr></hr>
            <div className='detalhes-historico'>
                <span>Detalhe 1:</span>
                <span>Detalhe 2:</span>
                <span>Detalhe 3:</span>
                <span>Detalhe 4:</span>
            </div>
            
        </div>
    )
}

export default Historico