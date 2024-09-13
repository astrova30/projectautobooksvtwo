import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import allbooks from '../Components/Assets/all_books'; 
import '../Pages/CSS/LibraryDetail.css'; 

const LibraryDetail = () => {
  const { id } = useParams(); 
  const libro = allbooks.find((book) => book.id === parseInt(id));
  
  const [requestStatus, setRequestStatus] = useState('');

  if (!libro) {
    return <div>Libro no encontrado</div>;
  }

  const handleRequestLoan = () => {
    setRequestStatus(`Solicitud de préstamo enviada para el libro: ${libro.title}`);
  };

  return (
    <div className="library-detail-container">
      <div className="book-cover">
        <img src={libro.cover} alt={libro.title} />
      </div>
      <div className="book-info">
        <h1>{libro.title}</h1>
        <h2>{libro.author}</h2>
        <p><strong>Editorial:</strong> {libro.editorial}</p>
        <p><strong>Año de publicación:</strong> {libro.year}</p>
        <p><strong>Nacionalidad del autor:</strong> {libro.authors_nationality}</p>
        <p><strong>Género:</strong> {libro.gender}</p>
        <p><strong>Sinopsis:</strong> {libro.synopsis}</p>
        <button className="borrow-book-button" onClick={handleRequestLoan}>
          Solicitar Préstamo
        </button>
        {requestStatus && <p>{requestStatus}</p>} 
      </div>
    </div>
  );
};

export default LibraryDetail;

