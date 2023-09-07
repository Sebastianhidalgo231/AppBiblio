import React from "react";
import { createContext , useState } from "react";

//Voy a crear un contexto para que todos los componentes envueltos por el Provider puedan usar aut y setAut 

export const ContextoAutenticacion = createContext(); //Recibe un objeto 

export const AutProvider = ({children}) => {
    const [aut , setAut]=useState({}); {/* se corrigió [] de array por {} de objeto*/}
    return (
        <ContextoAutenticacion.Provider value={{aut, setAut}}> 
            {children}
        </ContextoAutenticacion.Provider>
    );
    }
export default ContextoAutenticacion;