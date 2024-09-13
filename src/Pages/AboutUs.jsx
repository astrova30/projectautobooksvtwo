import React from 'react';
import '../Pages/CSS/AboutUs.css'; 
import images from '../Components/Assets/snoopy.png'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>¿Quiénes Somos?</h1>
      <p>
      Somos un grupo de desarrolladores del SENA comprometidos con ofrecer a la comunidad la facilidad de conseguir un libro prestado a través de nuestro sistema digital. 
        Queremos ayudar a los bibliotecarios a aliviar la sobrecarga de trabajo manual, reduciendo el uso de papel y simplificando los procesos de solicitud de préstamos.
      </p>
      <p>
      Descubre cosas nuevas con nosotros y aprovecha la tecnología para hacer de la lectura una experiencia aún más accesible y agradable. ¡Únete a nuestra misión de transformar el préstamo de libros!
      </p>

      <div className='images'>
        <img src={images} alt =''></img>
      </div>
    </div>
  );
};

export default AboutUs;