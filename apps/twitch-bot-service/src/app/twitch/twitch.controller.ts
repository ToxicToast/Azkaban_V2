import { Controller, OnModuleInit } from '@nestjs/common';

import { TwitchService } from './twitch.service';
import { Events } from '@azkaban/shared';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('twitch')
@Controller()
export class TwitchController implements OnModuleInit {
  constructor(private readonly twitchService: TwitchService) {}

  async onTwitchEventJoin(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Join',
      event: Events.JOIN,
      execute: (data) => {
        this.twitchService.postEvent('join', data);
      },
    });
  }

  async onTwitchEventPart(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Part',
      event: Events.PART,
      execute: (data) => {
        this.twitchService.postEvent('part', data);
      },
    });
  }

  async onTwitchEventMessage(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Message',
      event: Events.MESSAGE,
      execute: (data) => {
        this.twitchService.postEvent('message', data);
      },
    });
  }

  async onTwitchEventTimeout(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Timeout',
      event: Events.TIMEOUT,
      execute: (data) => {
        this.twitchService.postEvent('timeout', data);
      },
    });
  }

  async onTwitchEventBan(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Ban',
      event: Events.BAN,
      execute: (data) => {
        this.twitchService.postEvent('ban', data);
      },
    });
  }

  async onTwitchEventSub(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Sub',
      event: Events.SUB,
      execute: (data) => {
        this.twitchService.postEvent('sub', data);
      },
    });
  }

  async onTwitchEventReSub(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Resub',
      event: Events.RESUB,
      execute: (data) => {
        this.twitchService.postEvent('resub', data);
      },
    });
  }

  async onTwitchEventSubGift(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-SubGift',
      event: Events.SUBGIFT,
      execute: (data) => {
        this.twitchService.postEvent('subgift', data);
      },
    });
  }

  async onTwitchEventCommunitySub(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-CommunitySub',
      event: Events.COMMUNITYSUB,
      execute: (data) => {
        this.twitchService.postEvent('communitysub', data);
      },
    });
  }

  async onTwitchEventRaid(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Raid',
      event: Events.RAID,
      execute: (data) => {
        this.twitchService.postEvent('raid', data);
      },
    });
  }

  async onTwitchEventAnnouncement(): Promise<void> {
    this.twitchService.toasty.addPlugin({
      name: 'Gateway-Announcement',
      event: Events.ANNOUNCEMENT,
      execute: (data) => {
        this.twitchService.postEvent('announcement', data);
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.onTwitchEventJoin();
    await this.onTwitchEventPart();
    await this.onTwitchEventMessage();
    await this.onTwitchEventTimeout();
    await this.onTwitchEventBan();
    await this.onTwitchEventSub();
    await this.onTwitchEventReSub();
    await this.onTwitchEventSubGift();
    await this.onTwitchEventCommunitySub();
    await this.onTwitchEventRaid();
    await this.onTwitchEventAnnouncement();
    //
    this.twitchService.toasty.initBot();
  }
}
