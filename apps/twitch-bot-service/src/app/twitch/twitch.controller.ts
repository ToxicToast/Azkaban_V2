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

  async onModuleInit(): Promise<void> {
    await this.onTwitchEventJoin();
    await this.onTwitchEventPart();
    await this.onTwitchEventMessage();
    //
    this.twitchService.toasty.initBot();
  }
}
