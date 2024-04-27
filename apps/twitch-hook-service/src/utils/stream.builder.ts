import { HelixStream, HelixUser } from '@twurple/api';
import axios from 'axios';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Nullable } from '@azkaban/shared';
import { SupabaseBuilder } from './supabase.builder';

export class StreamBuilder {
  private readonly broadcaster: HelixUser;
  private readonly stream: Nullable<HelixStream>;
  private readonly supabaseBuilder: SupabaseBuilder;
  //
  private readonly axiosClient = axios.create({
    baseURL: 'https://api.toxictoast.de/',
  });

  constructor(
    broadcaster: HelixUser,
    stream: Nullable<HelixStream>,
    supabase: SupabaseBuilder,
  ) {
    this.broadcaster = broadcaster;
    this.stream = stream;
    this.supabaseBuilder = supabase;
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
    //
    await this.supabaseBuilder.updateStreamStatusOnline(
      this.broadcaster.id,
      this.stream?.title ?? null,
      this.stream?.gameName ?? null,
      this.stream?.thumbnailUrl ?? null,
    );
  }

  public async onStreamOffline(): Promise<void> {
    await this.axiosClient
      .post('/api/twitch/stream/offline', {
        broadcasterId: this.broadcaster.id ?? undefined,
      })
      .catch((error) => {
        console.error(error);
      });
    //
    await this.supabaseBuilder.updateStreamStatusOffline(this.broadcaster.id);
  }
}
