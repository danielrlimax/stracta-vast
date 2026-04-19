import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona o serviço da Stracta Vast?',
    answer: 'Nós cuidamos de tudo. Você escolhe o plano ideal, nos envia as informações do seu negócio (como logo, fotos e cardápio), e nossa equipe cria, configura e publica o seu site. Você não precisa colocar a mão em nenhum código.'
  },
  {
    question: 'Preciso ter conhecimento em tecnologia?',
    answer: 'Absolutamente não! Nosso serviço foi criado exatamente para donos de negócios que querem focar no seu trabalho. Toda a parte técnica de hospedagem, domínio e manutenção fica por nossa conta.'
  },
  {
    question: 'Existe alguma multa de cancelamento?',
    answer: 'Não. Acreditamos em manter nossos clientes pela qualidade do serviço. Nossos planos são assinaturas mensais e você pode cancelar a qualquer momento, sem taxas ocultas ou pegadinhas.'
  },
  {
    question: 'Meu site vai funcionar bem em celulares?',
    answer: 'Com certeza. Mais de 80% dos acessos hoje vêm de smartphones. Todos os sites que criamos são 100% responsivos e otimizados para carregar rápido em qualquer tamanho de tela.'
  },
  {
    question: 'Em quanto tempo meu site estará no ar?',
    answer: 'Após o envio das informações iniciais do seu negócio, entregamos a sua Landing Page pronta e publicada em até 48 horas úteis.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600">
            Tudo o que você precisa saber sobre como vamos colocar o seu negócio na internet.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}