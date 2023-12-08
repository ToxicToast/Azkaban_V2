import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventsService } from './events.service';

@ApiTags('twitch-bot')
@Controller('join')
export class JoinController {
  constructor(private readonly service: EventsService) {}

  @Post()
  onJoin(@Body() body: { channel: string; username: string }): void {
    this.service.onJoin(body.channel, body.username);
  }
}
