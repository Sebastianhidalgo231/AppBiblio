
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import "./App.css";
import RegUsuario from './Componentes/registro';
import RecuperarUsuario from './Componentes/recupero';
import Acerca from './Componentes/Acerca';
import Preguntas from './Componentes/preguntas';
import Contacto from './Componentes/contacto';

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
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/preguntas" element={<Preguntas />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


