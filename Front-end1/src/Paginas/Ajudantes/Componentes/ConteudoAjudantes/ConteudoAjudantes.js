import './ConteudoAjudantes.css'
import Card from './Card/Card'
import Resultados from './Resultados/Resultados'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


function ConteudoAjudantes(){
   return(
      <div className='conteudo-ajudantes'>
          <Resultados/>
         
        <div className='ajudantes-cards'>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" precoDiaria="35"/>
         
         </div>

        

        
        
      </div>
     
    )
}

export default ConteudoAjudantes