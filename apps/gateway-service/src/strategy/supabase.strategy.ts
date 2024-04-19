import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { SupabaseAuthStrategy } from 'nestjs-supabase-auth-v2';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(
  SupabaseAuthStrategy,
  'azkabase',
) {
  constructor() {
    super({
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      supabaseOptions: {},
      supabaseJwtSecret: process.env.SUPABASE_JWT_SECRET,
      extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any): Promise<any> {
    await super.validate(payload);
  }

  authenticate(req) {
    super.authenticate(req);
  }
}