import './ElementosCalendario.css';

function ElementosCalendario(props){
    return(
        <div className='quadrados'>
           
         <div className='Dom'>{props.TipoDoElemento7}</div>
         <div className='Seg'>{props.TipoDoElemento}</div>
         <div className='Ter'>{props.TipoDoElemento6}</div>
         <div className='Qua'>{props.TipoDoElemento2}</div>
         <div className='Qui'>{props.TipoDoElemento3}</div>
         <div className='Sex'>{props.TipoDoElemento9}</div>
         <div className='Sab'>{props.TipoDoElemento7}</div>
         </div>
     
        
    )
} export default ElementosCalendario;