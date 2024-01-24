import { Nullable } from '@azkaban/shared';

export interface AuthModel {
  email: Nullable<string>;
  name: Nullable<string>;
  username: Nullable<string>;
  groups: Array<string>;
  token: Nullable<string>;
  isAdmin: boolean;
  isAuth: boolean;
}
