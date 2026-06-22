import React from 'react';

export default function Header() {
    const estrelas = [
        { top: '15%', left: '8%', size: 'w-1 h-1', anim: 'animate-float-slow' },
        { top: '35%', left: '22%', size: 'w-2 h-2', anim: 'animate-float-medium' },
        { top: '70%', left: '14%', size: 'w-1.5 h-1.5', anim: 'animate-float-fast' },
        { top: '25%', left: '78%', size: 'w-2 h-2', anim: 'animate-float-slow' },
        { top: '60%', left: '88%', size: 'w-1 h-1', anim: 'animate-float-medium' },
        { top: '45%', left: '92%', size: 'w-1.5 h-1.5', anim: 'animate-float-fast' },
        { top: '55%', left: '48%', size: 'w-1 h-1', anim: 'animate-float-slow' },
    ];

    return (
        <header className="relative w-full py-20 px-6 overflow-hidden border-b border-dream-lavender/10 bg-gradient-to-b from-[#06060c] to-dream-dark">
            {/* Brilho de fundo etéreo (Efeito Nebulosa) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,169,224,0.06),transparent_65%)] pointer-events-none animate-pulse-soft" />

            {/* Camada de Estrelas Animadas */}
            {estrelas.map((estrela, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full bg-dream-cyan shadow-[0_0_10px_#7ecef4] ${estrela.size} ${estrela.anim}`}
                    style={{ top: estrela.top, left: estrela.left }}
                />
            ))}

            {/* Identidade do Cabeçalho */}
            <div className="relative z-10 max-w-4xl mx-auto text-center select-none">
                <h2 className="font-display italic text-dream-lavender text-2xl md:text-3xl tracking-[0.35em] uppercase mb-4 drop-shadow-[0_0_15px_rgba(184,169,224,0.35)]">
                    My World
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-dream-pink/40 to-transparent mx-auto" />
            </div>
        </header>
    );
}
