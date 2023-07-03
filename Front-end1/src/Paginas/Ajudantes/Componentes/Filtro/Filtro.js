import './Filtro.css'
import lupa from "../../../../img/icons8-lupa.svg";

function Filtro(){
    return(
        
        <div className="estrutura-filtro-ajudant">
            <div className="pesquisa-filtro-ajudant">
                <label for="procurar-ajudante">Pesquise</label>
                <input type='text' id='procurar-ajudante' placeholder= "Procure uma especialidade"></input>
            </div>
            <div className="nivel-filtro-ajudant">
                <label for="nivel">Nivel de experiência</label>
                <select name="nivel" id="nivel">
                    <option value="iniciante">Iniciante</option>
                    <option value="experiente">Experiente</option>
                </select>
            </div>
            <div className="localizacao-filtro-ajudant">
                <label for="localizacao">Localização</label>
                <input type="text" id="localizacao" placeholder="Insira sua localização"></input>
                <button>Buscar</button>
            </div>
        </div>

    )
}

export default Filtro