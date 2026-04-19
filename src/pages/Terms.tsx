export default function Terms() {
  const lastUpdate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-20 shadow-2xl rounded-3xl border border-gray-100">
        {/* Cabeçalho do Documento */}
        <div className="text-center mb-16 border-b pb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
            Contrato de Licenciamento e Prestação de Serviços Digitais
          </h1>
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
            Stracta Vast - Soluções em Tecnologia
          </p>
          <div className="flex justify-center items-center gap-4 text-gray-500 text-sm">
            <span>Versão 2.0.4</span>
            <span>•</span>
            <span>Última atualização: {lastUpdate}</span>
          </div>
        </div>

        <div className="prose prose-blue max-w-none text-gray-700 space-y-12 leading-relaxed text-justify">
          
          {/* Seção 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">01</span>
              PREÂMBULO E DEFINIÇÕES
            </h2>
            <p>
              Este instrumento regula a relação jurídica entre a <strong>STRACTA VAST</strong>, doravante denominada "CONTRATADA", e a pessoa física ou jurídica devidamente identificada no ato da contratação, doravante denominada "CONTRATANTE" ou "CLIENTE".
            </p>
            <p>Para fins deste contrato, definem-se:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>WaaS (Website as a Service):</strong> Modelo de negócio onde o site é fornecido como serviço, incluindo hospedagem, licença de layout e manutenção, sem transferência de propriedade do código-fonte.</li>
              <li><strong>Setup:</strong> Esforço técnico inicial de configuração, design, parametrização de servidores e publicação do projeto.</li>
              <li><strong>Uptime:</strong> Tempo de disponibilidade do servidor onde o site está alocado.</li>
              <li><strong>Insumos:</strong> Materiais fornecidos pelo cliente, tais como logos, textos, fotos e vídeos.</li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">02</span>
              DA ADESÃO E CAPACIDADE CIVIL
            </h2>
            <p>
              Ao clicar no botão de contratação via WhatsApp ou realizar o pagamento da Taxa de Setup, o CLIENTE declara possuir plena capacidade civil e legal para assumir as obrigações aqui contidas. Caso a contratação seja feita em nome de uma pessoa jurídica, o declarante afirma possuir poderes de representação para tal ato.
            </p>
          </section>

          {/* Seção 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">03</span>
              DO OBJETO DO SERVIÇO
            </h2>
            <p>
              O objeto deste contrato é a prestação de serviços de desenvolvimento de interface web, licenciamento de uso de template proprietário e manutenção de hospedagem em regime de nuvem.
            </p>
            <p>
              A STRACTA VAST não atua como agência de publicidade, fotógrafa ou produtora de conteúdo, salvo se expressamente contratado em anexo. A obrigação da CONTRATADA limita-se à estruturação técnica e visual das informações enviadas pelo CLIENTE.
            </p>
          </section>

          {/* Seção 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">04</span>
              DO FLUXO DE DESENVOLVIMENTO E SETUP
            </h2>
            <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-blue-600">
              <p className="font-bold mb-4">4.1 O processo de entrega segue ritos obrigatórios:</p>
              <ul className="space-y-4">
                <li><strong>Fase 1:</strong> Confirmação de pagamento do Setup e briefing via WhatsApp.</li>
                <li><strong>Fase 2:</strong> Envio dos insumos pelo CLIENTE (Logo, Fotos, Contatos).</li>
                <li><strong>Fase 3:</strong> Produção técnica pela equipe Stracta Vast em até 48h úteis após Fase 2.</li>
                <li><strong>Fase 4:</strong> Publicação e apontamento de domínio.</li>
              </ul>
            </div>
            <p className="mt-6">
              <strong>Parágrafo Único:</strong> A ausência de envio dos insumos por parte do CLIENTE suspende o prazo de entrega. Transcorridos 60 dias sem envio de material, o Setup será considerado executado por disponibilidade de agenda, não havendo devolução de valores.
            </p>
          </section>

          {/* Seção 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">05</span>
              DA PROPRIEDADE DO CÓDIGO-FONTE E DESIGN
            </h2>
            <p>
              O CLIENTE reconhece que o site é construído sobre uma arquitetura de software proprietária da STRACTA VAST ou licenciada por terceiros.
            </p>
            <p>
              <strong>5.1 Direito de Uso:</strong> O CLIENTE possui uma licença de uso <em>não exclusiva</em> e <em>não transferível</em> enquanto mantiver a assinatura ativa.
            </p>
            <p>
              <strong>5.2 Vedação à Migração:</strong> Por se tratar de um ecossistema fechado de Website as a Service, não é tecnicamente possível nem juridicamente permitido o "download" do site para hospedagem em concorrentes. O CLIENTE é dono dos seus dados e conteúdos, mas não da lógica de programação e do design do template.
            </p>
          </section>

          {/* Seção 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">06</span>
              DAS OBRIGAÇÕES FINANCEIRAS E MENSALIDADE
            </h2>
            <p>
              O serviço é remunerado através de mensalidades antecipadas (modelo pré-pago).
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Vencimento:</strong> O dia do pagamento do primeiro mês torna-se a data de vencimento recorrente.</li>
              <li><strong>Inadimplência de 5 dias:</strong> Suspensão automática da visualização do site.</li>
              <li><strong>Inadimplência de 15 dias:</strong> Suspensão de serviços de e-mail associados.</li>
              <li><strong>Inadimplência de 30 dias:</strong> Rescisão contratual com deleção de dados e liberação do espaço em servidor para novos clientes.</li>
            </ul>
          </section>

          {/* Seção 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">07</span>
              DA GESTÃO DE DOMÍNIOS E DNS
            </h2>
            <p>
              O domínio é a propriedade intelectual do CLIENTE. A CONTRATADA atua apenas como facilitadora técnica.
            </p>
            <p>
              É de responsabilidade exclusiva do CLIENTE o pagamento das anuidades junto ao Registro.br ou órgãos internacionais. A STRACTA VAST não se responsabiliza pela perda do nome de domínio por falta de pagamento das taxas de renovação anuais devidas aos órgãos registradores.
            </p>
          </section>

          {/* Seção 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">08</span>
              DA POLÍTICA DE SUPORTE E MANUTENÇÃO
            </h2>
            <p>
              O suporte técnico é limitado a: (a) Correção de bugs no site; (b) Problemas de visualização; (c) Alterações de textos e fotos básicas.
            </p>
            <p>
              <strong>Exclusões do Suporte:</strong> Criação de novas artes/logos, edição de vídeos, suporte para softwares externos do cliente, problemas de conexão de internet do cliente e treinamento de marketing digital.
            </p>
          </section>

          {/* Seção 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">09</span>
              DA DISPONIBILIDADE E SLA (SERVICE LEVEL AGREEMENT)
            </h2>
            <p>
              A CONTRATADA garante um uptime mensal de 99.5%, salvo:
            </p>
            <ul className="list-decimal pl-6 space-y-3">
              <li>Manutenções preventivas realizadas em horários de baixo tráfego (00h às 05h).</li>
              <li>Ataques de negação de serviço (DDoS).</li>
              <li>Falhas em backbones de internet nacionais ou internacionais.</li>
              <li>Interrupções causadas por ordem judicial ou órgãos reguladores.</li>
            </ul>
          </section>

          {/* Seção 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">10</span>
              DA SEGURANÇA E BACKUPS
            </h2>
            <p>
              A STRACTA VAST realiza backups semanais para fins de recuperação de desastres (disaster recovery) de sua infraestrutura. O CLIENTE deve manter cópias de segurança de seus próprios insumos (logos e fotos) originais. Em caso de cancelamento por inadimplência, não há obrigação de entrega de backups ao CLIENTE.
            </p>
          </section>

          {/* Seção 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">11</span>
              DA LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)
            </h2>
            <p>
              As partes declaram-se cientes das obrigações da Lei nº 13.709/2018. A CONTRATADA figura como Operadora dos dados coletados nos formulários do site, enquanto o CLIENTE figura como Controlador. O CLIENTE deve possuir sua própria Política de Privacidade para seus usuários finais.
            </p>
          </section>

          {/* Seção 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">12</span>
              DA LIMITAÇÃO DE RESPONSABILIDADE CIVIL
            </h2>
            <p className="bg-red-50 p-6 border-l-4 border-red-500 font-medium text-red-900">
              A responsabilidade total da STRACTA VAST por qualquer reclamação decorrente deste contrato, seja por negligência ou infração, está limitada ao valor total pago pelo CLIENTE nos últimos 3 (três) meses de mensalidade. Em nenhuma circunstância seremos responsáveis por lucros cessantes ou danos morais decorrentes de instabilidades técnicas.
            </p>
          </section>

          {/* Seção 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">13</span>
              DO CONTEÚDO PROIBIDO E ÉTICA DIGITAL
            </h2>
            <p>É terminantemente proibida a utilização dos serviços para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pornografia de qualquer natureza.</li>
              <li>Venda de substâncias ilícitas ou medicamentos sem prescrição.</li>
              <li>Discurso de ódio, racismo ou homofobia.</li>
              <li>Divulgação de jogos de azar sem licença federal.</li>
              <li>Engenharia social (Phishing) ou SPAM.</li>
            </ul>
          </section>

          {/* Seção 14 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">14</span>
              DO CANCELAMENTO E RESCISÃO SEM JUSTA CAUSA
            </h2>
            <p>
              O contrato possui renovação automática mensal. O cancelamento pode ser feito a qualquer momento com aviso prévio de 48 horas antes da próxima renovação. Não há devolução de valores por meses parciais já iniciados.
            </p>
          </section>

          {/* Seção 15 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">15</span>
              DA MODIFICAÇÃO DOS TERMOS
            </h2>
            <p>
              A STRACTA VAST reserva-se o direito de alterar estes termos anualmente para refletir melhorias no serviço. O CLIENTE será notificado por e-mail ou aviso no site. A continuidade do uso após a alteração implica em aceitação tácita.
            </p>
          </section>

          {/* Seção 16 até 20 - Detalhamento Adicional Jurídico */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">16</span>
              DO SIGILO E CONFIDENCIALIDADE
            </h2>
            <p>As partes comprometem-se a manter sob sigilo todas as informações comerciais e estratégicas trocadas durante a vigência deste contrato.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">17</span>
              DO CASO FORTUITO OU FORÇA MAIOR
            </h2>
            <p>Nenhuma das partes será responsável pelo descumprimento de obrigações decorrentes de eventos fora de seu controle, como desastres naturais, guerras ou pandemias que impeçam a operação técnica.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">18</span>
              DA INDEPENDÊNCIA DAS PARTES
            </h2>
            <p>Este contrato não estabelece qualquer vínculo empregatício, societário ou de representação comercial entre as partes, sendo estas totalmente independentes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">19</span>
              DA TOLERÂNCIA
            </h2>
            <p>A eventual tolerância de qualquer das partes quanto ao descumprimento de cláusulas não implica em renúncia ao direito de exigí-las futuramente nem em novação contratual.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">20</span>
              DO FORO DE ELEIÇÃO
            </h2>
            <p>
              Para dirimir quaisquer controvérsias oriundas deste Contrato, as partes elegem o foro da comarca de <strong>Limeira/SP</strong>, renunciando a qualquer outro por mais privilegiado que seja.
            </p>
          </section>

          <div className="mt-20 pt-12 border-t-2 border-gray-100 text-center">
            <p className="text-gray-400 text-sm italic">
              Este documento é registrado eletronicamente e possui validade jurídica mediante a confirmação do pagamento dos serviços.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}