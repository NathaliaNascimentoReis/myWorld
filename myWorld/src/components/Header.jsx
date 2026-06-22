export default function Header() {
    // Configuração das estrelas com posições e velocidades variadas
    const estrelas = [
        { top: '15%', left: '10%', size: 'w-1 h-1', anim: 'animate-float-slow' },
        { top: '30%', left: '25%', size: 'w-2 h-2', anim: 'animate-float-medium' },
        { top: '75%', left: '15%', size: 'w-1.5 h-1.5', anim: 'animate-float-fast' },
        { top: '20%', left: '75%', size: 'w-2 h-2', anim: 'animate-float-slow' },
        { top: '65%', left: '85%', size: 'w-1 h-1', anim: 'animate-float-medium' },
        { top: '40%', left: '90%', size: 'w-1.5 h-1.5', anim: 'animate-float-fast' },
        { top: '50%', left: '50%', size: 'w-1 h-1', anim: 'animate-float-slow' },
    ];

    return (
        <header className="relative w-full py-20 px-6 overflow-hidden border-b border-dream-lavender/10 bg-gradient-to-b from-[#06060c] to-dream-dark">
            {/* Brilho de fundo etéreo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,169,224,0.05),transparent_60%)] pointer-events-none animate-pulse-soft" />

            {/* Camada de Estrelas Animadas */}
            {estrelas.map((estrela, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full bg-dream-cyan shadow-[0_0_10px_#7ecef4] ${estrela.size} ${estrela.anim}`}
                    style={{ top: estrela.top, left: estrela.left }}
                />
            ))}

            {/* Identidade do Cabeçalho */}
            <div className="max-w-4xl mx-auto text-center relative z-10 select-none">
                <h2 className="font-display italic text-dream-lavender text-xl tracking-[0.4em] uppercase mb-3 drop-shadow-[0_2px_10px_rgba(184,169,224,0.2)]">
                    M y W o r l d
                </h2>
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-dream-pink/40 to-transparent mx-auto" />
            </div>
        </header>
    );
}
