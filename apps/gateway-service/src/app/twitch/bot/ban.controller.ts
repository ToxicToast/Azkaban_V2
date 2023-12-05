import { Body, Controller, Post } from '@nestjs/common';
import { BotService } from './bot.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('twitch-bot')
@Controller('ban')
export class BanController {
  constructor(private readonly service: BotService) {}

  @Post()
  onBan(@Body() body: { channel: string; username: string }): void {
    this.service.onBan(body.channel, body.username);
  }
}
