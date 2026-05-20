import { useState } from 'react';
import './Carousel.css';
import img1 from '../assets/Carousel/producto-1-sinner-thumb.avif';
import img2 from '../assets/Carousel/producto-2-skullface-thumb.avif';
import img3 from '../assets/Carousel/producto-2-skullface-front-thumb.avif';
import img4 from '../assets/Carousel/producto-3-gothic-red-thumb.avif';
import img5 from '../assets/Carousel/producto-3-gothic-red-front-thumb.avif';

const Carousel = () => {
    const images = [
        { id: 1, url: img1, title: 'Hoodie Pecador 777' , cost: '$180.000'},
        { id: 2, url: img2, title: 'Hoodie Ghost' , cost: '$180.000'},
        { id: 3, url: img3, title: 'Hoodie Ghost' , cost: '$180.000'},
        { id: 4, url: img4, title: 'Hoodie Sin City' , cost: '$190.000'},
        { id: 5, url: img5, title: 'Hoodie Sin City' , cost: '$190.000'}
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section id="colecciones" className="carousel-section" style={{ '--bg-image': `url(${images[currentIndex].url})` }}>
            <div className="carousel-container">
                <div className="carousel-header">
                    <h2 className="carousel-title">Nuestra nueva colección</h2>
                    <div className="carousel-divider"></div>
                </div>

                <div 
                    className="carousel-3d-wrapper"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
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
                                className={`carousel-item ${isActive ? 'active' : ''} ${opacity === 0 ? 'hidden-item' : ''}`.trim()}
                                style={{
                                    '--carousel-x': `${translateX}%`,
                                    '--carousel-z': `${translateZ}px`,
                                    '--carousel-rotate': `${rotateY}deg`,
                                    '--carousel-z-index': zIndex,
                                    '--carousel-opacity': opacity
                                }}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <img src={img.url} alt={img.title} className="carousel-item-img" />
                                <div className={`carousel-item-overlay ${isActive ? 'active' : 'inactive'}`}>
                                    <div className="carousel-item-info">
                                    <h3 className="carousel-item-title">{img.title}</h3>
                                       <span className="carousel-item-cost">{img.cost}</span>
                                    </div>
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
