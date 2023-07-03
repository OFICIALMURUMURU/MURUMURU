import './ConteudoMaoDeObra.css'
import Card from './Card/Card'
import Resultados from './Resultados/Resultados'


function ConteudoAjudantes(){
   
   return(
      <div className='conteudo-maodeobra'>
         <Resultados/>
         <div className='maodeobra-cards'>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         <Card nomeAjudante="Marcos" cidade="São Paulo" zona="Leste" habilidade1="Elétrica" habilidade2="Reboco" habilidade3="Assentamento" obras="150"/>
         </div>
      </div>
      
    )
}

export default ConteudoAjudantes