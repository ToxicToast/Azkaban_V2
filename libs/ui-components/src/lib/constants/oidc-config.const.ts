import { AuthProviderProps } from 'react-oidc-context';

export const oidcConfig = {
  authority: process.env.NX_AUTHENTIK_AUTHORITY,
  client_id: process.env.NX_AUTHENTIK_CLIENT_ID,
  client_secret: process.env.NX_AUTHENTIK_CLIENT_SECRET,
  redirect_uri: process.env.NX_AUTHENTIK_REDIRECT_URI,
  scope: 'openid profile email',
  loadUserInfo: true,
} as AuthProviderProps;

console.error('oidcConfig', oidcConfig);
console.error('process.env', process.env);
