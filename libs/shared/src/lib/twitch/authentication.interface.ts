import { Either, Optional } from '../types';

export interface Authentication {
  userId: Optional<string>;
  clientId: Optional<string>;
  clientSecret: Optional<string>;
  accessToken?: Optional<string>;
  refreshToken?: Optional<string>;
}
