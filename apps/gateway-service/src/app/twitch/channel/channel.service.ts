import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class ChannelService {
  constructor() {}

  @OnEvent('twitch.join')
  onJoin(payload: { channel: string; username: string }): void {
    console.log('onJoinChannel', payload.channel); // Update / Insert Channel
    console.log('onJoinUsername', payload.username); // Update / Insert Username as Channel
  }

  @OnEvent('twitch.ban')
  onBan(payload: { channel: string; username: string }): void {
    console.log('onBanUsername', payload.username); // Soft Delete Channel
  }
}
