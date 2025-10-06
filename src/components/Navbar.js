import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Importar Link
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="logo" onClick={closeMenu} style={{ textDecoration: 'none', color: 'inherit' }}>
    <span className="logo-img">🏗️</span>
    Casa do Construtor
</Link>

                <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link active" onClick={closeMenu}>Início</Link></li>
                    <li><a href="#equipments" className="nav-link" onClick={closeMenu}>Equipamentos</a></li>
                    <li><a href="#services" className="nav-link" onClick={closeMenu}>Serviços</a></li>
                    <li><a href="#about" className="nav-link" onClick={closeMenu}>Sobre</a></li>
                    <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contato</a></li>

                    {/* ✅ Links novos com navegação por rota */}
                    <li><Link to="/orcamento" className="cta-button" onClick={closeMenu}>Solicitar Orçamento</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
