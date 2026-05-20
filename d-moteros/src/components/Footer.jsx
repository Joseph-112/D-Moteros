import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div>
                        <h4 className="footer-brand-title">
                            <span className="footer-brand-highlight">D'</span>Moteros
                        </h4>
                        <p className="footer-description">
                            La mejor ropa y accesorios para amantes de las dos ruedas. Viste con actitud, rueda con estilo.
                        </p>
                        <div className="footer-socials">
                            <div className="footer-social-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </div>
                            <div className="footer-social-icon">
                                <svg onClick={() => window.open('https://www.instagram.com/dmoteros.col/')} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </div>
                            <div className="footer-social-icon">
                                <svg onClick={() => window.open('http://wa.me/573123724713') } xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Colecciones</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Ediciones Limitadas</a></li>
                            <li><a href="#" className="footer-link">Accesorios (Próximamente)</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Información (Próximamente)</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Guía de Tallas</a></li>
                            <li><a href="#" className="footer-link">Cuidados de la Prenda</a></li>
                            <li><a href="#" className="footer-link">Galería de Clientes</a></li>
                            <li><a href="#" className="footer-link">Nuestros Materiales</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Soporte (Próximamente)</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Envíos y Devoluciones</a></li>
                            <li><a href="#" className="footer-link">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="footer-link">Seguimiento de Pedido</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} D-Moteros. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
