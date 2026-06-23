import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient.js';

export function useMural() {
    const [dados, setDados] = useState({ itens: [], obras: [], entidades: [], mensagens: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function atualizarMensagens() {
        try {
            const { data, error: err } = await supabase
                .from('Mensagens')
                .select('*')
                .order('id', { ascending: false }); // Traz as mais recentes primeiro

            if (err) throw err;
            setDados((prev) => ({ ...prev, mensagens: data || [] }));
        } catch (err) {
            console.error('Erro ao atualizar mensagens:', err.message);
        }
    }

    useEffect(() => {
        async function fetchTodosOsDados() {
            try {
                // Busca das 3 tabelas em paralelo para ser super rápido
                const [resItens, resObras, resEntidades, resMensagens] = await Promise.all([
                    supabase.from('Itens').select('*'),
                    supabase.from('Obras').select('*'),
                    supabase.from('Entidades').select('*'),
                    supabase.from('Mensagens').select('*').order('id', { ascending: false }),
                ]);

                if (resItens.error) throw resItens.error;
                if (resObras.error) throw resObras.error;
                if (resEntidades.error) throw resEntidades.error;
                if (resMensagens.error) throw resMensagens.error;

                setDados({
                    itens: resItens.data || [],
                    obras: resObras.data || [],
                    entidades: resEntidades.data || [],
                    mensagens: resMensagens.data || [],
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTodosOsDados();
    }, []);

    return { dados, loading, error, atualizarMensagens };
}
