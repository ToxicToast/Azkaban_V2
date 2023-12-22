import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';

@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_CHANNEL_SERVICE',
        ...clientProvider(Queues.TWITCH),
      },
    ]),
  ],
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule {}
