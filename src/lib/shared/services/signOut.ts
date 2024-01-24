import { logout, supabase } from '$lib/shared';
import { navigate } from 'svelte-navigator';

export const signOut = async (): Promise<void> => {
  await supabase.auth.signOut();
  logout();
  navigate('/auth/login');
};
