import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventsService } from './events.service';

@ApiTags('twitch-bot')
@Controller('part')
export class PartController {
  constructor(private readonly service: EventsService) {}

  @Post()
  onPart(@Body() body: { channel: string; username: string }) {
    this.service.onPart(body.channel, body.username);
  }
}
