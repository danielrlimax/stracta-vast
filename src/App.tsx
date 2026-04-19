import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Importação adicionada
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsappButton';
import Home from './pages/Home';
import About from './pages/About';
import Partner from './pages/Partner';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      {/* Coloque o ScrollToTop logo aqui no topo, dentro do Router */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-white font-sans scroll-smooth flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<About />} />
            <Route path="/seja-parceiro" element={<Partner />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/termos-de-uso" element={<Terms />} />
            <Route path="/politica-de-privacidade" element={<Privacy />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;