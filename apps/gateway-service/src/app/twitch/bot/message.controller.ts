import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
  @Post()
  onMessage(@Body() body: any) {
    Logger.log('onMessage', body);
  }
}
