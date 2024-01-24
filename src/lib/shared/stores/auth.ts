import { getInitialSession } from '$lib/shared';
import type { User } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export interface AuthStore {
  isAuthenticated: boolean;
  user: User | null;
}

const initialAuthStatus = {
  isAuthenticated: false,
  user: null,
};

export const auth = writable<AuthStore>(initialAuthStatus);

export const initializeSession = async () => {
  getInitialSession().then((user) => {
    authenticate(user);
  });
};

export function authenticate(user: User | null) {
  const updatedAuthStatus = {
    isAuthenticated: user !== null && user !== undefined,
    user,
  };

  auth.set(updatedAuthStatus);
}

export function logout() {
  const updatedAuthStatus = {
    isAuthenticated: false,
    user: null,
  };
  auth.set(updatedAuthStatus);
}
