import { Inject, Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class EventsService {
  constructor(
    @Inject('TWITCH_MESSAGE_SERVICE') private readonly client: ClientRMQ
  ) {}

  onJoin(channel: string, username: string): void {
    Logger.log('[onJoin]', { channel, username });
  }

  onPart(channel: string, username: string): void {
    Logger.log('[onPart]', { channel, username });
  }

  onMessage(channel: string, username: string, message: string): void {
    Logger.log('[onMessage]', { channel, username, message });
  }
}
