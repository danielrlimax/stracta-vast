import { useState } from 'react';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Dados de contato centralizados
  const contactLinks = {
    whatsapp: "https://wa.me/5515998850796",
    email: "mailto:danielrlima@proton.me"
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
              Stracta Vast
            </Link>
          </div>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#hero" className="text-gray-600 hover:text-blue-600 font-medium transition">Início</a>
            <a href="/#features" className="text-gray-600 hover:text-blue-600 font-medium transition">Recursos</a>
            <a href="/#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition">Planos</a>
            <Link to="/faq" className="text-gray-600 hover:text-blue-600 font-medium transition">FAQ</Link>
          </nav>

          {/* Ações de Contato Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={contactLinks.email}
              className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition px-3 py-2"
            >
              <Mail size={18} className="mr-2" />
              Email
            </a>
            <a 
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-green-600 transition shadow-md"
            >
              <MessageCircle size={18} className="mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 p-2"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a 
              href="/#hero" 
              className="block px-3 py-4 text-gray-600 font-medium border-b border-gray-50" 
              onClick={toggleMenu}
            >
              Início
            </a>
            <a 
              href="/#features" 
              className="block px-3 py-4 text-gray-600 font-medium border-b border-gray-50" 
              onClick={toggleMenu}
            >
              Recursos
            </a>
            <a 
              href="/#pricing" 
              className="block px-3 py-4 text-gray-600 font-medium border-b border-gray-50" 
              onClick={toggleMenu}
            >
              Planos
            </a>
            <Link 
              to="/faq" 
              className="block px-3 py-4 text-gray-600 font-medium border-b border-gray-50" 
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            
            {/* Botões de Ação no Mobile */}
            <div className="pt-4 grid grid-cols-1 gap-3">
              <a 
                href={contactLinks.whatsapp}
                className="flex justify-center items-center bg-green-500 text-white px-3 py-4 rounded-xl font-bold shadow-sm"
              >
                <MessageCircle size={20} className="mr-2" />
                Chamar no WhatsApp
              </a>
              <a 
                href={contactLinks.email}
                className="flex justify-center items-center bg-gray-100 text-gray-700 px-3 py-4 rounded-xl font-bold"
              >
                <Mail size={20} className="mr-2" />
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}