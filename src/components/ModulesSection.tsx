import { motion } from 'motion/react';
import { Package, UtensilsCrossed, Candy, Palette, Truck, Instagram, BadgeDollarSign, LineChart } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "Primeiros Passos",
    icon: Package,
    topics: [
      "Como começar do zero",
      "Equipamentos necessários",
      "Investimento inicial",
      "Organização da operação"
    ]
  },
  {
    id: 2,
    title: "Produção",
    icon: UtensilsCrossed,
    topics: [
      "Produção da pipoca",
      "Caramelização",
      "Armazenamento",
      "Padronização da qualidade"
    ]
  },
  {
    id: 3,
    title: "Recheios",
    icon: Candy,
    topics: [
      "Recheios mais vendidos",
      "Técnicas de aplicação",
      "Quantidade ideal",
      "Apresentação do produto"
    ]
  },
  {
    id: 4,
    title: "Embalagem e Identidade",
    icon: Palette,
    topics: [
      "Baldes",
      "Rótulos",
      "Fornecedores",
      "Identidade visual"
    ]
  },
  {
    id: 5,
    title: "Delivery",
    icon: Truck,
    topics: [
      "Como abrir o delivery",
      "Organização dos pedidos",
      "Atendimento",
      "Logística de entregas"
    ]
  },
  {
    id: 6,
    title: "Instagram e Marketing",
    icon: Instagram,
    topics: [
      "Como gravar vídeos",
      "Stories que vendem",
      "Reels",
      "Conteúdo diário",
      "Estratégias para atrair clientes"
    ]
  },
  {
    id: 7,
    title: "Vendas",
    icon: BadgeDollarSign,
    topics: [
      "Como vender todos os finais de semana",
      "Promoções",
      "Lançamentos",
      "Fidelização de clientes"
    ]
  },
  {
    id: 8,
    title: "Gestão",
    icon: LineChart,
    topics: [
      "Precificação",
      "Controle financeiro",
      "Custos",
      "Lucro",
      "Escala da operação"
    ]
  }
];

export function ModulesSection() {
  const repeatedModules = [...modules, ...modules, ...modules];

  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden flex flex-col items-center">
      <div className="text-center mb-10 md:mb-16 px-6 z-10 max-w-4xl">
        <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 md:mb-6">A estrutura completa do curso</h2>
        <p className="text-sm md:text-lg text-gray-400">8 módulos práticos em vídeo, estruturados do zero ao seu primeiro delivery.</p>
      </div>

      <div className="w-full relative flex gap-4 md:gap-6 pb-8 overflow-hidden group">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, 
          }}
        >
          {repeatedModules.map((mod, index) => (
            <div key={index} className="w-64 md:w-80 bg-brand-dark/50 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shrink-0 flex flex-col justify-between hover:border-brand-yellow/50 transition-colors">
              <div>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-brand-yellow/20 flex items-center justify-center rounded-xl md:rounded-2xl mb-4 md:mb-6">
                  <mod.icon className="w-5 h-5 md:w-7 md:h-7 text-brand-yellow" />
                </div>
                <div className="text-brand-yellow font-bold text-xs md:text-sm tracking-wider mb-1.5 md:mb-2 uppercase">Módulo {mod.id}</div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-3">{mod.title}</h3>
                <ul className="space-y-1.5 text-gray-300 text-xs md:text-sm">
                  {mod.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-brand-yellow font-bold select-none">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
