export default function Privacy() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
      
      <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
        <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Coleta de Dados</h2>
        <p>A Stracta Vast coleta as seguintes informações para a prestação de seus serviços:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Dados de Contato:</strong> Nome, e-mail, telefone e informações da empresa.</li>
          <li><strong>Dados de Faturamento:</strong> Endereço e dados necessários para processamento de pagamentos através de nossos parceiros financeiros.</li>
          <li><strong>Conteúdo do Site:</strong> Textos, imagens e arquivos fornecidos pelo cliente para a criação da sua página.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Uso das Informações</h2>
        <p>Utilizamos os dados coletados exclusivamente para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Criar, configurar e manter o seu site no ar.</li>
          <li>Processar pagamentos e enviar notas fiscais.</li>
          <li>Prestar suporte técnico e responder a dúvidas.</li>
          <li>Comunicar sobre atualizações importantes no serviço.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Compartilhamento de Dados</h2>
        <p>Não vendemos, alugamos ou repassamos seus dados para terceiros. O compartilhamento ocorre apenas com serviços essenciais para a operação tecnológica (como provedores de hospedagem cloud e gateways de pagamento), os quais também seguem rigorosos padrões de segurança e privacidade.</p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Seus Direitos (LGPD)</h2>
        <p>Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar a visualização, alteração, portabilidade ou exclusão dos seus dados pessoais de nossa base a qualquer momento, bastando entrar em contato com nosso suporte.</p>
      </div>
    </div>
  );
}