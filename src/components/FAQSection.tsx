import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
    const faqs = [
        {
            q: "Por quanto tempo terei acesso ao curso?",
            a: "Você terá acesso por 1 ano inteiro ao curso, incluindo todas as atualizações e novas aulas adicionadas nesse período (Curso Vivo)."
        },
        {
            q: "Preciso ter equipamentos profissionais para começar?",
            a: "Não! O Método foi desenhado justamente para quem quer começar de casa, usando os utensílios básicos que você já tem na sua cozinha. O segredo está no processo."
        },
        {
            q: "Como recebo o acesso ao curso?",
            a: "Assim que o pagamento for confirmado, você receberá um e-mail com seus dados de login e senha para acessar a plataforma de membros imediatamente."
        },
        {
            q: "O pagamento é seguro?",
            a: "Sim, utilizamos uma das maiores plataformas de pagamento do Brasil, que garante total segurança dos seus dados."
        },
        {
            q: "Sou iniciante e nunca fiz pipoca gourmet, esse curso é para mim?",
            a: "Com certeza. O curso vai desde os primeiros passos (base de tudo) até as estratégias avançadas de vendas e delivery. Você aprenderá tudo do zero."
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl md:text-5xl font-display font-bold mb-4">Perguntas Frequentes</h2>
                    <p className="text-base md:text-lg text-gray-600">Tire suas últimas dúvidas antes de começar</p>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { key?: React.Key, question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-brand-cream hover:border-brand-yellow/50 transition-colors">
            <button 
                className="w-full px-4 md:px-6 py-4 md:py-6 text-left font-bold text-base md:text-xl flex justify-between items-center focus:outline-none text-brand-dark"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="pr-8">{question}</span>
                <ChevronDown className={`w-6 h-6 text-brand-pink shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div 
                className={`px-4 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 md:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}
