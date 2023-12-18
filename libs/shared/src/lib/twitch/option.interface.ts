import { Authentication } from './authentication.interface';
import { Optional } from '../types';

export interface Option {
  authentication: Authentication;
  channels: Array<string>;
  ssl?: Optional<{
    cert: string;
    key: string;
    secret: string;
  }>;
}
