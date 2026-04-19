import { Check, MessageCircle, Info } from 'lucide-react';

const plansData = [
  {
    id: 'basic',
    name: 'Básico',
    price: '49,90',
    setupPrice: '149,90',
    description: 'Ideal para quem está começando e quer ser encontrado.',
    features: ['Cardápio digital', 'Pedido direto no WhatsApp', 'Hospedagem + Domínio', 'Suporte Básico'],
    isPopular: false,
    message: 'Olá! Quero o Plano Essencial. Estou ciente da taxa de setup de R$ 149,00 + mensalidade de R$ 49,90.'
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: '89,90',
    setupPrice: '249,90',
    description: 'Para negócios que querem mostrar seus serviços e produtos.',
    features: ['Tudo do básico', 'QR Code nas mesas', 'Produtos organizados por categorias', 'Personalização de cores/logo', 'Edição de itens por demanda', 'Pequenas alterações mensais'],
    isPopular: true,
    message: 'Olá! Quero o Plano Profissional. Estou ciente da taxa de setup de R$ 249,00 + mensalidade de R$ 89,90.'
  },
  {
    id: 'enterprise',
    name: 'Premium',
    price: '129,90',
    setupPrice: '399,90',
    description: 'A solução completa e personalizada para destacar sua marca.',
    features: ['Tudo do profissional', 'Banco de dados (Salvar pedidos)', 'Prioridade no suporte', 'Ajustes mais rápidos', 'Sistema de pagamento por pix'],
    isPopular: false,
    message: 'Olá! Quero o Plano Premium. Estou ciente da taxa de setup de R$ 399,00 + mensalidade de R$ 129,90.'
  },
];

export default function Pricing() {
  const whatsappNumber = "5515998850796";

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Planos e Investimento</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparência total: um valor único de setup para criação e uma mensalidade para manutenção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-8 rounded-2xl bg-white border ${
                plan.isPopular ? 'border-blue-600 shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm'
              } flex flex-col`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 text-sm font-bold rounded-full">
                  Mais Escolhido
                </span>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{plan.description}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">R$ {plan.price}</span>
                  <span className="text-gray-500 text-lg ml-1">/mês</span>
                </div>
                <div className="mt-2 inline-flex items-center bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md border border-blue-100">
                  <Info size={14} className="mr-1" />
                  Setup único: R$ {plan.setupPrice}
                </div>
              </div>
              
              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' 
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
              >
                <MessageCircle size={20} />
                Contratar Agora
              </a>
              <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-wider font-semibold">
                O desenvolvimento inicia após o pagamento do setup
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}