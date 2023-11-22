import { Controller, Sse, MessageEvent } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Controller('twitch')
export class TwitchController {
  @Sse()
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((_) => ({
        data: {
          channel: 'toxictoast',
          username: 'toxictoastbot',
          text: `message #${_}`,
        },
      }))
    );
  }
}
