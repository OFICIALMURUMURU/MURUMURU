import './NavBar.css';
import { HiUserCircle } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (

        <nav className='navbar'>
            <NavLink to='/' className="Brand">MURUMURU</NavLink>
            <NavLink to='/ferramentas'>FERRAMENTAS</NavLink>
            <NavLink to='/portfolio'>PORTFÓLIO</NavLink>
            <NavLink to='/calendario'>CALENDÁRIO</NavLink>
            <NavLink to='/ajudantes'>AJUDANTES</NavLink>
            <NavLink to='/maodeobra'>MÃO DE OBRA</NavLink>
            <NavLink to='/parceiros'>PARCEIROS</NavLink>
            <NavLink to='/perfil'><HiUserCircle/></NavLink>
        </nav>
    )
}