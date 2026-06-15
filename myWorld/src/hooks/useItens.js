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
                setItens(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { itens, loading, error };
}
