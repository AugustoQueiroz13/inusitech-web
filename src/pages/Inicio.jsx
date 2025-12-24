import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import AboutSection from '../components/AboutSection'; // <--- Importe aqui

const Inicio = () => {
    return (
        <div className="bg-inusi-light min-h-screen">
            {/* 1. Hero (Banner) */}
            <Hero />

            {/* 2. Destaques (Cards) */}
            <Highlights />

            {/* 3. Resumo Institucional */}
            <AboutSection /> {/* <--- Adicione aqui */}

            {/* 4. Espaço extra no final antes do Footer (opcional) */}
            <div className="pb-20"></div>
        </div>
    );
};

export default Inicio;