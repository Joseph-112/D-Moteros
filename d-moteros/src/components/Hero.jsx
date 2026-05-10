import React from 'react';
import './Hero.css';
import heroVideo from '../assets/LandingPage/video.mp4';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg-container">
                <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
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
                <button className="hero-button">
                    Explorar Colecciones
                </button>
            </div>
        </section>
    );
};

export default Hero;
