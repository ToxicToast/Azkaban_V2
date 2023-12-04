import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessageService } from './message.service';

@Module({
  imports: [EventEmitterModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
