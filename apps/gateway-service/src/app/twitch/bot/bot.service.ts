import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class BotService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  onJoin(channel: string, username: string): void {
    this.eventEmitter.emit('twitch.join', {
      channel,
      username,
    });
  }

  onPart(channel: string, username: string): void {
    this.eventEmitter.emit('twitch.part', {
      channel,
      username,
    });
  }

  onMessage(channel: string, username: string, message: string): void {
    this.eventEmitter.emit('twitch.message', {
      channel,
      username,
      message,
    });
  }

  onTimeout(channel: string, username: string, duration: number): void {
    this.eventEmitter.emit('twitch.timeout', {
      channel,
      username,
      duration,
    });
  }

  onBan(channel: string, username: string): void {
    this.eventEmitter.emit('twitch.ban', {
      channel,
      username,
    });
  }
}
