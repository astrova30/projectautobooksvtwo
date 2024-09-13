import React, { useState } from 'react';
import '../Pages/CSS/LoginSignup.css';
import { Link } from 'react-router-dom';

const LoginRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [celphone, setCelphone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registro con', name, email, password);
  };

 
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
    border: '1px solid #a1887f', 
    backgroundColor: '#f9f4ef',
  };


  const buttonStyle = {
    ...fontStyle,
    padding: '12px 20px',
    backgroundColor: '#8b5e3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(83, 53, 28, 0.2)',
    marginTop: '20px'
    
  };
  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#6e4227',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(83, 53, 28, 0.3)'
  };

  return (
    <div className="login-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input 
          type="email"
          placeholder="Correo SoySena"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input 
          type="text"
          placeholder="Número de celular"
          value={celphone}
          onChange={(e) => setCelphone(e.target.value)}
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
          onMouseOver={(e) => e.currentTarget.style = buttonHoverStyle}
          onMouseOut={(e) => e.currentTarget.style = buttonStyle}
        >
          Registrarse 
        </button>
        <div className='link'>
          <Link to="/login">Ya tengo una cuenta</Link>
          
          <br />o
          <br />
          <Link to="/forgot-password">Recuperar contraseña</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginRegister;
