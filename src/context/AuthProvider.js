import React from "react";
import { createContext , useState } from "react";

//Voy a crear un contexto para que todos los componentes envueltos por el Provider puedan usar aut y setAut 

const ContextoAutenticacion = createContext({}); //Recibe un objeto 

export const AutProvider = ({ childComponentes }) => {
    const [aut , setAut]=useState({});
    return (
        <ContextoAutenticacion.Provider value={{aut, setAut}}> {/* se corrigió [] de array por {} de objeto*/}
            {childComponentes}
        </ContextoAutenticacion.Provider>
    );
    }
export default ContextoAutenticacion;