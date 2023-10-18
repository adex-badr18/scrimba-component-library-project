import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Badges from './components/Badges/Badges';
import Banner from './components/Banners/Banner';

function App() {
    return (
        <div className='container'>
            <Navbar />

            <main>
                <Badges />
                <Banner type='error'>
                    <h1>Success Title</h1>
                    <p>Lorem ipsum fdjnjn ylasdgwj jksne fenudbe uefhuewfuewb yegyeowq udvuqppit wyvnkce kbgxxzas fndj cefsg</p>
                </Banner>
            </main>
        </div>
    )
}

export default App;
