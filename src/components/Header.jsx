import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png'; // Vamos configurar isso no passo 3

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Função para verificar se o link está ativo (para destacar no menu)
    const isActive = (path) => location.pathname === path;

    // Lista de links para facilitar a manutenção
    const links = [
        { name: 'Início', path: '/' },
        { name: 'Produtos', path: '/produtos' },
        { name: 'Serviços', path: '/servicos' },
        { name: 'A Inusitech', path: '/a-inusitech' },
        { name: 'Onde Comprar', path: '/onde-comprar' },
        { name: 'Contato', path: '/contato' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* LOGO */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        {/* Se a imagem falhar ou não existir, mostra o texto. 
                Lembre-se de colocar o arquivo logo.png na pasta assets */}
                        <img className="h-10 w-auto md:h-12" src={logoImg} alt="Inusitech Logo" />
                    </Link>

                    {/* MENU DESKTOP (Escondido no Mobile) */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                        ? 'text-inusi-red font-bold'
                                        : 'text-inusi-blue hover:text-inusi-red'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Botão de Ação - Suporte/WhatsApp */}
                        <a
                            href="https://wa.me/5500000000000" // Link placeholder do Whats
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-inusi-red text-white px-4 py-2 rounded-md font-bold text-sm flex items-center gap-2 hover:bg-red-700 transition-colors"
                        >
                            <Phone size={16} />
                            <span>Suporte</span>
                        </a>
                    </nav>

                    {/* BOTÃO MOBILE (Hambúrguer) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-inusi-blue hover:text-inusi-red focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MENU MOBILE (Expandido) */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                        ? 'text-inusi-red bg-red-50'
                                        : 'text-inusi-blue hover:text-inusi-red hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 pb-2">
                            <a
                                href="https://wa.me/5500000000000"
                                className="w-full bg-inusi-red text-white px-4 py-3 rounded-md font-bold text-center block hover:bg-red-700"
                            >
                                Falar no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;