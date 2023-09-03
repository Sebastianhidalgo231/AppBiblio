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
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Registro" element={<RegUsuario />} />
          <Route path="/Recupero" element={<RecuperarUsuario />} />
          <Route path='/AplicacionTareas' element={<AplicacionTareas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


