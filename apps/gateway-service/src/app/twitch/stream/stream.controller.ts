import { Body, Controller, Logger, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StreamService } from './stream.service';

@ApiTags('twitch')
@Controller()
export class StreamController {
  constructor(private readonly service: StreamService) {}

  @Post('online')
  async updateOnlineStream(@Body() data: any) {
    Logger.log({ data }, 'StreamController');
  }

  @Post('offline')
  async updateOfflineStream(@Body() data: any) {
    Logger.log({ data }, 'StreamController');
  }
}
