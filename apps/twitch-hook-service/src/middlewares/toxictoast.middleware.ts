import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';
import { SupabaseBuilder } from '../utils/supabase.builder';

export class ToxictoastMiddleware {
  private readonly id = process.env.TWITCH_USER_ID;

  constructor(
    private readonly middleware: EventSubMiddleware,
    private readonly supabaseBuilder: SupabaseBuilder,
  ) {
    const builder = new MiddlewareBuilder(
      this.middleware,
      this.id,
      this.supabaseBuilder,
    );
    builder.apply();
  }
}
