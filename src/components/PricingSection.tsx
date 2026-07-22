import { ShieldCheck, Check, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(10 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="bg-brand-pink/5 border border-brand-pink/20 rounded-2xl p-3 sm:p-4 mb-6 flex flex-row items-center justify-center gap-3 sm:gap-4 text-brand-pink flex-wrap">
            <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 shrink-0" />
                <span className="font-bold text-xs sm:text-sm uppercase tracking-wide">Esta oferta expira em:</span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-black tracking-tight flex items-center gap-1.5">
                <div className="bg-white px-2.5 py-1 rounded-lg shadow-sm border border-brand-pink/20 min-w-[3rem] sm:min-w-[3.25rem] text-center">
                    {minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-brand-pink/50 pb-0.5">:</span>
                <div className="bg-white px-2.5 py-1 rounded-lg shadow-sm border border-brand-pink/20 min-w-[3rem] sm:min-w-[3.25rem] text-center">
                    {seconds.toString().padStart(2, '0')}
                </div>
            </div>
        </div>
    );
}

export function PricingSection() {
    return (
        <section id="oferta" className="py-16 md:py-24 px-4 md:px-6 bg-brand-dark text-white relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-yellow to-transparent"></div>
            
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[22px] md:text-[29px] font-display font-bold mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-[#f5efef]">
                    Tenha acesso a todo o <span className="text-[#f5efef] font-extrabold underline decoration-brand-yellow decoration-2 underline-offset-4">método, bônus e comunidade</span> por um <span className="text-brand-yellow font-extrabold">valor especial de lançamento</span>.
                </h2>
                
                <div className="bg-white text-brand-dark rounded-3xl p-6 md:p-12 shadow-2xl relative max-w-lg mx-auto">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-pink text-white font-bold px-8 py-2.5 rounded-full text-sm uppercase tracking-widest shadow-lg whitespace-nowrap">
                        Oferta de Lançamento
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 mt-6">Curso Completo<br/>Vício de Pipoca</h3>
                    <p className="text-gray-500 mb-6 text-base">Acesso imediato a todas as aulas e bônus</p>
                    
                    <div className="mb-6 flex flex-col items-center justify-center">
                        <div className="text-gray-400 font-medium text-lg line-through mb-1">
                            De R$ 497,00
                        </div>
                        <div className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest mb-1">
                            Por apenas 12x de
                        </div>
                        <div className="flex items-baseline justify-center text-brand-pink mb-3">
                            <span className="text-2xl md:text-3xl font-bold mr-1.5">R$</span>
                            <span className="text-5xl md:text-[60px] font-display font-black leading-none tracking-tight">19,70</span>
                        </div>
                        <div className="text-base md:text-lg font-bold text-gray-700 bg-brand-pink/5 px-4 py-1.5 rounded-full border border-brand-pink/20">
                            ou <span className="text-brand-pink font-extrabold">R$ 197,00</span> à vista
                        </div>
                    </div>

                    <CountdownTimer />
                    
                    <div className="space-y-4 mb-10 text-left bg-gray-50 p-6 rounded-2xl">
                        {[
                            "Acesso imediato ao curso completo",
                            "Todos os bônus inclusos",
                            "Suporte na Comunidade VIP",
                            "Acesso às atualizações futuras"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
                                </div>
                                <span className="font-semibold text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                    
                    <a href="#" className="block w-full text-center bg-brand-pink hover:bg-brand-pink-dark text-white font-bold py-4 md:py-6 px-6 md:px-8 rounded-2xl text-xl md:text-2xl transition-all hover:scale-105 active:scale-95 cta-glow">
                        SIM! QUERO GARANTIR MINHA VAGA
                    </a>
                    
                    <p className="mt-6 text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-green-500" /> Plataforma 100% segura
                    </p>
                </div>
                
                <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto text-left">
                    <div className="w-16 h-16 shrink-0">
                        <ShieldCheck className="w-full h-full text-brand-yellow drop-shadow-xl" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h4 className="text-xl font-display font-bold mb-2">Garantia Incondicional de 7 Dias</h4>
                        <p className="text-sm text-gray-400 font-medium leading-relaxed">
                            Seu risco é zero. Você pode se inscrever agora, acessar todo o material e, se dentro de 7 dias você achar que o curso não é para você, basta nos enviar um e-mail que devolveremos 100% do seu dinheiro. Sem burocracia e continuamos amigas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
