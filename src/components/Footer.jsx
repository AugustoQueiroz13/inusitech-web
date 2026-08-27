import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inusi-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo e tagline */}
          <div>
            <img src={logoImg} alt="Inusitech" className="h-10 mb-6" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Desenvolvemos soluções em engenharia eletromecânica, eletrônica e qualidade de energia para os setores industrial, clínico e tecnológico.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Inusitech/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-inusi-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/inusitech.oficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-inusi-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/inusitech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-inusi-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-inusi-gold font-heading">Navegação</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Início</Link></li>
              <li><Link to="/produtos" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Produtos</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Soluções Clínicas</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Soluções Industriais</Link></li>
              <li><Link to="/a-inusitech" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> A Empresa</Link></li>
              <li><Link to="/onde-comprar" className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"><ArrowRight size={14} /> Onde Comprar</Link></li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-inusi-gold font-heading">Produtos</h3>
            <ul className="space-y-3">
              <li><Link to="/produtos/filtro-3t" className="text-gray-300 hover:text-white text-sm">Filtro de Linha DPS 3T</Link></li>
              <li><Link to="/produtos/filtro-4t" className="text-gray-300 hover:text-white text-sm">Filtro de Linha DPS 4T</Link></li>
              <li><Link to="/produtos/filtro-5t" className="text-gray-300 hover:text-white text-sm">Filtro de Linha DPS 5T</Link></li>
              <li><Link to="/produtos/filtro-6t" className="text-gray-300 hover:text-white text-sm">Filtro de Linha DPS 6T</Link></li>
              <li><Link to="/produtos/livro-manutencao-eletronica" className="text-gray-300 hover:text-white text-sm">Livro: A Arte da Manutenção Eletrônica</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-inusi-gold font-heading">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="mt-1 text-inusi-red shrink-0" />
                <span>Praça Santos Dumont, 98<br />Centro — Itaperuna/RJ<br />CEP: 28300-000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone size={18} className="text-inusi-red shrink-0" />
                <a href="https://api.whatsapp.com/send?phone=5522997378508" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(22) 99737-8508</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail size={18} className="text-inusi-red shrink-0" />
                <a href="mailto:inusitech@hotmail.com" className="hover:text-white transition-colors">inusitech@hotmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-blue-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <p className="text-gray-400 text-xs text-center md:text-left">
              © {currentYear} Inusitech Industrial. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
              <Link to="/privacidade" className="text-gray-400 hover:text-white text-xs transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="text-gray-400 hover:text-white text-xs transition-colors">
                Termos de Uso
              </Link>
              <span className="text-gray-600 text-xs hidden md:inline">|</span>
              <span className="text-gray-500 text-xs">
                Desenvolvido por{' '}
                <a
                  href="https://augustoqueiroz13.github.io/meu-portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
                >
                  Data Pixel Lab
                </a>
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;