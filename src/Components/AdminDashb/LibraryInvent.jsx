import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const LibraryInvent = () => {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({
        isbn: '',
        titulo: '',
        autor: '',
        editorial: '',
        anioPublicacion: '',
        categoria: '',
        cantidad: '',
        sinopsis: '',
        imagen: null
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        Axios.get('http://localhost:3001/getBooks')
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleImageChange = (e) => {
        setForm({ ...form, imagen: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(form).forEach(key => formData.append(key, form[key]));

        Axios.post(`http://localhost:3001/${editingId ? 'updateBook' : 'createBook'}`, formData)
            .then(() => {
                alert(`Libro ${editingId ? 'actualizado' : 'registrado'} con éxito`);
                setForm({
                    isbn: '',
                    titulo: '',
                    autor: '',
                    editorial: '',
                    anioPublicacion: '',
                    categoria: '',
                    cantidad: '',
                    sinopsis: '',
                    imagen: null
                });
                setEditingId(null);
                
                Axios.get('http://localhost:3001/getBooks')
                    .then((response) => {
                        setBooks(response.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleEdit = (book) => {
        setForm({
            isbn: book.isbn,
            titulo: book.titulo,
            autor: book.idAutor,
            editorial: book.editorial,
            anioPublicacion: book.anioPublicacion,
            categoria: book.idCategoria,
            cantidad: book.cantidad,
            sinopsis: book.sinopsis,
            imagen: null
        });
        setEditingId(book.idLibro);
    };

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3001/deleteBook/${id}`)
            .then(() => {
                alert('Libro eliminado con éxito');
                setBooks(books.filter(book => book.idLibro !== id));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', fontStyle: 'oblique' }}>Gestión de Libros</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif',  fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>ISBN</label>
                <input
                    type="text"
                    name="isbn"
                    value={form.isbn}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '8px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Título</label>
                <input
                    type="text"
                    name="titulo"
                    value={form.titulo}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '8px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif',fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Autor</label>
                <input
                    type="text"
                    name="autor"
                    value={form.autor}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '8px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Editorial</label>
                <input
                    type="text"
                    name="editorial"
                    value={form.editorial}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '8px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Año de Publicación</label>
                <input
                    type="text"
                    name="anioPublicacion"
                    value={form.anioPublicacion}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '8px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Categoría</label>
                <input
                    type="text"
                    name="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '8px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Cantidad</label>
                <input
                    type="number"
                    name="cantidad"
                    value={form.cantidad}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '8px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd',  }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Sinopsis</label>
                <textarea
                    name="sinopsis"
                    value={form.sinopsis}
                    onChange={handleChange}
                    style={{ width: '90%', padding: '20px', fontStyle: 'oblique', fontWeight: 'bold', borderRadius: '4px', border: '1px solid #ddd', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}
                />
                
                <label style={{ display: 'block', fontFamily: '"Comic Sans MS", cursive, sans-serif', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px 0' }}>Imagen del libro</label>
                <input
                    type="file"
                    name="imagen"
                    onChange={handleImageChange}
                    style={{ margin: '5px 0', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}
                />
                
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#94490c',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontStyle: 'oblique',
                        marginTop: '10px',
                        display: 'block',
                        width: '50%'
                    }}
                >
                    {editingId ? 'Actualizar Libro' : 'Registrar Libro'}
                </button>
            </form>

            <div style={{ marginTop: '20px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', fontStyle: 'oblique', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>Lista de Libros</h2>
                <ul style={{ listStyleType: 'none', padding: '0', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
                    {books.map((book) => (
                        <li key={book.idLibro} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                            <h3 style={{ fontWeight: 'bold', fontStyle: 'oblique' }}>{book.titulo}</h3>
                            <p>Autor: {book.autor}</p>
                            <p>Editorial: {book.editorial}</p>
                            <p>Año de Publicación: {book.anioPublicacion}</p>
                            <p>Categoría: {book.idCategoria}</p>
                            <p>Cantidad: {book.cantidad}</p>
                            <p>Sinopsis: {book.sinopsis}</p>
                            {book.imagen && <img src={`http://localhost:3001/uploads/${book.imagen}`} alt={book.titulo} style={{ maxWidth: '100px', height: 'auto', display: 'block', marginTop: '10px', fontFamily: '"Comic Sans MS", cursive, sans-serif' }} />}
                            <button
                                onClick={() => handleEdit(book)}
                                style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(book.idLibro)}
                                style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontStyle: 'oblique', margin: '5px', margin: '0, auto', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LibraryInvent;
