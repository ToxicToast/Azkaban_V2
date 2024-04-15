import { EventSubMiddleware } from '@twurple/eventsub-http';
import { StreamBuilder } from './stream.builder';

export class MiddlewareBuilder {
  private readonly middleware: EventSubMiddleware;
  private readonly channelId: string;
  private readonly userId: string;

  constructor(
    middleware: EventSubMiddleware,
    channelId: string,
    userId: string,
  ) {
    this.middleware = middleware;
    this.channelId = channelId;
    this.userId = userId;
  }

  public apply(): void {
    this.middleware.onStreamOnline(this.channelId, async (event) => {
      try {
        const broadcaster = await event.getBroadcaster();
        const streamData = await event.getStream();
        const builder = new StreamBuilder(broadcaster, streamData);
        await builder.onStreamOnline();
      } catch (e) {
        console.error(e);
      }
    });
    //
    this.middleware.onStreamOffline(this.channelId, async (event) => {
      try {
        const broadcaster = await event.getBroadcaster();
        const builder = new StreamBuilder(broadcaster, null);
        await builder.onStreamOnline();
      } catch (e) {
        console.error(e);
      }
    });
    //
    this.middleware.onChannelFollow(
      this.channelId,
      this.userId,
      async (event) => {
        try {
          const broadcaster = await event.getBroadcaster();
          const user = await event.getUser();
          const builder = new StreamBuilder(broadcaster, null);
          await builder.onChannelFollow(user);
        } catch (e) {
          console.error(e);
        }
      },
    );
  }
}
