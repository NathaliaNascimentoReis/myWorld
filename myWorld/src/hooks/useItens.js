import { useState, useEffect } from 'react';
import { getItens } from '../lib/itens.js';

export function useItens() {
    const [itens, setItens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getItens();
                setItens(data); // O setState só pode ser chamado de forma segura aqui
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []); // ◄--- ESSENCIAL: Garanta que este colchete está vazio! Se houver algo dentro, causa o loop.

    return { itens, loading, error };
}
