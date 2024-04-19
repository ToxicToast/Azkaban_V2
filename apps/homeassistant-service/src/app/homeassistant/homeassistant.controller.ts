import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('homeassistant')
export class HomeassistantController {
  @MessagePattern('azkaban/homeassistant/#')
  async onHomeAssistantEvent(@Payload() data: unknown) {
    console.log('Home Assistant event received', data);
  }
}
