import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle, Send, AlertCircle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contato = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (erro) setErro('');
  };

  const handleWhatsApp = () => {
    if (!form.nome.trim() || !form.mensagem.trim()) {
      setErro('Por favor, preencha ao menos o seu nome e a mensagem.');
      return;
    }

    const linhas = [
      `Olá! Meu nome é *${form.nome}*.`,
      form.email ? `E-mail: ${form.email}` : '',
      form.telefone ? `Telefone: ${form.telefone}` : '',
      form.assunto ? `Assunto: ${form.assunto}` : '',
      '',
      form.mensagem,
    ];

    const texto = linhas.filter(Boolean).join('\n');
    const encoded = encodeURIComponent(texto);
    window.open(`https://api.whatsapp.com/send?phone=5522997378508&text=${encoded}`, '_blank');
  };

  const redesSociais = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/Inusitech/', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/inusitech.oficial/', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/inusitech', label: 'LinkedIn' },
  ];

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
            ENTRE EM <span className="text-inusi-gold">CONTATO</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-inusi-red mx-auto mb-6"
          ></motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Fale com nossa equipe. Respondemos rapidamente pelo WhatsApp.
          </p>
        </div>
      </div>

      {/* Dados + Formulário */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Coluna de informações */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="w-full lg:w-2/5"
            >
              <h4 className="text-inusi-red font-bold text-sm tracking-wider uppercase mb-2">Informações</h4>
              <h2 className="text-3xl font-heading font-bold text-inusi-dark uppercase mb-8 leading-tight">
                Nossa Localização e Contatos
              </h2>

              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-inusi-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-inusi-blue" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-inusi-dark uppercase text-sm mb-1">Endereço</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Praça Santos Dumont, 98<br />
                      Centro — Itaperuna/RJ<br />
                      CEP: 28300-000
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-inusi-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-inusi-blue" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-inusi-dark uppercase text-sm mb-1">Telefone / WhatsApp</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=5522997378508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm hover:text-inusi-red transition-colors"
                    >
                      (22) 99737-8508
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-inusi-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-inusi-blue" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-inusi-dark uppercase text-sm mb-1">E-mail</p>
                    <a
                      href="mailto:inusitech@hotmail.com"
                      className="text-gray-600 text-sm hover:text-inusi-red transition-colors"
                    >
                      inusitech@hotmail.com
                    </a>
                  </div>
                </li>
              </ul>

              {/* Redes sociais */}
              <div>
                <p className="font-heading font-bold text-inusi-dark uppercase text-sm mb-4">Redes Sociais</p>
                <div className="flex gap-3">
                  {redesSociais.map((rede) => (
                    <a
                      key={rede.label}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={rede.label}
                      className="w-10 h-10 rounded-lg bg-inusi-blue text-white flex items-center justify-center hover:bg-inusi-gold transition-colors"
                    >
                      {rede.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="w-full lg:w-3/5"
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <MessageCircle size={24} className="text-inusi-blue" />
                  <h3 className="text-xl font-heading font-bold text-inusi-dark uppercase">
                    Enviar Mensagem pelo WhatsApp
                  </h3>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-inusi-dark uppercase tracking-wider mb-2">
                        Nome <span className="text-inusi-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-inusi-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-inusi-dark uppercase tracking-wider mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-inusi-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-inusi-dark uppercase tracking-wider mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-inusi-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-inusi-dark uppercase tracking-wider mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      name="assunto"
                      value={form.assunto}
                      onChange={handleChange}
                      placeholder="Ex: Orçamento de filtro de linha"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-inusi-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-inusi-dark uppercase tracking-wider mb-2">
                      Mensagem <span className="text-inusi-red">*</span>
                    </label>
                    <textarea
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva sua dúvida ou necessidade..."
                      rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-inusi-blue transition-colors resize-none"
                    />
                  </div>

                  {erro && (
                    <div className="flex items-center gap-2 text-inusi-red text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      {erro}
                    </div>
                  )}

                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide flex items-center justify-center gap-3 transition-colors shadow-lg"
                  >
                    <Send size={18} />
                    Enviar pelo WhatsApp
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Ao clicar, você será redirecionado para o WhatsApp com sua mensagem já preenchida.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-6">
          <h3 className="text-2xl font-heading font-bold text-inusi-dark uppercase mb-6 text-center">
            Nossa Sede em <span className="text-inusi-blue">Itaperuna/RJ</span>
          </h3>
        </div>
        <div className="w-full h-[420px]">
          <iframe
            title="Localização Inusitech — Praça Santos Dumont, 98, Itaperuna/RJ"
            src="https://maps.google.com/maps?q=Pra%C3%A7a+Santos+Dumont%2C+98%2C+Itaperuna%2C+RJ%2C+Brasil&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contato;