import { motion } from 'motion/react';
import { Package, UtensilsCrossed, Candy, Palette, Truck, Instagram, BadgeDollarSign, LineChart } from 'lucide-react';

const modules = [
  { id: 1, title: "Primeiros Passos", icon: Package, desc: "A base de tudo. Como estruturar a sua ideia e preparar o terreno." },
  { id: 2, title: "Produção", icon: UtensilsCrossed, desc: "Aprenda a fazer a pipoca perfeita, ponto do caramelo e padronização." },
  { id: 3, title: "Recheios", icon: Candy, desc: "Os recheios mais vendidos e o segredo da montagem irresistível." },
  { id: 4, title: "Embalagem e Identidade", icon: Palette, desc: "Como criar uma marca forte e embalagens que encantam o cliente." },
  { id: 5, title: "Delivery", icon: Truck, desc: "A operação de entrega, logística e como garantir que chegue perfeito." },
  { id: 6, title: "Instagram e Marketing", icon: Instagram, desc: "Estratégias de conteúdo e divulgação para atrair clientes todos os dias." },
  { id: 7, title: "Vendas", icon: BadgeDollarSign, desc: "Técnicas de conversão, atendimento e como vender mais para o mesmo cliente." },
  { id: 8, title: "Gestão", icon: LineChart, desc: "Precificação, controle financeiro e como lucrar de verdade com seu negócio." }
];

export function ModulesSection() {
  const repeatedModules = [...modules, ...modules, ...modules];

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 px-6 z-10 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">A estrutura completa do curso</h2>
        <p className="text-lg text-gray-400">8 módulos práticos em vídeo, estruturados do zero ao seu primeiro delivery.</p>
      </div>

      <div className="w-full relative flex gap-6 pb-8 overflow-hidden group">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, 
          }}
        >
          {repeatedModules.map((mod, index) => (
            <div key={index} className="w-72 md:w-80 bg-brand-dark/50 p-8 rounded-3xl border border-white/10 shrink-0 flex flex-col justify-between hover:border-brand-yellow/50 transition-colors">
              <div>
                <div className="w-14 h-14 bg-brand-yellow/20 flex items-center justify-center rounded-2xl mb-6">
                  <mod.icon className="w-7 h-7 text-brand-yellow" />
                </div>
                <div className="text-brand-yellow font-bold text-sm tracking-wider mb-2 uppercase">Módulo {mod.id}</div>
                <h3 className="text-xl font-display font-bold mb-3">{mod.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
