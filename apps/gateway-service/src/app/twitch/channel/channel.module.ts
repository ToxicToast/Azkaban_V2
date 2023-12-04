import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';

@Module({
  imports: [EventEmitterModule],
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule {}
