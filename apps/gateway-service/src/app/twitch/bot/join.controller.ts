import { Body, Controller, Post } from '@nestjs/common';
import { BotService } from './bot.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('twitch-bot')
@Controller('join')
export class JoinController {
  constructor(private readonly service: BotService) {}

  @Post()
  onJoin(@Body() body: { channel: string; username: string }): void {
    this.service.onJoin(body.channel, body.username);
  }
}
