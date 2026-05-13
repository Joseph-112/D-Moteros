import './LogoCarousel.css'
import log1 from '../assets/Sponsor/logo-1.png'
import log2 from '../assets/Sponsor/logo-2.png'
import log3 from '../assets/Sponsor/logo-3.png'
import log4 from '../assets/Sponsor/logo-4.png'

const logos = [log1, log2, log3, log4];

const LogoCarousel = () => {
    return (
        <section className="logo-carousel">
            <div className="logo-carousel-track">
                {[...Array(4)].map((_, groupIndex) => (
                    <div key={groupIndex} className="logo-carousel-group" aria-hidden={groupIndex > 0 ? "true" : "false"}>
                        {logos.map((logo, index) => (
                            <img key={index} src={logo} alt={`Sponsor ${index + 1}`} className="logo-item" />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoCarousel;