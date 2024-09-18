import React, { useState } from 'react';
import './AdminDashb.css';

const books = [
    { id: 1, isbn: '9789584239419', codigo_barras: '9789584239419', categoria: 'Novela', autor: 'Mario Mendoza', editorial: 'Editorial Planeta', fechaPublicacion: 2002, ejemplares: null, titulo: 'Satanás', serie: null, tema: 'Novela colombiana -- Siglo XXI, Bien y mal – Novela', notaPremio: 'Premio Biblioteca Breve, 2022.', cover: 'path_to_book1_image' },
    { id: 2, isbn: '9789585595026', codigo_barras: '9789585595026', categoria: 'Novela', autor: 'Stefan Zweig', editorial: 'Instituto Distrital de las Artes', fechaPublicacion: 2019, ejemplares: null, titulo: 'Novela de ajedrez', serie: null, tema: ': Novela austriaca -- Siglo XX', notaPremio: null, cover: 'path_to_book2_image' },
];

const initialRequests = [
    { id: 1030544214, student: 'Juan Pérez', book: 'Satanás', status: 'Pendiente' },
    { id: 1032421360, student: 'María López', book: 'Novela de ajedrez', status: 'Pendiente' },
];

const AdminDashb = () => {
    const [requests, setRequests] = useState(initialRequests);

    const handleAccept = (id) => {
        setRequests(requests.map(request =>
            request.id === id ? { ...request, status: 'Aceptada' } : request
        ));
    };

    const handleReject = (id) => {
        setRequests(requests.map(request =>
            request.id === id ? { ...request, status: 'Rechazada' } : request
        ));
    };

    return (
        <div className="admin-dashb-container">

            <div className="navbar">
                <h1>Panel de Administración</h1>
                <nav>
                    <a href="#inventario">Inventario</a>
                    <a href="#solicitudes">Solicitudes</a>
                    <a href="#prestados">Libros Prestados</a>
                </nav>
            </div>

            <div className="main-content">
                {/* Tarjetas de Resumen */}
                <section className="summary-section">
                    <h2>Resumen General</h2>
                    <div className="summary-cards">
                        <div className="summary-card">
                            <h3>Libros en Inventario</h3>
                            <p>{books.length}</p>
                        </div>
                        <div className="summary-card">
                            <h3>Libros Prestados</h3>
                            <p>1</p>
                        </div>
                        <div className="summary-card">
                            <h3>Solicitudes Pendientes</h3>
                            <p>{requests.length}</p>
                        </div>
                        <div className="summary-card">
                            <h3>Consultas de usuarios</h3>
                            <p>1</p>
                        </div>
                    </div>
                </section>

                {/* Inventario de Libros */}
                <section id="inventario" className="table-container">
                    <h2>Inventario de Libros</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoría</th>
                                <th>Editorial</th>
                                <th>Fecha de Publicación</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr key={book.id}>
                                    <td>{book.titulo}</td>
                                    <td>{book.autor}</td>
                                    <td>{book.categoria}</td>
                                    <td>{book.editorial}</td>
                                    <td>{book.fechaPublicacion}</td>
                                    <td>{book.tema}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Solicitudes Pendientes */}
                <section id="solicitudes" className="table-container">
                    <h2>Solicitudes Pendientes</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Estudiante</th>
                                <th>Libro</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(request => (
                                <tr key={request.id}>
                                    <td>{request.id}</td>
                                    <td>{request.student}</td>
                                    <td>{request.book}</td>
                                    <td>{request.status}</td>
                                    <td>
                                        {request.status === 'Pendiente' && (
                                            <>
                                                <button onClick={() => handleAccept(request.id)}>Aceptar</button>
                                                <button onClick={() => handleReject(request.id)}>Rechazar</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* Agregar Nuevo Libro */}
                <section id="agregar-libro" className="form-container">
                    <h2>Agregar Nuevo Libro</h2>
                    <form>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" id="titulo" name="titulo" required />
                        
                        <label htmlFor="autor">Autor</label>
                        <input type="text" id="autor" name="autor" required />
                        
                        <label htmlFor="isbn">ISBN</label>
                        <input type="text" id="isbn" name="isbn" required />
                        
                        <label htmlFor="categoria">Categoría</label>
                        <input type="text" id="categoria" name="categoria" required />
                        
                        <label htmlFor="editorial">Editorial</label>
                        <input type="text" id="editorial" name="editorial" required />
                        
                        <label htmlFor="fechaPublicacion">Fecha de Publicación</label>
                        <input type="number" id="fechaPublicacion" name="fechaPublicacion" required />
                        
                        <label htmlFor="descripcion">Descripción</label>
                        <textarea id="descripcion" name="descripcion" rows="4"></textarea>
                        
                        <button type="submit">Agregar Libro</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default AdminDashb;
