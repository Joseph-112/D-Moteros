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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Colecciones</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Ediciones Limitadas</a></li>
                            <li><a href="#" className="footer-link">Accesorios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Información</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Guía de Tallas</a></li>
                            <li><a href="#" className="footer-link">Cuidados de la Prenda</a></li>
                            <li><a href="#" className="footer-link">Galería de Clientes</a></li>
                            <li><a href="#" className="footer-link">Nuestros Materiales</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-col-title">Soporte</h4>
                        <ul className="footer-list">
                            <li><a href="#" className="footer-link">Contacto</a></li>
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
