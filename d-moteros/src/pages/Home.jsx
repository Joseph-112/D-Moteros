import './Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import LogoCarousel from '../components/LogoCarousel';
import Galery from '../components/Galery';

export default function Home() {
    return (
        <div className="home-layout">
            <Navbar />
            <Hero />
            <LogoCarousel />
            <Galery />
            <Carousel />
            <Footer />
        </div>
    );
}
