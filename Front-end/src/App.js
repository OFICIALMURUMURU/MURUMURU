import { Routes, Route } from 'react-router-dom';

import Index from './Paginas/Index/Index';
import Login from './Paginas/Login/Login';
import Cadastro from './Paginas/Cadastro/Cadastro';
import Ferramentas from './Paginas/Ferramentas/Ferramentas';
import Calculadora from './Paginas/Ferramentas/ComponentesF/Calculadora/Calculadora';
import Portfolio from './Paginas/Portfolio/Portfolio';
import Calendario from './Paginas/Calendario/Calendario';
import Ajudantes from './Paginas/Ajudantes/Ajudantes';
import MaoDeObra from './Paginas/MaoDeObra/MaoDeObra';
import Parceiros from './Paginas/Parceiros/Parceiros';
import Perfil from './Paginas/Perfil/Perfil';
import NoMatch from './Paginas/NoMatch/NoMatch';

import Nav from './Paginas/Componentes/Navbar/NavBar';
import Rodape from './Paginas/Componentes/Rodape/Rodape';


import './App.css';

function App() {


  return (
    <div className='Tudo'>
      <Nav />
      <div className="conteudoApp">
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='cadastro' element={<Cadastro />}></Route>
          <Route path='ferramentas' element={<Ferramentas />}>
            <Route path="calculadora" element={<Calculadora />} />
          </Route>
          <Route path='portfolio' element={<Portfolio />}></Route>
          <Route path='calendario' element={<Calendario />}></Route>
          <Route path='ajudantes' element={<Ajudantes />}></Route>
          <Route path='maodeobra' element={<MaoDeObra />}></Route>
          <Route path='parceiros' element={<Parceiros />}></Route>
          <Route path='perfil' element={<Perfil />}></Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Routes>
      </div>
      <Rodape />
    </div>
  );
}

export default App;
