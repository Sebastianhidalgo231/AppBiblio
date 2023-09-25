import React, { useState } from "react";
import '../hojas-de-estilo/LibroFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function LibroFormulario(props) {
    
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();

        const libroNuevo = {
            id: uuidv4(),
            titulo: input,
            terminado: false
        };

        props.onSubmit(libroNuevo);
    };

    return (
        <form 
        className="libro-formulario"
        onSubmit={manejarEnvio}>
            <input
            className="libro-input"
            type="text"
            placeholder="Escribe un título..."
            name="titulo"
            onChange={manejarCambio}
            />
            <button className="libro-boton">
                Agregar Libro
            </button>
        </form>
    );
}

export default LibroFormulario