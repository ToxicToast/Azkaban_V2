import { Controller, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  AnnouncementData,
  BanData,
  RaidCancelData,
  RaidData,
  TimeoutData,
} from '@azkaban/toasty-events';

@ApiTags('server-sent-events')
@Controller('notification')
export class NotificationController {
  private readonly events$ = new Subject<MessageEvent>();

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
  }

  @MessagePattern('twitch.timeout')
  onTwitchTimeoutEvent(@Payload() data: TimeoutData): void {
    const message = new MessageEvent('twitch.message', {
      data: {
        channel: data.channel,
        username: data.username,
        duration: data.duration,
        type: 'timeout',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }

  @MessagePattern('twitch.ban')
  onBanEvent(@Payload() data: BanData): void {
    const message = new MessageEvent('twitch.ban', {
      data: {
        channel: data.channel,
        username: data.username,
        type: 'ban',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }

  @MessagePattern('twitch.raid')
  onRaidEvent(@Payload() data: RaidData): void {
    const message = new MessageEvent('twitch.raid', {
      data: {
        channel: data.channel,
        username: data.username,
        type: 'raid',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }

  @MessagePattern('twitch.raidcancel')
  onRaidCancelEvent(@Payload() data: RaidCancelData): void {
    const message = new MessageEvent('twitch.raidcancel', {
      data: {
        channel: data.channel,
        type: 'raidcancel',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }

  @MessagePattern('twitch.announcement')
  onAnnouncementEvent(@Payload() data: AnnouncementData): void {
    const message = new MessageEvent('twitch.announcement', {
      data: {
        channel: data.channel,
        username: data.username,
        type: 'announcement',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
  }
}
