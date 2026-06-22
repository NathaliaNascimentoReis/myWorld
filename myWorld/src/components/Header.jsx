export default function Header() {
    return (
        <header className="relative w-full py-16 px-6 overflow-hidden border-b border-[#b8a9e0]/10 bg-gradient-to-b from-[#06060c] to-[#0d0d1a]">
            {/* Sutil névoa de fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,169,224,0.03),transparent_70%)] pointer-events-none" />

            {/* Identidade Minimalista */}
            <div className="relative z-10 max-w-4xl mx-auto text-center select-none">
                <h2 className="font-display italic text-[#b8a9e0] text-2xl md:text-3xl tracking-[0.35em] uppercase mb-4 drop-shadow-[0_0_15px_rgba(184,169,224,0.3)]">
                    My World
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#e8a0bf]/40 to-transparent mx-auto" />
            </div>
        </header>
    );
}
