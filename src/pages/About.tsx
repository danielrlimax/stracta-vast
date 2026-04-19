import { Target, Users, Zap, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Foco no Resultado',
      description: 'Não criamos apenas sites bonitos, criamos ferramentas de vendas que trazem clientes reais para o seu negócio.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Agilidade',
      description: 'Sabemos que tempo é dinheiro. Nosso processo é otimizado para colocar sua empresa no ar o mais rápido possível.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Parceria Real',
      description: 'Seu sucesso é o nosso sucesso. Trabalhamos lado a lado com nossos clientes prestando suporte humano e eficiente.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Confiabilidade',
      description: 'Garantimos estabilidade, segurança e tecnologia de ponta para que você nunca precise se preocupar com problemas técnicos.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Democratizando a Tecnologia para Negócios Locais
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A Stracta Vast nasceu com um propósito claro: tirar o peso da tecnologia das costas do empreendedor, permitindo que ele foque naquilo que faz de melhor.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Observamos que muitos empreendedores locais perdiam vendas todos os dias simplesmente por não terem uma presença digital profissional. As opções no mercado eram duas: agências extremamente caras ou plataformas no estilo "faça você mesmo" que consumiam horas de aprendizado.
              </p>
              <p>
                Foi assim que surgiu a Stracta Vast. Decidimos criar um modelo onde nós fazemos o trabalho pesado por um valor acessível no formato de assinatura.
              </p>
              <p>
                Hoje, somos o parceiro tecnológico de dezenas de empresas, gerenciando toda a infraestrutura digital para que nossos clientes possam focar exclusivamente em atender seus próprios clientes.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center p-8">
            {/* Espaço para uma foto real da equipe ou escritório no futuro */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={40} />
              </div>
              <p className="text-gray-500 font-medium">Equipe Stracta Vast</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nossos Pilares</h2>
            <p className="text-lg text-gray-600 mt-4">Os valores que guiam o nosso trabalho diário.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}