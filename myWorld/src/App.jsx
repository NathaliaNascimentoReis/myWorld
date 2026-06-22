import Header from './components/Header';
import MuralItens from './components/MuralItens.jsx';

export default function App() {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-dream-dark text-dream-moonlight selection:bg-dream-pink/30">
            {/* Cabeçalho Dreamcore com Estrelas */}
            <Header />

            <main className="flex-1 w-full max-w-5xl px-6 py-12 mx-auto">
                {/* Citação da Peridot */}
                <section className="max-w-2xl mx-auto mb-16 text-center">
                    <blockquote className="font-display italic text-xl md:text-2xl text-dream-moonlight leading-relaxed bg-gradient-to-br from-dream-pink/10 via-dream-dark to-dream-cyan/10 p-6 rounded-2xl border border-dream-lavender/20 shadow-[0_0_20px_rgba(184,169,224,0.05)]">
                        "{' '}
                        <span className="text-dream-moonlight drop-shadow-[0_2px_8px_rgba(240,238,255,0.2)]">
                            Posso dizer com certeza que há coisas neste planeta que valem a pena
                            proteger!
                        </span>{' '}
                        "
                    </blockquote>
                    <cite className="block mt-3 font-mono text-xs not-italic font-medium tracking-widest uppercase text-dream-cyan">
                        — Peridot
                    </cite>
                </section>

                {/* Título Principal com Brilho Visível */}
                <h1 className="font-display text-4xl md:text-5xl text-center font-bold tracking-tight mb-12 text-dream-moonlight drop-shadow-[0_2px_15px_rgba(184,169,224,0.4)]">
                    Bem vindo ao <span className="text-dream-lavender">Meu Mundo</span>
                </h1>

                {/* Primeiro Mural: Apresentação da Nathália */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-[#121225] to-[#171730] border border-dream-lavender/20 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                        {/* Detalhe de luz rosa/ciano nos cantos */}
                        <div className="absolute w-40 h-40 transition-all duration-700 rounded-full pointer-events-none -top-10 -right-10 bg-dream-pink/10 blur-3xl group-hover:bg-dream-cyan/15" />
                        <div className="absolute w-40 h-40 rounded-full pointer-events-none -bottom-10 -left-10 bg-dream-cyan/5 blur-3xl" />

                        <p className="max-w-3xl mx-auto text-lg font-light leading-relaxed text-center text-dream-moonlight/95 md:text-xl">
                            Esse espaço foi desenvolvido por mim,{' '}
                            <span className="text-dream-pink font-normal drop-shadow-[0_0_8px_rgba(232,160,191,0.4)]">
                                Nathália Nascimento Reis,
                            </span>{' '}
                            como um refúgio para guardar meus maiores encantos e interesses. Uma
                            coleção afetiva para me recordar, todos os dias, das pequenas e grandes
                            coisas que fazem a vida valer a pena.
                        </p>
                    </div>
                </section>

                {/* Segundo Mural: Grid dinâmico vindo do Supabase */}
                <section>
                    <div className="flex items-center justify-between pb-4 mb-8 border-b border-dream-lavender/20">
                        <h2 className="font-display text-2xl text-dream-lavender italic drop-shadow-[0_0_10px_rgba(184,169,224,0.2)]">
                            Minhas Coleções & Relíquias
                        </h2>
                        <span className="font-mono text-xs font-medium tracking-wider text-dream-cyan">
                            obras e mídias ✦
                        </span>
                    </div>

                    <MuralItens />
                </section>
            </main>

            {/* Rodapé */}
            <footer className="py-8 mt-20 font-mono text-xs tracking-wide text-center border-t text-dream-lavender/50 border-dream-lavender/10">
                &copy; {new Date().getFullYear()} • Feito com{' '}
                <span className="text-dream-pink">✨</span> por Nathália
            </footer>
        </div>
    );
}
