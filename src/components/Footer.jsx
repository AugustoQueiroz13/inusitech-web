import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png'; // Reutilizando a logo (pode ser uma versão branca se tiver)

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-inusi-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Coluna 1: Sobre a Empresa */}
                    <div>
                        <img src={logoImg} alt="Inusitech" className="h-10 mb-6 brightness-0 invert" /> {/* Filtro para deixar logo branca se for PNG simples */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Soluções industriais, clínicas e tecnologia em proteção elétrica.
                            Do poste ao centro cirúrgico, garantindo energia de qualidade.
                        </p>
                        <div className="flex space-x-4">
                            {/* Redes Sociais - Placeholders */}
                            <a href="#" className="text-gray-300 hover:text-inusi-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-300 hover:text-inusi-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-300 hover:text-inusi-gold transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-inusi-gold">Navegação</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Início</Link></li>
                            <li><Link to="/produtos" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Produtos</Link></li>
                            <li><Link to="/servicos" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Soluções Clínicas</Link></li>
                            <li><Link to="/servicos" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Soluções Industriais</Link></li>
                            <li><Link to="/a-inusitech" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> A Empresa</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Produtos Destaque */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-inusi-gold">Produtos</h3>
                        <ul className="space-y-3">
                            <li><Link to="/produtos" className="text-gray-300 hover:text-white text-sm">Filtros de Linha Profissionais</Link></li>
                            <li><Link to="/produtos" className="text-gray-300 hover:text-white text-sm">Condicionadores de Energia</Link></li>
                            <li><Link to="/produtos" className="text-gray-300 hover:text-white text-sm">Réguas de Rack</Link></li>
                            <li><Link to="/produtos" className="text-gray-300 hover:text-white text-sm">Protetores Eletrônicos</Link></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-inusi-gold font-heading">Fale Conosco</h3> {/* Adicionei font-heading aqui também */}
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <MapPin size={18} className="mt-1 text-inusi-red shrink-0" />
                                <span>
                                    Praça Santos Dumont, 98<br />
                                    Centro - Itaperuna/RJ<br />
                                    CEP: 28300-000 {/* Confirme o CEP se souber, senão deixe sem */}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 text-sm">
                                <Phone size={18} className="text-inusi-red shrink-0" />
                                <span>(22) 3822-0000</span> {/* Coloquei DDD 22 (RJ) provisório */}
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 text-sm">
                                <Mail size={18} className="text-inusi-red shrink-0" />
                                <span>contato@inusitech.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Barra de Copyright */}
                <div className="border-t border-blue-900 pt-8 mt-8 text-center md:flex md:justify-between md:items-center">
                    <p className="text-gray-400 text-xs">
                        © {currentYear} Inusitech Industrial. Todos os direitos reservados.
                    </p>
                    <div className="flex justify-center gap-4 mt-4 md:mt-0">
                        <Link to="/contato" className="text-gray-400 hover:text-white text-xs">Política de Privacidade</Link>
                        <Link to="/contato" className="text-gray-400 hover:text-white text-xs">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;