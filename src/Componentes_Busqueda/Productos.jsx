import React from "react";
import "../estilos/Productos.css"
import { Link } from "react-router-dom"; // como el <a href=""></a> de HTML


export function ProductoRegistro({producto}){
    
    return(
        <tr>
            <td>
                {producto.titulo}
            </td>
            <td>
                {producto.autor}
            </td>
            <td>
                {producto.precio}
            </td>
            {(producto.stock? <td>Stock</td> : <td>Sin Stock</td>)} 
            {(producto.stock && <td><Link to={producto.link}>Comprar</Link></td>)} {
                // condicional && empieza con un booleano. Si es verdadero => renderiza, caso contrario, no.
                //condicional ternario ? : es también un booleando que sigue una rama u otra dependiendo de si es true o false.
            }
            
        </tr>
    )
}