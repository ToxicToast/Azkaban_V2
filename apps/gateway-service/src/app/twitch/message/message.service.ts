import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class MessageService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('TWITCH_MESSAGE_SERVICE') private readonly client: ClientKafka
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
    console.log(
      'onMessage',
      payload.channel,
      payload.username,
      payload.message
    ); // Insert Message
  }
}
