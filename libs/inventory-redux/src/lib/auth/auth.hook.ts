import { useDispatch } from 'react-redux';
import {
  selectAuthEmail,
  selectAuthGroups,
  selectAuthIsAdmin,
  selectAuthIsAuth,
  selectAuthName,
  selectAuthToken,
  selectAuthUserInitials,
  selectAuthUsername,
} from './auth.selector';
import { useCallback } from 'react';
import { useAuth } from 'react-oidc-context';
import { AppDispatch, useAppSelector } from '../store';
import { setUser, setLogout } from './auth.slice';

export function useAuthState() {
  const { user } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  const email = useAppSelector(selectAuthEmail);
  const name = useAppSelector(selectAuthName);
  const username = useAppSelector(selectAuthUsername);
  const groups = useAppSelector(selectAuthGroups);
  const token = useAppSelector(selectAuthToken);
  const isAdmin = useAppSelector(selectAuthIsAdmin);
  const isAuth = useAppSelector(selectAuthIsAuth);
  const initials = useAppSelector(selectAuthUserInitials);

  const loginUser = useCallback(() => {
    const userObject = user ?? null;
    dispatch(
      setUser({
        profile: userObject?.profile ?? null,
        id_token: userObject?.id_token ?? null,
      }),
    );
  }, [user]);

  const logoutUser = useCallback(() => {
    dispatch(setLogout());
  }, []);

  return {
    email,
    name,
    username,
    groups,
    token,
    isAdmin,
    isAuth,
    initials,
    loginUser,
    logoutUser,
  };
}
