import { useCallback } from 'react';

export function useAzkabanAuth() {
  const signIn = useCallback((email: string, password: string) => {
    console.error(email, password);
  }, []);

  const signOut = useCallback(() => {}, []);

  return {
    signIn,
    signOut,
  };
}
