import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventsService } from './events.service';

@ApiTags('twitch-bot')
@Controller('message')
export class MessageController {
  constructor(private readonly service: EventsService) {}

  @Post()
  onMessage(
    @Body() body: { channel: string; username: string; message: string }
  ) {
    this.service.onMessage(body.channel, body.username, body.message);
  }
}
