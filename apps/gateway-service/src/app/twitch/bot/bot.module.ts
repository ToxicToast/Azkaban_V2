import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    EventsModule,
    RouterModule.register([
      {
        path: 'twitch',
        children: [
          {
            path: 'bot',
            module: EventsModule,
          },
        ],
      },
    ]),
  ],
})
export class BotModule {}
