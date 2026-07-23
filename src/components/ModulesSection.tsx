import { useEffect, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isInteracting = false;
    let pauseTimeout: NodeJS.Timeout;

    const startInteraction = () => {
      isInteracting = true;
      clearTimeout(pauseTimeout);
    };

    const stopInteraction = () => {
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        isInteracting = false;
      }, 2000);
    };

    const wrapScrollIfNeeded = () => {
      const oneThirdWidth = scrollContainer.scrollWidth / 3;
      if (oneThirdWidth > 0) {
        if (scrollContainer.scrollLeft >= oneThirdWidth * 2) {
          scrollContainer.scrollLeft -= oneThirdWidth;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft += oneThirdWidth;
        }
      }
    };

    const step = () => {
      if (scrollContainer && !isInteracting) {
        scrollContainer.scrollLeft += 0.8;
        wrapScrollIfNeeded();
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const onScroll = () => {
      wrapScrollIfNeeded();
    };

    scrollContainer.addEventListener('pointerdown', startInteraction);
    scrollContainer.addEventListener('pointerup', stopInteraction);
    scrollContainer.addEventListener('pointercancel', stopInteraction);
    scrollContainer.addEventListener('touchstart', startInteraction, { passive: true });
    scrollContainer.addEventListener('touchend', stopInteraction);
    scrollContainer.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(pauseTimeout);
      scrollContainer.removeEventListener('pointerdown', startInteraction);
      scrollContainer.removeEventListener('pointerup', stopInteraction);
      scrollContainer.removeEventListener('pointercancel', stopInteraction);
      scrollContainer.removeEventListener('touchstart', startInteraction);
      scrollContainer.removeEventListener('touchend', stopInteraction);
      scrollContainer.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="py-20 md:py-24 bg-brand-dark text-white overflow-hidden flex flex-col items-center">
      <div className="text-center mb-10 md:mb-16 px-6 z-10 max-w-4xl">
        <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 md:mb-6">A estrutura completa do curso</h2>
        <p className="text-sm md:text-lg text-gray-400">8 módulos práticos em vídeo, estruturados do zero ao seu primeiro delivery.</p>
      </div>

      <div className="w-full relative pb-4">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing px-6 md:px-12 py-4 select-none"
        >
          {repeatedModules.map((mod, index) => (
            <div 
              key={index} 
              className="w-[260px] md:w-80 bg-brand-dark/50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shrink-0 flex flex-col justify-between hover:border-brand-yellow/50 transition-colors shadow-lg"
            >
              <div>
                <div className="w-11 h-11 md:w-14 md:h-14 bg-brand-yellow/20 flex items-center justify-center rounded-xl md:rounded-2xl mb-4 md:mb-6">
                  <mod.icon className="w-6 h-6 md:w-7 md:h-7 text-brand-yellow" />
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
        </div>

        <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1 font-medium">
          <span>👈</span> Arraste para navegar entre os módulos <span>👉</span>
        </p>
      </div>
    </section>
  );
}

