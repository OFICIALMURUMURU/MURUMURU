import './ConteudoCalendario.css';
import Elementos from './ElementosCalendario';
import ParteInferior from './Parteinferior';
import { Link } from 'react-router-dom';

export default function ConteudoCalendario(props){
    
    return(
        <div className='estrutura-calendario'>
            <div className='Dias-semanas'>
                    <span>Dom</span>
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                     <span>Qui</span>
                    <span>Sex</span>
                     <span>Sab</span>
               </div>
            
             <div className='Semanas'>
             <Link to='/VermaisCalendario'>
             <Elementos TipoDoElemento="Piso +" TipoDoElemento2="Chuva+" TipoDoElemento3="Parede+" TipoDoElemento4="Janela +" TipoDoElemento5="Reboco +" TipoDoElemento6="Laje +" TipoDoElemento7="Secagem +" TipoDoElemento8="Encana.. +" TipoDoElemento9="Porta +" TipoDoElemento10= "Rodapé" />
             <Elementos TipoDoElemento="Piso +" TipoDoElemento2="Chuva+" TipoDoElemento3="Parede+" TipoDoElemento4="Janela +" TipoDoElemento5="Reboco +" TipoDoElemento6="Laje +" TipoDoElemento7="Secagem +" TipoDoElemento8="Encana.. +" TipoDoElemento9="Porta +" TipoDoElemento10= "Rodapé" />
             <Elementos TipoDoElemento="Piso +" TipoDoElemento2="Chuva+" TipoDoElemento3="Parede+" TipoDoElemento4="Janela +" TipoDoElemento5="Reboco +" TipoDoElemento6="Laje +" TipoDoElemento7="Secagem +" TipoDoElemento8="Encana.. +" TipoDoElemento9="Porta +" TipoDoElemento10= "Rodapé" />
             <Elementos TipoDoElemento="Piso +" TipoDoElemento2="Chuva+" TipoDoElemento3="Parede+" TipoDoElemento4="Janela +" TipoDoElemento5="Reboco +" TipoDoElemento6="Laje +" TipoDoElemento7="Secagem +" TipoDoElemento8="Encana.. +" TipoDoElemento9="Porta +" TipoDoElemento10= "Rodapé" />
             <Elementos TipoDoElemento="Piso +" TipoDoElemento2="Chuva+" TipoDoElemento3="Parede+" TipoDoElemento4="Janela +" TipoDoElemento5="Reboco +" TipoDoElemento6="Laje +" TipoDoElemento7="Secagem +" TipoDoElemento8="Encana.. +" TipoDoElemento9="Porta +" TipoDoElemento10= "Rodapé" />
             </Link>
              </div>
            
              <div className='parte-inferior'>

               <ParteInferior />
         

              </div>
      

        </div>
       
    )

} 