import React, { useState, useEffect, useRef } from "react";
import "./Galery.css";

import imageData from "../data/galery-img.json";

const IMAGES = imageData.map((img) => ({
  ...img,
  url: new URL(`../assets/Material/${img.filename}`, import.meta.url).href
}));

const Galery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const galleryRef = useRef(null);
  const thumbnailsContainerRef = useRef(null);
  const activeThumbnailRef = useRef(null);
  const isFirstRender = useRef(true);

  // Auto scroll active thumbnail into center of the thumbnail row
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (activeThumbnailRef.current && thumbnailsContainerRef.current) {
      const container = thumbnailsContainerRef.current;
      const thumbnail = activeThumbnailRef.current;
      const containerWidth = container.clientWidth;
      const thumbnailWidth = thumbnail.clientWidth;
      const thumbnailLeft = thumbnail.offsetLeft;
      
      const targetScrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
      
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  // Slideshow play logic
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
      }, 3500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Keyboard navigation logic
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  // Fullscreen change listener to sync state with native ESC exits
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      galleryRef.current?.requestFullscreen().catch((err) => {
        console.error("Error al activar pantalla completa:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleCopyLink = () => {
    const absoluteUrl = window.location.origin + IMAGES[currentIndex].url;
    navigator.clipboard.writeText(absoluteUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Error al copiar enlace:", err);
      });
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailsContainerRef.current) {
      const scrollAmount = 200;
      thumbnailsContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="galery-section">
      <div className="galery-container">
        {/* Fullscreen Wrapper */}
        <div 
          ref={galleryRef} 
          className={`galery-wrapper ${isFullscreen ? "fullscreen" : ""}`}
        >
          {/* Controls Bar */}
          <div className="galery-controls-top">
            <div className="galery-action-buttons">
              {/* Share Button */}
              <div className="share-menu-container">
                <button 
                  onClick={() => setIsShareOpen(!isShareOpen)} 
                  className={`galery-action-btn ${isShareOpen ? "active" : ""}`}
                  aria-label="Compartir"
                  title="Compartir"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186l5.57 3.249m-5.57-3.249L12.78 7.66m4.003 12.012a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm0-12.012a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" />
                  </svg>
                </button>
                {isShareOpen && (
                  <div className="share-tooltip">
                    <button onClick={handleCopyLink} className="tooltip-item">
                      {copied ? "¡Enlace copiado!" : "Copiar enlace"}
                    </button>
                  </div>
                )}
              </div>

              {/* Fullscreen Toggle */}
              <button 
                onClick={toggleFullscreen} 
                className="galery-action-btn"
                aria-label="Pantalla completa"
                title="Pantalla completa"
              >
                {isFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3 3m12 6V4.5M15 9h4.5M15 9l6-6m-6 12v4.5M15 15h4.5M15 15l6 6m-12-6v4.5M9 15H4.5M9 15l-6 6" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                )}
              </button>

              {/* Autoplay / Slideshow Play Button */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                className={`galery-action-btn ${isPlaying ? "playing" : ""}`}
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
                title={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="btn-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Main Visualizer Area */}
          <div className="galery-main-display">
            {/* Left Nav Arrow */}
            <button onClick={prevSlide} className="galery-nav-btn prev" aria-label="Anterior">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Center Image Container */}
            <div className="galery-image-container">
              {/* Fade animation re-triggered by changing key */}
              <img 
                key={currentIndex}
                src={IMAGES[currentIndex].url} 
                className="galery-main-img" 
              />
            </div>

            {/* Right Nav Arrow */}
            <button onClick={nextSlide} className="galery-nav-btn next" aria-label="Siguiente">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="nav-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Indicator chevron centered under active image pointing to thumbnails */}
          <div className="galery-active-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="pointer-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

        {/* Thumbnail Carousel Section (Horizontal Row at bottom) */}
        <div className="galery-thumbnails-bar">
          <button 
            onClick={() => scrollThumbnails("left")} 
            className="galery-thumbs-arrow left" 
            aria-label="Desplazar miniaturas a la izquierda"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="thumbs-arrow-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div 
            ref={thumbnailsContainerRef} 
            className="galery-thumbnails-list"
          >
            {IMAGES.map((img, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={img.id}
                  ref={isActive ? activeThumbnailRef : null}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsShareOpen(false);
                  }}
                  className={`galery-thumbnail-item ${isActive ? "active" : ""}`}
                  aria-label={`Ver foto ${index + 1}`}
                >
                  <img src={img.url} className="thumbnail-img" />
                </button>
              );
            })}
          </div>

          <button 
            onClick={() => scrollThumbnails("right")} 
            className="galery-thumbs-arrow right" 
            aria-label="Desplazar miniaturas a la derecha"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="thumbs-arrow-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Galery;