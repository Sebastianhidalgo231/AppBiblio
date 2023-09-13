
import React, { useContext } from "react";
import ContextoAutenticacion from "./context/AuthProvider";


//conseguir pasar la información del formulario y comprobarla

export default function Verificacion() {
    const {aut} = useContext(ContextoAutenticacion);
    
   return (
        <h1>Hola, {aut.password}</h1>
   )
}
