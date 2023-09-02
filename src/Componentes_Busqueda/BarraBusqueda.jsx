import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

import { CrearTabla } from "./ProductosTabla"

const productos = [ //reemplazar esto con una clase Libro
    {
    titulo:"El Aleph",
    precio:"$4850",
    stock: true,
    autor:"J.L.Borges",
    link: "/aleph",
    code:"OL16213554M",
    },
    {
    titulo:"Historia universal de la infamia",
    precio:"$3800",
    stock: false,
    autor:"J.L.Borges",
    link: "/historia",
    code:"OL27786200M",
    },
    {
    titulo:"El proceso",
    precio:"$9500",
    stock: true,
    autor:"F.Kafka",
    link: "/proceso",
    code:"OL47352225M",
    },
    {
    titulo:"El castillo",
    precio:"$11500",
    stock: true,
    autor:"F.Kafka",
    link: "/castillo",
    code:"OL47267704M",
    },
    {
    titulo:"Pájaros en la boca",
    precio:"$5000",
    stock: false,
    autor:"S.Schweblin",
    link: "/pajaros",
    code:"OL26855777M",
    },
    {
    titulo:"Los peligros de fumar en la cama",
    precio:"$5250",
    stock: true,
    autor:"M.Enriquez",
    link: "/peligros",
    code:"OL30763466M",
    },
    {
    titulo:"Los llanos",
    precio:"$4200",
    stock: true,
    autor:"F.Falco",
    link: "/llanos",
    code:"OL31547706M",
    },
]

export function BarraNavegacion(){
    const [busqueda , setBusqueda] = useState()
    const [enStock , setStock] = useState(false)
    const [listaProductos , setListaProductos]=useState(productos)
    console.log(busqueda)
    console.log(enStock)
    console.log(listaProductos)
    useEffect(()=> {
        setListaProductos(productos.filter(libro => libro.titulo.includes(busqueda) && libro.stock === enStock))
    }, 
    [busqueda , enStock] )

    return(
        <>
            <input 
            type="text" 
            placeholder="Busque aquí"
            onChange={(e)=>setBusqueda(e.target.value)}
            >    
            </input>
            <label>
                <input 
                type="checkbox"
                onChange={ () => setStock(!enStock)}>    
                </input>
            En Stock
            </label>
            <CrearTabla listaproductos={listaProductos}></CrearTabla>
            <div><Outlet></Outlet></div> 
        </>
    )
    //Outlet lo que hace es que los hijos se rendericen bajo el padre
}