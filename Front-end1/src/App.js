import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Index from './Paginas/Index/Index';
import Login from './Paginas/Login/Login';
import Cadastro from './Paginas/Cadastro/Cadastro';
import Calculadora from './Paginas/Calculadora/Calculadora';
import Portfolio from './Paginas/Portfolio/Portfolio';
import ResultadoPortfolio from './Paginas/ResultadoPortfolio/ResultadoPortfolio';
import Calendario from './Paginas/Calendario/Calendario';
import Ajudantes from './Paginas/Ajudantes/Ajudantes';
import MaoDeObra from './Paginas/MaoDeObra/MaoDeObra';
import Parceiros from './Paginas/Parceiros/Parceiros';
import Perfil from './Paginas/Perfil/Perfil';
import CalendarioVerMais from './Paginas/CalendarioVerMais/CalendarioVerMais';
import NoMatch from './Paginas/NoMatch/NoMatch';

import PerfilAjudante from './Paginas/VerMaisAjudante/PerfilAjudante';
import PerfilMaodeObra from './Paginas/VerMaisMaodeObra/PerfilMaodeObra';
import Configuracoes from './Paginas/Configuracoes/Configuracoes';
import Nav from './Paginas/Componentes/Navbar/NavBar';
import Rodape from './Paginas/Componentes/Rodape/Rodape';

import './App.css';

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="page"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <div className='Tudo'>
      <Nav />
      <div className="conteudoApp">
        <Routes>
          <Route path='/' element={<PageTransition><Index /></PageTransition>}></Route>
          <Route path='login' element={<PageTransition><Login /></PageTransition>}></Route>
          <Route path='cadastro' element={<PageTransition><Cadastro /></PageTransition>}></Route>
          <Route path='calculadora' element={<PageTransition><Calculadora /></PageTransition>}></Route>
          <Route path='portfolio' element={<PageTransition><Portfolio /></PageTransition>}></Route>
          <Route path='calendario' element={<PageTransition><Calendario /></PageTransition>}></Route>
          <Route path='VerMaisCalendario' element={<PageTransition><CalendarioVerMais /></PageTransition>}></Route>
          <Route path='ajudantes' element={<PageTransition><Ajudantes /></PageTransition>}></Route>
          <Route path='maodeobra' element={<PageTransition><MaoDeObra /></PageTransition>}></Route>
          <Route path='parceiros' element={<PageTransition><Parceiros /></PageTransition>}></Route>
          <Route path='perfil' element={<PageTransition><Perfil /></PageTransition>}></Route>
          <Route path='*' element={<PageTransition><NoMatch /></PageTransition>}></Route>
          <Route path='perfilAjudante' element={<PageTransition><PerfilAjudante /></PageTransition>}></Route>
          <Route path='perfilMaodeObra' element={<PageTransition><PerfilMaodeObra /></PageTransition>}></Route>
          <Route path='configuracoes' element={<PageTransition><Configuracoes /></PageTransition>}></Route>
          <Route path='resultadoportfolio' element={<PageTransition><ResultadoPortfolio /></PageTransition>}></Route>
        </Routes>
       
      </div>
      <Rodape />
    </div>
  );
}

export default App;
