import React from "react";

export default function Popup({visible}) {
    return (
        <>
        {visible? (
          <>
            <div className="alert">
                <h4>Error</h4>
                <h5>Usuario o contraseña inválidos</h5>
            </div>
          </>
        ) : null
        }
        </>
    )
}

