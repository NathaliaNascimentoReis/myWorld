export default function ModalDetalhes({ ativo, aoFechar }) {
    if (!ativo) return null;

    // Detecta o tipo para renderizar os campos certos
    const ehEntidade = ativo.tipo === 'entidade';
    const ehObra = ativo.tipo === 'obra';
    const ehItem = ativo.tipo === 'item';

    return (
        /* REFORÇADO: Fundo com sombra escura (Backdrop) ocupando 100% da viewport */
        <div
            className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
            onClick={aoFechar} // Fecha ao clicar no fundo escuro
        >
            {/* Card inteiro no meio da página */}
            <div
                className="bg-[#131326] border border-dream-lavender/20 rounded-2xl max-w-lg w-full overflow-hidden shadow-[0_0_40px_rgba(126,206,244,0.15)] relative max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do card
            >
                {/* Imagem do Card Completo */}
                {(ativo.imagem || ativo.imagem_url) && (
                    <div className="w-full h-56 relative overflow-hidden bg-dream-dark flex items-center justify-center">
                        <img
                            src={ativo.imagem || ativo.imagem_url}
                            alt={ativo.nome || ativo.titulo}
                            className="w-full h-full object-cover"
                        />
                        <span className="absolute top-3 right-3 text-[10px] font-mono tracking-wider uppercase bg-dream-dark/80 text-dream-cyan px-2 py-0.5 rounded border border-dream-cyan/20">
                            {ativo.tipo}
                        </span>
                    </div>
                )}

                {/* Conteúdo das Informações Completas */}
                <div className="p-6 overflow-y-auto flex-1">
                    {/* Categoria ou Idade/Ano */}
                    <div className="flex gap-2 items-center text-xs font-mono text-dream-cyan mb-2">
                        {ehEntidade && <span>Idade: {ativo.idade}</span>}
                        {ehObra && (
                            <span>
                                Ano: {ativo.ano_publicacao} • {ativo.categoria}
                            </span>
                        )}
                        {ehItem && <span>{ativo.categoria}</span>}
                    </div>

                    {/* Título / Nome */}
                    <h3 className="font-display text-2xl text-dream-moonlight mb-4">
                        {ativo.nome || ativo.titulo}
                    </h3>

                    {/* Descrição Completa */}
                    <p className="text-dream-lavender text-sm leading-relaxed whitespace-pre-line">
                        {ativo.descricao}
                    </p>
                </div>

                {/* Botão de Fechar no rodapé do card */}
                <div className="p-4 bg-dream-dark/40 border-t border-dream-lavender/10 text-right">
                    <button
                        onClick={aoFechar}
                        className="px-4 py-1.5 rounded-lg text-xs font-mono uppercase bg-dream-pink/20 text-dream-pink hover:bg-dream-pink/30 transition-colors">
                        Fechar ✦
                    </button>
                </div>
            </div>
        </div>
    );
}
