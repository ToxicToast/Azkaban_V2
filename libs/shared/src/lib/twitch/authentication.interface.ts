import { Optional } from '../types';

export interface Authentication {
  userId: Optional<string>;
  clientId: Optional<string>;
  clientSecret: Optional<string>;
  acessToken?: Optional<string>;
  refreshToken?: Optional<string>;
}
