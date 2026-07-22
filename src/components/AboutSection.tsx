import { User } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="py-12 md:py-24 px-4 md:px-6 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
                <div className="flex-1 w-full relative">
                    <div className="aspect-[4/5] max-w-[300px] md:max-w-md mx-auto rounded-3xl overflow-hidden bg-brand-dark relative shadow-2xl flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-white/20">
                        <User className="w-16 h-16 text-white/30 mb-2" />
                        <span className="text-white/50 text-xs md:text-sm font-medium mb-12">Espaço para foto da produtora</span>
                        
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent flex items-end p-5 md:p-8 text-left">
                            <div className="text-white">
                                <h3 className="font-display font-bold text-2xl md:text-4xl mb-1">Sara Camile</h3>
                                <p className="font-medium text-brand-yellow text-sm md:text-lg">Criadora do Método Vício de Pipoca</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1">
                    <h2 className="text-xl md:text-5xl font-display font-bold mb-5 md:mb-8 leading-tight">
                        "Eu faturei mais de <span className="text-brand-pink">R$ 70.000</span> no primeiro mês."
                    </h2>
                    
                    <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-gray-700 leading-relaxed font-medium">
                        <p>
                            Eu não comecei com uma cozinha perfeita, nem com equipamentos profissionais e muito menos com dinheiro sobrando. Eu morava em um apartamento de 45m² e só tinha uma vontade: <strong>mudar minha situação financeira.</strong>
                        </p>
                        <p>
                            O segredo não é só ter uma pipoca boa. É saber o processo, a montagem e, principalmente, <strong>saber vender.</strong>
                        </p>
                    </div>
                    
                    <div className="mt-6 md:mt-10 bg-brand-yellow/10 p-4 md:p-8 rounded-2xl border-l-6 md:border-l-8 border-brand-yellow relative">
                        <p className="font-display font-medium text-base md:text-2xl italic text-brand-dark">
                            "O mais importante não é ter estrutura... é começar com o que você tem."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
