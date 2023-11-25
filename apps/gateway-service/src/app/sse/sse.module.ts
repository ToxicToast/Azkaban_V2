import { Module } from '@nestjs/common';
import { TwitchController } from './twitch.controller';
import { InventoryController } from './inventory.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EventEmitterModule],
  controllers: [TwitchController, InventoryController],
  providers: [],
})
export class SseModule {}
