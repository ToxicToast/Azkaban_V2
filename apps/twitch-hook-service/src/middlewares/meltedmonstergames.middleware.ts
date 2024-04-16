import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';

export class MeltedmonstergamesMiddleware {
  private readonly id = '898917515';

  constructor(private readonly middleware: EventSubMiddleware) {
    const builder = new MiddlewareBuilder(this.middleware, this.id);
    builder.apply();
  }
}
