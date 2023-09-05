
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Form.css';
import RegUsuario from './Componentes/registro';
import RecuperarUsuario from './Componentes/recupero';
import Verificacion from './InicioDeSesion';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path='/inicio' element = {<Verificacion />} /> 
          <Route path="/registro" element={<RegUsuario />} />
          <Route path="/recupero" element={<RecuperarUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


