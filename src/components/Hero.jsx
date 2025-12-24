import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft, ShieldCheck, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            tag: "Tecnologia Industrial",
            title: "Proteção Elétrica de Alta Performance",
            description: "Sistemas blindados contra surtos elétricos. Garanta a continuidade da sua linha de produção com tecnologia de ponta.",
            image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
            ctaText: "Ver Catálogo",
            ctaLink: "/produtos",
            icon: <ShieldCheck size={24} />,
            color: "from-inusi-blue"
        },
        {
            id: 2,
            tag: "Engenharia Clínica",
            title: "Precisão Absoluta em Ambientes Críticos",
            description: "Manutenção especializada para equipamentos vitais. Segurança elétrica onde a falha não é uma opção.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
            ctaText: "Soluções Médicas",
            ctaLink: "/servicos",
            icon: <Activity size={24} />,
            color: "from-blue-600"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000); // Aumentei um pouco o tempo de leitura
        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative h-[650px] w-full overflow-hidden bg-gray-900">

            {/* Background Slides */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Tecnológico (Grid + Gradiente) */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} via-gray-900/60 to-transparent opacity-90`}></div>
                    <div className="absolute inset-0 bg-grid-white opacity-10"></div> {/* Efeito Grid Técnico */}
                </motion.div>
            </AnimatePresence>

            {/* Conteúdo */}
            <div className="relative container mx-auto px-4 h-full flex items-center z-10">
                <div className="max-w-3xl text-white pl-2 sm:pl-6 lg:pl-8 border-l-4 border-inusi-gold/0 md:border-inusi-gold"> {/* Borda dourada lateral */}

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-inusi-red text-white px-4 py-1 rounded-sm text-sm font-bold mb-6 tracking-widest uppercase shadow-lg">
                                {slides[currentSlide].icon}
                                {slides[currentSlide].tag}
                            </div>

                            {/* Título Gigante */}
                            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6 drop-shadow-2xl font-heading">
                                {slides[currentSlide].title}
                            </h1>

                            {/* Descrição */}
                            <p className="text-xl text-gray-200 mb-10 font-light max-w-xl leading-relaxed border-l-2 border-white/30 pl-4">
                                {slides[currentSlide].description}
                            </p>

                            {/* Botões */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to={slides[currentSlide].ctaLink}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-inusi-red hover:bg-red-700 text-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all uppercase tracking-wide w-full sm:w-auto"
                                    >
                                        {slides[currentSlide].ctaText}
                                        <ArrowRight size={20} />
                                    </motion.button>
                                </Link>

                                <Link to="/contato">
                                    <motion.button
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 rounded-sm font-bold text-lg border border-white text-white flex items-center justify-center uppercase tracking-wide w-full sm:w-auto backdrop-blur-sm"
                                    >
                                        Fale Conosco
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>

            {/* Controles Laterais */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors hidden md:block">
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors hidden md:block">
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Barra de Progresso/Indicadores */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? 'bg-inusi-red w-12' : 'bg-white/30 w-4 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;