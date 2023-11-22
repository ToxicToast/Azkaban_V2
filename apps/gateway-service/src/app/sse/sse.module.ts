import { Module } from '@nestjs/common';
import { TwitchController } from './twitch.controller';

@Module({
  imports: [],
  controllers: [TwitchController],
  providers: [],
})
export class SseModule {}
