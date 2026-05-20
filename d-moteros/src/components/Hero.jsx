import React from 'react';
import './Hero.css';
import heroImage from '../assets/LandingPage/stand.jpeg';

const Hero = () => {
    const handleScrollToCollections = (e) => {
        e.preventDefault();
        const element = document.getElementById('colecciones');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">
            <div className="hero-bg-container">
                <img
                    src={heroImage}
                    alt="Stand D'Moteros"
                    className="hero-bg-img"
                />
                <div className="hero-bg-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-title-highlight">D'</span>MOTEROS
                </h1>
                <p className="hero-description">
                    Lleva tu pasión en cada ruta. Descubre nuestros exclusivos busos y sacos estampados para verdaderos motociclistas.
                </p>
                <button className="hero-button" onClick={handleScrollToCollections}>
                    Explorar Colección
                </button>
            </div>
        </section>
    );
};

export default Hero;
