import React, { useState } from 'react';
import Axios from 'axios';

const AdminDashb = () => {
    const [isbn, setIsbn] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [editorial, setEditorial] = useState('');
    const [anioPublicacion, setAnioPublicacion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [sinopsis, setSinopsis] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/create", {
            isbn: isbn,
            titulo: titulo,
            autor: autor, 
            editorial: editorial,
            anioPublicacion: anioPublicacion,
            categoria: parseInt(categoria),  
            cantidad: parseInt(cantidad),  
            sinopsis: sinopsis,
        }).then(() => {
            alert("Libro registrado");
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f4f4f4',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontStyle: 'oblique',
            fontWeight: 'bold'
        }}>
            <h1 style={{
                fontSize: '24px',
                marginBottom: '20px',
                color: '#333'
            }}>Registrar Libro</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>ISBN</label>
                <input
                    type="text"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                />

                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                />

                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Autor</label>
                <input
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                />

                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Editorial</label>
                <input
                    type="text"
                    value={editorial}
                    onChange={(e) => setEditorial(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                />

                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Año de Publicación</label>
                <input
                    type="text"
                    value={anioPublicacion}
                    onChange={(e) => setAnioPublicacion(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                />

                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Categoría</label>
                <input
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                />

                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Cantidad</label>
                <input
                    type="text"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        margin: '0 auto',
                    }}
                />

                <label style={{ fontSize: '14px', marginBottom: '5px', color: '#555' }}>Sinopsis</label>
                <textarea
                    value={sinopsis}
                    onChange={(e) => setSinopsis(e.target.value)}
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        width: '90%',
                        height: '100px',
                        margin: '0 auto',
                    }}
                />

                <button
                    type="submit"
                    style={{
                        padding: '10px 20px', 
                        backgroundColor: '#cbaf90',
                        color: 'black',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontFamily: '"Comic Sans MS", cursive, sans-serif',
                        fontStyle: 'oblique',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease, transform 0.2s ease',
                        width: '80%', 
                        margin: '0 auto',
                        marginTop: '20px',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#a8926b'; 
                        e.target.style.transform = 'scale(1.05)'; 
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#cbaf90'; 
                        e.target.style.transform = 'scale(1)'; 
                    }}
                >
                    Registrar Libro
                </button>
            </form>
        </div>
    );
};

export default AdminDashb;


