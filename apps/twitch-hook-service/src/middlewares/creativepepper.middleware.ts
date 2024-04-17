import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';

export class CreativepepperMiddleware {
  private readonly id = '29684110';

  constructor(private readonly middleware: EventSubMiddleware) {
    const builder = new MiddlewareBuilder(this.middleware, this.id);
    builder.apply();
  }
}