import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { BotService } from './bot.service';
import { JoinController } from './join.controller';
import { PartController } from './part.controller';
import { MessageController } from './message.controller';
import { TimeoutController } from './timeout.controller';
import { BanController } from './ban.controller';

@Module({
  imports: [EventEmitterModule],
  controllers: [
    JoinController,
    PartController,
    MessageController,
    TimeoutController,
    BanController,
  ],
  providers: [BotService],
})
export class BotModule {}
