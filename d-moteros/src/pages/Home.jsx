import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="home-layout">
            <Navbar />
            <Hero />
            <Carousel />
            <Footer />
        </div>
    );
}
