import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChannelService } from './channel.service';

@ApiTags('twitch')
@Controller()
export class ChannelController {
  constructor(private readonly service: ChannelService) {}

  @Get()
  getChannelList(): Promise<Array<any>> {
    return this.service.getChannelList().toPromise();
  }

  @Get('id/:id')
  getChannelById(@Param('id') id: string): Promise<any> {
    return this.service.getChannelById(id).toPromise();
  }

  @Get('title/:title')
  getChannelByTitle(@Param('title') title: string): Promise<any> {
    return this.service.getChannelByTitle(title).toPromise();
  }

  @Get('game/:game')
  getChannelByGame(@Param('game') game: string): Promise<any> {
    return this.service.getChannelByGame(game).toPromise();
  }
}
