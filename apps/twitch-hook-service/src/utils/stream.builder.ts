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
    await this.axiosClient
      .post('/api/twitch/stream/online', {
        broadcasterId: this.broadcaster.id ?? undefined,
        displayName: this.broadcaster.displayName ?? undefined,
        title: this.stream?.title ?? undefined,
        game: this.stream?.gameName ?? undefined,
        startedAt: this.stream?.startDate ?? undefined,
        thumbnail: this.stream?.thumbnailUrl ?? undefined,
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public async onStreamOffline(): Promise<void> {
    await this.axiosClient
      .post('/api/twitch/stream/offline', {
        broadcasterId: this.broadcaster.id ?? undefined,
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
