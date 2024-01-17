import { RootState } from '../store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { Nullable } from '@azkaban/shared';

const selectAuth = (state: RootState) => state.auth;

export const selectAuthEmail = createDraftSafeSelector(
  selectAuth,
  (auth) => auth.email
);

export const selectAuthName = createDraftSafeSelector(
  selectAuth,
  (auth) => auth.name
);

export const selectAuthUsername = createDraftSafeSelector(
  selectAuth,
  (auth) => auth.username
);

export const selectAuthGroups = createDraftSafeSelector(
  selectAuth,
  (auth) => auth.groups
);

export const selectAuthToken = createDraftSafeSelector(
  selectAuth,
  (auth) => auth.token
);

export const selectAuthIsAdmin = createDraftSafeSelector(
  selectAuth,
  (auth) => auth.isAdmin
);

export const selectAuthIsAuth = createDraftSafeSelector(
  selectAuth,
  (auth) => auth.isAuth
);

export const selectAuthUserInitials = createDraftSafeSelector(
  selectAuth,
  selectAuthUsername,
  (_, name: Nullable<string>) => {
    const nameArray = name?.split(' ') ?? [];
    const firstInitials = nameArray[0]?.charAt(0) ?? '';
    const lastInitials = nameArray[1]?.charAt(0) ?? '';
    return firstInitials + lastInitials;
  }
);
