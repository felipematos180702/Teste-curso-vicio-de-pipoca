export function AboutSection() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
                <div className="flex-1 w-full relative">
                    <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden bg-brand-dark relative shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                            alt="Sara Camile" 
                            className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <h3 className="font-display font-bold text-3xl md:text-4xl mb-1">Sara Camile</h3>
                                <p className="font-medium text-brand-yellow text-base md:text-lg">Criadora do Método Vício de Pipoca</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1">
                    <h2 className="text-2xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
                        "Eu faturei mais de <span className="text-brand-pink">R$ 70.000</span> no primeiro mês."
                    </h2>
                    
                    <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                        <p>
                            Eu não comecei com uma cozinha perfeita, nem com equipamentos profissionais e muito menos com dinheiro sobrando. Eu morava em um apartamento de 45m² e só tinha uma vontade: <strong>mudar minha situação financeira.</strong>
                        </p>
                        <p>
                            O segredo não é só ter uma pipoca boa. É saber o processo, a montagem e, principalmente, <strong>saber vender.</strong>
                        </p>
                    </div>
                    
                    <div className="mt-8 md:mt-10 bg-brand-yellow/10 p-6 md:p-8 rounded-2xl border-l-8 border-brand-yellow relative">
                        <p className="font-display font-medium text-xl md:text-2xl italic text-brand-dark">
                            "O mais importante não é ter estrutura... é começar com o que você tem."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
