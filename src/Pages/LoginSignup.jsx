import React, { useState } from 'react';
import Axios from 'axios';  
import '../Pages/CSS/LoginSignup.css';
import { Link } from 'react-router-dom';
import { useAuthorization } from '../Context/AuthContext'; 

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthorization();  // Función para manejar la sesión
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Llamar a la API falsa con json-server
    Axios.get('http://localhost:3000/usuarios') // Obtener los usuarios desde la API falsa
      .then((response) => {   
        const usuarios = response.data;  // Extraer los usuarios desde la respuesta

        // Buscar un usuario con el email y la contraseña proporcionados
        const usuarioEncontrado = usuarios.find(
          (usuario) => usuario.correo === email && usuario.password === password
        );
        
        if (usuarioEncontrado) {
          // Si el usuario es encontrado, iniciar sesión
          login(usuarioEncontrado.idUsuario); // Actualizar el estado de sesión
          window.location.href = '/'; // Redirigir a la página principal
        } else {
          // Mostrar mensaje de error si no se encuentra el usuario
          setError('Correo o contraseña incorrectos');
        }
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        setError('Hubo un error al procesar tu solicitud');
      });
  };

  // Estilos reutilizables para input, botones y tipografía
  const fontStyle = { 
    fontFamily: 'Cursive', 
    fontWeight: 'bold', 
    fontStyle: 'oblique', 
    fontSize: '16px', 
    marginBottom: '15px'
  };

  const inputStyle = {
    ...fontStyle, 
    padding: '12px', 
    borderRadius: '8px', 
    border: '1px solid black', 
    backgroundColor: 'white',
  };

  const buttonStyle = {
    ...fontStyle,
    padding: '12px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(83, 53, 28, 0.2)',
    marginTop: '20px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#6e4227',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(83, 53, 28, 0.3)'
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar error si hay */}
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Correo SoySena" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          style={inputStyle} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          style={inputStyle} 
        />
        <button 
          type="submit" 
          className="login-button" 
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)} // Aplicar estilo de hover
          onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)} // Volver al estilo original
        >
          Iniciar Sesión
        </button>
        <div className='link'>
          <Link to="/forgot-password">Recuperar contraseña</Link>  
          <br />o
          <br />
          <Link to="/register">Crear cuenta</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
