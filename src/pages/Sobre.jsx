import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Lightbulb, Award, Microscope,
  Target, Users, TrendingUp, CheckCircle, Globe
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const timelineItems = [
  {
    year: '2005',
    title: 'O Começo',
    text: 'Início dos estudos sobre qualidade de energia elétrica. Primeiro projeto técnico registrado na FEBRACE.'
  },
  {
    year: '2008',
    title: 'Reconhecimento Nacional',
    text: 'Premiação por inovação tecnológica na Universidade de São Paulo (USP).'
  },
  {
    year: '2012',
    title: 'Financiamento FAPERJ',
    text: 'Pesquisa financiada pela FAPERJ. Desenvolvimento de tecnologias para sistemas industriais complexos.'
  },
  {
    year: '2016',
    title: 'Fundação Oficial',
    text: 'Nasce oficialmente a Inusitech, com missão voltada à engenharia elétrica e proteção de sistemas críticos.'
  },
  {
    year: '2021',
    title: 'Expansão de Mercado',
    text: 'Expansão para atender o mercado comercial e residencial com novas linhas de proteção elétrica.'
  },
  {
    year: 'Hoje',
    title: 'Referência Regional',
    text: 'Um dos principais centros privados de pesquisa aplicada e manutenção eletrônica do interior do RJ.'
  }
];

const valores = [
  { icon: <Shield size={28} />, nome: 'Ética', desc: 'Transparência em cada decisão e relação.' },
  { icon: <Lightbulb size={28} />, nome: 'Inovação', desc: 'Soluções que antecipam as demandas do futuro.' },
  { icon: <Award size={28} />, nome: 'Excelência Técnica', desc: 'Rigor e qualidade em cada projeto entregue.' },
  { icon: <Microscope size={28} />, nome: 'Pesquisa', desc: 'Conhecimento como base do nosso desenvolvimento.' },
  { icon: <Target size={28} />, nome: 'Precisão', desc: 'Os detalhes que fazem a diferença no resultado.' },
  { icon: <Users size={28} />, nome: 'Comprometimento', desc: 'Dedicação do início ao fim de cada projeto.' },
  { icon: <TrendingUp size={28} />, nome: 'Desenvolvimento Contínuo', desc: 'Evoluindo sempre junto ao mercado e ao cliente.' }
];

const Sobre = () => {
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
            A <span className="text-inusi-gold">INUSITECH</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-inusi-red mx-auto mb-6"
          ></motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Mais de 20 anos de pesquisa, inovação e engenharia a serviço da qualidade elétrica.
          </p>
        </div>
      </div>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h4 className="text-inusi-red font-bold text-sm tracking-wider uppercase mb-2">Linha do Tempo</h4>
            <h2 className="text-4xl font-heading font-bold text-inusi-dark">NOSSA HISTÓRIA</h2>
          </motion.div>

          {/* Timeline Desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-inusi-blue via-inusi-gold to-inusi-red z-0" style={{ top: '3.5rem' }}></div>

            <div className="flex justify-between items-start relative z-10">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center flex-1 px-2"
                >
                  {/* Ano */}
                  <div className="h-8 flex items-end mb-4">
                    <span className="text-inusi-blue font-heading font-bold text-xl">{item.year}</span>
                  </div>

                  {/* Ponto na linha */}
                  <div className="w-5 h-5 rounded-full bg-inusi-red border-4 border-white ring-2 ring-inusi-red shadow-lg mb-6 flex-shrink-0 z-10"></div>

                  {/* Card */}
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow w-full">
                    <strong className="block text-inusi-dark font-heading font-bold text-sm uppercase mb-2">{item.title}</strong>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline Mobile (vertical) */}
          <div className="lg:hidden relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-inusi-blue via-inusi-gold to-inusi-red"></div>

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-6 relative"
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 w-12 flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-inusi-red border-2 border-white ring-2 ring-inusi-red z-10 mt-1"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="pb-2">
                    <span className="text-inusi-blue font-heading font-bold text-lg block mb-1">{item.year}</span>
                    <strong className="block text-inusi-dark font-heading text-sm uppercase mb-1">{item.title}</strong>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h4 className="text-inusi-red font-bold text-sm tracking-wider uppercase mb-2">Propósito</h4>
            <h2 className="text-4xl font-heading font-bold text-inusi-dark">MISSÃO & VISÃO</h2>
            <div className="h-1 w-24 bg-inusi-red mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-inusi-blue text-white rounded-xl p-8 shadow-xl"
            >
              <div className="text-inusi-gold mb-4">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">Missão</h3>
              <p className="text-gray-200 leading-relaxed">
                Desenvolver soluções inteligentes em engenharia eletromecânica, eletrônica e qualidade de energia, promovendo segurança, economia, confiabilidade e inovação para nossos clientes.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-100"
            >
              <div className="text-inusi-red mb-4">
                <Globe size={36} />
              </div>
              <h3 className="text-2xl font-heading font-bold uppercase mb-4 text-inusi-dark">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser referência nacional em tecnologia aplicada, engenharia clínica, qualidade de energia e desenvolvimento de soluções eletrônicas de alta confiabilidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-inusi-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h4 className="text-inusi-gold font-bold text-sm tracking-wider uppercase mb-2">O que nos guia</h4>
            <h2 className="text-4xl font-heading font-bold">
              NOSSOS <span className="text-inusi-gold">VALORES</span>
            </h2>
            <div className="h-1 w-24 bg-inusi-red mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {valores.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-inusi-gold/50 transition-all duration-300 cursor-default"
              >
                <div className="text-inusi-gold mb-4 flex justify-center">{item.icon}</div>
                <h4 className="font-heading font-bold text-white uppercase text-sm mb-2">{item.nome}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sobre;