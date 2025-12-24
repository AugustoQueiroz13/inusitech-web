import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Activity, Shield, CheckCircle, ArrowRight, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

// Variantes de animação para reutilizar
const fadeInLogin = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Servicos = () => {
    return (
        <div className="bg-inusi-light min-h-screen pb-20 overflow-hidden">

            {/* Cabeçalho Tecnológico */}
            <div className="relative bg-inusi-blue py-24 text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-white opacity-10"></div> {/* Grid no fundo */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-inusi-blue"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tight"
                    >
                        SOLUÇÕES <span className="text-inusi-gold">INTEGRADAS</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }} animate={{ width: "100px" }}
                        className="h-1 bg-inusi-red mx-auto mb-6"
                    ></motion.div>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Da robustez industrial à precisão clínica. Tecnologia especializada para cada ecossistema.
                    </p>
                </div>
            </div>

            {/* SEÇÃO 1: Soluções Industriais */}
            <section className="py-24 bg-white relative">
                <div className="absolute left-0 top-0 h-full w-20 bg-gray-50 skew-x-12 -ml-10 hidden lg:block"></div> {/* Detalhe Geométrico */}

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInLogin}
                            className="w-full lg:w-1/2"
                        >
                            <div className="flex items-center gap-3 mb-4 text-inusi-blue">
                                <Settings size={28} className="animate-spin-slow" /> {/* Ícone girando */}
                                <span className="font-heading font-bold text-xl uppercase tracking-widest">Divisão Industrial</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-inusi-dark mb-6 leading-tight">
                                PROTEÇÃO PARA <br /><span className="text-inusi-blue">ALTA PERFORMANCE</span>
                            </h2>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed border-l-4 border-inusi-gold pl-6">
                                Paradas não planejadas custam caro. Nossas soluções são projetadas para suportar picos de tensão, ruídos de rede e ambientes hostis.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {["Filtros de Linha Industriais", "Proteção de Racks", "Condicionadores de Energia", "Projetos Sob Medida"].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 shadow-sm"
                                    >
                                        <CheckCircle size={20} className="text-inusi-red" />
                                        <span className="font-heading font-semibold text-gray-700 uppercase text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://wa.me/5500000000000"
                                className="inline-flex items-center gap-2 bg-inusi-blue text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-900 transition-colors shadow-lg uppercase tracking-wide"
                            >
                                Consultar Projeto
                                <ArrowRight size={20} />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-inusi-gold/20 rounded-lg transform rotate-3"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
                                    alt="Ambiente Industrial"
                                    className="rounded-lg shadow-2xl relative z-10 filter grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SEÇÃO 2: Soluções Clínicas */}
            <section className="py-24 bg-inusi-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white opacity-5"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInLogin}
                            className="w-full lg:w-1/2"
                        >
                            <div className="flex items-center gap-3 mb-4 text-cyan-400">
                                <Activity size={28} />
                                <span className="font-heading font-bold text-xl uppercase tracking-widest">Divisão Clínica</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                PRECISÃO QUE <span className="text-inusi-red">SALVA VIDAS</span>
                            </h2>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Equipamentos médicos exigem energia limpa e estável. Nossa engenharia clínica oferece manutenção especializada para centros cirúrgicos.
                            </p>

                            <div className="space-y-6 mb-10">
                                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                                    <Shield className="text-inusi-gold shrink-0 mt-1" size={32} />
                                    <div>
                                        <strong className="block text-white text-xl font-heading uppercase">Manutenção Preventiva</strong>
                                        <span className="text-gray-400 text-sm">Evite falhas críticas em momentos decisivos.</span>
                                    </div>
                                </motion.div>

                                <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                                    <Settings className="text-inusi-gold shrink-0 mt-1" size={32} />
                                    <div>
                                        <strong className="block text-white text-xl font-heading uppercase">Calibração e Ajustes</strong>
                                        <span className="text-gray-400 text-sm">Técnicos certificados para equipamentos sensíveis.</span>
                                    </div>
                                </motion.div>
                            </div>

                            <Link to="/contato">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-8 py-4 rounded-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] uppercase tracking-wide"
                                >
                                    Solicitar Visita Técnica
                                    <ArrowRight size={20} />
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                                alt="Equipamento Médico de Precisão"
                                className="rounded-lg shadow-2xl border border-white/20 relative z-10"
                            />
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Servicos;