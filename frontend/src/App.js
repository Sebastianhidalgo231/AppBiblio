import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import LoginForm from './componentes/LoginForm';
import './hojas-de-estilo/Form.css';
import RegUsuario from './componentes/registro';
import RecuperarUsuario from './componentes/recupero';
import Acerca from './componentes/acerca';
import Preguntas from './componentes/preguntas';
import Contacto from './componentes/contacto';
import AplicacionLibros from './componentes/AplicacionLibros';

function App() {
  return (
    <Router>
       <div className="nav1">
        <div className="barnav">
        <nav>
          <ul>
            <li>
              <Link className="nav" to="/">Inicio</Link>
            </li>
            <li>
              <Link className="nav" to="/Acerca">Acerca de</Link>
            </li>
            <li>
              <Link className="nav" to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link className="nav" to="/preguntas">Preguntas frecuentes</Link>
            </li>
          </ul>
        </nav>
        </div>
        </div>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registro" element={<RegUsuario />} />
          <Route path="/recupero" element={<RecuperarUsuario />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path='/AplicacionLibros' element={ <AplicacionLibros /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;