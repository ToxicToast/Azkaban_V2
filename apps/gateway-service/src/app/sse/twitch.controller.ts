import { Controller, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('server-sent-events')
@Controller('twitch')
export class TwitchController {
  private readonly events$ = new Subject<MessageEvent>();

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
  }
}
