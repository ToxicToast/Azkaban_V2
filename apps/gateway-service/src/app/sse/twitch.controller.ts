import { Controller, Sse } from '@nestjs/common';
import { fromEvent, map, Observable, Subject } from 'rxjs';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Controller('twitch')
export class TwitchController {
  private readonly events$ = new Subject<MessageEvent>();

  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
    /*return fromEvent(this.eventEmitter, 'twitch.event').pipe(
      map((data) => {
        return new MessageEvent('twitch.event', { data });
      })
    );*/
  }

  @OnEvent('twitch.join')
  onJoin(payload: { channel: string; username: string }): void {
    const message = new MessageEvent('twitch.join', {
      data: {
        channel: payload.channel,
        username: payload.username,
        type: 'join',
      },
    });
    this.events$.next(message);
  }
}
