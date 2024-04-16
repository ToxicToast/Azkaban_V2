import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';

export class ThedevdadMiddleware {
  private readonly id = '722784403';

  constructor(private readonly middleware: EventSubMiddleware) {
    const builder = new MiddlewareBuilder(this.middleware, this.id);
    builder.apply();
  }
}
