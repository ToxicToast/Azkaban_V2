import { useAuth } from 'react-oidc-context';
import { useCallback } from 'react';

export function useAzkabanAuth() {
  const { signinPopup, signoutSilent } = useAuth();

  const signIn = useCallback(() => {
    signinPopup();
  }, [signinPopup]);

  const signOut = useCallback(() => {
    signoutSilent();
  }, [signoutSilent]);

  return {
    signIn,
    signOut,
  };
}
