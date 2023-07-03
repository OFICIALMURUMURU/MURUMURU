import './FiltroP.css'
import lupa from "../../../../img/icons8-lupa.svg";

function FiltroP(){
    return(
        
        <div className="estrutura-filtro">
            <div className="pesquisa-filtro">
                <label for="procurar-MaoDeObra">Pesquise</label>
                <input type='text' id='procurar-MaoDeObra' placeholder= "Procure um parceiro"></input>
            </div>
           
            <div className="localizacao-filtro">
                <label for="localizacao">Localização</label>
                <input type="text" id="localizacao" placeholder="Insira sua localização"></input>
                <button>Buscar</button>
            </div>
        </div>

    )
}

export default FiltroP