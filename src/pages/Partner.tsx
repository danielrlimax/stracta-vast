import { Handshake, CircleDollarSign, Zap } from 'lucide-react';

export default function Partner() {
  const whatsappNumber = "5515998850796";
  const partnerMessage = "Olá! Tenho interesse em me tornar um parceiro da Stracta Vast. Como funciona o comissionamento?";

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Seja um Parceiro Stracta Vast</h1>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Indique clientes para nós, ajude negócios locais a crescerem e seja muito bem remunerado por isso. 
          Você indica, nós fazemos o trabalho e você ganha a sua parte.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <CircleDollarSign className="w-12 h-12 text-green-500 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Comissão à Vista</h3>
            <p className="text-gray-600 leading-relaxed">
              Receba uma comissão generosa diretamente sobre a <strong>Taxa de Setup</strong> de cada cliente que fechar conosco. Dinheiro rápido e direto pelo seu esforço inicial.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Zero Dor de Cabeça</h3>
            <p className="text-gray-600 leading-relaxed">
              Você não precisa saber programar nem dar suporte. Sua única função é fazer a ponte; todo o desenvolvimento e atendimento técnico é por nossa conta.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
            <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Para Quem é?</h3>
            <p className="text-gray-600 leading-relaxed">
              Ideal para agências de marketing, contadores, designers, ou qualquer profissional que já atende donos de negócios locais e quer agregar valor.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-3xl p-10 max-w-3xl mx-auto border border-blue-100 mb-12 text-left">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Como funciona na prática?</h3>
          <ol className="space-y-4 text-blue-800">
            <li className="flex items-start">
              <span className="font-bold text-blue-600 mr-2">1.</span>
              Você apresenta a Stracta Vast para um cliente que precisa de um site.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-600 mr-2">2.</span>
              O cliente fecha o negócio e paga a Taxa de Setup inicial.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-blue-600 mr-2">3.</span>
              Nós repassamos a sua comissão à vista. Simples assim.
            </li>
          </ol>
        </div>

        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(partnerMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
        >
          <Handshake className="mr-2 w-6 h-6" />
          Quero ser parceiro agora
        </a>
      </div>
    </div>
  );
}