import './Filtro.css';

function Filtro (){
    return(
             <div className='Calendario'>
                <span>Calendário</span>
        <div className="filtro-calendario">
            <div className="filtro-projeto">
                <label for="projeto">Projetos</label>
                <select name="nivel" id="nivel">
                    <option value="Projeto">Projeto 1</option>
                    <option value="Projeto">Projeto 2</option>
                    <option value="Projeto">Projeto 3</option>
                    <option value="Projeto">Projeto 4</option>
                    <option value="Projeto">Projeto 5</option>
                    </select>
            </div>
            <div className="mes">
                <label for="MÊS">Mês</label>
                <select name="nivel" id="nivel">
                <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                    <option value="Abril">Abril</option>
                    <option value="Maio">Maio</option>
                    <option value="Junho">Junho</option>
                    <option value="Julho">Julho</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Setembro">Setembro</option>
                    <option value="Outubro">Outubro</option>
                    <option value="Novembro">Novembro</option>
                    <option value="Dezembro">Dezembro</option>
                </select>
                
            </div>
            <div className='ano'>

              <label for="nivel">Ano</label>
               <select name="nivel" id="nivel">
              <option value="Ano">2023</option>
             <option value="Ano">2022</option>
               <option value="Ano">2021</option>
               <option value="Ano">2020</option>
              
               
             </select>

          </div>

        </div>
        </div>
        
    )
} export default Filtro
