import { Controller, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { OnEvent } from '@nestjs/event-emitter';

@Controller('notification')
export class NotificationController {
  private readonly events$ = new Subject<MessageEvent>();

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
  }

  @OnEvent('notification.event')
  onEvent(payload): void {
    const message = new MessageEvent('notification.event', {
      data: payload,
    });
    this.events$.next(message);
  }
}
