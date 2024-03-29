import { useAuth } from 'react-oidc-context';
import { useCallback } from 'react';

export function useAzkabanAuth() {
  const { signoutRedirect, signinPopup } = useAuth();

  const signIn = useCallback(() => {
    signinPopup();
  }, [signinPopup]);

  const signOut = useCallback(() => {
    signoutRedirect();
  }, [signoutRedirect]);

  return {
    signIn,
    signOut,
  };
}
