import { Controller, OnModuleInit } from '@nestjs/common';

import { AppService } from './app.service';
import { Events } from '@azkaban/shared';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  async onTwitchEventJoin(): Promise<void> {
    this.appService.toasty.addPlugin({
      name: 'Gateway-Join',
      event: Events.JOIN,
      execute: (data) => {
        this.appService.postEvent('join', data);
      },
    });
  }

  async onTwitchEventPart(): Promise<void> {
    this.appService.toasty.addPlugin({
      name: 'Gateway-Part',
      event: Events.PART,
      execute: (data) => {
        this.appService.postEvent('part', data);
      },
    });
  }

  async onTwitchEventMessage(): Promise<void> {
    this.appService.toasty.addPlugin({
      name: 'Gateway-Message',
      event: Events.MESSAGE,
      execute: (data) => {
        this.appService.postEvent('message', data);
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.onTwitchEventJoin();
    await this.onTwitchEventPart();
    await this.onTwitchEventMessage();
    //
    this.appService.toasty.initBot();
  }
}
