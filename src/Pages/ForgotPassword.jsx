import React, { useState } from 'react';
import '../Pages/CSS/LoginSignup.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Recuperación de contraseña para', email);
  };

  const fontStyle = { 
    fontFamily: 'Cursive', 
    fontWeight: 'bold',      //ESTO ES POR SI NO, NOS DA EL ESTILO EN EL CSS
    fontStyle: 'oblique', 
    marginBottom: '10px'  
  };

  return (
    <div className="login-container">
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleForgotPassword}>
        <input 
          type="email" 
          placeholder="Ingresa tu correo SoySena" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={fontStyle}
        />
        <button type="submit" className="login-button" style={fontStyle}>Enviar enlace</button>
        
      </form>
    </div>
  );
}

export default ForgotPassword