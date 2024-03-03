import { useAuth } from 'react-oidc-context';
import { useCallback } from 'react';

export function useAzkabanAuth() {
  const { signoutRedirect, signinRedirect } = useAuth();

  const signIn = useCallback(() => {
    signinRedirect();
  }, [signinRedirect]);

  const signOut = useCallback(() => {
    signoutRedirect();
  }, [signoutRedirect]);

  return {
    signIn,
    signOut,
  };
}
