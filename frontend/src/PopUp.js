import React from "react";

export default function PopUp({visible}) {
    return (
        <>
        {visible? (
        <>
        <div className="alert">
            <h4>Error. Usuario y/o contraseña inválido/s</h4>
        </div>
        </>
        ) : null
        }
        </>
    )
}

