import React from 'react';
import '../hojas-de-estilo/pregunta.css';

function Preguntas() {
  return (
    <div>
      <div className="contenido1">
        <h2>Preguntas Frecuentes</h2>
      </div>
      <div className="carta-contenido2">
        <div className="carta">
          <p className="carta-title">¿Cómo puedo registrarme en Tu Rincón Literario Personal?</p>
          <div className="carta-content">
            <p className="carta-description">Para registrarte en nuestro sitio, ve a la página de registro y completa el formulario con tus datos personales. Una vez registrado, podrás empezar a utilizar todas las funcionalidades de nuestro sitio.</p>
          </div>
        </div>
        <div className="carta">
          <p className="carta-title">¿Cómo puedo agregar un libro a mi biblioteca personal?</p>
          <div className="carta-content">
            <p className="carta-description">Para agregar un libro a tu biblioteca personal, ve a la sección "Mi Biblioteca" y haz clic en el botón "Agregar Libro". Luego, podrás buscar el libro por título o autor y añadirlo a tu colección</p>
          </div>
        </div>
        <div className="carta">
          <p className="carta-title">¿Puedo compartir mis reseñas de libros con otros usuarios?</p>
          <div className="carta-content">
            <p className="carta-description">Sí, definitivamente. En Tu Rincón Literario Personal, puedes escribir reseñas de tus libros favoritos y compartirlas con la comunidad. Otras personas podrán leer tus reseñas y comentar sobre ellas.</p>
          </div>
        </div>
        <div className="carta">
          <p className="carta-title">¿Cómo puedo cambiar mi contraseña?</p>
          <div className="carta-content">
            <p className="carta-description">Para cambiar tu contraseña, ve a la sección "Configuración de la Cuenta" y busca la opción de "Cambiar Contraseña". Ingresa tu contraseña actual y la nueva contraseña que deseas utilizar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Preguntas;