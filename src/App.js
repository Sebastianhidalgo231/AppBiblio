import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Form.css';
import RegUsuario from './Componentes/registro';
import RecuperarUsuario from './Componentes/recupero';

function App() {
  return (
    <Router>
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


