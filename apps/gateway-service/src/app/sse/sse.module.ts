import { Module } from '@nestjs/common';
import { TwitchController } from './twitch.controller';
import { InventoryController } from './inventory.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationController } from './notification.controller';

@Module({
  imports: [EventEmitterModule],
  controllers: [TwitchController, InventoryController, NotificationController],
  providers: [],
})
export class SseModule {}
