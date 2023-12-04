import { Module } from '@nestjs/common';
import { JoinController } from './join.controller';
import { PartController } from './part.controller';
import { MessageController } from './message.controller';

@Module({
  imports: [],
  controllers: [JoinController, PartController, MessageController],
  providers: [],
})
export class BotModule {}
