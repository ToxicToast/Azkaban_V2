import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageService } from './message.service';

@ApiTags('twitch')
@Controller()
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @Get()
  getMessagesList(): Array<any> {
    return [];
  }

  @Get('id/:id')
  getMessagesById(@Param('id') id: string): any {
    return {
      id,
    };
  }

  @Get('channel/:channel')
  getMessagesByChannel(@Param('channel') channel: string): Array<string> {
    console.error('getMessagesByChannel', channel);
    return [];
  }

  @Get('username/:username')
  getMessagesByUsername(@Param('username') username: string): Array<string> {
    console.error('getMessagesByUsername', username);
    return [];
  }
}
