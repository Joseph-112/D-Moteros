import { useState } from 'react';
import './Carousel.css';
import img1 from '../assets/Carousel/img1.png';
import img2 from '../assets/Carousel/img2.png';
import img3 from '../assets/Carousel/img3.png';
import img4 from '../assets/Carousel/img4.png';
import img5 from '../assets/Carousel/img5.png';

const Carousel = () => {
    const images = [
        { id: 1, url: img1, title: 'Estilo Urbano' },
        { id: 2, url: img2, title: 'Cafe Racer' },
        { id: 3, url: img3, title: 'Vintage' },
        { id: 4, url: img4, title: 'Accesorios' },
        { id: 5, url: img5, title: 'Edición Limitada' }
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <section className="carousel-section">
            <div className="carousel-container">
                <div className="carousel-header">
                    <h2 className="carousel-title">Nuestro Estilo</h2>
                    <div className="carousel-divider"></div>
                </div>

                <div className="carousel-3d-wrapper">
                    {images.map((img, index) => {
                        let offset = index - currentIndex;

                        // Infinite wrapping logic
                        if (offset < -Math.floor(images.length / 2)) offset += images.length;
                        if (offset > Math.floor(images.length / 2)) offset -= images.length;

                        const absOffset = Math.abs(offset);
                        const isActive = offset === 0;

                        const rotateY = offset * 25;
                        const translateZ = absOffset * -100;
                        const translateX = offset * 110;

                        const zIndex = 10 - absOffset;
                        const opacity = absOffset > 2 ? 0 : 1;

                        return (
                            <div
                                key={img.id}
                                className="carousel-item"
                                style={{
                                    transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                                    zIndex: zIndex,
                                    opacity: opacity,
                                    boxShadow: isActive ? '0 25px 50px -12px rgba(184, 11, 11, 0.5)' : '0 10px 30px -10px rgba(0,0,0,0.8)',
                                    pointerEvents: opacity === 0 ? 'none' : 'auto'
                                }}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img src={img.url} alt={img.title} className="carousel-item-img" />
                                <div className={`carousel-item-overlay ${isActive ? 'active' : 'inactive'}`}>
                                    <h3 className="carousel-item-title">{img.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="carousel-controls">
                    <button onClick={prevSlide} className="carousel-btn" aria-label="Anterior">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="carousel-btn-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <div className="carousel-dots">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`carousel-dot ${currentIndex === idx ? 'active' : 'inactive'}`}
                                aria-label={`Ir a diapositiva ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button onClick={nextSlide} className="carousel-btn" aria-label="Siguiente">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="carousel-btn-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
