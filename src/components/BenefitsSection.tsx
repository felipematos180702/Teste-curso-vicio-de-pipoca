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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Agora, pela primeira vez, estou mostrando todo o passo a passo: produção, fornecedores, marketing, vendas, delivery e gestão para você construir o seu próprio negócio.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 w-full">
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
                <div key={index} className="bg-brand-cream p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border border-brand-yellow/30 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 hover:shadow-lg transition-shadow">
                  <div className="bg-brand-pink/10 p-2 md:p-3 rounded-lg md:rounded-xl shrink-0">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-pink" />
                  </div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base leading-snug md:leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
