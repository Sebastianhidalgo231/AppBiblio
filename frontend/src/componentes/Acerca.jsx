import React from 'react';
import '../hojas-de-estilo/acerca.css'; 

function Acerca() {
  return (
    <div className="one-div">
      <div className="innerCard1">
        <div className="frontSide1">
          <h1 className="title1"> Bienvenido a "Tu Rincón Literario Personal," tu destino definitivo para explorar, gestionar y discutir tus libros favoritos.</h1>
          <h2>Explora un Mundo de Literatura:</h2>
          <p>En nuestro espacio virtual, encontrarás una vasta selección de reseñas de libros de diversos géneros y autores. Desde novelas clásicas hasta los últimos bestsellers, estamos aquí para ofrecerte una visión completa de la literatura. Navega a través de nuestras reseñas y descubre tu próxima lectura fascinante.</p>
          <p>Guarda y Organiza tu Biblioteca Personal:</p> 
        </div>
        <div className="backSide1">
          <h1 className="title1">¿Te resulta complicado llevar un registro de tus libros?</h1>
          <p>No te preocupes, hemos desarrollado una herramienta de gestión de bibliotecas que te permitirá mantener un registro de todos los libros que has leído, los que estás leyendo y los que deseas leer en el futuro. Organiza tu colección de manera eficiente y nunca más perderás de vista un libro.</p>
          <p>Comparte tus Pensamientos con la Comunidad:</p>
          <p>La lectura es una experiencia individual, pero a menudo deseamos compartir nuestros pensamientos y opiniones. Con nuestro sistema de comentarios, puedes interactuar con otros amantes de la lectura y discutir tus libros favoritos. Además, puedes leer las reseñas de otros usuarios y descubrir nuevas perspectivas sobre tus libros de cabecera.</p>
          <p>Recursos Adicionales:</p>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
