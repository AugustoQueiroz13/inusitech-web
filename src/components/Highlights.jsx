import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Stethoscope, Zap, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Highlights = () => {
    const cards = [
        {
            id: 'ind',
            icon: <Factory size={40} />,
            title: "Soluções Industriais",
            description: "Proteção elétrica robusta para chão de fábrica e maquinário pesado.",
            link: "/servicos",
            color: "bg-inusi-blue",
            textColor: "text-white",
            isHighlight: false
        },
        {
            id: 'prod', // ID especial para produtos
            icon: <Zap size={48} />, // Ícone maior
            title: "Linha de Produtos",
            description: "Filtros de linha, réguas e condicionadores. A tecnologia da Inusitech na sua tomada.",
            link: "/produtos",
            color: "bg-inusi-red",
            textColor: "text-white",
            isHighlight: true // Flag para ativar o destaque
        },
        {
            id: 'clin',
            icon: <Stethoscope size={40} />,
            title: "Engenharia Clínica",
            description: "Especialistas em manutenção de equipamentos cirúrgicos e hospitalares.",
            link: "/servicos",
            color: "bg-white",
            textColor: "text-inusi-blue",
            border: "border-2 border-gray-100",
            isHighlight: false
        }
    ];

    return (
        <section className="py-16 bg-gray-50 relative -mt-16 z-20 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {cards.map((card, index) => (
                        <Link
                            key={index}
                            to={card.link}
                            className="relative group"
                        >
                            <motion.div
                                whileHover={{ y: -10 }}
                                // Se for destaque, ele já começa um pouco maior (scale 1.05)
                                className={`
                  rounded-xl p-8 shadow-xl transition-all duration-300 relative overflow-hidden
                  ${card.color} ${card.border || ''} 
                  ${card.isHighlight ? 'md:-mt-6 md:mb-6 shadow-inusi-red/30 border-4 border-white ring-4 ring-inusi-red/20' : ''}
                `}
                            >
                                {/* Efeito de Brilho no fundo para o card de destaque */}
                                {card.isHighlight && (
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Zap size={150} />
                                    </div>
                                )}

                                {/* Badge de "Mais Procurado" se for destaque */}
                                {card.isHighlight && (
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star size={12} fill="currentColor" /> DESTAQUE
                                    </div>
                                )}

                                <div className={`${card.textColor} mb-6 relative z-10`}>
                                    {card.icon}
                                </div>

                                <h3 className={`text-2xl font-heading font-bold mb-4 uppercase ${card.textColor}`}>
                                    {card.title}
                                </h3>

                                <p className={`mb-8 leading-relaxed font-medium ${card.textColor === 'text-white' ? 'text-gray-100' : 'text-gray-600'}`}>
                                    {card.description}
                                </p>

                                <div className={`flex items-center gap-2 font-bold ${card.textColor} uppercase tracking-wider text-sm`}>
                                    {card.isHighlight ? 'Ver Catálogo Completo' : 'Saiba Mais'}
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;