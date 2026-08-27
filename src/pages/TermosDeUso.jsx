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

const TermosDeUso = () => {
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
            TERMOS DE <span className="text-inusi-gold">USO</span>
          </motion.h1>
          <p className="text-gray-300 text-sm">Última atualização: junho de 2025</p>
        </div>
      </div>

      {/* Conteúdo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <Secao titulo="1. Aceitação dos Termos">
            <p>
              Ao acessar e utilizar o site da <strong>Inusitech Industrial</strong> (CNPJ: 24.082.684/0001-86), você declara que leu, compreendeu e concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição, solicitamos que interrompa o uso do site imediatamente.
            </p>
          </Secao>

          <Secao titulo="2. Objeto">
            <p>
              Este site tem caráter institucional e informativo. Seu objetivo é apresentar os produtos, serviços, história e informações de contato da Inusitech Industrial, além de direcionar o usuário para os canais oficiais de venda.
            </p>
            <p>
              O site não realiza transações comerciais diretamente. As compras devem ser realizadas pelos canais indicados na página "Onde Comprar".
            </p>
          </Secao>

          <Secao titulo="3. Uso Permitido">
            <p>O usuário compromete-se a utilizar este site apenas para finalidades lícitas e de acordo com estes Termos, sendo expressamente vedado:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reproduzir, copiar ou distribuir conteúdo do site sem autorização prévia por escrito</li>
              <li>Utilizar o site para fins comerciais não autorizados</li>
              <li>Transmitir vírus, malware ou qualquer código malicioso</li>
              <li>Tentar obter acesso não autorizado a sistemas ou bancos de dados</li>
              <li>Praticar atos que violem direitos de terceiros ou da Inusitech</li>
            </ul>
          </Secao>

          <Secao titulo="4. Propriedade Intelectual">
            <p>
              Todo o conteúdo disponível neste site, incluindo textos, imagens, logotipos, marcas, layout e código-fonte, é de propriedade exclusiva da Inusitech Industrial ou de seus licenciantes, e está protegido pela legislação brasileira de propriedade intelectual.
            </p>
            <p>
              É permitida a reprodução parcial de informações para uso pessoal e não comercial, desde que citada a fonte. Qualquer outro uso requer autorização expressa e prévia da Inusitech.
            </p>
          </Secao>

          <Secao titulo="5. Precisão das Informações">
            <p>
              A Inusitech empenha-se para manter as informações deste site precisas e atualizadas. No entanto, não garantimos que todo o conteúdo esteja isento de erros ou omissões. As especificações técnicas dos produtos podem ser alteradas pelo fabricante sem aviso prévio.
            </p>
            <p>
              Para informações técnicas definitivas ou para confirmar disponibilidade, recomendamos o contato direto com nossa equipe.
            </p>
          </Secao>

          <Secao titulo="6. Limitação de Responsabilidade">
            <p>A Inusitech não se responsabiliza por:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Danos diretos, indiretos ou consequenciais decorrentes do uso ou impossibilidade de uso deste site</li>
              <li>Interrupções temporárias de acesso por manutenção, falhas técnicas ou causas externas</li>
              <li>Conteúdo de sites de terceiros acessados por meio de links presentes neste site</li>
            </ul>
          </Secao>

          <Secao titulo="7. Links Externos">
            <p>
              Este site pode conter links para sites de terceiros, como Mercado Livre e redes sociais. Esses links são disponibilizados por conveniência e não implicam endosso ou responsabilidade da Inusitech sobre o conteúdo desses sites, que possuem suas próprias políticas de privacidade e termos de uso.
            </p>
          </Secao>

          <Secao titulo="8. Modificações">
            <p>
              A Inusitech reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor a partir da data de publicação no site. O uso continuado do site após modificações constitui aceitação dos novos termos.
            </p>
          </Secao>

          <Secao titulo="9. Privacidade">
            <p>
              O tratamento de dados pessoais dos usuários é regulado pela nossa{' '}
              <Link to="/privacidade" className="text-inusi-blue hover:text-inusi-red underline transition-colors">
                Política de Privacidade
              </Link>
              , em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </Secao>

          <Secao titulo="10. Foro">
            <p>
              Estes Termos de Uso são regidos pela legislação brasileira. Para dirimir quaisquer dúvidas ou controvérsias decorrentes de sua interpretação ou aplicação, fica eleito o Foro da Comarca de Itaperuna, Estado do Rio de Janeiro, com exclusão de qualquer outro, por mais privilegiado que seja.
            </p>
          </Secao>

          <Secao titulo="11. Contato">
            <p>Para questões relacionadas a estes Termos de Uso, entre em contato:</p>
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

export default TermosDeUso;