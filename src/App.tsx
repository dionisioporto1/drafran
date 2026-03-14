import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate
} from 'react-router-dom';
import { 
  Instagram, 
  MessageCircle, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import Results from './pages/Results';
import { PROCEDURES } from './constants';

const whatsappLink = "https://wa.me/5541996546015";

function Navbar({ setShowScheduling }: { setShowScheduling: (show: boolean) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // Clear state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-[#1A261B]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex-shrink-0 flex flex-col group cursor-pointer">
            <span className="text-xl font-serif font-bold tracking-tight text-[#1A261B]">
              DRA. FRANCYERI PORTO
            </span>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-4 bg-[#D4AF37]" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#1A261B]/60 font-medium">
                Estética & Capilar
              </span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <button onClick={() => scrollToSection('home')} className="text-[11px] uppercase tracking-widest font-semibold hover:text-[#D4AF37] transition-colors">Início</button>
            <button onClick={() => scrollToSection('procedures')} className="text-[11px] uppercase tracking-widest font-semibold hover:text-[#D4AF37] transition-colors">Procedimentos</button>
            <Link to="/resultados" className="text-[11px] uppercase tracking-widest font-semibold hover:text-[#D4AF37] transition-colors">Resultados</Link>
            <button onClick={() => scrollToSection('about')} className="text-[11px] uppercase tracking-widest font-semibold hover:text-[#D4AF37] transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('contact')} className="text-[11px] uppercase tracking-widest font-semibold hover:text-[#D4AF37] transition-colors">Contato</button>
            <button 
              onClick={() => setShowScheduling(true)}
              className="bg-[#1A261B] text-white px-8 py-3 rounded-none text-[11px] uppercase tracking-widest font-bold hover:bg-[#2A3B2B] transition-all border border-[#1A261B]"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#1A261B]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFCFB] border-b border-[#1A261B]/5 px-6 py-8 space-y-6 overflow-hidden"
          >
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-sm uppercase tracking-widest font-bold">Início</button>
            <button onClick={() => scrollToSection('procedures')} className="block w-full text-left text-sm uppercase tracking-widest font-bold">Procedimentos</button>
            <Link to="/resultados" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm uppercase tracking-widest font-bold">Resultados</Link>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm uppercase tracking-widest font-bold">Sobre</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-sm uppercase tracking-widest font-bold">Contato</button>
            <button 
              onClick={() => { setShowScheduling(true); setIsMenuOpen(false); }}
              className="block w-full bg-[#1A261B] text-white text-center py-4 text-xs uppercase tracking-widest font-bold"
            >
              Agendar Agora
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="py-16 border-t border-[#1A261B]/5 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-serif font-bold tracking-tight text-[#1A261B]">
            DRA. FRANCYERI PORTO
          </span>
          <span className="text-[8px] uppercase tracking-[0.4em] text-[#1A261B]/40 font-bold">
            Estética & Capilar
          </span>
        </div>
        <p className="text-[10px] text-[#1A261B]/30 uppercase tracking-widest">
          © 2024 Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/drafrancyeri/" target="_blank" rel="noopener noreferrer">
            <Instagram size={16} className="text-[#1A261B]/40 hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} className="text-[#1A261B]/40 hover:text-[#D4AF37] cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showScheduling, setShowScheduling] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDFCFB] text-[#1A261B] font-sans selection:bg-[#D4AF37]/30 selection:text-[#1A261B]">
        <Navbar setShowScheduling={setShowScheduling} />
        
        <Routes>
          <Route path="/" element={<Home setShowScheduling={setShowScheduling} />} />
          <Route path="/resultados" element={<Results />} />
        </Routes>

        <Footer />

        {/* Floating WhatsApp - Left Side Golden */}
        <motion.a 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-10 left-10 z-[60] bg-[#D4AF37] text-white p-5 rounded-full shadow-2xl border border-white/20 hover:bg-[#B8962E] transition-all"
        >
          <MessageCircle size={28} />
        </motion.a>

        <AnimatePresence>
          {showScheduling && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowScheduling(false)}
                className="absolute inset-0 bg-[#1A261B]/80 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                className="bg-[#FDFCFB] w-full max-w-xl rounded-none shadow-2xl relative z-10 overflow-hidden border border-[#D4AF37]/20"
              >
                <div className="p-12">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-2 block">Agendamento</span>
                      <h3 className="text-3xl font-serif font-medium text-[#1A261B]">Escolha seu tratamento</h3>
                    </div>
                    <button onClick={() => setShowScheduling(false)} className="text-[#1A261B]/20 hover:text-[#1A261B] transition-colors">
                      <X size={24} />
                    </button>
                  </div>
                  
                  <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
                    {PROCEDURES.map((proc, i) => (
                      <motion.a 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        href={`${whatsappLink}?text=Olá! Gostaria de agendar: ${proc.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-6 border border-[#1A261B]/5 hover:border-[#D4AF37] transition-all group"
                      >
                        <span className="text-xs uppercase tracking-widest font-bold text-[#1A261B] group-hover:text-[#D4AF37]">{proc.name}</span>
                        <ChevronRight size={14} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 2px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #D4AF37;
          }
        `}</style>
      </div>
    </Router>
  );
}
