import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';

export class VederkindMiddleware {
  private readonly id = '821634959';

  constructor(private readonly middleware: EventSubMiddleware) {
    const builder = new MiddlewareBuilder(this.middleware, this.id);
    builder.apply();
  }
}
