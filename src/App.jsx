import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Badges from './components/Badges/Badges';
import Banners from './components/Banners/Banners';
import Cards from './components/Cards/Cards';
import Testimonial from './components/Testimonials/TestimonialWithImage';
import TestimonialWithImage from './components/Testimonials/TestimonialWithImage';

function App() {
    return (
        <div className='container'>
            <Navbar />

            <main>
                <Badges />
                <Banners />
                <Cards />
            </main>
        </div>
    )
}

export default App;
