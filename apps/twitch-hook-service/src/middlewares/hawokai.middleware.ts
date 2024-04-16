import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';

export class HawokaiMiddleware {
  private readonly id = '104373712';

  constructor(private readonly middleware: EventSubMiddleware) {
    const builder = new MiddlewareBuilder(this.middleware, this.id);
    builder.apply();
  }
}
