import { Controller, Logger, Sse } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  BanData,
  JoinData,
  MessageData,
  PartData,
  RaidData,
  TimeoutData,
} from '@azkaban/toasty-events';

@ApiTags('server-sent-events')
@Controller('twitch')
export class TwitchController {
  private readonly events$ = new Subject<MessageEvent>();

  @Sse()
  onEvents(): Observable<MessageEvent> {
    return this.events$.asObservable();
  }

  @MessagePattern('twitch.join')
  onJoinEvent(@Payload() data: JoinData): void {
    const message = new MessageEvent('twitch.join', {
      data: {
        channel: data.channel,
        username: data.username,
        type: 'join',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
    Logger.debug(data, 'twitch.join');
  }

  @MessagePattern('twitch.part')
  onPartEvent(@Payload() data: PartData): void {
    const message = new MessageEvent('twitch.part', {
      data: {
        channel: data.channel,
        username: data.username,
        type: 'part',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
    Logger.debug(data, 'twitch.part');
  }

  @MessagePattern('twitch.message')
  onMessageEvent(@Payload() data: MessageData): void {
    const message = new MessageEvent('twitch.message', {
      data: {
        channel: data.channel,
        username: data.username,
        message: data.message,
        type: 'message',
        date: new Date().getTime(),
      },
    });
    this.events$.next(message);
    Logger.debug(data, 'twitch.message');
  }

  @MessagePattern('twitch.timeout')
  onTimeoutEvent(@Payload() data: TimeoutData): void {
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
    Logger.debug(data, 'twitch.timeout');
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
    Logger.debug(data, 'twitch.ban');
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
    Logger.debug(data, 'twitch.raid');
  }
}
