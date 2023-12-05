import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class ChannelService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('TWITCH_CHANNEL_SERVICE') private readonly client: ClientRMQ
  ) {}

  async onModuleInit(): Promise<void> {
    await this.client.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.close();
  }
  @OnEvent('twitch.join')
  onJoin(payload: { channel: string; username: string }): void {
    this.client.send('channel_create', { channel: payload.channel });
    this.client.send('channel_create', { channel: payload.username });
  }

  @OnEvent('twitch.ban')
  onBan(payload: { channel: string; username: string }): void {
    this.client.send('channel_delete', { channel: payload.username });
  }
}
