import { Controller, Sse } from '@nestjs/common';
import { fromEvent, map, Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('twitch')
export class TwitchController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, 'twitch.event').pipe(
      map((data) => {
        return new MessageEvent('twitch.event', { data });
      })
    );
  }
}
