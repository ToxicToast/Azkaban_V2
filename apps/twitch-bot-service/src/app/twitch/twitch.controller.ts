import { Controller, OnModuleInit } from '@nestjs/common';

import { TwitchService } from './twitch.service';
import { Events } from '@azkaban/shared';
import { ApiTags } from '@nestjs/swagger';
import {
  BanData,
  JoinData,
  MessageData,
  PartData,
  RaidCancelData,
  RaidData,
  ResubData,
  SubData,
  SubGiftData,
  TimeoutData,
} from '@azkaban/toasty-events';

@ApiTags('twitch')
@Controller()
export class TwitchController implements OnModuleInit {
  constructor(private readonly twitchService: TwitchService) {}

  private async onTwitchEvent<TData>(
    eventName: Events,
    endpoint: string
  ): Promise<void> {
    this.twitchService.toasty.addPlugin<TData>({
      name: `Gateway-${eventName.charAt(0).toUpperCase() + eventName.slice(1)}`,
      event: eventName,
      execute: (data) => {
        this.twitchService.postEvent<TData>(endpoint, data);
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.onTwitchEvent<JoinData>(Events.JOIN, 'join');
    await this.onTwitchEvent<PartData>(Events.PART, 'part');
    await this.onTwitchEvent<MessageData>(Events.MESSAGE, 'message');
    await this.onTwitchEvent<TimeoutData>(Events.TIMEOUT, 'timeout');
    await this.onTwitchEvent<BanData>(Events.BAN, 'ban');
    await this.onTwitchEvent<RaidData>(Events.RAID, 'raid');
    await this.onTwitchEvent<RaidCancelData>(Events.RAIDCANCEL, 'raidcancel');
    await this.onTwitchEvent<SubData>(Events.SUB, 'sub');
    await this.onTwitchEvent<ResubData>(Events.RESUB, 'resub');
    await this.onTwitchEvent<SubGiftData>(Events.SUBGIFT, 'subgift');
    //
    this.twitchService.toasty.initBot();
  }
}
