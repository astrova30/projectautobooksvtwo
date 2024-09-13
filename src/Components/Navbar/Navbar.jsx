import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logotipo.png';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthorization } from '../../Context/AuthContext';
const Navbar = () => {
    const [menu, setMenu] = useState();
    const { isLoggedIn, logout } = useAuthorization(); 
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); 

    const handleSearch = (event) => {
        event.preventDefault();
        console.log("Buscando:", searchTerm);
    };

    const handleAuthButtonClick = () => {
        if (isLoggedIn) {
            logout();
        } else {
            navigate('/login');
        }
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='Logotipo de Autobooks' />
                <p>AUTOBOOKS</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu("inicio") }}><Link to='/'>Inicio</Link>{menu === "inicio" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("catalogo") }}><Link to='catalogo'>Catálogo</Link>{menu === "catalogo" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("quienes_somos") }}><Link to='quienes_somos'>Nosotros</Link>{menu === "quienes_somos" ? <hr /> : <></>}</li>

                {isLoggedIn && <li><Link to='/prestamos'>Préstamos</Link></li>}
            </ul>

            <div className='nav-search-icon' onClick={() => setSearchVisible(!searchVisible)}>
                <FaSearch />
            </div>

            {searchVisible && (
                <form className='nav-search' onSubmit={handleSearch}>
                    <input 
                        type='text' 
                        placeholder='Buscar libros...' 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <button type='submit'>Buscar</button>
                </form>
            )}

            <div className='nav-buttons'>
                <button onClick={handleAuthButtonClick}>
                    {isLoggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}
                </button>
            </div>
        </div>
    );
}

export default Navbar;
