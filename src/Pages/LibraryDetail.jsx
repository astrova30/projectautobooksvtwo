import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import allbooks from '../Components/Assets/all_books'; 
import '../Pages/CSS/LibraryDetail.css'; 

const LibraryDetail = () => {
  const { id } = useParams(); 
  const libro = allbooks.find((book) => book.id === parseInt(id));
  
  const [requestStatus, setRequestStatus] = useState('');

  if (!libro) {
    return <div className="not-found">Libro no encontrado</div>;
  }

  const handleRequestLoan = () => {
    setRequestStatus(`Solicitud de préstamo enviada para el libro: ${libro.titulo}`);
  };

  return (
    <div className="library-detail-container">
      <div className="book-cover">
        <img src={libro.cover} alt={libro.titulo} />
      </div>
      <div className="book-info">
        <h1>{libro.titulo}</h1>
        <h2>{libro.autor}</h2>
        <p><strong>Editorial:</strong> {libro.editorial}</p>
        <p><strong>Año de publicación:</strong> {libro.fechaPublicacion}</p>
        <p><strong>Categoría:</strong> {libro.categoria}</p>
        <p><strong>Descripción:</strong> {libro.descripcion}</p>
        <p><strong>Tema:</strong> {libro.tema}</p>
        <button className="borrow-book-button" onClick={handleRequestLoan}>
          Solicitar Préstamo
        </button>
        {requestStatus && <p className="request-status">{requestStatus}</p>}
      </div>
    </div>
  );
};

export default LibraryDetail;
