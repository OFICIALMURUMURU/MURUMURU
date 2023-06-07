import {useState} from "react";
import './Relogio.css';

function Relogio () {
    let hora = new Date().toLocaleTimeString();
    const [horaAtual, setHoraAtual] = useState(hora)


    const atualizarHora = () =>{
        let hora = new Date().toLocaleTimeString();
        setHoraAtual(hora)
    }

    setInterval(atualizarHora, 1000)

    return(
        <div className="relogio">
            <h1>{horaAtual}</h1>
        </div>
    )
}

export default Relogio