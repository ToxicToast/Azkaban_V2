import { Body, Controller, Post } from '@nestjs/common';
import { BotService } from './bot.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('twitch-bot')
@Controller('message')
export class MessageController {
  constructor(private readonly service: BotService) {}

  @Post()
  onMessage(
    @Body() body: { channel: string; username: string; message: string }
  ) {
    this.service.onMessage(body.channel, body.username, body.message);
  }
}
