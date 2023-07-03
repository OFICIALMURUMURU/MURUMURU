import React, { useState } from 'react';
import './NavBar.css';
import { HiUserCircle } from "react-icons/hi2";
import menu from './img/menu-hamburguer.png';
import fechar from './img/botao-fechar.png'
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo-branca-sem-fundo.png';

export default function Nav() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [listVisivel, setListVisivel] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
    setListVisivel(!listVisivel);
  };

  return (
    <>
      <nav className='desktop'>
        <NavLink to='/' className="brand">murumuru</NavLink>
        <NavLink to='/calculadora' className='opcao'>calculadora</NavLink>
        <NavLink to='/portfolio' className='opcao'>portfolio</NavLink>
        <NavLink to='/calendario' className='opcao'>calendario</NavLink>
        <NavLink to='/ajudantes' className='opcao'>ajudantes</NavLink>
        <NavLink to='/maodeobra' className='opcao'>mão de obra</NavLink>
        <NavLink to='/parceiros' className='opcao'>parceiros</NavLink>
        <NavLink to='/perfil' className='opcao'><HiUserCircle /></NavLink>
      </nav>
      <nav className='mobile'>
        <div className='logo-hamburguer'>
          <img src={logo} alt="logo" className='logo' />
          <img
            src={menuAberto ? fechar : menu}
            alt="menu"
            className='menu'
            onClick={toggleMenu}
          />
        </div>
        <div className='list'>
          {listVisivel && (
            <ul>
              <li><NavLink to='/' onClick={toggleMenu} activeClassName="active">página inicial</NavLink></li>
              <li><NavLink to='/calculadora' onClick={toggleMenu} activeClassName="active">calculadora</NavLink></li>
              <li><NavLink to='/portfolio' onClick={toggleMenu} activeClassName="active">portfolio</NavLink></li>
              <li><NavLink to='/calendario' onClick={toggleMenu} activeClassName="active">calendário</NavLink></li>
              <li><NavLink to='/ajudantes' onClick={toggleMenu} activeClassName="active">ajudantes</NavLink></li>
              <li><NavLink to='/maodeobra' onClick={toggleMenu} activeClassName="active">mão de obra</NavLink></li>
              <li><NavLink to='/parceiros' onClick={toggleMenu} activeClassName="active">parceiros</NavLink></li>
              <li><NavLink to='/perfil' onClick={toggleMenu} activeClassName="active"><HiUserCircle /> perfil</NavLink></li>
            </ul>
          )}
        </div>
      </nav>
    </>
  )
}
