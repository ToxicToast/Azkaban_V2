import { Body, Controller, Logger, Post, Req, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('server-sent-events')
@Controller('notification')
export class NotificationController {
  private readonly events$ = new Subject<MessageEvent>();

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
  }

  @Post('event')
  onAddEvent(@Req() req: Request) {
    Logger.debug('Received event', req);
    // TODO: Body Always Empty, why?
  }
}
