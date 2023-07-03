import React from "react"

function CaixaResultado (props) {
    return(
        <div className="caixa-resultado">
            <span>{props.Titulo}</span>
            <p>{props.Resultado}</p>
        </div>
    )
}

export default CaixaResultado