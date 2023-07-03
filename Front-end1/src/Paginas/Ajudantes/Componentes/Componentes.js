import './Componentes.css'
import fotoperfil from '../../../img/Perfil-Ruy.png';
import lupa from "../../../img/icons8-lupa.svg";
export default function Conteudo() {

return(

    
    <div className="paginajudante">
           
        <div className="pt1">
        <h3>Filtro</h3>
        <h4>Limpar Filtro</h4>
        <img src={lupa} alt='Lupa' />
        <input type='text' class='search-txt' placeholder= "Procure um ajudante"></input>
       
        <div class="filter-container">
    <button class="filter-dropdown-button">Nivel</button>
    <div class="filter-dropdown">
      <a class="filter-dropdown-item" href="#">Iniciante</a>
      <a class="filter-dropdown-item" href="#">Experiente</a>
      
    </div>
  
  </div>

        </div>
        
       <div className="centro">

          <span>32 resultados</span>

        
             <div className="coluna">
             <img src={fotoperfil} alt='Perfil' /> <h1>Marcos</h1>
             <p>São paulo - Zona Leste</p>
             <h2>R$35/dia</h2>
             <div className='btn'>
                <button className="botao">Elétrica</button>
                <button className="botao">Interior</button>
                <button className="botao">Reboco</button>
             </div>
             </div>
             <div className="coluna">
             <img src={fotoperfil} alt='Perfil' /> <h1>Marcos</h1>
             <p>São paulo - Zona Leste</p>
             <h2>R$35/dia</h2>
             <div className='btn'>
                <button className="botao">Elétrica</button>
                <button className="botao">Interior</button>
                <button className="botao">Reboco</button>
             </div>
             </div>
             <div className="coluna">
             <img src={fotoperfil} alt='Perfil' /> <h1>Marcos</h1>
             <p>São paulo - Zona Leste</p>
             <h2>R$35/dia</h2>
             <div className='btn'>
                <button className="botao">Elétrica</button>
                <button className="botao">Interior</button>
                <button className="botao">Reboco</button>
             </div>
             </div>
             <div className='coluna'>
             <img src={fotoperfil} alt='Perfil' /> <h1>Marcos</h1>
             <p>São paulo - Zona Leste</p>
             <h2>R$35/dia</h2>
             <div className='btn'>
                <button className="botao">Elétrica</button>
                <button className="botao">Interior</button>
                <button className="botao">Reboco</button>
             </div>
             </div>
            </div>
       <div className="Abas">

       </div>
    </div>
)
}