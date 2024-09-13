import React from 'react';
import './BookPreview.css'; 
import { useNavigate } from 'react-router-dom';
import book1 from '../Assets/books/book1.png'; 
import book2 from '../Assets/books/book2.png'; 
import book3 from '../Assets/books/book3.png'; 
import book4 from '../Assets/books/book4.png'; 
import book5 from '../Assets/books/book5.png'; 
import book6 from '../Assets/books/book6.png'; 
import book7 from '../Assets/books/book7.png'; 
import book8 from '../Assets/books/book8.png'; 

const books = [
  { id: 1, title: 'La canción de Aquiles', author: 'Madeline Miller', authors_nationality: 'Estados Unidos', gender:'Novela', editorial: 'Alianza', cover: book1},
  { id: 2, title: 'Veinte poemas de amor y una canción desesperada', author: 'Pablo Neruda', authors_nationality: 'Chile', gender:'Poesía', editorial: 'SEIX BARRAL',cover: book2},
  { id: 3, title: 'El mundo y sus demonios', author: 'Carl Sagan', cover: book3},
  { id: 4, title: 'La teoría de la relatividad de Einstein', author: 'Albert Einstein', cover: book4},
  { id: 5, title: 'La señora Dalloway', author: 'Virginia Woolf', cover: book5},
  { id: 6, title: 'Lady Masacre', author: 'Mario Mendoza', cover: book6},
  { id: 7, title: 'Orgullo y Prejuicio', author: 'Jane Austen', cover: book7},
  { id: 8, title: 'El extraño caso de Dr. Jekyll y Mr. Hyde', author: 'Robert L. Stevenson', cover: book8},
];

const BookPreview = () => {
  const navigate = useNavigate(); 

  const handleBookClick = () => {
    navigate('/login'); 
  };

  return (
    <section id="catalogo-libros" className="book-preview">
      <h2>Libros Destacados</h2>
      <div className="book-grid">
        {books.map(book => (
          <div key={book.id} className="book-item" onClick={handleBookClick}>
            <img src={book.cover} alt={book.title} className="book-cover" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">
              <span className="autor-label">Autor:</span> 
              <span className="autor-nombre">{book.author}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookPreview;

