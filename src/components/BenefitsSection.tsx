import { CheckCircle2, Star, Video, Users, BookOpen, Contact, Megaphone, TrendingUp, Truck, RefreshCw } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    { icon: Video, text: "Curso completo em vídeo, do zero ao primeiro delivery." },
    { icon: Users, text: "Comunidade VIP no WhatsApp para networking, suporte e troca de experiências." },
    { icon: RefreshCw, text: "Curso vivo: novas aulas serão adicionadas sempre que surgirem dúvidas frequentes." },
    { icon: Contact, text: "Como encontrar os melhores fornecedores." },
    { icon: BookOpen, text: "Contato da gráfica que produz os rótulos da marca com preços exclusivos." },
    { icon: Star, text: "Receitas e recheios mais vendidos da operação." },
    { icon: Megaphone, text: "Estratégias de divulgação para vender todos os finais de semana." },
    { icon: Truck, text: "Passo a passo para estruturar um delivery de pipoca." },
    { icon: TrendingUp, text: "Atualizações constantes conforme a operação evolui." }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
            O que você recebe ao se inscrever:
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Agora, pela primeira vez, estou mostrando todo o passo a passo: produção, fornecedores, marketing, vendas, delivery e gestão para você construir o seu próprio negócio.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 w-full hidden lg:block">
            <div className="aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white bg-brand-cream">
              <img 
                src="https://lh3.googleusercontent.com/d/1mgOpy-dxMMiZ7K44cbzozUYWaiwa1I9a" 
                alt="Pipocas Vício de Pipoca" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/50 z-10">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Hn2s-4QKnsXKeKgurl1YfUgYR8EFU5c4" 
                  alt="Vício de Pipoca Logo" 
                  className="h-10 md:h-12 w-auto object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-[1.5] w-full">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {benefits.map((item, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden bg-gradient-to-br from-white via-brand-cream to-[#FFF6E9] p-3.5 sm:p-5 md:p-6 rounded-2xl border border-white/80 shadow-[0_10px_25px_-5px_rgba(247,201,72,0.15),0_4px_10px_-2px_rgba(0,0,0,0.03),inset_0_1.5px_1px_rgba(255,255,255,1)] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-3 md:gap-4 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(233,30,99,0.18),inset_0_1.5px_1px_rgba(255,255,255,1)] hover:border-brand-pink/40 transition-all duration-300 group"
                >
                  {/* Glossy laminated sheen overlay */}
                  <div className="absolute -top-12 -left-12 w-28 h-28 bg-gradient-to-br from-white/90 via-white/40 to-transparent rounded-full blur-md pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="bg-gradient-to-br from-brand-pink/15 via-brand-pink/10 to-brand-yellow/20 p-2.5 md:p-3.5 rounded-xl md:rounded-2xl shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_6px_rgba(233,30,99,0.1)] border border-brand-pink/20 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-pink drop-shadow-[0_1px_2px_rgba(233,30,99,0.3)]" />
                  </div>
                  
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base leading-snug md:leading-relaxed relative z-10">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
