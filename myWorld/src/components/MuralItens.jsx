import { useState } from 'react';
import { useMural } from '../hooks/useMural';
import SecaoMensagens from './SecaoMensagens';
import ModalDetalhes from './ModalDetalhes';

export default function MuralItens() {
    const { dados, loading, error, atualizarMensagens } = useMural();
    const [elementoSelecionado, setElementoSelecionado] = useState(null);

    if (loading)
        return (
            <p className="text-center text-dream-lavender/60 font-display italic animate-pulse">
                Carregando fragmentos do seu mundo...
            </p>
        );

    if (error)
        return (
            <p className="text-center text-dream-pink text-sm">
                Erro ao conectar com as relíquias: {error}
            </p>
        );

    // Função auxiliar para renderizar o Card Resumido básico
    const renderCardResumido = (item, tipo, tituloCard, subInfo, desc) => (
        <div
            key={item.id}
            onClick={() => setElementoSelecionado({ ...item, tipo })}
            className="group relative bg-[#131326] border border-dream-lavender/10 hover:border-dream-cyan/40 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_4px_20px_rgba(126,206,244,0.05)] cursor-pointer"
        >
            {/* Exibe a foto se ela existir */}
            {(item.imagem || item.imagem_url) && (
                <div className="w-full h-40 overflow-hidden bg-dream-dark">
                    <img
                        src={item.imagem || item.imagem_url}
                        alt={tituloCard}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            <div className="p-5">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider uppercase text-dream-cyan">
                    <span>{subInfo}</span>
                </div>

                <h3 className="font-display text-lg text-dream-moonlight mt-2 mb-2 group-hover:text-dream-pink transition-colors line-clamp-1">
                    {tituloCard}
                </h3>

                {desc && (
                    <p className="text-dream-lavender text-xs leading-relaxed line-clamp-2">
                        {desc}
                    </p>
                )}

                <span className="inline-block mt-3 text-[10px] font-mono text-dream-pink/70 group-hover:text-dream-cyan transition-colors">
                    Clique para expandir →
                </span>
            </div>
        </div>
    );

    return (
        <div className="space-y-16">
            {/* 1. SEÇÃO DE ENTIDADES */}
            <section>
                <h3 className="text-sm font-mono text-dream-pink uppercase tracking-widest mb-6">
                    ✦ Entidades
                </h3>
                {dados.entidades.length === 0 ? (
                    <p className="text-xs italic text-dream-lavender/50">
                        Nenhuma entidade manifestada ainda.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dados.entidades.map((ent) =>
                            renderCardResumido(
                                ent,
                                'entidade',
                                ent.nome,
                                `Idade: ${ent.idade}`,
                                ent.descricao,
                            ),
                        )}
                    </div>
                )}
            </section>

            {/* 2. SEÇÃO DE OBRAS */}
            <section>
                <h3 className="text-sm font-mono text-dream-cyan uppercase tracking-widest mb-6">
                    ✦ Obras
                </h3>
                {dados.obras.length === 0 ? (
                    <p className="text-xs italic text-dream-lavender/50">
                        Nenhuma obra catalogada ainda.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dados.obras.map((obra) =>
                            renderCardResumido(
                                obra,
                                'obra',
                                obra.nome,
                                `${obra.ano_publicacao} • ${obra.categoria}`,
                                obra.descricao,
                            ),
                        )}
                    </div>
                )}
            </section>

            {/* 3. SEÇÃO DE ITENS */}
            <section>
                <h3 className="text-sm font-mono text-dream-lavender uppercase tracking-widest mb-6">
                    ✦ Itens gerais
                </h3>
                {dados.itens.length === 0 ? (
                    <p className="text-xs italic text-dream-lavender/50">
                        Nenhum item adicionado ao mural ainda.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {dados.itens.map((item) =>
                            renderCardResumido(
                                item,
                                'item',
                                item.titulo,
                                item.categoria,
                                item.descricao,
                            ),
                        )}
                    </div>
                )}
            </section>

            {/* Modal único controlado pelo clique de qualquer card */}
            <ModalDetalhes
                ativo={elementoSelecionado}
                aoFechar={() => setElementoSelecionado(null)}
            />

            {/* Seção única de Mensagens no final absoluto da página */}
            <SecaoMensagens mensagens={dados.mensagens} aoEnviarSucesso={atualizarMensagens} />
        </div>
    );
}
