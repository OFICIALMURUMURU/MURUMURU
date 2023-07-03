import "./ConteudoCalendarioVerMais.css";
import FotoCalendario from '../../../img/calendario1.png';
function ConteudoCalendarioVerMais(){

    return(
       

      
           
     
        <div className="Estrutura-VerMaisCalendario">
               
            <div className="pt1Calendario">
           
            </div>
          
               
           <div className="Cont-Calendario">
             <div className="LadoEsquerdo">
              

                 <div className="FotosProjetos">
                <img src={FotoCalendario}></img>
                <img src={FotoCalendario}></img>
                 </div>
                <div className="FotosProjetos2">
                <img src={FotoCalendario}></img>
                <img src={FotoCalendario}></img>

                </div>
                <div className="LadoDireito">
           <span className="Texto">Feito no dia:</span>
             <p className="Texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <span className="Texto">O que faltou:</span>
           <p className="Texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </div>
    </div> 
    </div>
    </div>       
         

    )
} export default ConteudoCalendarioVerMais;