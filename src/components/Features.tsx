import { Utensils, Scissors, Store, Zap, Shield, Smartphone } from 'lucide-react';

const featuresList = [
  {
    id: 1,
    title: 'Para Restaurantes',
    description: 'Cardápio digital integrado e informações de localização fáceis de encontrar.',
    icon: <Utensils className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Para Barbearias',
    description: 'Exiba seus cortes, horários de funcionamento e links para agendamento.',
    icon: <Scissors className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Para Lojas Locais',
    description: 'Catálogo de produtos e presença digital forte na sua região.',
    icon: <Store className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 4,
    title: 'Nós Criamos Tudo',
    description: 'Zero código para você. Nós configuramos, hospedamos e entregamos pronto.',
    icon: <Zap className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 5,
    title: 'Segurança Garantida',
    description: 'Certificado SSL incluso. Seu site sempre online e seguro para os clientes.',
    icon: <Shield className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 6,
    title: '100% Responsivo',
    description: 'Funciona perfeitamente em celulares, tablets e computadores.',
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Feito sob medida para o seu sucesso</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Não importa o tamanho do seu negócio, ter uma vitrine na internet nunca foi tão fácil e acessível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature) => (
            <div key={feature.id} className="p-6 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}