import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    <span className="navbar-logo-highlight">D'</span>Moteros
                </a>
                <ul className="navbar-menu">
                    <li><a href="#" className="navbar-link">Inicio</a></li>
                    <li><a href="#" className="navbar-link">Colecciones</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
