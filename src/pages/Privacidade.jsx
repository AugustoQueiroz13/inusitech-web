import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Secao = ({ titulo, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className="mb-10"
  >
    <h2 className="text-xl font-heading font-bold text-inusi-dark uppercase mb-4 border-l-4 border-inusi-red pl-4">
      {titulo}
    </h2>
    <div className="text-gray-600 leading-relaxed space-y-3 text-sm">
      {children}
    </div>
  </motion.div>
);

const Privacidade = () => {
  return (
    <div className="bg-inusi-light min-h-screen pb-20">

      {/* Hero */}
      <div className="relative bg-inusi-blue py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-inusi-blue"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            POLÍTICA DE <span className="text-inusi-gold">PRIVACIDADE</span>
          </motion.h1>
          <p className="text-gray-300 text-sm">Última atualização: junho de 2025</p>
        </div>
      </div>

      {/* Conteúdo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <Secao titulo="1. Quem Somos">
            <p>
              A <strong>Inusitech Industrial</strong>, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 24.082.684/0001-86, com sede na Praça Santos Dumont, nº 98, Centro, Itaperuna/RJ, CEP 28300-000, é a controladora dos dados pessoais coletados por meio deste site.
            </p>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações dos usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
            </p>
          </Secao>

          <Secao titulo="2. Dados Coletados">
            <p>Podemos coletar os seguintes dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Mensagens e conteúdos enviados por meio do formulário de contato</li>
              <li>Dados de navegação (páginas acessadas, tempo de permanência, tipo de dispositivo) coletados automaticamente</li>
            </ul>
            <p>
              O fornecimento de dados pessoais identificados como obrigatórios no formulário de contato é necessário para que possamos responder às suas solicitações.
            </p>
          </Secao>

          <Secao titulo="3. Finalidade do Tratamento">
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responder às mensagens e solicitações enviadas pelo usuário</li>
              <li>Enviar orçamentos, informações técnicas e propostas comerciais solicitadas</li>
              <li>Melhorar a experiência de navegação no site</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis</li>
            </ul>
            <p>
              Não utilizamos os dados para envio de publicidade não solicitada nem os compartilhamos com terceiros para fins comerciais.
            </p>
          </Secao>

          <Secao titulo="4. Compartilhamento de Dados">
            <p>
              A Inusitech não vende, aluga ou cede dados pessoais a terceiros. Os dados poderão ser compartilhados apenas nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Por determinação legal ou ordem judicial</li>
              <li>Para proteger direitos e interesses legítimos da Inusitech</li>
              <li>Com prestadores de serviço que auxiliem na operação do site, sob obrigação de confidencialidade</li>
            </ul>
          </Secao>

          <Secao titulo="5. Cookies e Tecnologias de Rastreamento">
            <p>
              Este site pode utilizar cookies e tecnologias similares para melhorar a experiência de navegação. Os cookies são pequenos arquivos armazenados no seu dispositivo que nos permitem lembrar preferências e analisar o uso do site.
            </p>
            <p>
              Você pode configurar o seu navegador para recusar cookies. No entanto, isso pode afetar algumas funcionalidades do site.
            </p>
          </Secao>

          <Secao titulo="6. Seus Direitos (LGPD)">
            <p>Como titular de dados pessoais, você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar informações sobre o compartilhamento dos seus dados</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail <strong>inusitech@hotmail.com</strong>.
            </p>
          </Secao>

          <Secao titulo="7. Segurança dos Dados">
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda, alteração ou divulgação indevida. Nenhum sistema é absolutamente seguro, mas nos comprometemos a tratar incidentes de forma responsável e transparente.
            </p>
          </Secao>

          <Secao titulo="8. Retenção de Dados">
            <p>
              Os dados pessoais são mantidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou por exigência legal. Após esse período, os dados são excluídos ou anonimizados de forma segura.
            </p>
          </Secao>

          <Secao titulo="9. Atualizações desta Política">
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente. Alterações relevantes serão comunicadas por meio do próprio site.
            </p>
          </Secao>

          <Secao titulo="10. Contato">
            <p>
              Para dúvidas, solicitações ou exercício dos seus direitos relacionados a esta Política de Privacidade, entre em contato:
            </p>
            <ul className="list-none space-y-1">
              <li><strong>E-mail:</strong> inusitech@hotmail.com</li>
              <li><strong>Telefone/WhatsApp:</strong> (22) 99737-8508</li>
              <li><strong>Endereço:</strong> Praça Santos Dumont, 98, Centro, Itaperuna/RJ — CEP 28300-000</li>
            </ul>
          </Secao>

          <div className="pt-4">
            <Link to="/" className="inline-flex items-center gap-2 text-inusi-blue font-bold hover:text-inusi-red transition-colors text-sm">
              <ArrowLeft size={16} />
              Voltar para o início
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Privacidade;