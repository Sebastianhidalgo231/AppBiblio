import React from "react";
import { ProductoRegistro } from "./Productos";
import "../estilos/Tabla.css";


export function CrearTabla({listaproductos}){

    return(
        <table className="Tabla">
            {
            listaproductos.map((libro) => {
                return(<ProductoRegistro producto={libro}></ProductoRegistro>)
            })
            }
        </table>
    )
}