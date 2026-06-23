import { useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';

export default function SecaoMensagens({ mensagens, aoEnviarSucesso }) {
    const [remetente, setRemetente] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [statusMsg, setStatusMsg] = useState('');

    const lidarComEnvio = async (e) => {
        e.preventDefault();
        if (!remetente.trim() || !mensagem.trim()) return;

        setEnviando(true);
        setStatusMsg('');

        // Captura automática da data atual
        const hoje = new Date();
        const year = hoje.getFullYear();
        const month = hoje.getMonth() + 1; // getMonth() vai de 0 a 11
        const day = hoje.getDate();

        try {
            const { error } = await supabase
                .from('Mensagens')
                .insert([{ remetente, mensagem, year, month, day }]);

            if (error) throw error;

            setRemetente('');
            setMensagem('');
            setStatusMsg('✨ Mensagem guardada no refúgio!');

            // Recarrega a lista de mensagens na tela
            if (aoEnviarSucesso) aoEnviarSucesso();
        } catch (err) {
            setStatusMsg('❌ Não foi possível enviar: ' + err.message);
        } finally {
            setEnviando(false);
        }
    };

    return (
        <section className="mt-24 border-t border-dream-lavender/10 pt-16">
            <div className="max-w-2xl mx-auto">
                {/* Título da Seção */}
                <div className="text-center mb-10">
                    <h2 className="font-display text-3xl text-dream-lavender italic drop-shadow-[0_0_10px_rgba(184,169,224,0.2)]">
                        Deixe uma mensagem para mim
                    </h2>
                    <p className="text-xs text-dream-cyan font-mono mt-2 tracking-widest uppercase">
                        sinais do mundo desperto ✦
                    </p>
                </div>

                {/* Formulário */}
                <form
                    onSubmit={lidarComEnvio}
                    className="space-y-4 bg-[#121225]/40 border border-dream-lavender/10 p-6 rounded-2xl mb-12">
                    <div>
                        <label className="block text-xs font-mono text-dream-lavender mb-2 uppercase tracking-wider">
                            Seu Nome / Remetente
                        </label>
                        <input
                            type="text"
                            value={remetente}
                            onChange={(e) => setRemetente(e.target.value)}
                            placeholder="Como quer se identificar?"
                            required
                            className="w-full bg-dream-dark/60 border border-dream-lavender/20 rounded-xl px-4 py-2.5 text-sm text-dream-moonlight focus:outline-none focus:border-dream-cyan/50 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-dream-lavender mb-2 uppercase tracking-wider">
                            Sua Mensagem
                        </label>
                        <textarea
                            rows="4"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder="Escreva algo do fundo do seu coração..."
                            required
                            className="w-full bg-dream-dark/60 border border-dream-lavender/20 rounded-xl px-4 py-2.5 text-sm text-dream-moonlight focus:outline-none focus:border-dream-cyan/50 transition-colors resize-none"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-mono text-dream-pink/80">{statusMsg}</span>
                        <button
                            type="submit"
                            disabled={enviando}
                            className="px-6 py-2 bg-gradient-to-r from-dream-lavender/20 to-dream-pink/20 hover:from-dream-lavender/30 hover:to-dream-pink/30 text-dream-moonlight border border-dream-lavender/30 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 disabled:opacity-50">
                            {enviando ? 'Enviando...' : 'Enviar Sinal ✦'}
                        </button>
                    </div>
                </form>

                {/* Lista de Mensagens Recebidas */}
                <div className="space-y-4">
                    <h3 className="text-xs font-mono text-dream-cyan uppercase tracking-widest mb-4">
                        ✦ Eco das Mensagens ({mensagens.length})
                    </h3>

                    {mensagens.length === 0 ? (
                        <p className="text-xs italic text-dream-lavender/40 text-center py-6">
                            O mural de ecos está silencioso por enquanto...
                        </p>
                    ) : (
                        mensagens.map((msg) => (
                            <div
                                key={msg.id}
                                className="bg-[#131326] border border-dream-lavender/10 rounded-xl p-5 transition-all hover:border-dream-pink/20">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-display text-base text-dream-pink font-medium">
                                        {msg.remetente}
                                    </span>
                                    {/* Exibição formatada e tratada dos atributos separados */}
                                    <span className="text-[10px] font-mono text-dream-lavender/40">
                                        {String(msg.day).padStart(2, '0')}/
                                        {String(msg.month).padStart(2, '0')}/{msg.year}
                                    </span>
                                </div>
                                <p className="text-sm text-dream-moonlight/90 leading-relaxed whitespace-pre-line">
                                    {msg.mensagem}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
