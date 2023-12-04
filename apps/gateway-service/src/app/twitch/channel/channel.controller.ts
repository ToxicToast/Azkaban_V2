import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChannelService } from './channel.service';

@ApiTags('twitch')
@Controller()
export class ChannelController {
  constructor(private readonly service: ChannelService) {}

  @Get()
  getChannelList(): Array<any> {
    return [];
  }

  @Get('id/:id')
  getChannelById(@Param('id') id: string): any {
    return {
      id,
    };
  }

  @Get('title/:title')
  getChannelByTitle(@Param('title') title: string): any {
    return {
      title,
    };
  }

  @Get('game/:game')
  getChannelByGame(@Param('game') game: string): any {
    return {
      game,
    };
  }
}
