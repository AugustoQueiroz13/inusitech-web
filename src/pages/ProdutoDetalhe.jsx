import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, ShoppingCart, MessageCircle, ChevronRight } from 'lucide-react';
import produtos from '../data/produtos';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProdutoDetalhe = () => {
  const { slug } = useParams();
  const produto = produtos.find((p) => p.slug === slug);

  if (!produto) {
    return <Navigate to="/produtos" replace />;
  }

  const temSpecs = produto.specs && produto.specs.length > 0;
  const temAplicacoes = produto.aplicacoes && produto.aplicacoes.length > 0;

  return (
    <div className="bg-inusi-light min-h-screen pb-20">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-inusi-blue transition-colors">Início</Link>
          <ChevronRight size={14} />
          <Link to="/produtos" className="hover:text-inusi-blue transition-colors">Produtos</Link>
          <ChevronRight size={14} />
          <span className="text-inusi-blue font-medium truncate">{produto.nome}</span>
        </div>
      </div>

      {/* Seção principal */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Imagem */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="w-full lg:w-5/12"
            >
              <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center border border-gray-100 min-h-[360px]">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="max-h-72 w-full object-contain"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="w-full lg:w-7/12"
            >
              <span className="inline-block bg-inusi-blue/10 text-inusi-blue text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4">
                {produto.categoria}
              </span>

              <h1 className="text-3xl md:text-4xl font-heading font-bold text-inusi-dark uppercase mb-2 leading-tight">
                {produto.nome}
              </h1>
              <p className="text-gray-400 text-sm font-medium mb-6">{produto.subtitulo}</p>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-inusi-gold pl-4">
                {produto.descricao}
              </p>

              {/* Destaques */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {produto.destaques.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                    <CheckCircle size={18} className="text-inusi-gold flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={produto.linkLoja}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-inusi-red text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg"
                >
                  <ShoppingCart size={18} />
                  Comprar na Loja
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5522997378508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-inusi-blue text-inusi-blue px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-inusi-blue hover:text-white transition-colors"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Especificações técnicas */}
      {temSpecs && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-heading font-bold text-inusi-dark uppercase mb-2">
                Especificações <span className="text-inusi-blue">Técnicas</span>
              </h2>
              <div className="h-1 w-16 bg-inusi-red mb-10"></div>

              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <tbody>
                    {produto.specs.map((spec, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      >
                        <td className="px-6 py-3 font-semibold text-inusi-dark w-1/2 border-r border-gray-100">
                          {spec.label}
                        </td>
                        <td className="px-6 py-3 text-gray-600">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Aplicações */}
      {temAplicacoes && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-heading font-bold text-inusi-dark uppercase mb-2">
                Aplicações <span className="text-inusi-blue">Compatíveis</span>
              </h2>
              <div className="h-1 w-16 bg-inusi-red mb-10"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {produto.aplicacoes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-3 border border-gray-100"
                  >
                    <CheckCircle size={16} className="text-inusi-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Voltar ao catálogo */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          to="/produtos"
          className="inline-flex items-center gap-2 text-inusi-blue font-bold hover:text-inusi-red transition-colors"
        >
          <ArrowLeft size={18} />
          Voltar ao Catálogo
        </Link>
      </div>

    </div>
  );
};

export default ProdutoDetalhe;