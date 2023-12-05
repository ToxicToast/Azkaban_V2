import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class MessageService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('TWITCH_MESSAGE_SERVICE') private readonly client: ClientRMQ
  ) {}

  async onModuleInit(): Promise<void> {
    await this.client.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.close();
  }

  @OnEvent('twitch.message')
  onMessage(payload: {
    channel: string;
    username: string;
    message: string;
  }): void {
    this.client.send('message_create', {
      channel: payload.channel,
      username: payload.username,
      message: payload.message,
    });
  }
}
