import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ChannelService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('TWITCH_CHANNEL_SERVICE') private readonly client: ClientKafka
  ) {}

  async onModuleInit(): Promise<void> {
    await this.client.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.close();
  }

  @OnEvent('twitch.join')
  onJoin(payload: { channel: string; username: string }): void {
    console.log('onJoinChannel', payload.channel); // Update / Insert Channel
    console.log('onJoinUsername', payload.username); // Update / Insert Username as Channel
  }

  @OnEvent('twitch.ban')
  onBan(payload: { channel: string; username: string }): void {
    console.log('onBanUsername', payload.username); // Soft Delete Channel
  }
}
