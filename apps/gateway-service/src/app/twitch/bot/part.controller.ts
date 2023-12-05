import { Body, Controller, Post } from '@nestjs/common';
import { BotService } from './bot.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('twitch-bot')
@Controller('part')
export class PartController {
  constructor(private readonly service: BotService) {}

  @Post()
  onPart(@Body() body: { channel: string; username: string }) {
    this.service.onPart(body.channel, body.username);
  }
}
