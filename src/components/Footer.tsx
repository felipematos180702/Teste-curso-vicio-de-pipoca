import { Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-brand-dark text-gray-400 py-10 md:py-16 px-4 md:px-6 text-center text-xs md:text-sm">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
                <img 
                    src="https://lh3.googleusercontent.com/d/1Hn2s-4QKnsXKeKgurl1YfUgYR8EFU5c4" 
                    alt="Vício de Pipoca" 
                    className="h-16 md:h-24 object-contain"
                />

                <a 
                    href="https://instagram.com/viciodepipoca_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-yellow hover:text-white font-semibold transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-brand-yellow/20 text-sm md:text-base"
                >
                    <Instagram className="w-5 h-5 text-brand-pink" />
                    <span>@viciodepipoca_</span>
                </a>

                <p className="max-w-2xl leading-relaxed">
                    Este site não faz parte do site do Facebook ou da Meta Platforms, Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial independente da Meta Platforms, Inc.
                </p>
                <div className="w-full h-px bg-white/10 my-2 md:my-4"></div>
                <p className="font-medium">&copy; {new Date().getFullYear()} Vício de Pipoca. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
