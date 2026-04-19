export default function Hero() {
  const whatsappNumber = "5515998850796";
  const consultorMessage = "Olá! Gostaria de falar com um consultor sobre os sites da Stracta Vast.";

  return (
    <section id="hero" className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          O site perfeito para o seu negócio, <br className="hidden md:block" />
          <span className="text-blue-600">sem dor de cabeça.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Restaurantes, lanchonetes e barbearias. Você foca em atender seus clientes, e nós configuramos e gerenciamos o seu site para você.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Botão Ver Planos - Agora apontando corretamente para o ID #pricing */}
          <a 
            href="#pricing" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg text-center"
          >
            Ver Planos
          </a>

          {/* Botão Fale com Consultor - Redirecionando para o WhatsApp */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(consultorMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition shadow-sm text-center"
          >
            Falar com um Consultor
          </a>
        </div>
      </div>
    </section>
  );
}