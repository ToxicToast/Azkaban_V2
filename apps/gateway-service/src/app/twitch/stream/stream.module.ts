import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { StreamController } from './stream.controller';
import { StreamService } from './stream.service';

@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_STREAM_SERVICE',
        ...clientProvider(Queues.AZKABAN_TWITCH),
      },
    ]),
  ],
  controllers: [StreamController],
  providers: [StreamService],
})
export class StreamModule {}
