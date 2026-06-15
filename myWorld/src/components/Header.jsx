export default function Header() {
    // Gerando posições aleatórias para as estrelas decorativas
    const stars = [
        { top: '10%', left: '15%', size: 'w-1 h-1', anim: 'animate-float-slow' },
        { top: '25%', left: '80%', size: 'w-2 h-2', anim: 'animate-float-medium' },
        { top: '70%', left: '20%', size: 'w-1.5 h-1.5', anim: 'animate-float-fast' },
        { top: '60%', left: '85%', size: 'w-1 h-1', anim: 'animate-float-slow' },
        { top: '40%', left: '50%', size: 'w-2 h-2', anim: 'animate-float-medium' },
    ];

    return (
        <header className="relative w-full py-12 px-6 overflow-hidden border-b border-dream-lavender/10 bg-gradient-to-b from-[#06060c] to-dream-dark">
            {/* Estrelas Animadas */}
            {stars.map((star, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full bg-dream-cyan shadow-[0_0_8px_#7ecef4] ${star.size} ${star.anim}`}
                    style={{ top: star.top, left: star.left }}
                />
            ))}

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="font-display italic text-dream-lavender text-lg tracking-widest uppercase mb-2">
                    M y W o r l d
                </h2>
                <div className="w-16 h-[1px] bg-dream-pink/40 mx-auto my-4" />
            </div>
        </header>
    );
}
