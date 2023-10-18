import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Badges from './components/Badges/Badges';

function App() {
    return (
        <div className='container'>
            <Navbar />

            <main>
                <Badges />
            </main>
        </div>
    )
}

export default App;
