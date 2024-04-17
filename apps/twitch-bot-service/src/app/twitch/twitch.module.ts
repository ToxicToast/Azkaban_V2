import { Module } from '@nestjs/common';

import { TwitchController } from './twitch.controller';
import { TwitchService } from './twitch.service';
import { HttpModule } from '@nestjs/axios';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: 'TWITCH_SERVICE',
        ...clientProvider(Queues.AZKABAN_TWITCH),
      },
    ]),
  ],
  controllers: [TwitchController],
  providers: [
    {
      provide: 'TWITCH_CLIENT_ID',
      useValue: process.env.TWITCH_CLIENT_ID ?? '',
    },
    {
      provide: 'TWITCH_SECRET_ID',
      useValue: process.env.TWITCH_CLIENT_SECRET ?? '',
    },
    {
      provide: 'TWITCH_CHANNELS',
      useValue: process.env.TWITCH_CHANNELS ?? '',
    },
    {
      provide: 'TWITCH_USER_ID',
      useValue: process.env.TWITCH_USER_ID ?? '',
    },
    {
      provide: 'TWITCH_ACCESS_TOKEN',
      useValue: process.env.TWITCH_ACCESS_TOKEN ?? '',
    },
    {
      provide: 'TWITCH_REFRESH_TOKEN',
      useValue: process.env.TWITCH_REFRESH_TOKEN ?? '',
    },
    {
      provide: 'SSL_CERT',
      useValue: process.env.SSL_CERT ?? null,
    },
    {
      provide: 'SSL_KEY',
      useValue: process.env.SSL_KEY ?? null,
    },
    TwitchService,
  ],
})
export class TwitchModule {}
