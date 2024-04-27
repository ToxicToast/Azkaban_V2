import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';
import { SupabaseBuilder } from '../utils/supabase.builder';

export class CreativepepperMiddleware {
  private readonly id = '29684110';

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
