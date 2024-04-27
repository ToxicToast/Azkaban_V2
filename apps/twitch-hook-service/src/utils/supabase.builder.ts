import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Nullable } from '@azkaban/shared';

export class SupabaseBuilder {
  private readonly SUPABASE_URL: string;
  private readonly SUPABASE_KEY: string;
  private readonly client: SupabaseClient;

  constructor(url: string, key: string) {
    this.SUPABASE_URL = url;
    this.SUPABASE_KEY = key;
    this.client = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);
  }

  public async updateStreamStatusOnline(
    broadcasterId: string,
    title: Nullable<string>,
    game: Nullable<string>,
    thumbnail: Nullable<string>,
  ): Promise<void> {
    await this.client
      .from('twitch_streams')
      .update({
        online: true,
        title: title,
        game: game,
        thumbnail: thumbnail,
      })
      .eq('broadcaster_id', broadcasterId);
  }

  public async updateStreamStatusOffline(broadcasterId: string): Promise<void> {
    await this.client
      .from('twitch_streams')
      .update({
        online: false,
        title: null,
        game: null,
        thumbnail: null,
      })
      .eq('broadcaster_id', broadcasterId);
  }
}
