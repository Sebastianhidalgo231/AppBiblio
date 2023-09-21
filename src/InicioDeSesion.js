import React, { useContext } from "react";
import ContextoAutenticacion from "./context/AuthProvider";

import './InicioDeSesion.css';


//conseguir pasar la información del formulario y comprobarla

export default function Verificacion() {
    const {aut} = useContext(ContextoAutenticacion);
    
   return (
        <div className="container__card">
          <div className="card__father">
               <div className="tarjeta">
                    <div className="card__front">
                         <div className="bg"></div>
                         <div className="body__card_front">
                              <h1>Hola, {aut.password}</h1>
                         </div>
                    </div>
                    <div className="card__back">
                         <div className="body__card_back">
                              <h1>Saludos</h1>
                              <p>¿Cómo está?</p>
                         </div>
                    </div>
               </div>
          </div>
        </div>
   )
}
