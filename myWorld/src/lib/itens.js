import { supabase } from './supabaseClient';

export const getIdeias = async () => {
    const { data, error } = await supabase
        .from('itens')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
};
