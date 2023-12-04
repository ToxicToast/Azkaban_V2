import { Body, Controller, Post } from '@nestjs/common';
import { BotService } from './bot.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('twitch-bot')
@Controller('timeout')
export class TimeoutController {
  constructor(private readonly service: BotService) {}
  @Post()
  onTimeout(
    @Body()
    body: {
      channel: string;
      username: string;
      duration: number;
    }
  ) {
    this.service.onTimeout(body.channel, body.username, body.duration);
  }
}
