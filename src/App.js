import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './componentes/LoginForm';
import './hojas-de-estilo/Form.css';
import RegUsuario from './componentes/Registro';
import RecuperarUsuario from './componentes/Recupero';
import AplicacionTareas from './componentes/AplicacionTareas';

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
              <Link className="nav" to="/preguntas">Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link  className="nav" to="/contacto">Contacto</Link> 
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;


