import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider } from '@azkaban/shared';
import { StreamController } from './stream.controller';
import { StreamService } from './stream.service';

@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_STREAM_SERVICE',
        ...clientProvider('twitch_queue'),
      },
    ]),
  ],
  controllers: [StreamController],
  providers: [StreamService],
})
export class StreamModule {}
