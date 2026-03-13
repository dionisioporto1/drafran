import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
} from 'lucide-react';
import { PROCEDURES } from '../constants';

interface HomeProps {
  setShowScheduling: (show: boolean) => void;
}

export default function Home({ setShowScheduling }: HomeProps) {
  const whatsappLink = "https://wa.me/5541996546015";
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha seu nome e WhatsApp.');
      return;
    }
    const message = `Olá! Meu nome é ${formData.name}. Gostaria de falar sobre: ${formData.subject || 'Informações gerais'}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappLink}?text=${encodedMessage}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 z-10"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#1A261B]/60 font-bold">Excelência em Estética</span>
            </motion.div>
            <h1 className="text-6xl lg:text-[100px] font-serif font-light leading-[0.95] mb-8 text-[#1A261B] tracking-tight">
              A ciência da <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="italic"
              >
                beleza capilar.
              </motion.span>
            </h1>
            <p className="text-lg text-[#1A261B]/60 mb-12 max-w-xl leading-relaxed font-light">
              Tratamentos de alta performance e tecnologia avançada para saúde capilar e estética facial. Localizada no coração do Jardim das Américas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowScheduling(true)}
                className="bg-[#1A261B] text-white px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-[#2A3B2B] transition-all shadow-2xl shadow-[#1A261B]/10"
              >
                Explorar Tratamentos
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-bold border border-[#1A261B]/10 hover:border-[#1A261B] transition-all"
              >
                WhatsApp Direct
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-3xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
              <img 
                src="/a.png" 
                alt="Estética Avançada" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ height: 0, width: 0 }}
              whileInView={{ height: 160, width: 160 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-10 -left-10 border-l border-b border-[#D4AF37]/40 -z-10" 
            />
          </motion.div>
        </div>
      </section>

      {/* Procedures Section */}
      <section id="procedures" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-4 block">Especialidades</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-medium text-[#1A261B]">Nossos Procedimentos</h2>
            </div>
            <p className="text-sm text-[#1A261B]/50 max-w-xs leading-relaxed">
              Protocolos exclusivos desenvolvidos para resultados naturais e duradouros.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#1A261B]/5"
          >
            {PROCEDURES.map((proc, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ backgroundColor: "#FDFCFB" }}
                className="p-12 border-r border-b border-[#1A261B]/5 transition-all group relative overflow-hidden"
              >
                <span className="text-[10px] font-mono text-[#1A261B]/30 mb-8 block">0{idx + 1}</span>
                <h4 className="text-xl font-serif font-medium mb-4 text-[#1A261B] group-hover:text-[#D4AF37] transition-colors">{proc.name}</h4>
                <p className="text-[#1A261B]/50 text-xs leading-relaxed mb-8 font-light">
                  {proc.description}
                </p>
                <a 
                  href={`${whatsappLink}?text=Olá! Gostaria de saber mais sobre ${proc.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-[#1A261B] group-hover:gap-5 transition-all"
                >
                  Consultar <ChevronRight size={12} className="text-[#D4AF37]" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#1A261B] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/b.png" 
                  alt="Dra. Francyeri Porto" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute top-12 -right-12 h-full border border-[#D4AF37]/20 -z-10" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-6 block">A Profissional</span>
              <h3 className="text-5xl font-serif font-light mb-2 leading-tight">
                Dra. Francyeri Porto
              </h3>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-10">
                Biomédica Esteta CRBM/PR:5014
              </p>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light mb-12">
                <p>
                  Especialista em Terapia Capilar e Estética Avançada, a Dra. Francyeri Porto dedica sua carreira ao estudo da saúde do couro cabeludo e rejuvenescimento natural.
                </p>
                <p>
                  Nossa filosofia baseia-se na personalização absoluta, onde cada protocolo é desenhado após uma análise minuciosa das necessidades individuais de cada paciente.
                </p>
              </div>
              <div className="flex items-center gap-12">
                <div>
                  <p className="text-3xl font-serif text-[#D4AF37]">10+</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Anos de Prática</p>
                </div>
                <div className="h-10 w-[1px] bg-white/10" />
                <div>
                  <p className="text-3xl font-serif text-[#D4AF37]">5k+</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/40 mt-1">Atendimentos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#FDFCFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-6 block">Contato</span>
              <h2 className="text-4xl font-serif font-medium text-[#1A261B] mb-12">Agende sua visita ao nosso espaço.</h2>
              
              <div className="space-y-12">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-widest text-[#1A261B]/40 font-bold mb-4">Localização</p>
                  <p className="text-xl font-serif text-[#1A261B] leading-relaxed group-hover:text-[#D4AF37] transition-colors">
                    R: Desembargador Joaquim de Oliveira Sobrinho, 35 - Jardim das Américas
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#1A261B]/40 font-bold mb-4">WhatsApp</p>
                    <a href={whatsappLink} className="text-xl font-serif text-[#1A261B] hover:text-[#D4AF37] transition-colors">(41) 99654-6015</a>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#1A261B]/40 font-bold mb-4">Instagram</p>
                    <a href="https://www.instagram.com/drafrancyeri/" target="_blank" rel="noopener noreferrer" className="text-xl font-serif text-[#1A261B] hover:text-[#D4AF37] transition-colors">@drafrancyeri</a>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#1A261B]/40 font-bold mb-4">Horários</p>
                  <p className="text-sm text-[#1A261B]/60">Segunda a Sexta: 09:00 — 19:00</p>
                  <p className="text-sm text-[#1A261B]/60">Sábado: 09:00 — 13:00</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-12 shadow-sm border border-[#1A261B]/5"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A261B]/40">Seu Nome</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-[#1A261B]/10 py-3 focus:border-[#D4AF37] outline-none transition-all bg-transparent text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A261B]/40">WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b border-[#1A261B]/10 py-3 focus:border-[#D4AF37] outline-none transition-all bg-transparent text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A261B]/40">Assunto</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border-b border-[#1A261B]/10 py-3 focus:border-[#D4AF37] outline-none transition-all bg-transparent text-sm appearance-none"
                  >
                    <option value="">Selecione um procedimento</option>
                    {PROCEDURES.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#1A261B] text-white py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#2A3B2B] transition-all mt-8"
                >
                  Enviar Solicitação
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
