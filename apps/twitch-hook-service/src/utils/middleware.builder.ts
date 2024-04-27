import { EventSubMiddleware } from '@twurple/eventsub-http';
import { StreamBuilder } from './stream.builder';
import { SupabaseBuilder } from './supabase.builder';

export class MiddlewareBuilder {
  private readonly middleware: EventSubMiddleware;
  private readonly channelId: string;
  private readonly supabaseBuilder: SupabaseBuilder;

  constructor(
    middleware: EventSubMiddleware,
    channelId: string,
    supabaseBuilder: SupabaseBuilder,
  ) {
    this.middleware = middleware;
    this.channelId = channelId;
    this.supabaseBuilder = supabaseBuilder;
  }

  public apply(): void {
    this.middleware.onStreamOnline(this.channelId, async (event) => {
      try {
        const broadcaster = await event.getBroadcaster();
        const streamData = await event.getStream();
        const builder = new StreamBuilder(
          broadcaster,
          streamData,
          this.supabaseBuilder,
        );
        await builder.onStreamOnline();
      } catch (e) {
        console.error(e);
      }
    });
    //
    this.middleware.onStreamOffline(this.channelId, async (event) => {
      try {
        const broadcaster = await event.getBroadcaster();
        const builder = new StreamBuilder(
          broadcaster,
          null,
          this.supabaseBuilder,
        );
        await builder.onStreamOffline();
      } catch (e) {
        console.error(e);
      }
    });
  }
}
