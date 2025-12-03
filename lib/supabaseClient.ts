
import { createClient } from '@supabase/supabase-js';

// SUBSTITUA COM SUAS CHAVES DO SUPABASE
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'SUA_URL_DO_SUPABASE_AQUI';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'SUA_KEY_ANONIMA_AQUI';

// Só cria o cliente se as chaves existirem (para não quebrar o app se você ainda não configurou)
export const supabase = (SUPABASE_URL !== 'SUA_URL_DO_SUPABASE_AQUI') 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
  : null;
