import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChannelController } from './channel.controller';

@Module({
  imports: [EventEmitterModule],
  controllers: [ChannelController],
  providers: [],
})
export class ChannelModule {}
