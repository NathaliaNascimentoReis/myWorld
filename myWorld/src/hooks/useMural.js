import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient.js'; // Ajuste o caminho conforme seu projeto

export function useMural() {
    const [dados, setDados] = useState({ itens: [], obras: [], entidades: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTodosOsDados() {
            try {
                // Busca das 3 tabelas em paralelo para ser super rápido
                const [resItens, resObras, resEntidades] = await Promise.all([
                    supabase.from('Itens').select('*'),
                    supabase.from('Obras').select('*'),
                    supabase.from('Entidades').select('*'),
                ]);

                if (resItens.error) throw resItens.error;
                if (resObras.error) throw resObras.error;
                if (resEntidades.error) throw resEntidades.error;

                setDados({
                    itens: resItens.data || [],
                    obras: resObras.data || [],
                    entidades: resEntidades.data || [],
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTodosOsDados();
    }, []);

    return { dados, loading, error };
}
