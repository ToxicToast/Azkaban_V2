import { Body, Controller, Logger, Post } from '@nestjs/common';

@Controller('part')
export class PartController {
  @Post()
  onPart(@Body() body: any) {
    Logger.log('onPart', body);
  }
}
