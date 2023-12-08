import { Module } from '@nestjs/common';
import { JoinController } from './join.controller';
import { PartController } from './part.controller';
import { MessageController } from './message.controller';
import { EventsService } from './events.service';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider } from '@azkaban/shared';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_SERVICE',
        ...clientProvider('twitch_queue'),
      },
    ]),
  ],
  controllers: [JoinController, PartController, MessageController],
  providers: [EventsService],
})
export class EventsModule {}
