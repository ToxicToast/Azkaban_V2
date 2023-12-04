import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class MessageService {
  constructor() {}

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
