import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { JoinController } from './join.controller';
import { PartController } from './part.controller';
import { MessageController } from './message.controller';
import { EventsService } from './events.service';

@Module({
  imports: [EventEmitterModule],
  controllers: [JoinController, PartController, MessageController],
  providers: [EventsService],
})
export class EventsModule {}
