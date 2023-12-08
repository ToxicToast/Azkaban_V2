import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventsService {
  constructor(
    @Inject('TWITCH_SERVICE')
    private readonly client: ClientRMQ,
    private readonly eventEmitter: EventEmitter2
  ) {}

  onJoin(channel: string, username: string): void {
    this.eventEmitter.emit('twitch.join', { channel, username });
  }

  onPart(channel: string, username: string): void {
    this.eventEmitter.emit('twitch.part', { channel, username });
  }

  onMessage(channel: string, username: string, message: string): void {
    this.eventEmitter.emit('twitch.message', { channel, username, message });
  }
}
