import { Play, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="hero-gradient pt-8 md:pt-12 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <img 
          src="https://lh3.googleusercontent.com/d/1Hn2s-4QKnsXKeKgurl1YfUgYR8EFU5c4" 
          alt="Vício de Pipoca" 
          className="h-16 sm:h-20 md:h-28 object-contain mb-6 md:mb-8"
        />
        <h1 className="text-2xl sm:text-3xl md:text-[46px] font-display font-extrabold leading-[1.1] mb-6 tracking-tight max-w-5xl">
          Aprenda a estratégia que me fez faturar mais de <span className="text-brand-pink">R$70 mil</span> no meu primeiro mês de delivery de Pipoca Gourmet.
        </h1>
        
        {/* VSL Placeholder */}
        <div className="w-full max-w-4xl aspect-video bg-brand-dark rounded-3xl overflow-hidden shadow-2xl relative mb-12 border-4 border-white group cursor-pointer flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white ml-2" fill="currentColor" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-70 flex justify-between">
                <span>00:00</span>
                <span>Clique para dar play</span>
            </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 w-full">
            <a href="#oferta" className="block w-full sm:w-auto text-center bg-brand-pink hover:bg-brand-pink-dark text-white font-bold py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl transition-all hover:scale-105 active:scale-95 animate-pulse-slow cta-glow">
                QUERO ME INSCREVER AGORA
            </a>
            <p className="text-sm text-gray-700 font-medium flex items-center justify-center gap-2 mt-2">
                <ShieldCheck className="w-5 h-5 text-green-600" /> Compra 100% Segura e Acesso Imediato
            </p>
        </div>
      </div>
      
      {/* Infinite Carousel */}
      <div className="absolute bottom-0 left-0 right-0 py-4 overflow-hidden flex whitespace-nowrap z-10">
        <motion.div
          className="flex gap-8 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, 
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-brand-pink font-display font-bold text-xl md:text-2xl uppercase tracking-widest opacity-90">
              <span>VICIO DE PIPOCA</span>
              <span className="w-2 h-2 rounded-full bg-brand-pink opacity-50"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
