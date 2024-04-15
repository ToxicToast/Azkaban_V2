import { EventSubMiddleware } from '@twurple/eventsub-http';
import { MiddlewareBuilder } from '../utils/middleware.builder';

export class ToxictoastMiddleware {
  private readonly id = process.env.TWITCH_USER_ID;

  constructor(private readonly middleware: EventSubMiddleware) {
    const builder = new MiddlewareBuilder(middleware, this.id, this.id);
    builder.apply();
  }
}
