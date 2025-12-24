import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Lado da Imagem (Com efeito visual de quadrado) */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Quadrado decorativo azul no fundo */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-inusi-blue/20 rounded-lg transform -translate-x-2 -translate-y-2"></div>

                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                            alt="Engenheiros da Inusitech"
                            className="rounded-lg shadow-2xl relative z-10 w-full object-cover h-[400px] lg:h-[500px]"
                        />

                        {/* Box flutuante de "Experiência" */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl z-20 border-l-4 border-inusi-gold hidden md:block">
                            <p className="text-4xl font-heading font-bold text-inusi-blue">15+</p>
                            <p className="text-gray-600 text-sm font-medium">Anos de Inovação</p>
                        </div>
                    </div>

                    {/* Lado do Texto */}
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-inusi-red font-bold text-sm tracking-wider uppercase mb-2">Sobre a Inusitech</h4>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-inusi-dark mb-6 leading-tight">
                            Tecnologia que nasceu no campo e evoluiu para salvar vidas.
                        </h2>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Nossa jornada começou instalando proteções em redes elétricas externas. Hoje, aplicamos essa mesma robustez para garantir que equipamentos cirúrgicos de alta precisão nunca parem.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Especialistas em Filtros de Linha e Condicionadores",
                                "Manutenção Corretiva e Preventiva Hospitalar",
                                "Projetos Elétricos Industriais Personalizados"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-inusi-blue font-medium">
                                    <CheckCircle size={20} className="text-inusi-gold flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/a-inusitech"
                            className="inline-flex items-center gap-2 bg-inusi-blue text-white px-8 py-3 rounded-md font-bold hover:bg-blue-900 transition-colors group"
                        >
                            Conheça Nossa História
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;