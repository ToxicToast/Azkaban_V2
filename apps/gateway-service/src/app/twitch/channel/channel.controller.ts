import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChannelService } from './channel.service';

@ApiTags('twitch')
@Controller()
export class ChannelController {
  constructor(private readonly service: ChannelService) {}
}
