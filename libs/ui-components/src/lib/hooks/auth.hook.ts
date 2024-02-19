import { useAuth } from 'react-oidc-context';
import { useCallback } from 'react';

export function useAzkabanAuth() {
  const { signoutSilent, signinRedirect } = useAuth();

  const signIn = useCallback(() => {
    signinRedirect();
  }, [signinRedirect]);

  const signOut = useCallback(() => {
    signoutSilent();
  }, [signoutSilent]);

  return {
    signIn,
    signOut,
  };
}
