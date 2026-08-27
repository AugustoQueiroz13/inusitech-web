import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import produtos from '../data/produtos';

const categorias = ['Todos', 'Filtros de Linha', 'Livros'];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Produtos = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const produtosFiltrados =
    categoriaAtiva === 'Todos'
      ? produtos
      : produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <div className="bg-inusi-light min-h-screen pb-20 overflow-hidden">

      {/* Hero */}
      <div className="relative bg-inusi-blue py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-inusi-blue"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tight"
          >
            NOSSOS <span className="text-inusi-gold">PRODUTOS</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-inusi-red mx-auto mb-6"
          ></motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Tecnologia de proteção elétrica desenvolvida e certificada pela Inusitech.
          </p>
        </div>
      </div>

      {/* Filtros de categoria */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="container mx-auto px-4 py-4 flex gap-3 overflow-x-auto">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 rounded-sm font-heading font-bold text-sm uppercase tracking-wider whitespace-nowrap transition-colors ${
                categoriaAtiva === cat
                  ? 'bg-inusi-red text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de produtos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosFiltrados.map((produto, index) => (
              <motion.div
                key={produto.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.08 }}
              >
                <Link to={`/produtos/${produto.slug}`} className="block group h-full">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 group-hover:-translate-y-1">

                    {/* Imagem */}
                    <div className="bg-gray-50 h-52 flex items-center justify-center overflow-hidden p-4">
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Badge de categoria */}
                      <span className="inline-block bg-inusi-blue/10 text-inusi-blue text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-3 self-start">
                        {produto.categoria}
                      </span>

                      <h3 className="text-xl font-heading font-bold text-inusi-dark mb-1 uppercase">
                        {produto.nome}
                      </h3>
                      <p className="text-gray-400 text-xs mb-4 font-medium">{produto.subtitulo}</p>

                      {/* Destaques */}
                      <ul className="space-y-2 mb-6 flex-grow">
                        {produto.destaques.map((destaque, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            <CheckCircle size={14} className="text-inusi-gold flex-shrink-0" />
                            {destaque}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-inusi-red font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                        Ver Especificações
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <p className="text-center text-gray-400 py-20">Nenhum produto encontrado nesta categoria.</p>
          )}
        </div>
      </section>

      {/* Nota de expansão */}
      <div className="container mx-auto px-4 pb-4">
        <p className="text-center text-gray-400 text-sm">
          Novos produtos e categorias são adicionados continuamente. Consulte também nossa loja virtual para ver todas as disponibilidades.
        </p>
      </div>

    </div>
  );
};

export default Produtos;