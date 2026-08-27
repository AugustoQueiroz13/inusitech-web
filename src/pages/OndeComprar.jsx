import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ShoppingCart, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OndeComprar = () => {
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
            ONDE <span className="text-inusi-gold">COMPRAR</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-inusi-red mx-auto mb-6"
          ></motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Adquira os produtos Inusitech pelos nossos canais oficiais de venda com segurança e garantia.
          </p>
        </div>
      </div>

      {/* Canais de venda */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Mercado Livre */}
            <motion.a
              href="https://lista.mercadolivre.com.br/inusitech#D[A:inusitech]"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-400/20 flex items-center justify-center mb-6 group-hover:bg-yellow-400/30 transition-colors">
                <ShoppingCart size={40} className="text-yellow-500" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-inusi-dark uppercase mb-3">
                Mercado Livre
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Compre com segurança pelo Mercado Livre. Proteção ao comprador, avaliações de clientes e entrega rápida para todo o Brasil.
              </p>
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-8 py-3 rounded-sm font-bold uppercase tracking-wide group-hover:bg-yellow-300 transition-colors">
                Acessar Loja
                <ExternalLink size={16} />
              </div>
            </motion.a>

            {/* Loja Inusitech */}
            <motion.a
              href="https://inusitech.lojaintegrada.com.br"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -6 }}
              className="group bg-inusi-blue rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                <ShoppingBag size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-white uppercase mb-3">
                Loja Inusitech
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Acesse nossa loja virtual oficial. Catálogo completo, atendimento direto com a equipe Inusitech e condições exclusivas.
              </p>
              <div className="inline-flex items-center gap-2 bg-inusi-red text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wide group-hover:bg-red-700 transition-colors">
                Acessar Loja
                <ExternalLink size={16} />
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* WhatsApp */}
      <section className="py-16 bg-inusi-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-green-400" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-white uppercase mb-4">
              Prefere Falar <span className="text-inusi-gold">Diretamente?</span>
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Entre em contato com nossa equipe pelo WhatsApp para tirar dúvidas, consultar disponibilidade ou receber atendimento personalizado.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5522997378508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-wide transition-colors shadow-lg"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default OndeComprar;