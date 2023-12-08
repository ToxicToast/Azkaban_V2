import { Controller, Logger, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { OnEvent } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('server-sent-events')
@Controller('twitch')
export class TwitchController {
  private readonly events$ = new Subject<MessageEvent>();

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
  }

  @OnEvent('twitch.join')
  onJoin(payload: { channel: string; username: string }): void {
    Logger.debug({
      channel: payload.channel,
      username: payload.username,
      type: 'join',
    });
    const message = new MessageEvent('twitch.join', {
      data: {
        channel: payload.channel,
        username: payload.username,
        type: 'join',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }

  @OnEvent('twitch.part')
  onPart(payload: { channel: string; username: string }): void {
    Logger.debug({
      channel: payload.channel,
      username: payload.username,
      type: 'part',
    });
    const message = new MessageEvent('twitch.part', {
      data: {
        channel: payload.channel,
        username: payload.username,
        type: 'part',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }

  @OnEvent('twitch.message')
  onMessage(payload: {
    channel: string;
    username: string;
    message: string;
  }): void {
    Logger.debug({
      channel: payload.channel,
      username: payload.username,
      message: payload.message,
      type: 'message',
    });
    const message = new MessageEvent('twitch.message', {
      data: {
        channel: payload.channel,
        username: payload.username,
        message: payload.message,
        type: 'message',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }
}
