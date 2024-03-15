import { AuthModel } from './auth.model';
import { Nullable } from '@azkaban/shared';
import { PayloadAction } from '@reduxjs/toolkit';
import { IdTokenClaims } from 'oidc-client-ts';

type ProfileWithGroups = IdTokenClaims & { groups: Array<string> };

export function setUserAction(
  state: AuthModel,
  action: PayloadAction<{
    profile: Nullable<IdTokenClaims>;
    id_token: Nullable<string>;
  }>,
) {
  const payload = action.payload;
  const profileObject = (payload?.profile as ProfileWithGroups) ?? null;
  state.email = profileObject?.email ?? null;
  state.name = profileObject?.given_name ?? null;
  state.username = profileObject?.preferred_username ?? null;
  state.groups = profileObject?.groups ?? [];
  state.token = payload?.id_token ?? null;
  state.isAdmin = profileObject?.groups?.includes('inventory-admin') ?? false;
  state.isAuth = profileObject?.groups?.includes('inventory') ?? false;
}

export function setLogoutAction(state: AuthModel) {
  state.email = null;
  state.name = null;
  state.username = null;
  state.groups = [];
  state.token = null;
  state.isAdmin = false;
  state.isAuth = false;
}
