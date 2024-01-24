import { supabase } from '$lib/shared';

export const getInitialSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.user ?? null;
};
