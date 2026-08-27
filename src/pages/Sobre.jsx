import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Lightbulb, Award, Microscope,
  Target, Users, TrendingUp, CheckCircle, Globe
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const timelineItems = [
  {
    year: '2005',
    title: 'O Começo',
    texto: 'Diante de recorrentes problemas relacionados à qualidade da energia elétrica fornecida às casas e empresas, iniciaram-se estudos voltados ao desenvolvimento de soluções capazes de aumentar a confiabilidade dos sistemas elétricos. Dessa pesquisa nasceu o primeiro projeto técnico, posteriormente registrado nos anais da Feira Brasileira de Ciência e Engenharia (FEBRACE), marcando o início de uma trajetória dedicada à inovação.',
  },
  {
    year: '2008',
    title: 'Reconhecimento Nacional',
    texto: 'O trabalho recebeu reconhecimento nacional ao conquistar premiação por inovação tecnológica na Universidade de São Paulo (USP), reforçando o potencial das soluções desenvolvidas e abrindo caminho para a próxima fase de pesquisa.',
  },
  {
    year: '2012',
    title: 'Financiamento FAPERJ',
    texto: 'A pesquisa ganhou novo impulso com financiamento da Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do Rio de Janeiro (FAPERJ). Durante os três anos seguintes foram desenvolvidas tecnologias voltadas à alimentação elétrica de sistemas industriais complexos, capazes de operar com maior confiabilidade mesmo em ambientes agressivos e sujeitos a intempéries.',
  },
  {
    year: '2016',
    title: 'Fundação Oficial',
    texto: 'Nasce oficialmente a Inusitech, com a missão de desenvolver soluções em engenharia elétrica, qualidade de energia e proteção de sistemas eletrônicos críticos. Nos anos seguintes, a empresa consolidou experiência em infraestrutura de telecomunicações, sistemas industriais e engenharia aplicada, ampliando continuamente seu campo de atuação.',
  },
  {
    year: '2021',
    title: 'Expansão de Mercado',
    texto: 'Diante dos desafios impostos pela pandemia, a Inusitech expandiu seu portfólio para atender também o mercado comercial e residencial, lançando novas linhas de proteção elétrica desenvolvidas conforme as necessidades do mercado.',
  },
  {
    year: 'Hoje',
    title: 'Referência Regional',
    texto: 'A Inusitech é reconhecida como um dos principais centros privados de pesquisa aplicada, manutenção eletrônica especializada e desenvolvimento de soluções elétricas do interior do Estado do Rio de Janeiro, reunindo engenharia, inovação e conhecimento para atender os setores industrial, clínico e tecnológico.',
  },
];

const valores = [
  { icon: <Shield size={28} />, nome: 'Ética', desc: 'Transparência em cada decisão e relação.' },
  { icon: <Lightbulb size={28} />, nome: 'Inovação', desc: 'Soluções que antecipam as demandas do futuro.' },
  { icon: <Award size={28} />, nome: 'Excelência Técnica', desc: 'Rigor e qualidade em cada projeto entregue.' },
  { icon: <Microscope size={28} />, nome: 'Pesquisa', desc: 'Conhecimento como base do nosso desenvolvimento.' },
  { icon: <Target size={28} />, nome: 'Precisão', desc: 'Os detalhes que fazem a diferença no resultado.' },
  { icon: <Users size={28} />, nome: 'Comprometimento', desc: 'Dedicação do início ao fim de cada projeto.' },
  { icon: <TrendingUp size={28} />, nome: 'Desenvolvimento Contínuo', desc: 'Evoluindo sempre junto ao mercado e ao cliente.' },
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
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-6"
          >
            <h4 className="text-inusi-red font-bold text-sm tracking-wider uppercase mb-2">Linha do Tempo</h4>
            <h2 className="text-4xl font-heading font-bold text-inusi-dark">NOSSA HISTÓRIA</h2>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-gray-500 text-lg italic mb-16 max-w-2xl mx-auto"
          >
            A história da Inusitech começou antes mesmo da criação da empresa.
          </motion.p>

          {/* Timeline vertical */}
          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-inusi-blue via-inusi-gold to-inusi-red"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-8 md:gap-12 relative"
                >
                  {/* Marcador */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-inusi-red border-4 border-white ring-2 ring-inusi-red shadow-lg flex items-center justify-center z-10">
                      <span className="text-white font-heading font-bold text-xs md:text-sm leading-tight text-center">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="pb-4 pt-2 flex-grow">
                    <h3 className="text-xl font-heading font-bold text-inusi-dark uppercase mb-3 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.texto}
                    </p>
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