import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MessageService } from './message.service';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';

@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_MESSAGE_SERVICE',
        ...clientProvider(Queues.AZKABAN_TWITCH),
      },
    ]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
