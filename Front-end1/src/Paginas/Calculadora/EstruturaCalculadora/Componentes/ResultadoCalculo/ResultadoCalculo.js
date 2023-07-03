import CaixaResultado from "./CaixaResultado/CaixaResultado"
import './ResultadoCalculo.css'

function ResultadoCalculo({ resultado }) {

    return (
        <div className="resultado-calculo">
            {resultado ? (
                <div>
                    <div className="texto-resultado">
                        <span id='operacao'>Operação</span>
                        <hr />
                        <span id='res'>Resultado:</span>
                    </div>
                    <div className="estrutura-resultado">
                        {resultado.quantidadeTijolo ? (
                            <>
                                <CaixaResultado Titulo="Quantidade de tijolos necessários (sem margem de sobra)" Resultado={resultado.quantidadeTijolo} />
                                <CaixaResultado Titulo="Quantidade de tijolos necessários (com margem de sobra)" Resultado={resultado.sobra} />
                            </>
                        ) : null}
                        {resultado.volumeConcreto ? (
                            <>
                                <CaixaResultado Titulo="Volume de concreto:" Resultado={resultado.volumeConcreto.toFixed(2) + 'm³'} />
                                <CaixaResultado Titulo="Volume de cimento:" Resultado={resultado.volumeCimento.toFixed(2) + 'm³'} />
                                <CaixaResultado Titulo="Volume de areia:" Resultado={resultado.volumeAreia.toFixed(2) + 'm³'} />
                                <CaixaResultado Titulo="Volume de brita:" Resultado={resultado.volumeBrita.toFixed(2) + 'm³'} />
                            </>
                        ) : null}
                    </div>
                </div>
            ) : (
                <div>
                    <span id="sem-resultado">Nenhum resultado para exibir. Faça uma conta!</span>
                </div>
            )}
        </div>
    )
}

export default ResultadoCalculo