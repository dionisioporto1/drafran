import React from 'react';
import { motion } from 'motion/react';
import { RESULTS } from '../constants';

export default function Results() {
  // Group results by title (category)
  const groupedResults = RESULTS.reduce((acc, result) => {
    if (!acc[result.title]) {
      acc[result.title] = [];
    }
    acc[result.title].push(result);
    return acc;
  }, {} as Record<string, typeof RESULTS>);

  return (
    <div className="pt-32 pb-32 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-4 block"
          >
            Galeria de Transformações
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-serif font-medium text-[#1A261B]"
          >
            Nossos Resultados
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#1A261B]/50 max-w-2xl mx-auto leading-relaxed"
          >
            Confira algumas das transformações reais realizadas em nossa clínica. 
            Cada caso é único e tratado com protocolos personalizados.
          </motion.p>
        </div>

        <div className="space-y-24">
          {Object.entries(groupedResults).map(([category, items], catIdx) => (
            <div key={category} className="space-y-10">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-serif font-medium text-[#1A261B] whitespace-nowrap">{category}</h2>
                <div className="h-[1px] w-full bg-[#1A261B]/10" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {items.map((result, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-sm">
                      <img 
                        src={result.image} 
                        alt={result.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-[#1A261B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-2">{result.tag}</span>
                    <h4 className="text-sm font-medium text-[#1A261B]/60 uppercase tracking-wider">{result.title}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
