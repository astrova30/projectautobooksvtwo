import React, { useState } from 'react';
import '../Pages/CSS/BarcodeScanner.css'; 
import allBooks from './Assets/all_books'; 
import users from './Assets/users';

const BarcodeScanner = () => {
  const [book, setBook] = useState(null);
  const [barcode, setBarcode] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [documentNumber, setDocumentNumber] = useState('');
  const [isDocumentEntered, setIsDocumentEntered] = useState(false);
  const usuarioActual = { id: 1, nombre: 'Usuario 1' }; 

  const getBookFromAllBooks = (barcode) => {
    setLoading(true); 
    const bookInAllBooks = allBooks.find((book) => book.codigo_barras === barcode);
    if (bookInAllBooks) {
      setBook(bookInAllBooks);
      setMessage(''); 
    } else {
      setBook(null);
      setMessage('Libro no encontrado en la base de datos.');
    }
    setLoading(false); 
  };

  const handleDocumentNumberChange = (e) => {
    setDocumentNumber(e.target.value);
  };

  const handleDocumentNumberSubmit = (e) => {
    e.preventDefault();
    setIsDocumentEntered(true);
  };

  const handleBarcodeChange = (e) => {
    const newBarcode = e.target.value;
    setBarcode(newBarcode);
    if (newBarcode.length >= 1) {
      getBookFromAllBooks(newBarcode);
    }
  };

  const handleLoanRequest = () => {
    if (book && book.ejemplares > 0) {
      fetch('http://localhost:3000/prestamos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fechaPrestamo: new Date().toISOString(),
          idUsuario: usuarioActual.id, 
          idLibro: book.idLibro,
          estado: 'SOLICITADO',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessage('Préstamo registrado exitosamente.');
          setBook({ ...book, ejemplares: book.ejemplares - 1 });
        })
        .catch((error) => {
          console.error('Error al registrar el préstamo:', error);
          setMessage('Error al registrar el préstamo.');
        });
    } else {
      setMessage('No hay ejemplares disponibles de este libro.');
    }
  };

  return (
    <div className="barcode-scanner-container">
      {!isDocumentEntered ? (
        <>
          <h1>Ingrese su número de documento</h1>
          <form onSubmit={handleDocumentNumberSubmit}>
            <label>
              Número de documento:
              <input
                type="text"
                value={documentNumber}
                onChange={handleDocumentNumberChange}
              />
            </label>
            <button type="submit">Enviar Número de Documento</button>
          </form>
        </>
      ) : (
        <>
          <h1>Escanea el código de barras</h1>
          <form>
            <label>
              Código de barras:
              <input
                type="text"
                value={barcode}
                onChange={handleBarcodeChange}
                placeholder="Escanea o ingresa el código de barras"
              />
            </label>
          </form>
          
          {message && <p className="message">{message}</p>}
      
          {loading && <div className="spinner"></div>}
          
          {book ? (
            <div className="book-info">
              <h2>{book.titulo}</h2>
              <p><strong>Autor:</strong> {book.autor}</p>
              <p><strong>Editorial:</strong> {book.editorial}</p>
              <p><strong>Descripción:</strong> {book.descripcion}</p>
              <p><strong>Ejemplares disponibles:</strong> {book.ejemplares}</p>

              <button onClick={handleLoanRequest}>Solicitar Préstamo</button>
            </div>
          ) : (
            !loading && <p>Esperando escaneo...</p> 
          )}
        </>
      )}
    </div>
  );
};

export default BarcodeScanner;
