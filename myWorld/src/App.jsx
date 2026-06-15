import Header from './components/Header';
import MuralItens from './components/MuralItens.jsx';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col selection:bg-dream-pink/30">
            {/* Cabeçalho Dreamcore com Estrelas */}
            <Header />

            <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12">
                {/* Citação da Peridot logo abaixo do cabeçalho */}
                <section className="text-center mb-16 max-w-2xl mx-auto">
                    <blockquote className="font-display italic text-xl md:text-2xl text-dream-moonlight leading-relaxed bg-gradient-to-r from-dream-pink/10 via-transparent to-dream-cyan/10 p-6 rounded-2xl border border-dream-lavender/5">
                        "{' '}
                        <span className="bg-gradient-to-r from-dream-moonlight to-dream-cyan bg-clip-text text-transparent">
                            Posso dizer com certeza que há coisas neste planeta que valem a pena
                            proteger!
                        </span>{' '}
                        "
                    </blockquote>
                    <cite className="block mt-3 text-xs tracking-widest uppercase text-dream-cyan font-mono not-italic">
                        — Peridot
                    </cite>
                </section>

                {/* Título Principal */}
                <h1 className="font-display text-4xl md:text-5xl text-center font-bold tracking-tight mb-8 bg-gradient-to-b from-dream-moonlight to-dream-lavender bg-clip-text text-transparent">
                    Bem vindo ao Meu Mundo
                </h1>

                {/* Primeiro Mural: Apresentação da Nathália */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-[#121225] to-[#1a1a36] border border-dream-lavender/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-dream-pink/5 rounded-full blur-3xl pointer-events-none group-hover:bg-dream-cyan/10 transition-all duration-700" />
                        <p className="text-dream-moonlight/90 text-lg md:text-xl leading-relaxed text-center font-light max-w-3xl mx-auto">
                            Esse site foi desenvolvido por{' '}
                            <span className="text-dream-pink font-normal">
                                Nathália Nascimento Reis
                            </span>{' '}
                            a fim de registrar todas as coisas que gosto e tenho interesse, para me
                            lembrar das coisas que fazem a vida valer a pena.
                        </p>
                    </div>
                </section>

                {/* Segundo Mural: Grid dinâmico vindo do Supabase */}
                <section>
                    <div className="flex items-center justify-between mb-8 border-b border-dream-lavender/10 pb-4">
                        <h2 className="font-display text-2xl text-dream-lavender italic">
                            Minhas Coleções & Relíquias
                        </h2>
                        <span className="text-xs text-dream-cyan/70 font-mono">
                            obras e mídias ✦
                        </span>
                    </div>

                    <MuralItens />
                </section>
            </main>

            {/* Rodapé simples combinando com a estética */}
            <footer className="py-8 text-center text-xs text-dream-lavender/40 font-mono tracking-wide mt-20 border-t border-dream-lavender/5">
                &copy; {new Date().getFullYear()} • Feito com ✨ por Nathália
            </footer>
        </div>
    );
}
