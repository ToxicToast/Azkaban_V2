import { Controller, Sse } from '@nestjs/common';
import { fromEvent, map, Observable } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('notification')
export class NotificationController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, 'notification.event').pipe(
      map((data) => {
        return new MessageEvent('notification.event', { data });
      })
    );
  }
}
