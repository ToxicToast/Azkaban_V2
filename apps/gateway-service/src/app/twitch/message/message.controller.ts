import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageService } from './message.service';

@ApiTags('twitch')
@Controller()
export class MessageController {
  constructor(private readonly service: MessageService) {}
}
