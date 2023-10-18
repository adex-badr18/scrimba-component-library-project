import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Badges from './components/Badge/Badges';

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
