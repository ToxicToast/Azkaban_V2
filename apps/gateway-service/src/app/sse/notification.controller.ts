import { Controller, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { OnEvent } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('server-sent-events')
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

  @OnEvent('twitch.timeout')
  onTwitchTimeout(payload: {
    channel: string;
    username: string;
    duration: number;
  }): void {
    const message = new MessageEvent('notification.event', {
      data: {
        channel: payload.channel,
        username: payload.username,
        duration: payload.duration,
        type: 'twitch.timeout',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }
}
