"use client";

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Bienvenido a nuestra página de eventos</h1>
                <p>Selecciona una opción en el menú para empezar.</p>
            </main>
            <Footer />
        </div>
    );
};

export default MainPage;
