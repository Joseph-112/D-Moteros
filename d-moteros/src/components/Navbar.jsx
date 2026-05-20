import React, { useState, useEffect } from 'react';
import logo from '../assets/LandingPage/logo-2.PNG';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScrollToCollections = (e) => {
        e.preventDefault();
        const element = document.getElementById('colecciones');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
            <div className="navbar-container relative">
                <a href="#" className="navbar-logo" onClick={handleScrollToTop}>
                    <img src={logo} alt="D'Moteros Logo" className="navbar-logo-img" />
                </a>
                
                {/* Desktop Menu */}
                <ul className="navbar-menu">
                    <li><a href="#" className="navbar-link" onClick={handleScrollToTop}>Inicio</a></li>
                    <li><a href="#colecciones" className="navbar-link" onClick={handleScrollToCollections}>Colecciones</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white hover:text-red-500 transition-colors cursor-pointer" onClick={toggleMenu} aria-label="Abrir menú">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            ></div>

            {/* Mobile Menu Sidebar */}
            <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-mobile-menu-list">
                    <li><a href="#" className="navbar-mobile-link" onClick={(e) => { handleScrollToTop(e); toggleMenu(); }}>Inicio</a></li>
                    <li><a href="#colecciones" className="navbar-mobile-link" onClick={(e) => { handleScrollToCollections(e); toggleMenu(); }}>Colecciones</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
