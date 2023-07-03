
import { TbMessageDots } from 'react-icons/tb'


function ItemConexao (props){
    return(
        <div className='item-conexao'>
            <div className="conexao-img">
                <img src={props.Foto} width={50} height={50} alt='Usuário' />
            </div>
            <div className='conexao-texto'>
                <a href='www.google.com' target='blank'>{props.Nome}</a>
                <span><img src={props.ImgOnOff} width={18} height={18} alt='Online' />
                    {props.OnOff}</span>
            </div>
            <div className='conexao-msg'>
                <p>Enviar Mensagem</p>
                <TbMessageDots/>
            </div>
        </div>
    )
}

export default ItemConexao