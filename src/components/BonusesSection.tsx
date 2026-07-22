import { Gift, CheckCircle2 } from 'lucide-react';

export function BonusesSection() {
  const bonuses = [
    "Comunidade VIP no WhatsApp.",
    "Ajuda para encontrar os melhores fornecedores",
    "Contato da gráfica utilizada pela Vício de Pipoca.",
    "Atualizações gratuitas do curso (Curso Vivo).",
    "Novas aulas conforme as dúvidas mais frequentes.",
    "Materiais de apoio e conteúdos extras."
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-brand-yellow relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/30"></div>
      
      <div className="max-w-6xl mx-auto bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-14 shadow-2xl relative overflow-hidden border-4 border-white">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
        
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
            <div className="flex-1 relative z-10">
                <div className="flex flex-col items-start gap-4 mb-8">
                    <div className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase border border-brand-pink/20 shadow-sm">
                        <Gift className="w-4 h-4" />
                        Somente nesta oferta
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-brand-dark leading-[1.1]">
                        Bônus <span className="text-brand-pink underline decoration-brand-yellow decoration-4 underline-offset-8">Exclusivos</span>
                    </h2>
                </div>
                <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 font-medium leading-relaxed">
                    Além de todo o conteúdo do curso, você também leva esses presentes especiais para acelerar seus resultados.
                </p>
                <ul className="space-y-3 md:space-y-4">
                    {bonuses.map((bonus, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-brand-pink shrink-0" />
                            <span className="font-bold text-brand-dark text-base md:text-lg leading-tight">{bonus}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="flex-1 w-full relative z-10">
                <div className="aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white bg-brand-cream">
                    <img 
                        src="https://lh3.googleusercontent.com/d/1Rs7Z3_fLegjhxjalhQ4orcNNFKfN_2Xu" 
                        alt="Pipoca deliciosa" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
