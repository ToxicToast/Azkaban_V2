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
import { AppDispatch, useAppSelector } from '../store';
import { setLogout } from './auth.slice';
import { useLoginUserMutation, useRegisterUserMutation } from './auth.api';

export function useAuthState() {
  const dispatch = useDispatch<AppDispatch>();

  const [loginUserTrigger] = useLoginUserMutation();
  const [registerUserTrigger] = useRegisterUserMutation();

  const email = useAppSelector(selectAuthEmail);
  const name = useAppSelector(selectAuthName);
  const username = useAppSelector(selectAuthUsername);
  const groups = useAppSelector(selectAuthGroups);
  const token = useAppSelector(selectAuthToken);
  const isAdmin = useAppSelector(selectAuthIsAdmin);
  const isAuth = useAppSelector(selectAuthIsAuth);
  const initials = useAppSelector(selectAuthUserInitials);

  const loginUser = useCallback(
    (email: string, password: string) => {
      loginUserTrigger({ email, password });
    },
    [loginUserTrigger],
  );

  const registerUser = useCallback(
    (email: string, password: string) => {
      registerUserTrigger({ email, password });
    },
    [loginUserTrigger],
  );

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
    registerUser,
    loginUser,
    logoutUser,
  };
}
