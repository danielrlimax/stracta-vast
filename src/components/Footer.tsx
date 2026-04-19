import { Link } from 'react-router-dom';
import {
  Mail, 
  Phone, 
  HelpCircle, 
  ArrowRight 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* FAQ / Support Pre-Footer */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <HelpCircle className="w-12 h-12 text-white mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white">Ainda tem alguma dúvida?</h3>
              <p className="text-blue-100 mt-1">Acesse nossa central de ajuda ou fale com nosso time de especialistas.</p>
            </div>
          </div>
          <Link 
            to="/faq" 
            className="flex items-center w-full md:w-auto justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition shadow-lg"
          >
            Acessar Central de Dúvidas
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <h4 className="text-3xl font-extrabold text-white mb-6">Stracta Vast</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Democratizando a presença digital para negócios locais. Você foca no seu talento, e a nossa tecnologia cuida do resto.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5515998850796" 
                target='_blank' 
                rel="noreferrer" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition" 
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Suporte Column - Limpo apenas com FAQ */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Suporte</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition">Perguntas Frequentes (FAQ)</Link>
              </li>
            </ul>
          </div>

          {/* Institucional Column - Blog removido */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">A Empresa</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/sobre-nos" className="hover:text-blue-400 transition">Sobre Nós</Link>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-blue-400 transition">Planos e Preços</a>
              </li>
              <li>
                <Link to="/seja-parceiro" className="hover:text-blue-400 transition">Seja um Parceiro</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-medium">WhatsApp Comercial</span>
                  <span className="text-gray-400">(15) 99885-0796</span>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-medium">Email</span>
                  <span className="text-gray-400">danielrlima@proton.me</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">&copy; {currentYear} Stracta Vast. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <Link to="/termos-de-uso" className="hover:text-gray-300 transition">Termos de Uso</Link>
            <Link to="/politica-de-privacidade" className="hover:text-gray-300 transition">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}