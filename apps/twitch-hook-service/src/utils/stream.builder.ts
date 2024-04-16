import { HelixStream, HelixUser } from '@twurple/api';
import axios from 'axios';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Nullable } from '@azkaban/shared';

export class StreamBuilder {
  private readonly broadcaster: HelixUser;
  private readonly stream: Nullable<HelixStream>;
  //
  private readonly axiosClient = axios.create({
    baseURL: 'https://api.toxictoast.de/',
  });

  constructor(broadcaster: HelixUser, stream: Nullable<HelixStream>) {
    this.broadcaster = broadcaster;
    this.stream = stream;
  }

  public async onStreamOnline(): Promise<void> {
    console.debug('Stream online', this.broadcaster, this.stream);
    await this.axiosClient.post('/twitch/stream/online', {
      broadcasterId: this.broadcaster.id ?? undefined,
      displayName: this.broadcaster.displayName ?? undefined,
      title: this.stream?.title ?? undefined,
      game: this.stream?.gameName ?? undefined,
      startedAt: this.stream?.startDate ?? undefined,
      thumbnail: this.stream?.thumbnailUrl ?? undefined,
    });
  }

  public async onStreamOffline(): Promise<void> {
    console.debug('Stream offline', this.broadcaster, null);
    await this.axiosClient.post('/twitch/stream/offline', {
      broadcasterId: this.broadcaster.id ?? undefined,
    });
  }

  public async onChannelFollow(user: HelixUser): Promise<void> {
    console.debug('Channel Follow', this.broadcaster, user);
    await this.axiosClient.post('/twitch/follow', {
      broadcasterId: this.broadcaster.id ?? undefined,
      userId: user.id ?? undefined,
    });
  }
}
