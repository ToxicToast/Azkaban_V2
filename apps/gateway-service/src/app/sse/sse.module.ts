import { Module } from '@nestjs/common';
import { TwitchController } from './twitch.controller';
import { InventoryController } from './inventory.controller';
import { NotificationController } from './notification.controller';

@Module({
  imports: [],
  // controllers: [TwitchController, InventoryController, NotificationController],
  providers: [],
})
export class SseModule {}
