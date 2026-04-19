import { MousePointer2, CreditCard, Rocket } from 'lucide-react';

const steps = [
  {
    title: '1. Escolha seu Plano',
    description: 'Selecione o plano ideal. Cada plano possui uma taxa de setup inicial e uma mensalidade fixa.',
    icon: <MousePointer2 className="w-8 h-8 text-white" />
  },
  {
    title: '2. Setup e Conteúdo',
    description: 'Após o pagamento do setup, você nos envia seus dados (logo, fotos, textos) via WhatsApp.',
    icon: <CreditCard className="w-8 h-8 text-white" />
  },
  {
    title: '3. Site no Ar',
    description: 'Em até 48h úteis após o envio dos dados, seu site estará publicado e pronto para lucrar.',
    icon: <Rocket className="w-8 h-8 text-white" />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Processo Transparente</h2>
          <p className="mt-4 text-gray-600">Simples, rápido e sem burocracia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Linha conectora apenas no desktop */}
              {index < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-blue-100 -z-10"></div>
              )}
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}