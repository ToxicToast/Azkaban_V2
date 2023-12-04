import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller('join')
export class JoinController {
  @Post()
  onJoin(@Body() body: any) {
    Logger.log('onJoin', body);
  }
}
