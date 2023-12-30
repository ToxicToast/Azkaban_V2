import { useAuth } from 'react-oidc-context';
import { IdTokenClaims, User } from 'oidc-client-ts';
import { useCallback, useEffect } from 'react';
import { Nullable } from '@azkaban/shared';

type ProfileWithGroups = IdTokenClaims & { groups: Array<string> };

export function useAzkabanAuth() {
  const { user, signinPopup, signoutPopup, isAuthenticated, signoutSilent } =
    useAuth();

  const getUserObject = useCallback((): Nullable<User> => {
    return user ?? null;
  }, [user]);

  const hasInventoryGroup = useCallback((): boolean => {
    const userObject = getUserObject();
    const profileObject = (userObject?.profile as ProfileWithGroups) ?? null;
    return profileObject?.groups?.includes('inventory') ?? false;
  }, [getUserObject]);

  const getUserName = useCallback(() => {
    return user?.profile?.preferred_username ?? '';
  }, [user]);

  const getGivenName = useCallback(() => {
    return user?.profile?.given_name ?? '';
  }, [user]);

  const getUserInitials = useCallback(() => {
    const name = getGivenName();
    const nameArray = name.split(' ');
    const firstInitials = nameArray[0]?.charAt(0) ?? '';
    const lastInitials = nameArray[1]?.charAt(0) ?? '';
    return firstInitials + lastInitials;
  }, [getGivenName]);

  const signIn = useCallback(() => {
    signinPopup();
  }, [signinPopup]);

  const signOut = useCallback(() => {
    signoutPopup();
  }, [signoutPopup]);

  useEffect(() => {
    if (user && !hasInventoryGroup()) {
      signoutSilent();
    }
  }, [hasInventoryGroup, signoutSilent, user]);

  return {
    signIn,
    signOut,
    getUserObject,
    hasInventoryGroup,
    getUserName,
    getGivenName,
    getUserInitials,
    isAuthenticated,
  };
}
