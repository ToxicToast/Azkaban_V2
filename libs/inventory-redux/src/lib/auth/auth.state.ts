import { AuthModel } from './auth.model';

export const authState: AuthModel = {
  email: null,
  name: null,
  username: null,
  groups: [],
  token: null,
  isAdmin: false,
  isAuth: false,
};
