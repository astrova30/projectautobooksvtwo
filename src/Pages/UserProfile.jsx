import React, { useState, useEffect } from 'react';
import './CSS/UserProfile.css';  


const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
  });
  const [message, setMessage] = useState('');


  const usuarioActual = { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com' };

  useEffect(() => {
    fetch(`http://localhost:3000/usuarios/${usuarioActual.id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setFormData({
          nombre: data.nombre,
          email: data.email,
        });
      })
      .catch((error) => {
        console.error('Error al obtener los datos del usuario:', error);
        setMessage('Error al obtener los datos del usuario.');
      });
  }, [usuarioActual.id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/usuarios/${usuarioActual.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setIsEditing(false);
        setMessage('Perfil actualizado exitosamente.');
      })
      .catch((error) => {
        console.error('Error al actualizar el perfil:', error);
        setMessage('Error al actualizar el perfil.');
      });
  };

  return (
    <div className="user-profile-container">
      <h1>Perfil de Usuario</h1>
      {message && <p className="message">{message}</p>}
      {user ? (
        <form onSubmit={handleSave}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          {isEditing ? (
            <button type="submit">Guardar Cambios</button>
          ) : (
            <button type="button" onClick={handleEditToggle}>Editar Perfil</button>
          )}
        </form>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default UserProfile;
