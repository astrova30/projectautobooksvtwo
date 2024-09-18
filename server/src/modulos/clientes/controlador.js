const db = require('../../DB/mysql');

const TABLA = 'libros';

function libros () {
    return db.todos(TABLA)
}

module.exports = {
    libros,
}