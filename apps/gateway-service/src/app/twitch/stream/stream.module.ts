import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider } from '@azkaban/shared';

@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_STREAM_SERVICE',
        ...clientProvider,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class StreamModule {}
