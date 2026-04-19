import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Silva',
    role: 'Dono da Barbearia Vintage',
    content: 'O suporte da Stracta foi incrível. Enviei as fotos e em 2 dias meu site já estava no ar. Meus clientes agora agendam direto pelo WhatsApp.'
  },
  {
    name: 'Ana Costa',
    role: 'Restaurante Sabor Local',
    content: 'Eu não entendia nada de tecnologia. Eles fizeram tudo e o cardápio digital ficou lindo. Valeu cada centavo!'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-6">"{t.content}"</p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-blue-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}