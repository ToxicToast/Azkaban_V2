import { Authentication } from './authentication.interface';

export interface Option {
  authentication: Authentication;
  channels: Array<string>;
}
