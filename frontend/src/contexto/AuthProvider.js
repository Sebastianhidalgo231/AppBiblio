import React from "react";
import { createContext, useState } from "react";

export const ContextoDeAutenticacion = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState();
    return ( <ContextoDeAutenticacion.Provider value = {{auth, setAuth}}>
        {children}
        </ContextoDeAutenticacion.Provider> );
}

export default ContextoDeAutenticacion;
