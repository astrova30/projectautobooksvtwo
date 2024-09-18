import users from './users.js';
import allbooks from './allbooks.js';

let loans = [];


function findUserByBarcode(barcode) {
  return users.find(user => user.codigo_barras === barcode);
}


function findBookByBarcode(barcode) {
  return allbooks.find(book => book.codigo_barras === barcode);
}


function createLoan(user, book) {
  const newLoan = {
    idUsuario: user.idUsuario,
    nombreUsuario: user.nombre,
    idLibro: book.id,
    tituloLibro: book.titulo,
    fechaPrestamo: new Date().toLocaleDateString(), 
    devuelto: false 
  };
  
  loans.push(newLoan);
  console.log("Préstamo realizado:", newLoan);
  return newLoan;
}

function onScan(barcode) {
  const user = findUserByBarcode(barcode);
  
  if (user) {
    console.log("Usuario encontrado:", user.nombre);

    const bookBarcode = '9789586312134'; 
    const book = findBookByBarcode(bookBarcode);
    
    if (book) {
      console.log("Libro encontrado:", book.titulo);
      createLoan(user, book); // Registrar el préstamo
    } else {
      console.log("Libro no encontrado.");
    }
  } else {
    console.log("Usuario no encontrado.");
  }
}

const userBarcode = "1030544214"; 
onScan(userBarcode); 
