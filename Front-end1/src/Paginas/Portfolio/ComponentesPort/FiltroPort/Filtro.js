import './Filtro.css'

function Filtro(){
    return(
        
        <div className="estrutura-filtro-port">
            <div className="filtro-portfolio">
                <label for="procurar-ajudante">Tipo de obra</label>

                <select name="nivel" id="nivel">
                    <option value="iniciante">Construção</option>
                    <option value="experiente">Reforma</option>
                </select>
            </div>

            <div className="nivel-filtro">
                <label for="nivel">Tamanho da obra</label>

                <select name="nivel" id="nivel">
                    <option value="pequena">Pequena</option>
                    <option value="Média">Média</option>
                    <option value="grande">Grande</option>
                </select>
            </div>

            <div className="localizacao-filtro">
                <label for="localizacao">Organizar por:</label>

                <select name="nivel" id="nivel">
                    <option value="MaisNovos">Mais novos</option>
                    <option value="antigos">Mais antigos</option>
                    <option value="Interacao">Interação</option>
                </select>
            </div>
        </div>

    )
}

export default Filtro