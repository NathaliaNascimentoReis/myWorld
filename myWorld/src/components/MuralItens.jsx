import { useItens } from '../hooks/useItens.js';

export default function MuralItens() {
    const { itens, loading, error } = useItens();

    if (loading)
        return (
            <p className="text-center text-dream-lavender/60 font-display italic animate-pulse">
                Carregando fragmentos do mundo...
            </p>
        );
    if (error)
        return (
            <p className="text-center text-dream-pink text-sm">Erro ao carregar itens: {error}</p>
        );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itens.length === 0 ? (
                <div className="col-span-full text-center py-8 border border-dashed border-dream-lavender/20 rounded-xl p-6">
                    <p className="text-dream-lavender/70 italic text-sm">
                        O mural ainda está vazio. Adicione itens na tabela 'itens' do seu Supabase!
                    </p>
                </div>
            ) : (
            itens.map((item) => (
                    <div
                        key={item.id}
                        className="group relative bg-[#131326] border border-dream-lavender/10 hover:border-dream-cyan/40 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_4px_20px_rgba(126,206,244,0.05)]">
                        <span className="text-xs font-mono tracking-wider uppercase text-dream-cyan bg-dream-cyan/10 px-2 py-0.5 rounded">
                            {item.categoria}
                        </span>
                        <h3 className="font-display text-xl text-dream-moonlight mt-3 mb-2 group-hover:text-dream-pink transition-colors">
                            {item.titulo}
                        </h3>
                        {item.descricao && (
                            <p className="text-dream-lavender text-sm leading-relaxed line-clamp-3">
                                {item.descricao}
                            </p>
                        )}
                        {item.link_externo && (
                            <a
                                href={item.link_externo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-4 text-xs text-dream-pink hover:text-dream-cyan underline transition-colors">
                                Saber mais →
                            </a>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
